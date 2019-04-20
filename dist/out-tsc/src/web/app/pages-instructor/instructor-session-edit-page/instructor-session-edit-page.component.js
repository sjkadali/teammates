import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment-timezone';
import { forkJoin, of } from 'rxjs';
import { concatMap, finalize, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CourseService } from '../../../services/course.service';
import { FeedbackQuestionsService } from '../../../services/feedback-questions.service';
import { FeedbackSessionsService } from '../../../services/feedback-sessions.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { NavigationService } from '../../../services/navigation.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { LOCAL_DATE_TIME_FORMAT, TimezoneService } from '../../../services/timezone.service';
import { FeedbackParticipantType, FeedbackQuestionType, FeedbackSessionPublishStatus, FeedbackSessionSubmissionStatus, NumberOfEntitiesToGiveFeedbackToSetting, ResponseVisibleSetting, SessionVisibleSetting, } from '../../../types/api-output';
import { CopySessionModalComponent } from '../../components/copy-session-modal/copy-session-modal.component';
import { QuestionEditFormMode, } from '../../components/question-edit-form/question-edit-form-model';
import { SessionEditFormMode, } from '../../components/session-edit-form/session-edit-form-model';
import { Intent } from '../../Intent';
import { InstructorSessionBasePageComponent } from '../instructor-session-base-page.component';
import { CopyQuestionsFromOtherSessionsModalComponent, } from './copy-questions-from-other-sessions-modal/copy-questions-from-other-sessions-modal.component';
import { TemplateQuestionModalComponent } from './template-question-modal/template-question-modal.component';
/**
 * Instructor feedback session edit page.
 */
var InstructorSessionEditPageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorSessionEditPageComponent, _super);
    function InstructorSessionEditPageComponent(router, httpRequestService, statusMessageService, navigationService, feedbackSessionsService, feedbackQuestionsService, courseService, route, timezoneService, modalService) {
        var _this = _super.call(this, router, httpRequestService, statusMessageService, navigationService, feedbackSessionsService, feedbackQuestionsService) || this;
        _this.courseService = courseService;
        _this.route = route;
        _this.timezoneService = timezoneService;
        _this.modalService = modalService;
        // enum
        _this.SessionEditFormMode = SessionEditFormMode;
        _this.QuestionEditFormMode = QuestionEditFormMode;
        _this.FeedbackQuestionType = FeedbackQuestionType;
        // url param
        _this.user = '';
        _this.courseId = '';
        _this.feedbackSessionName = '';
        _this.courseName = '';
        // models
        _this.sessionEditFormModel = {
            courseId: '',
            timeZone: 'UTC',
            courseName: '',
            feedbackSessionName: '',
            instructions: '',
            submissionStartTime: { hour: 0, minute: 0 },
            submissionStartDate: { year: 0, month: 0, day: 0 },
            submissionEndTime: { hour: 0, minute: 0 },
            submissionEndDate: { year: 0, month: 0, day: 0 },
            gracePeriod: 0,
            sessionVisibleSetting: SessionVisibleSetting.AT_OPEN,
            customSessionVisibleTime: { hour: 0, minute: 0 },
            customSessionVisibleDate: { year: 0, month: 0, day: 0 },
            responseVisibleSetting: ResponseVisibleSetting.CUSTOM,
            customResponseVisibleTime: { hour: 0, minute: 0 },
            customResponseVisibleDate: { year: 0, month: 0, day: 0 },
            submissionStatus: FeedbackSessionSubmissionStatus.OPEN,
            publishStatus: FeedbackSessionPublishStatus.NOT_PUBLISHED,
            isClosingEmailEnabled: true,
            isPublishedEmailEnabled: true,
            templateSessionName: '',
            isSaving: false,
            isEditable: false,
            hasVisibleSettingsPanelExpanded: false,
            hasEmailSettingsPanelExpanded: false,
        };
        // to get the original question model
        _this.feedbackQuestionModels = new Map();
        _this.questionEditFormModels = [];
        _this.newQuestionEditFormModel = {
            feedbackQuestionId: '',
            questionNumber: 0,
            questionBrief: '',
            questionDescription: '',
            isQuestionHasResponses: false,
            questionType: FeedbackQuestionType.TEXT,
            questionDetails: {
                recommendedLength: 0,
                questionType: FeedbackQuestionType.TEXT,
                questionText: '',
            },
            giverType: FeedbackParticipantType.STUDENTS,
            recipientType: FeedbackParticipantType.STUDENTS,
            numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
            customNumberOfEntitiesToGiveFeedbackTo: 1,
            showResponsesTo: [],
            showGiverNameTo: [],
            showRecipientNameTo: [],
            isEditable: true,
            isSaving: false,
        };
        _this.isAddingQuestionPanelExpanded = false;
        // all students of the course
        _this.studentsOfCourse = [];
        _this.emailOfStudentToPreview = '';
        // instructors which can be previewed as
        _this.instructorsCanBePreviewedAs = [];
        _this.emailOfInstructorToPreview = '';
        return _this;
    }
    InstructorSessionEditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.courseId = queryParams.courseid;
            _this.feedbackSessionName = queryParams.fsname;
            _this.loadFeedbackSession();
            _this.loadFeedbackQuestions();
            _this.getAllStudentsOfCourse();
            _this.getAllInstructorsCanBePreviewedAs();
        });
    };
    /**
     * Loads a feedback session.
     */
    InstructorSessionEditPageComponent.prototype.loadFeedbackSession = function () {
        var _this = this;
        // load the course of the feedback session first
        this.courseService.getCourse(this.courseId).subscribe(function (course) {
            _this.courseName = course.courseName;
            // load feedback session
            var paramMap = {
                courseid: _this.courseId,
                fsname: _this.feedbackSessionName,
                intent: Intent.FULL_DETAIL,
            };
            _this.httpRequestService.get('/session', paramMap)
                .subscribe(function (feedbackSession) {
                _this.sessionEditFormModel = _this.getSessionEditFormModel(feedbackSession);
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        });
    };
    /**
     * Copies the feedback session.
     */
    InstructorSessionEditPageComponent.prototype.copyCurrentSession = function () {
        var _this = this;
        // load course candidates first
        this.httpRequestService.get('/courses', {
            entitytype: 'instructor',
            coursestatus: 'active',
        }).subscribe(function (courses) {
            var modalRef = _this.modalService.open(CopySessionModalComponent);
            modalRef.componentInstance.newFeedbackSessionName = _this.feedbackSessionName;
            modalRef.componentInstance.courseCandidates = courses.courses;
            modalRef.componentInstance.sessionToCopyCourseId = _this.courseId;
            modalRef.result.then(function (result) {
                var paramMap = {
                    courseid: _this.courseId,
                    fsname: _this.feedbackSessionName,
                    intent: Intent.FULL_DETAIL,
                };
                _this.httpRequestService.get('/session', paramMap).pipe(switchMap(function (feedbackSession) {
                    return _this.copyFeedbackSession(feedbackSession, result.newFeedbackSessionName, result.copyToCourseId);
                })).subscribe(function (createdSession) {
                    _this.navigationService.navigateWithSuccessMessage(_this.router, '/web/instructor/sessions/edit'
                        + ("?courseid=" + createdSession.courseId + "&fsname=" + createdSession.feedbackSessionName), 'The feedback session has been copied. Please modify settings/questions as necessary.');
                }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
            }, function () { });
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Gets the {@code sessionEditFormModel} with {@link FeedbackSession} entity.
     */
    InstructorSessionEditPageComponent.prototype.getSessionEditFormModel = function (feedbackSession) {
        var submissionStart = this.getDateTimeAtTimezone(feedbackSession.submissionStartTimestamp, feedbackSession.timeZone);
        var submissionEnd = this.getDateTimeAtTimezone(feedbackSession.submissionEndTimestamp, feedbackSession.timeZone);
        var model = {
            courseId: feedbackSession.courseId,
            timeZone: feedbackSession.timeZone,
            courseName: this.courseName,
            feedbackSessionName: feedbackSession.feedbackSessionName,
            instructions: feedbackSession.instructions,
            submissionStartTime: submissionStart.time,
            submissionStartDate: submissionStart.date,
            submissionEndTime: submissionEnd.time,
            submissionEndDate: submissionEnd.date,
            gracePeriod: feedbackSession.gracePeriod,
            sessionVisibleSetting: feedbackSession.sessionVisibleSetting,
            customSessionVisibleTime: { hour: 0, minute: 0 },
            customSessionVisibleDate: { year: 0, month: 0, day: 0 },
            responseVisibleSetting: feedbackSession.responseVisibleSetting,
            customResponseVisibleTime: { hour: 0, minute: 0 },
            customResponseVisibleDate: { year: 0, month: 0, day: 0 },
            submissionStatus: feedbackSession.submissionStatus,
            publishStatus: feedbackSession.publishStatus,
            templateSessionName: '',
            isClosingEmailEnabled: feedbackSession.isClosingEmailEnabled,
            isPublishedEmailEnabled: feedbackSession.isPublishedEmailEnabled,
            isSaving: false,
            isEditable: false,
            hasVisibleSettingsPanelExpanded: feedbackSession.sessionVisibleSetting !== SessionVisibleSetting.AT_OPEN
                || feedbackSession.responseVisibleSetting !== ResponseVisibleSetting.LATER,
            hasEmailSettingsPanelExpanded: !feedbackSession.isClosingEmailEnabled || !feedbackSession.isPublishedEmailEnabled,
        };
        if (feedbackSession.customSessionVisibleTimestamp) {
            var customSessionVisible = this.getDateTimeAtTimezone(feedbackSession.customSessionVisibleTimestamp, feedbackSession.timeZone);
            model.customSessionVisibleTime = customSessionVisible.time;
            model.customSessionVisibleDate = customSessionVisible.date;
        }
        if (feedbackSession.customResponseVisibleTimestamp) {
            var customResponseVisible = this.getDateTimeAtTimezone(feedbackSession.customResponseVisibleTimestamp, feedbackSession.timeZone);
            model.customResponseVisibleTime = customResponseVisible.time;
            model.customResponseVisibleDate = customResponseVisible.date;
        }
        return model;
    };
    /**
     * Get the local date and time of timezone from timestamp.
     */
    InstructorSessionEditPageComponent.prototype.getDateTimeAtTimezone = function (timestamp, timeZone) {
        var momentInstance = moment(timestamp).tz(timeZone);
        var date = {
            year: momentInstance.year(),
            month: momentInstance.month() + 1,
            day: momentInstance.date(),
        };
        var time = {
            minute: momentInstance.minute(),
            hour: momentInstance.hour(),
        };
        return {
            date: date,
            time: time,
        };
    };
    /**
     * Handles editing existing session event.
     */
    InstructorSessionEditPageComponent.prototype.editExistingSessionHandler = function () {
        var _this = this;
        this.sessionEditFormModel.isSaving = true;
        forkJoin(this.resolveLocalDateTime(this.sessionEditFormModel.submissionStartDate, this.sessionEditFormModel.submissionStartTime, this.sessionEditFormModel.timeZone, 'Submission opening time'), this.resolveLocalDateTime(this.sessionEditFormModel.submissionEndDate, this.sessionEditFormModel.submissionEndTime, this.sessionEditFormModel.timeZone, 'Submission closing time'), this.sessionEditFormModel.sessionVisibleSetting === SessionVisibleSetting.CUSTOM ?
            this.resolveLocalDateTime(this.sessionEditFormModel.customSessionVisibleDate, this.sessionEditFormModel.customSessionVisibleTime, this.sessionEditFormModel.timeZone, 'Session visible time')
            : of(0), this.sessionEditFormModel.responseVisibleSetting === ResponseVisibleSetting.CUSTOM ?
            this.resolveLocalDateTime(this.sessionEditFormModel.customResponseVisibleDate, this.sessionEditFormModel.customResponseVisibleTime, this.sessionEditFormModel.timeZone, 'Response visible time')
            : of(0)).pipe(switchMap(function (vals) {
            return _this.feedbackSessionsService.updateFeedbackSession(_this.courseId, _this.feedbackSessionName, {
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
        }), finalize(function () {
            _this.sessionEditFormModel.isSaving = false;
        })).subscribe(function (feedbackSession) {
            _this.sessionEditFormModel = _this.getSessionEditFormModel(feedbackSession);
            _this.statusMessageService.showSuccessMessage('The feedback session has been updated.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Resolves the local date time to an UNIX timestamp.
     */
    InstructorSessionEditPageComponent.prototype.resolveLocalDateTime = function (date, time, timeZone, fieldName) {
        var _this = this;
        var inst = moment();
        inst.set('year', date.year);
        inst.set('month', date.month - 1); // moment month is from 0-11
        inst.set('date', date.day);
        inst.set('hour', time.hour);
        inst.set('minute', time.minute);
        var localDateTime = inst.format(LOCAL_DATE_TIME_FORMAT);
        return this.timezoneService.getResolvedTimestamp(localDateTime, timeZone, fieldName).pipe(tap(function (result) {
            if (result.message.length !== 0) {
                _this.statusMessageService.showWarningMessage(result.message);
            }
        }), map(function (result) { return result.timestamp; }));
    };
    /**
     * Handles deleting current feedback session.
     */
    InstructorSessionEditPageComponent.prototype.deleteExistingSessionHandler = function () {
        var _this = this;
        var paramMap = { courseid: this.courseId, fsname: this.feedbackSessionName };
        this.httpRequestService.put('/bin/session', paramMap).subscribe(function () {
            _this.navigationService.navigateWithSuccessMessage(_this.router, '/web/instructor/sessions', 'The feedback session has been deleted. You can restore it from the deleted sessions table below.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Loads feedback questions.
     */
    InstructorSessionEditPageComponent.prototype.loadFeedbackQuestions = function () {
        var _this = this;
        var paramMap = {
            courseid: this.courseId,
            fsname: this.feedbackSessionName,
            intent: Intent.FULL_DETAIL,
        };
        this.httpRequestService.get('/questions', paramMap)
            .subscribe(function (response) {
            response.questions.forEach(function (feedbackQuestion) {
                var addedQuestionEditFormModel = _this.getQuestionEditFormModel(feedbackQuestion);
                _this.questionEditFormModels.push(addedQuestionEditFormModel);
                _this.loadResponseStatusForQuestion(addedQuestionEditFormModel);
                _this.feedbackQuestionModels.set(feedbackQuestion.feedbackQuestionId, feedbackQuestion);
            });
        }, function (resp) { return _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Tracks the question edit form by feedback question id.
     *
     * @see https://angular.io/api/common/NgForOf#properties
     */
    InstructorSessionEditPageComponent.prototype.trackQuestionEditFormByFn = function (_, item) {
        return item.feedbackQuestionId;
    };
    /**
     * Converts feedback question to the question edit form model.
     */
    InstructorSessionEditPageComponent.prototype.getQuestionEditFormModel = function (feedbackQuestion) {
        return {
            feedbackQuestionId: feedbackQuestion.feedbackQuestionId,
            questionNumber: feedbackQuestion.questionNumber,
            questionBrief: feedbackQuestion.questionBrief,
            questionDescription: feedbackQuestion.questionDescription,
            isQuestionHasResponses: false,
            questionType: feedbackQuestion.questionType,
            questionDetails: this.deepCopy(feedbackQuestion.questionDetails),
            giverType: feedbackQuestion.giverType,
            recipientType: feedbackQuestion.recipientType,
            numberOfEntitiesToGiveFeedbackToSetting: feedbackQuestion.numberOfEntitiesToGiveFeedbackToSetting,
            customNumberOfEntitiesToGiveFeedbackTo: feedbackQuestion.customNumberOfEntitiesToGiveFeedbackTo
                ? feedbackQuestion.customNumberOfEntitiesToGiveFeedbackTo : 1,
            showResponsesTo: feedbackQuestion.showResponsesTo,
            showGiverNameTo: feedbackQuestion.showGiverNameTo,
            showRecipientNameTo: feedbackQuestion.showRecipientNameTo,
            isEditable: false,
            isSaving: false,
        };
    };
    /**
     * Loads the isQuestionHasResponses value for a question edit for model.
     */
    InstructorSessionEditPageComponent.prototype.loadResponseStatusForQuestion = function (model) {
        var _this = this;
        this.feedbackSessionsService.hasResponsesForQuestion(model.feedbackQuestionId)
            .subscribe(function (resp) {
            model.isQuestionHasResponses = resp.hasResponses;
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Saves the existing question.
     */
    InstructorSessionEditPageComponent.prototype.saveExistingQuestionHandler = function (index) {
        var _this = this;
        var questionEditFormModel = this.questionEditFormModels[index];
        var originalQuestionNumber = 
        // tslint:disable-next-line:no-non-null-assertion
        this.feedbackQuestionModels.get(questionEditFormModel.feedbackQuestionId).questionNumber;
        questionEditFormModel.isSaving = true;
        this.feedbackQuestionsService.saveFeedbackQuestion(questionEditFormModel.feedbackQuestionId, {
            questionNumber: questionEditFormModel.questionNumber,
            questionBrief: questionEditFormModel.questionBrief,
            questionDescription: questionEditFormModel.questionDescription,
            questionDetails: questionEditFormModel.questionDetails,
            questionType: questionEditFormModel.questionType,
            giverType: questionEditFormModel.giverType,
            recipientType: questionEditFormModel.recipientType,
            numberOfEntitiesToGiveFeedbackToSetting: questionEditFormModel.numberOfEntitiesToGiveFeedbackToSetting,
            customNumberOfEntitiesToGiveFeedbackTo: questionEditFormModel.customNumberOfEntitiesToGiveFeedbackTo,
            showResponsesTo: questionEditFormModel.showResponsesTo,
            showGiverNameTo: questionEditFormModel.showGiverNameTo,
            showRecipientNameTo: questionEditFormModel.showRecipientNameTo,
        })
            .pipe(finalize(function () {
            questionEditFormModel.isSaving = false;
        }))
            .subscribe(function (updatedQuestion) {
            _this.questionEditFormModels[index] = _this.getQuestionEditFormModel(updatedQuestion);
            _this.feedbackQuestionModels.set(updatedQuestion.feedbackQuestionId, updatedQuestion);
            // shift question if needed
            if (originalQuestionNumber !== updatedQuestion.questionNumber) {
                // move question form
                _this.moveQuestionForm(originalQuestionNumber - 1, updatedQuestion.questionNumber - 1);
                _this.normalizeQuestionNumberInQuestionForms();
            }
            _this.statusMessageService.showSuccessMessage('The changes to the question have been updated.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Moves question edit form from the original position to the new position.
     */
    InstructorSessionEditPageComponent.prototype.moveQuestionForm = function (originalPosition, newPosition) {
        this.questionEditFormModels.splice(newPosition, 0, this.questionEditFormModels.splice(originalPosition, 1)[0]);
    };
    /**
     * Normalizes question number in question forms by setting question number in sequence (i.e. 1, 2, 3, 4 ...).
     */
    InstructorSessionEditPageComponent.prototype.normalizeQuestionNumberInQuestionForms = function () {
        for (var i = 1; i <= this.questionEditFormModels.length; i += 1) {
            var questionEditFormModel = this.questionEditFormModels[i - 1];
            questionEditFormModel.questionNumber = i;
            // tslint:disable-next-line:no-non-null-assertion
            this.feedbackQuestionModels.get(questionEditFormModel.feedbackQuestionId).questionNumber = i;
        }
    };
    /**
     * Discards the changes made to the existing question.
     */
    InstructorSessionEditPageComponent.prototype.discardExistingQuestionHandler = function (index) {
        var questionEditFormModel = this.questionEditFormModels[index];
        var feedbackQuestion = 
        // tslint:disable-next-line:no-non-null-assertion
        this.feedbackQuestionModels.get(questionEditFormModel.feedbackQuestionId);
        this.questionEditFormModels[index] = this.getQuestionEditFormModel(feedbackQuestion);
    };
    /**
     * Duplicates the question.
     */
    InstructorSessionEditPageComponent.prototype.duplicateCurrentQuestionHandler = function (index) {
        var _this = this;
        var questionEditFormModel = this.questionEditFormModels[index];
        questionEditFormModel.isSaving = true;
        this.feedbackQuestionsService.createFeedbackQuestion(this.courseId, this.feedbackSessionName, {
            questionNumber: this.questionEditFormModels.length + 1,
            questionBrief: questionEditFormModel.questionBrief,
            questionDescription: questionEditFormModel.questionDescription,
            questionDetails: questionEditFormModel.questionDetails,
            questionType: questionEditFormModel.questionType,
            giverType: questionEditFormModel.giverType,
            recipientType: questionEditFormModel.recipientType,
            numberOfEntitiesToGiveFeedbackToSetting: questionEditFormModel.numberOfEntitiesToGiveFeedbackToSetting,
            customNumberOfEntitiesToGiveFeedbackTo: questionEditFormModel.customNumberOfEntitiesToGiveFeedbackTo,
            showResponsesTo: questionEditFormModel.showResponsesTo,
            showGiverNameTo: questionEditFormModel.showGiverNameTo,
            showRecipientNameTo: questionEditFormModel.showRecipientNameTo,
        })
            .pipe(finalize(function () {
            questionEditFormModel.isSaving = false;
        }))
            .subscribe(function (newQuestion) {
            _this.questionEditFormModels.push(_this.getQuestionEditFormModel(newQuestion));
            _this.feedbackQuestionModels.set(newQuestion.feedbackQuestionId, newQuestion);
            _this.statusMessageService.showSuccessMessage('The question has been duplicated below.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Deletes the existing question.
     */
    InstructorSessionEditPageComponent.prototype.deleteExistingQuestionHandler = function (index) {
        var _this = this;
        var questionEditFormModel = this.questionEditFormModels[index];
        var paramMap = { questionid: questionEditFormModel.feedbackQuestionId };
        this.httpRequestService.delete('/question', paramMap).subscribe(function () {
            // remove form model
            _this.feedbackQuestionModels.delete(questionEditFormModel.feedbackQuestionId);
            _this.questionEditFormModels.splice(index, 1);
            _this.normalizeQuestionNumberInQuestionForms();
            _this.statusMessageService.showSuccessMessage('The question has been deleted.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Handles display of template question modal.
     */
    InstructorSessionEditPageComponent.prototype.templateQuestionModalHandler = function () {
        var _this = this;
        this.modalService.open(TemplateQuestionModalComponent).result.then(function (questions) {
            var questionNumber = _this.questionEditFormModels.length; // append the questions at the end
            of.apply(void 0, questions).pipe(concatMap(function (question) {
                questionNumber += 1;
                return _this.feedbackQuestionsService.createFeedbackQuestion(_this.courseId, _this.feedbackSessionName, {
                    questionNumber: questionNumber,
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
            })).subscribe(function (newQuestion) {
                _this.questionEditFormModels.push(_this.getQuestionEditFormModel(newQuestion));
                _this.feedbackQuestionModels.set(newQuestion.feedbackQuestionId, newQuestion);
            }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); }, function () {
                if (questions.length === 1) {
                    _this.statusMessageService.showSuccessMessage('The question has been added to this feedback session.');
                }
                else {
                    _this.statusMessageService.showSuccessMessage('The questions have been added to this feedback session.');
                }
            });
        });
    };
    /**
     * Populates and shows new question edit form.
     */
    InstructorSessionEditPageComponent.prototype.populateAndShowNewQuestionForm = function (type) {
        this.isAddingQuestionPanelExpanded = true;
        var newQuestionModel = this.feedbackQuestionsService.getNewQuestionModel(type);
        this.newQuestionEditFormModel = {
            feedbackQuestionId: '',
            questionNumber: this.questionEditFormModels.length + 1,
            questionBrief: newQuestionModel.questionBrief,
            questionDescription: newQuestionModel.questionDescription,
            isQuestionHasResponses: false,
            questionType: newQuestionModel.questionType,
            questionDetails: newQuestionModel.questionDetails,
            giverType: newQuestionModel.giverType,
            recipientType: newQuestionModel.recipientType,
            numberOfEntitiesToGiveFeedbackToSetting: newQuestionModel.numberOfEntitiesToGiveFeedbackToSetting,
            customNumberOfEntitiesToGiveFeedbackTo: newQuestionModel.customNumberOfEntitiesToGiveFeedbackTo
                ? newQuestionModel.customNumberOfEntitiesToGiveFeedbackTo : 1,
            showResponsesTo: newQuestionModel.showResponsesTo,
            showGiverNameTo: newQuestionModel.showGiverNameTo,
            showRecipientNameTo: newQuestionModel.showRecipientNameTo,
            isEditable: true,
            isSaving: false,
        };
    };
    /**
     * Creates a new question.
     */
    InstructorSessionEditPageComponent.prototype.createNewQuestionHandler = function () {
        var _this = this;
        this.newQuestionEditFormModel.isSaving = true;
        this.feedbackQuestionsService.createFeedbackQuestion(this.courseId, this.feedbackSessionName, {
            questionNumber: this.newQuestionEditFormModel.questionNumber,
            questionBrief: this.newQuestionEditFormModel.questionBrief,
            questionDescription: this.newQuestionEditFormModel.questionDescription,
            questionDetails: this.newQuestionEditFormModel.questionDetails,
            questionType: this.newQuestionEditFormModel.questionType,
            giverType: this.newQuestionEditFormModel.giverType,
            recipientType: this.newQuestionEditFormModel.recipientType,
            numberOfEntitiesToGiveFeedbackToSetting: this.newQuestionEditFormModel.numberOfEntitiesToGiveFeedbackToSetting,
            customNumberOfEntitiesToGiveFeedbackTo: this.newQuestionEditFormModel.customNumberOfEntitiesToGiveFeedbackTo,
            showResponsesTo: this.newQuestionEditFormModel.showResponsesTo,
            showGiverNameTo: this.newQuestionEditFormModel.showGiverNameTo,
            showRecipientNameTo: this.newQuestionEditFormModel.showRecipientNameTo,
        })
            .pipe(finalize(function () {
            _this.newQuestionEditFormModel.isSaving = false;
        }))
            .subscribe(function (newQuestion) {
            _this.questionEditFormModels.push(_this.getQuestionEditFormModel(newQuestion));
            _this.feedbackQuestionModels.set(newQuestion.feedbackQuestionId, newQuestion);
            _this.moveQuestionForm(_this.questionEditFormModels.length - 1, newQuestion.questionNumber - 1);
            _this.normalizeQuestionNumberInQuestionForms();
            _this.isAddingQuestionPanelExpanded = false;
            _this.statusMessageService.showSuccessMessage('The question has been added to this feedback session.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Handles 'Copy Question' click event.
     */
    InstructorSessionEditPageComponent.prototype.copyQuestionsFromOtherSessionsHandler = function () {
        var _this = this;
        var questionToCopyCandidates = [];
        this.feedbackSessionsService.getFeedbackSessionsForInstructor().pipe(switchMap(function (sessions) { return of.apply(void 0, sessions.feedbackSessions); }), flatMap(function (session) {
            var paramMap = {
                courseid: session.courseId,
                fsname: session.feedbackSessionName,
                intent: Intent.FULL_DETAIL,
            };
            return _this.httpRequestService.get('/questions', paramMap)
                .pipe(map(function (questions) {
                return questions.questions.map(function (q) { return ({
                    courseId: session.courseId,
                    feedbackSessionName: session.feedbackSessionName,
                    question: q,
                    isSelected: false,
                }); });
            }));
        })).subscribe(function (questionToCopyCandidate) {
            questionToCopyCandidates.push.apply(questionToCopyCandidates, questionToCopyCandidate);
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); }, function () {
            var ref = _this.modalService.open(CopyQuestionsFromOtherSessionsModalComponent);
            ref.componentInstance.questionToCopyCandidates = questionToCopyCandidates;
            ref.result.then(function (questionsToCopy) {
                of.apply(void 0, questionsToCopy).pipe(concatMap(function (questionToCopy) {
                    return _this.feedbackQuestionsService.createFeedbackQuestion(_this.courseId, _this.feedbackSessionName, {
                        questionNumber: _this.questionEditFormModels.length + 1,
                        questionBrief: questionToCopy.questionBrief,
                        questionDescription: questionToCopy.questionDescription,
                        questionDetails: questionToCopy.questionDetails,
                        questionType: questionToCopy.questionType,
                        giverType: questionToCopy.giverType,
                        recipientType: questionToCopy.recipientType,
                        numberOfEntitiesToGiveFeedbackToSetting: questionToCopy.numberOfEntitiesToGiveFeedbackToSetting,
                        customNumberOfEntitiesToGiveFeedbackTo: questionToCopy.customNumberOfEntitiesToGiveFeedbackTo,
                        showResponsesTo: questionToCopy.showResponsesTo,
                        showGiverNameTo: questionToCopy.showGiverNameTo,
                        showRecipientNameTo: questionToCopy.showRecipientNameTo,
                    });
                })).subscribe(function (newQuestion) {
                    _this.questionEditFormModels.push(_this.getQuestionEditFormModel(newQuestion));
                    _this.feedbackQuestionModels.set(newQuestion.feedbackQuestionId, newQuestion);
                    _this.statusMessageService.showSuccessMessage('The question has been added to this feedback session.');
                }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
            }, function () { });
        });
    };
    /**
     * Handles 'Done Editing' click event.
     */
    InstructorSessionEditPageComponent.prototype.doneEditingHandler = function () {
        this.router.navigateByUrl('/web/instructor/sessions');
        // TODO focus on the row of current feedback session in the sessions page
    };
    /**
     * Handles question 'Help' link click event.
     */
    InstructorSessionEditPageComponent.prototype.questionsHelpHandler = function () {
        window.open(environment.frontendUrl + "/web/instructor/help");
        // TODO scroll down to the question specific section in the help page
    };
    /**
     * Gets all students of a course.
     */
    InstructorSessionEditPageComponent.prototype.getAllStudentsOfCourse = function () {
        var _this = this;
        var paramMap = {
            courseid: this.courseId,
        };
        this.httpRequestService.get('/students', paramMap)
            .subscribe(function (students) {
            _this.studentsOfCourse = students.students;
            // sort the student list based on team name and student name
            _this.studentsOfCourse.sort(function (a, b) {
                var teamNameCompare = a.teamName.localeCompare(b.teamName);
                if (teamNameCompare === 0) {
                    return a.name.localeCompare(b.name);
                }
                return teamNameCompare;
            });
            // select the first student
            if (_this.studentsOfCourse.length >= 1) {
                _this.emailOfStudentToPreview = _this.studentsOfCourse[0].email;
            }
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Gets all instructors of a course which can be previewed as.
     */
    InstructorSessionEditPageComponent.prototype.getAllInstructorsCanBePreviewedAs = function () {
        var _this = this;
        var paramMap = {
            courseid: this.courseId,
            intent: Intent.FULL_DETAIL,
        };
        this.httpRequestService.get('/instructors', paramMap)
            .subscribe(function (instructors) {
            _this.instructorsCanBePreviewedAs = instructors.instructors;
            // TODO use privilege API to filter instructors who has INSTRUCTOR_PERMISSION_SUBMIT_SESSION_IN_SECTIONS
            // in the feedback session
            // sort the instructor list based on name
            _this.instructorsCanBePreviewedAs.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            // select the first instructor
            if (_this.instructorsCanBePreviewedAs.length >= 1) {
                _this.emailOfInstructorToPreview = _this.instructorsCanBePreviewedAs[0].email;
            }
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Previews the submission of the feedback session as a student.
     */
    InstructorSessionEditPageComponent.prototype.previewAsStudent = function () {
        window.open(environment.frontendUrl + "/web/sessions/submission"
            + ("?courseid=" + this.courseId + "&fsname=" + this.feedbackSessionName + "&previewas=" + this.emailOfStudentToPreview));
    };
    /**
     * Previews the submission of the feedback session as an instructor.
     */
    InstructorSessionEditPageComponent.prototype.previewAsInstructor = function () {
        window.open(environment.frontendUrl + "/web/instructor/sessions/submission"
            + ("?courseid=" + this.courseId + "&fsname=" + this.feedbackSessionName + "&previewas=" + this.emailOfInstructorToPreview));
    };
    InstructorSessionEditPageComponent.prototype.deepCopy = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    InstructorSessionEditPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-session-edit-page',
            templateUrl: './instructor-session-edit-page.component.html',
            styleUrls: ['./instructor-session-edit-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            HttpRequestService,
            StatusMessageService,
            NavigationService,
            FeedbackSessionsService,
            FeedbackQuestionsService,
            CourseService,
            ActivatedRoute,
            TimezoneService,
            NgbModal])
    ], InstructorSessionEditPageComponent);
    return InstructorSessionEditPageComponent;
}(InstructorSessionBasePageComponent));
export { InstructorSessionEditPageComponent };
//# sourceMappingURL=instructor-session-edit-page.component.js.map