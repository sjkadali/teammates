import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment-timezone';
import { forkJoin, of } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { FeedbackQuestionsService } from '../../../services/feedback-questions.service';
import { FeedbackSessionsService } from '../../../services/feedback-sessions.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { NavigationService } from '../../../services/navigation.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { LOCAL_DATE_TIME_FORMAT, TimezoneService, } from '../../../services/timezone.service';
import { FeedbackSessionPublishStatus, FeedbackSessionSubmissionStatus, ResponseVisibleSetting, SessionVisibleSetting, } from '../../../types/api-output';
import { DEFAULT_INSTRUCTOR_PRIVILEGE } from '../../../types/instructor-privilege';
import { SessionEditFormMode, } from '../../components/session-edit-form/session-edit-form-model';
import { SessionsTableColumn, SessionsTableHeaderColorScheme, SortBy, SortOrder, } from '../../components/sessions-table/sessions-table-model';
import { InstructorSessionBasePageComponent } from '../instructor-session-base-page.component';
import { CopyFromOtherSessionsModalComponent, } from './copy-from-other-sessions-modal/copy-from-other-sessions-modal.component';
import { SessionPermanentDeletionConfirmModalComponent, } from './session-permanent-deletion-confirm-modal/session-permanent-deletion-confirm-modal.component';
import { SessionsPermanentDeletionConfirmModalComponent, } from './sessions-permanent-deletion-confirm-modal/sessions-permanent-deletion-confirm-modal.component';
/**
 * Instructor feedback sessions list page.
 */
var InstructorSessionsPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorSessionsPageComponent, _super);
    function InstructorSessionsPageComponent(router, httpRequestService, statusMessageService, navigationService, feedbackSessionsService, feedbackQuestionsService, route, timezoneService, modalService) {
        var _this = _super.call(this, router, httpRequestService, statusMessageService, navigationService, feedbackSessionsService, feedbackQuestionsService) || this;
        _this.route = route;
        _this.timezoneService = timezoneService;
        _this.modalService = modalService;
        // enum
        _this.SortBy = SortBy;
        _this.SortOrder = SortOrder;
        _this.SessionEditFormMode = SessionEditFormMode;
        _this.SessionsTableColumn = SessionsTableColumn;
        _this.SessionsTableHeaderColorScheme = SessionsTableHeaderColorScheme;
        // url params
        _this.user = '';
        // data
        _this.courseCandidates = [];
        _this.templateSessions = [];
        // models
        _this.sessionEditFormModel = {
            courseId: '',
            timeZone: 'UTC',
            courseName: '',
            feedbackSessionName: '',
            instructions: 'Please answer all the given questions.',
            submissionStartTime: { hour: 0, minute: 0 },
            submissionStartDate: { year: 0, month: 0, day: 0 },
            submissionEndTime: { hour: 0, minute: 0 },
            submissionEndDate: { year: 0, month: 0, day: 0 },
            gracePeriod: 0,
            sessionVisibleSetting: SessionVisibleSetting.AT_OPEN,
            customSessionVisibleTime: { hour: 0, minute: 0 },
            customSessionVisibleDate: { year: 0, month: 0, day: 0 },
            responseVisibleSetting: ResponseVisibleSetting.LATER,
            customResponseVisibleTime: { hour: 0, minute: 0 },
            customResponseVisibleDate: { year: 0, month: 0, day: 0 },
            submissionStatus: FeedbackSessionSubmissionStatus.OPEN,
            publishStatus: FeedbackSessionPublishStatus.NOT_PUBLISHED,
            isClosingEmailEnabled: true,
            isPublishedEmailEnabled: true,
            templateSessionName: '',
            isSaving: false,
            isEditable: true,
            hasVisibleSettingsPanelExpanded: false,
            hasEmailSettingsPanelExpanded: false,
        };
        _this.sessionsTableRowModels = [];
        _this.sessionsTableRowModelsSortBy = SortBy.NONE;
        _this.sessionsTableRowModelsSortOrder = SortOrder.ASC;
        _this.isRecycleBinExpanded = false;
        _this.recycleBinFeedbackSessionRowModels = [];
        _this.recycleBinFeedbackSessionRowModelsSortBy = SortBy.NONE;
        _this.recycleBinFeedbackSessionRowModelsSortOrder = SortOrder.ASC;
        return _this;
    }
    InstructorSessionsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
        });
        this.templateSessions = this.feedbackSessionsService.getTemplateSessions();
        this.loadCandidatesCourse();
        this.loadFeedbackSessions();
        this.loadRecycleBinFeedbackSessions();
    };
    /**
     * Copies from other sessions.
     */
    InstructorSessionsPageComponent.prototype.copyFromOtherSessionsHandler = function () {
        var _this = this;
        var modalRef = this.modalService.open(CopyFromOtherSessionsModalComponent);
        // select the current course Id.
        modalRef.componentInstance.copyToCourseId = this.sessionEditFormModel.courseId;
        modalRef.componentInstance.courseCandidates = this.courseCandidates;
        modalRef.componentInstance.existingFeedbackSession =
            this.sessionsTableRowModels.map(function (model) { return model.feedbackSession; });
        modalRef.result.then(function (result) {
            _this.copyFeedbackSession(result.fromFeedbackSession, result.newFeedbackSessionName, result.copyToCourseId)
                .subscribe(function (createdFeedbackSession) {
                _this.navigationService.navigateWithSuccessMessage(_this.router, '/web/instructor/sessions/edit'
                    + ("?courseid=" + createdFeedbackSession.courseId + "&fsname=" + createdFeedbackSession.feedbackSessionName), 'The feedback session has been copied. Please modify settings/questions as necessary.');
            }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
        }, function () { });
    };
    /**
     * Loads courses owned by the current user.
     */
    InstructorSessionsPageComponent.prototype.loadCandidatesCourse = function () {
        var _this = this;
        this.httpRequestService.get('/courses', {
            entitytype: 'instructor',
            coursestatus: 'active',
        }).subscribe(function (courses) {
            _this.courseCandidates = courses.courses;
            _this.initDefaultValuesForSessionEditForm();
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Sets default values for the session edit form.
     */
    InstructorSessionsPageComponent.prototype.initDefaultValuesForSessionEditForm = function () {
        // select the first course by default
        if (this.courseCandidates.length !== 0) {
            this.sessionEditFormModel.courseId = this.courseCandidates[0].courseId;
            this.sessionEditFormModel.courseName = this.courseCandidates[0].courseName;
            this.sessionEditFormModel.timeZone = this.courseCandidates[0].timeZone;
        }
        // select the first template session
        if (this.templateSessions.length !== 0) {
            this.sessionEditFormModel.templateSessionName = this.templateSessions[0].name;
        }
        // set opening time to near future
        var nearFuture = moment().add(1, 'hours');
        this.sessionEditFormModel.submissionStartDate = {
            year: nearFuture.year(),
            month: nearFuture.month() + 1,
            day: nearFuture.date(),
        };
        this.sessionEditFormModel.submissionStartTime = {
            minute: nearFuture.hour() === 0 ? 59 : 0,
            hour: nearFuture.hour() === 0 ? 23 : nearFuture.hour(),
        };
        // set the closing time to tomorrow
        var tomorrow = moment().add(1, 'days');
        this.sessionEditFormModel.submissionEndDate = {
            year: tomorrow.year(),
            month: tomorrow.month() + 1,
            day: tomorrow.date(),
        };
        this.sessionEditFormModel.submissionEndTime = {
            minute: 59,
            hour: 23,
        };
    };
    /**
     * Redirects to page to create or unarchive courses.
     */
    InstructorSessionsPageComponent.prototype.createOrUnarchiveCourse = function () {
        this.router.navigateByUrl('/web/instructor/courses');
    };
    /**
     * Adds a new feedback session.
     */
    InstructorSessionsPageComponent.prototype.addNewSessionHandler = function () {
        var _this = this;
        this.sessionEditFormModel.isSaving = true;
        var resolvingResultMessages = [];
        forkJoin(this.resolveLocalDateTime(this.sessionEditFormModel.submissionStartDate, this.sessionEditFormModel.submissionStartTime, this.sessionEditFormModel.timeZone, 'Submission opening time', resolvingResultMessages), this.resolveLocalDateTime(this.sessionEditFormModel.submissionEndDate, this.sessionEditFormModel.submissionEndTime, this.sessionEditFormModel.timeZone, 'Submission closing time', resolvingResultMessages), this.sessionEditFormModel.sessionVisibleSetting === SessionVisibleSetting.CUSTOM ?
            this.resolveLocalDateTime(this.sessionEditFormModel.customSessionVisibleDate, this.sessionEditFormModel.customSessionVisibleTime, this.sessionEditFormModel.timeZone, 'Session visible time', resolvingResultMessages)
            : of(0), this.sessionEditFormModel.responseVisibleSetting === ResponseVisibleSetting.CUSTOM ?
            this.resolveLocalDateTime(this.sessionEditFormModel.customResponseVisibleDate, this.sessionEditFormModel.customResponseVisibleTime, this.sessionEditFormModel.timeZone, 'Response visible time', resolvingResultMessages)
            : of(0)).pipe(switchMap(function (vals) {
            return _this.feedbackSessionsService.createFeedbackSession(_this.sessionEditFormModel.courseId, {
                feedbackSessionName: _this.sessionEditFormModel.feedbackSessionName,
                instructions: _this.sessionEditFormModel.instructions,
                submissionStartTimestamp: vals[0],
                submissionEndTimestamp: vals[1],
                gracePeriod: _this.sessionEditFormModel.gracePeriod,
                sessionVisibleSetting: _this.sessionEditFormModel.sessionVisibleSetting,
                customSessionVisibleTimestamp: vals[2],
                responseVisibleSetting: _this.sessionEditFormModel.responseVisibleSetting,
                customResponseVisibleTimestamp: vals[3],
                isClosingEmailEnabled: _this.sessionEditFormModel.isClosingEmailEnabled,
                isPublishedEmailEnabled: _this.sessionEditFormModel.isPublishedEmailEnabled,
            });
        })).subscribe(function (feedbackSession) {
            // begin to populate session with template
            var templateSession = _this.feedbackSessionsService.getTemplateSessions().find(function (t) { return t.name === _this.sessionEditFormModel.templateSessionName; });
            if (!templateSession) {
                return;
            }
            of.apply(void 0, templateSession.questions).pipe(concatMap(function (question) {
                return _this.feedbackQuestionsService.createFeedbackQuestion(feedbackSession.courseId, feedbackSession.feedbackSessionName, {
                    questionNumber: question.questionNumber,
                    questionBrief: question.questionBrief,
                    questionDescription: question.questionDescription,
                    questionDetails: question.questionDetails,
                    questionType: question.questionType,
                    giverType: question.giverType,
                    recipientType: question.recipientType,
                    numberOfEntitiesToGiveFeedbackToSetting: question.numberOfEntitiesToGiveFeedbackToSetting,
                    customNumberOfEntitiesToGiveFeedbackTo: question.customNumberOfEntitiesToGiveFeedbackTo,
                    showResponsesTo: question.showResponsesTo,
                    showGiverNameTo: question.showGiverNameTo,
                    showRecipientNameTo: question.showRecipientNameTo,
                });
            })).subscribe(function () { }, function (resp) {
                _this.sessionEditFormModel.isSaving = false;
                _this.statusMessageService.showErrorMessage("The session is created but the template questions cannot be created: " + resp.error.message);
            }, function () {
                _this.router.navigateByUrl('/web/instructor/sessions/edit'
                    + ("?courseid=" + feedbackSession.courseId + "&fsname=" + feedbackSession.feedbackSessionName))
                    .then(function () {
                    resolvingResultMessages.forEach(function (msg) {
                        _this.statusMessageService.showWarningMessage(msg);
                    });
                    _this.statusMessageService.showSuccessMessage('The feedback session has been added.'
                        + 'Click the "Add New Question" button below to begin adding questions for the feedback session.');
                });
            });
        }, function (resp) {
            _this.sessionEditFormModel.isSaving = false;
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Resolves the local date time to an UNIX timestamp.
     */
    InstructorSessionsPageComponent.prototype.resolveLocalDateTime = function (date, time, timeZone, fieldName, resolvingResultMessages) {
        var inst = moment();
        inst.set('year', date.year);
        inst.set('month', date.month - 1); // moment month is from 0-11
        inst.set('date', date.day);
        inst.set('hour', time.hour);
        inst.set('minute', time.minute);
        var localDateTime = inst.format(LOCAL_DATE_TIME_FORMAT);
        return this.timezoneService.getResolvedTimestamp(localDateTime, timeZone, fieldName).pipe(tap(function (result) {
            if (result.message.length !== 0) {
                resolvingResultMessages.push(result.message);
            }
        }), map(function (result) { return result.timestamp; }));
    };
    /**
     * Loads all feedback sessions that can be accessed by current user.
     */
    InstructorSessionsPageComponent.prototype.loadFeedbackSessions = function () {
        var _this = this;
        this.feedbackSessionsService.getFeedbackSessionsForInstructor()
            .subscribe(function (response) {
            response.feedbackSessions.forEach(function (session) {
                var model = {
                    feedbackSession: session,
                    responseRate: '',
                    isLoadingResponseRate: false,
                    instructorPrivilege: DEFAULT_INSTRUCTOR_PRIVILEGE,
                };
                _this.sessionsTableRowModels.push(model);
                _this.updateInstructorPrivilege(model);
            });
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Sorts the list of feedback session row.
     */
    InstructorSessionsPageComponent.prototype.sortSessionsTableRowModelsEvent = function (by) {
        this.sessionsTableRowModelsSortBy = by;
        // reverse the sort order
        this.sessionsTableRowModelsSortOrder =
            this.sessionsTableRowModelsSortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;
        this.sessionsTableRowModels.sort(this.sortModelsBy(by, this.sessionsTableRowModelsSortOrder));
    };
    /**
     * Loads response rate of a feedback session.
     */
    InstructorSessionsPageComponent.prototype.loadResponseRateEventHandler = function (rowIndex) {
        this.loadResponseRate(this.sessionsTableRowModels[rowIndex]);
    };
    /**
     * Edits the feedback session.
     */
    InstructorSessionsPageComponent.prototype.editSessionEventHandler = function (rowIndex) {
        this.editSession(this.sessionsTableRowModels[rowIndex]);
    };
    /**
     * Moves the feedback session to the recycle bin.
     */
    InstructorSessionsPageComponent.prototype.moveSessionToRecycleBinEventHandler = function (rowIndex) {
        var _this = this;
        var model = this.sessionsTableRowModels[rowIndex];
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.put('/bin/session', paramMap)
            .subscribe(function (feedbackSession) {
            _this.sessionsTableRowModels.splice(_this.sessionsTableRowModels.indexOf(model), 1);
            _this.recycleBinFeedbackSessionRowModels.push({
                feedbackSession: feedbackSession,
            });
            _this.statusMessageService.showSuccessMessage('The feedback session has been deleted. '
                + 'You can restore it from the deleted sessions table below.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Edits the feedback session.
     */
    InstructorSessionsPageComponent.prototype.copySessionEventHandler = function (result) {
        this.copySession(this.sessionsTableRowModels[result.sessionToCopyRowIndex], result);
    };
    /**
     * Submits the feedback session as instructor.
     */
    InstructorSessionsPageComponent.prototype.submitSessionAsInstructorEventHandler = function (rowIndex) {
        this.submitSessionAsInstructor(this.sessionsTableRowModels[rowIndex]);
    };
    /**
     * Views the result of a feedback session.
     */
    InstructorSessionsPageComponent.prototype.viewSessionResultEventHandler = function (rowIndex) {
        this.viewSessionResult(this.sessionsTableRowModels[rowIndex]);
    };
    /**
     * Publishes a feedback session.
     */
    InstructorSessionsPageComponent.prototype.publishSessionEventHandler = function (rowIndex) {
        this.publishSession(this.sessionsTableRowModels[rowIndex]);
    };
    /**
     * Unpublishes a feedback session.
     */
    InstructorSessionsPageComponent.prototype.unpublishSessionEventHandler = function (rowIndex) {
        this.unpublishSession(this.sessionsTableRowModels[rowIndex]);
    };
    /**
     * Sends e-mails to remind students on the published results link.
     */
    InstructorSessionsPageComponent.prototype.resendResultsLinkToStudentsEventHandler = function (remindInfo) {
        this.resendResultsLinkToStudents(this.sessionsTableRowModels[remindInfo.row], remindInfo.students);
    };
    /**
     * Sends e-mails to remind students who have not submitted their feedback.
     */
    InstructorSessionsPageComponent.prototype.sendRemindersToStudentsEventHandler = function (remindInfo) {
        console.log("remondInfo ", remindInfo.request, remindInfo.students, remindInfo.users);
        this.sendRemindersToStudents(this.sessionsTableRowModels[remindInfo.row], remindInfo.users);
    };
    /**
     * Loads all feedback sessions in recycle bin that can be accessed by current user.
     */
    InstructorSessionsPageComponent.prototype.loadRecycleBinFeedbackSessions = function () {
        var _this = this;
        this.feedbackSessionsService.getFeedbackSessionsInRecycleBinForInstructor()
            .subscribe(function (response) {
            response.feedbackSessions.forEach(function (session) {
                _this.recycleBinFeedbackSessionRowModels.push({
                    feedbackSession: session,
                });
            });
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Sorts the list of feedback session rows in recycle bin table.
     */
    InstructorSessionsPageComponent.prototype.sortRecycleBinFeedbackSessionRows = function (by) {
        this.recycleBinFeedbackSessionRowModelsSortBy = by;
        // reverse the sort order
        this.recycleBinFeedbackSessionRowModelsSortOrder =
            this.recycleBinFeedbackSessionRowModelsSortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;
        this.recycleBinFeedbackSessionRowModels.sort(this.sortModelsBy(by, this.recycleBinFeedbackSessionRowModelsSortOrder));
    };
    /**
     * Restores a recycle bin feedback session.
     */
    InstructorSessionsPageComponent.prototype.restoreRecycleBinFeedbackSession = function (model) {
        var _this = this;
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.delete('/bin/session', paramMap)
            .subscribe(function (feedbackSession) {
            _this.recycleBinFeedbackSessionRowModels.splice(_this.recycleBinFeedbackSessionRowModels.indexOf(model), 1);
            var m = {
                feedbackSession: feedbackSession,
                responseRate: '',
                isLoadingResponseRate: false,
                instructorPrivilege: DEFAULT_INSTRUCTOR_PRIVILEGE,
            };
            _this.sessionsTableRowModels.push(m);
            _this.updateInstructorPrivilege(m);
            _this.statusMessageService.showSuccessMessage('The feedback session has been restored.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Restores all feedback sessions in recycle bin.
     */
    InstructorSessionsPageComponent.prototype.restoreAllRecycleBinFeedbackSession = function () {
        var _this = this;
        var restoreRequests = [];
        this.recycleBinFeedbackSessionRowModels.forEach(function (model) {
            var paramMap = {
                courseid: model.feedbackSession.courseId,
                fsname: model.feedbackSession.feedbackSessionName,
            };
            restoreRequests.push(_this.httpRequestService.delete('/bin/session', paramMap));
        });
        forkJoin(restoreRequests).subscribe(function (restoredSessions) {
            restoredSessions.forEach(function (session) {
                _this.recycleBinFeedbackSessionRowModels = [];
                var m = {
                    feedbackSession: session,
                    responseRate: '',
                    isLoadingResponseRate: false,
                    instructorPrivilege: DEFAULT_INSTRUCTOR_PRIVILEGE,
                };
                _this.sessionsTableRowModels.push(m);
                _this.updateInstructorPrivilege(m);
            });
            _this.statusMessageService.showSuccessMessage('All sessions have been restored.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Deletes the feedback session permanently.
     */
    InstructorSessionsPageComponent.prototype.permanentDeleteSession = function (model) {
        var _this = this;
        var modalRef = this.modalService.open(SessionPermanentDeletionConfirmModalComponent);
        modalRef.componentInstance.courseId = model.feedbackSession.courseId;
        modalRef.componentInstance.feedbackSessionName = model.feedbackSession.feedbackSessionName;
        modalRef.result.then(function () {
            var paramMap = {
                courseid: model.feedbackSession.courseId,
                fsname: model.feedbackSession.feedbackSessionName,
            };
            _this.httpRequestService.delete('/session', paramMap).subscribe(function () {
                _this.recycleBinFeedbackSessionRowModels.splice(_this.recycleBinFeedbackSessionRowModels.indexOf(model), 1);
                _this.statusMessageService.showSuccessMessage('The feedback session has been permanently deleted.');
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        }, function () { });
    };
    /**
     * Deletes all feedback sessions in the recycle bin permanently.
     */
    InstructorSessionsPageComponent.prototype.permanentDeleteAllSessions = function () {
        var _this = this;
        var modalRef = this.modalService.open(SessionsPermanentDeletionConfirmModalComponent);
        modalRef.componentInstance.sessionsToDelete =
            this.recycleBinFeedbackSessionRowModels.map(function (model) { return model.feedbackSession; });
        modalRef.result.then(function () {
            var deleteRequests = [];
            _this.recycleBinFeedbackSessionRowModels.forEach(function (model) {
                var paramMap = {
                    courseid: model.feedbackSession.courseId,
                    fsname: model.feedbackSession.feedbackSessionName,
                };
                deleteRequests.push(_this.httpRequestService.delete('/session', paramMap));
            });
            forkJoin(deleteRequests).subscribe(function () {
                _this.recycleBinFeedbackSessionRowModels = [];
                _this.statusMessageService.showSuccessMessage('All sessions have been permanently deleted.');
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        }, function () { });
    };
    InstructorSessionsPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-sessions-page',
            templateUrl: './instructor-sessions-page.component.html',
            styleUrls: ['./instructor-sessions-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, HttpRequestService,
            StatusMessageService, NavigationService,
            FeedbackSessionsService, FeedbackQuestionsService,
            ActivatedRoute, TimezoneService,
            NgbModal])
    ], InstructorSessionsPageComponent);
    return InstructorSessionsPageComponent;
}(InstructorSessionBasePageComponent));
export { InstructorSessionsPageComponent };
//# sourceMappingURL=instructor-sessions-page.component.js.map