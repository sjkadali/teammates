import { from, of } from 'rxjs';
import { concatMap, last, switchMap } from 'rxjs/operators';
import { SortBy, SortOrder, } from '../components/sessions-table/sessions-table-model';
import { Intent } from '../Intent';
/**
 * The base page for session related page.
 */
var InstructorSessionBasePageComponent = /** @class */ (function () {
    function InstructorSessionBasePageComponent(router, httpRequestService, statusMessageService, navigationService, feedbackSessionsService, feedbackQuestionsService) {
        this.router = router;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.navigationService = navigationService;
        this.feedbackSessionsService = feedbackSessionsService;
        this.feedbackQuestionsService = feedbackQuestionsService;
    }
    /**
     * Copies a feedback session.
     */
    InstructorSessionBasePageComponent.prototype.copyFeedbackSession = function (fromFeedbackSession, newSessionName, newCourseId) {
        var _this = this;
        var createdFeedbackSession;
        return this.feedbackSessionsService.createFeedbackSession(newCourseId, {
            feedbackSessionName: newSessionName,
            instructions: fromFeedbackSession.instructions,
            submissionStartTimestamp: fromFeedbackSession.submissionStartTimestamp,
            submissionEndTimestamp: fromFeedbackSession.submissionEndTimestamp,
            gracePeriod: fromFeedbackSession.gracePeriod,
            sessionVisibleSetting: fromFeedbackSession.sessionVisibleSetting,
            customSessionVisibleTimestamp: fromFeedbackSession.customSessionVisibleTimestamp,
            responseVisibleSetting: fromFeedbackSession.responseVisibleSetting,
            customResponseVisibleTimestamp: fromFeedbackSession.customResponseVisibleTimestamp,
            isClosingEmailEnabled: fromFeedbackSession.isClosingEmailEnabled,
            isPublishedEmailEnabled: fromFeedbackSession.isPublishedEmailEnabled,
        }).pipe(switchMap(function (feedbackSession) {
            createdFeedbackSession = feedbackSession;
            // copy questions
            var param = {
                courseid: fromFeedbackSession.courseId,
                fsname: fromFeedbackSession.feedbackSessionName,
                intent: Intent.FULL_DETAIL,
            };
            return _this.httpRequestService.get('/questions', param);
        }), switchMap(function (response) {
            if (response.questions.length === 0) {
                // no questions to copy
                return of(createdFeedbackSession);
            }
            return from(response.questions).pipe(concatMap(function (feedbackQuestion) {
                return _this.feedbackQuestionsService.createFeedbackQuestion(createdFeedbackSession.courseId, createdFeedbackSession.feedbackSessionName, {
                    questionNumber: feedbackQuestion.questionNumber,
                    questionBrief: feedbackQuestion.questionBrief,
                    questionDescription: feedbackQuestion.questionDescription,
                    questionDetails: feedbackQuestion.questionDetails,
                    questionType: feedbackQuestion.questionType,
                    giverType: feedbackQuestion.giverType,
                    recipientType: feedbackQuestion.recipientType,
                    numberOfEntitiesToGiveFeedbackToSetting: feedbackQuestion.numberOfEntitiesToGiveFeedbackToSetting,
                    customNumberOfEntitiesToGiveFeedbackTo: feedbackQuestion.customNumberOfEntitiesToGiveFeedbackTo,
                    showResponsesTo: feedbackQuestion.showResponsesTo,
                    showGiverNameTo: feedbackQuestion.showGiverNameTo,
                    showRecipientNameTo: feedbackQuestion.showRecipientNameTo,
                });
            }), last(), switchMap(function () { return of(createdFeedbackSession); }));
        }));
    };
    /**
     * Generates a sorting function.
     */
    InstructorSessionBasePageComponent.prototype.sortModelsBy = function (by, order) {
        return (function (a, b) {
            var strA;
            var strB;
            switch (by) {
                case SortBy.FEEDBACK_SESSION_NAME:
                    strA = a.feedbackSession.feedbackSessionName;
                    strB = b.feedbackSession.feedbackSessionName;
                    break;
                case SortBy.COURSE_ID:
                    strA = a.feedbackSession.courseId;
                    strB = b.feedbackSession.courseId;
                    break;
                case SortBy.START_DATE:
                    strA = String(a.feedbackSession.submissionStartTimestamp);
                    strB = String(b.feedbackSession.submissionStartTimestamp);
                    break;
                case SortBy.END_DATE:
                    strA = String(a.feedbackSession.submissionEndTimestamp);
                    strB = String(b.feedbackSession.submissionEndTimestamp);
                    break;
                case SortBy.SESSION_CREATION_DATE:
                    strA = String(a.feedbackSession.createdAtTimestamp);
                    strB = String(b.feedbackSession.createdAtTimestamp);
                    break;
                case SortBy.DELETION_DATE:
                    strA = String(a.feedbackSession.deletedAtTimestamp);
                    strB = String(b.feedbackSession.deletedAtTimestamp);
                    break;
                default:
                    strA = '';
                    strB = '';
            }
            if (order === SortOrder.ASC) {
                return strA.localeCompare(strB);
            }
            if (order === SortOrder.DESC) {
                return strB.localeCompare(strA);
            }
            return 0;
        });
    };
    /**
     * Updates the instructor privilege in {@code SessionsTableRowModel}.
     */
    InstructorSessionBasePageComponent.prototype.updateInstructorPrivilege = function (model) {
        var _this = this;
        this.httpRequestService.get('/instructor/privilege', {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        }).subscribe(function (instructorPrivilege) {
            model.instructorPrivilege = instructorPrivilege;
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Loads response rate of a feedback session.
     */
    InstructorSessionBasePageComponent.prototype.loadResponseRate = function (model) {
        var _this = this;
        model.isLoadingResponseRate = true;
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.get('/session/stats', paramMap).subscribe(function (resp) {
            model.isLoadingResponseRate = false;
            model.responseRate = resp.submittedTotal + " / " + resp.expectedTotal;
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Edits the feedback session.
     */
    InstructorSessionBasePageComponent.prototype.editSession = function (model) {
        this.router.navigateByUrl('/web/instructor/sessions/edit'
            + ("?courseid=" + model.feedbackSession.courseId + "&fsname=" + model.feedbackSession.feedbackSessionName));
    };
    /**
     * Copies the feedback session.
     */
    InstructorSessionBasePageComponent.prototype.copySession = function (model, result) {
        var _this = this;
        this.copyFeedbackSession(model.feedbackSession, result.newFeedbackSessionName, result.copyToCourseId)
            .subscribe(function (createdSession) {
            _this.navigationService.navigateWithSuccessMessage(_this.router, '/web/instructor/sessions/edit'
                + ("?courseid=" + createdSession.courseId + "&fsname=" + createdSession.feedbackSessionName), 'The feedback session has been copied. Please modify settings/questions as necessary.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Submits the feedback session as instructor.
     */
    InstructorSessionBasePageComponent.prototype.submitSessionAsInstructor = function (model) {
        this.router.navigateByUrl('/web/instructor/sessions/submission'
            + ("?courseid=" + model.feedbackSession.courseId + "&fsname=" + model.feedbackSession.feedbackSessionName));
    };
    /**
     * Views the result of a feedback session.
     */
    InstructorSessionBasePageComponent.prototype.viewSessionResult = function (model) {
        this.router.navigateByUrl('/web/instructor/sessions/result'
            + ("?courseid=" + model.feedbackSession.courseId + "&fsname=" + model.feedbackSession.feedbackSessionName));
    };
    /**
     * Publishes a feedback session.
     */
    InstructorSessionBasePageComponent.prototype.publishSession = function (model) {
        var _this = this;
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.post('/session/publish', paramMap)
            .subscribe(function (feedbackSession) {
            model.feedbackSession = feedbackSession;
            model.responseRate = '';
            _this.statusMessageService.showSuccessMessage('The feedback session has been published. '
                + 'Please allow up to 1 hour for all the notification emails to be sent out.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Unpublishes a feedback session.
     */
    InstructorSessionBasePageComponent.prototype.unpublishSession = function (model) {
        var _this = this;
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.delete('/session/publish', paramMap)
            .subscribe(function (feedbackSession) {
            model.feedbackSession = feedbackSession;
            model.responseRate = '';
            _this.statusMessageService.showSuccessMessage('The feedback session has been unpublished.');
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Sends e-mails to remind students on the published results link.
     */
    InstructorSessionBasePageComponent.prototype.resendResultsLinkToStudents = function (model, request) {
        var _this = this;
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.post('/session/remind/result', paramMap, request).subscribe(function () {
            _this.statusMessageService.showSuccessMessage('Session published notification emails have been resent to those students and instructors. '
                + 'Please allow up to 1 hour for all the notification emails to be sent out.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Sends e-mails to remind students who have not submitted their feedback.
     */
    InstructorSessionBasePageComponent.prototype.sendRemindersToStudents = function (model, request) {
        var _this = this;
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.post('/session/remind/submission', paramMap, request).subscribe(function () {
            _this.statusMessageService.showSuccessMessage('Reminder e-mails have been sent out to those students and instructors. '
                + 'Please allow up to 1 hour for all the notification emails to be sent out.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    return InstructorSessionBasePageComponent;
}());
export { InstructorSessionBasePageComponent };
//# sourceMappingURL=instructor-session-base-page.component.js.map