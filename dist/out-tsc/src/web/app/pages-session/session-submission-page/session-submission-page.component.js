import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment-timezone';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { FeedbackResponsesService } from '../../../services/feedback-responses.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { TimezoneService } from '../../../services/timezone.service';
import { FeedbackParticipantType, FeedbackSessionSubmissionStatus, NumberOfEntitiesToGiveFeedbackToSetting, } from '../../../types/api-output';
import { QuestionSubmissionFormMode, } from '../../components/question-submission-form/question-submission-form-model';
import { Intent } from '../../Intent';
import { FeedbackSessionClosedModalComponent, } from './feedback-session-closed-modal/feedback-session-closed-modal.component';
import { FeedbackSessionClosingSoonModalComponent, } from './feedback-session-closing-soon-modal/feedback-session-closing-soon-modal.component';
import { FeedbackSessionDeletedModalComponent, } from './feedback-session-deleted-modal/feedback-session-deleted-modal.component';
import { FeedbackSessionNotOpenModalComponent, } from './feedback-session-not-open-modal/feedback-session-not-open-modal.component';
import { SavingCompleteModalComponent, } from './saving-complete-modal/saving-complete-modal.component';
/**
 * The result of the confirmation.
 */
var ConfirmationResult;
(function (ConfirmationResult) {
    /**
     * The submission has been confirmed successfully.
     */
    ConfirmationResult["SUCCESS"] = "SUCCESS";
    /**
     * The submission has been confirmed but the confirmation email failed to send.
     */
    ConfirmationResult["SUCCESS_BUT_EMAIL_FAIL_TO_SEND"] = "SUCCESS_BUT_EMAIL_FAIL_TO_SEND";
})(ConfirmationResult || (ConfirmationResult = {}));
/**
 * Feedback session submission page.
 */
var SessionSubmissionPageComponent = /** @class */ (function () {
    function SessionSubmissionPageComponent(route, router, statusMessageService, httpRequestService, timezoneService, feedbackResponsesService, modalService) {
        this.route = route;
        this.router = router;
        this.statusMessageService = statusMessageService;
        this.httpRequestService = httpRequestService;
        this.timezoneService = timezoneService;
        this.feedbackResponsesService = feedbackResponsesService;
        this.modalService = modalService;
        // enum
        this.FeedbackSessionSubmissionStatus = FeedbackSessionSubmissionStatus;
        this.Intent = Intent;
        this.courseId = '';
        this.feedbackSessionName = '';
        this.regKey = '';
        this.moderatedPerson = '';
        this.previewAsPerson = '';
        // the name of the person involved
        // (e.g. the student name for unregistered student, the name of instructor being moderated)
        this.personName = '';
        this.formattedSessionOpeningTime = '';
        this.formattedSessionClosingTime = '';
        this.feedbackSessionInstructions = '';
        this.feedbackSessionSubmissionStatus = FeedbackSessionSubmissionStatus.OPEN;
        this.intent = Intent.STUDENT_SUBMISSION;
        this.questionSubmissionForms = [];
        this.shouldSendConfirmationEmail = true;
        this.isSavingResponses = false;
        this.isSubmissionFormsDisabled = false;
        this.isModerationHintExpanded = false;
        this.timezoneService.getTzVersion(); // import timezone service to load timezone data
    }
    SessionSubmissionPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.pipe(tap(function (data) {
            _this.intent = data.intent;
        }), switchMap(function () { return _this.route.queryParams; })).subscribe(function (queryParams) {
            _this.courseId = queryParams.courseid;
            _this.feedbackSessionName = queryParams.fsname;
            _this.regKey = queryParams.key ? queryParams.key : '';
            _this.moderatedPerson = queryParams.moderatedperson ? queryParams.moderatedperson : '';
            _this.previewAsPerson = queryParams.previewas ? queryParams.previewas : '';
            if (_this.previewAsPerson) {
                // disable submission in the preview mode
                _this.isSubmissionFormsDisabled = true;
            }
            _this.loadPersonName();
            _this.loadFeedbackSession();
        });
    };
    /**
     * Loads the name of the person invovled in the submission.
     */
    SessionSubmissionPageComponent.prototype.loadPersonName = function () {
        var _this = this;
        switch (this.intent) {
            case Intent.STUDENT_SUBMISSION:
                var paramMap = {
                    courseid: this.courseId,
                    key: this.regKey,
                    studentemail: this.moderatedPerson || this.previewAsPerson,
                };
                this.httpRequestService.get('/student', paramMap)
                    .subscribe(function (student) {
                    _this.personName = student.name;
                });
                break;
            case Intent.INSTRUCTOR_SUBMISSION:
                this.httpRequestService.get('/instructor', {
                    courseid: this.courseId,
                    fsname: this.feedbackSessionName,
                    intent: this.intent,
                    key: this.regKey,
                    moderatedperson: this.moderatedPerson,
                    previewas: this.previewAsPerson,
                }).subscribe(function (instructor) {
                    _this.personName = instructor.name;
                });
                break;
            default:
        }
    };
    /**
     * Redirects to join course link for unregistered student.
     */
    SessionSubmissionPageComponent.prototype.joinCourseForUnregisteredStudent = function () {
        this.router.navigateByUrl("/web/join?entitytype=student&key=" + this.regKey);
    };
    /**
     * Loads the feedback session information.
     */
    SessionSubmissionPageComponent.prototype.loadFeedbackSession = function () {
        var _this = this;
        var paramMap = {
            courseid: this.courseId,
            fsname: this.feedbackSessionName,
            intent: this.intent,
            key: this.regKey,
            moderatedperson: this.moderatedPerson,
            previewas: this.previewAsPerson,
        };
        var TIME_FORMAT = 'ddd, DD MMM, YYYY, hh:mm A zz';
        this.httpRequestService.get('/session', paramMap)
            .subscribe(function (feedbackSession) {
            _this.feedbackSessionInstructions = feedbackSession.instructions;
            _this.formattedSessionOpeningTime =
                moment(feedbackSession.submissionStartTimestamp)
                    .tz(feedbackSession.timeZone).format(TIME_FORMAT);
            var submissionEndTime = moment(feedbackSession.submissionEndTimestamp);
            _this.formattedSessionClosingTime = submissionEndTime
                .tz(feedbackSession.timeZone).format(TIME_FORMAT);
            _this.feedbackSessionSubmissionStatus = feedbackSession.submissionStatus;
            // don't show alert modal in moderation
            if (!_this.moderatedPerson) {
                switch (feedbackSession.submissionStatus) {
                    case FeedbackSessionSubmissionStatus.VISIBLE_NOT_OPEN:
                        _this.isSubmissionFormsDisabled = true;
                        _this.modalService.open(FeedbackSessionNotOpenModalComponent);
                        break;
                    case FeedbackSessionSubmissionStatus.OPEN:
                        // closing in 15 minutes
                        if (moment.utc().add(15, 'minutes').isAfter(submissionEndTime)) {
                            _this.modalService.open(FeedbackSessionClosingSoonModalComponent);
                        }
                        break;
                    case FeedbackSessionSubmissionStatus.CLOSED:
                        _this.isSubmissionFormsDisabled = true;
                        _this.modalService.open(FeedbackSessionClosedModalComponent);
                        break;
                    case FeedbackSessionSubmissionStatus.GRACE_PERIOD:
                    default:
                }
            }
            _this.loadFeedbackQuestions();
        }, function (resp) {
            if (resp.status === 404) {
                _this.modalService.open(FeedbackSessionDeletedModalComponent);
            }
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Loads feedback questions to submit.
     */
    SessionSubmissionPageComponent.prototype.loadFeedbackQuestions = function () {
        var _this = this;
        var paramMap = {
            courseid: this.courseId,
            fsname: this.feedbackSessionName,
            intent: this.intent,
            key: this.regKey,
            moderatedperson: this.moderatedPerson,
            previewas: this.previewAsPerson,
        };
        this.httpRequestService.get('/questions', paramMap)
            .subscribe(function (response) {
            response.questions.forEach(function (feedbackQuestion) {
                var model = {
                    feedbackQuestionId: feedbackQuestion.feedbackQuestionId,
                    questionNumber: feedbackQuestion.questionNumber,
                    questionBrief: feedbackQuestion.questionBrief,
                    questionDescription: feedbackQuestion.questionDescription,
                    giverType: feedbackQuestion.giverType,
                    recipientType: feedbackQuestion.recipientType,
                    recipientList: [],
                    recipientSubmissionForms: [],
                    questionType: feedbackQuestion.questionType,
                    questionDetails: feedbackQuestion.questionDetails,
                    numberOfEntitiesToGiveFeedbackToSetting: feedbackQuestion.numberOfEntitiesToGiveFeedbackToSetting,
                    customNumberOfEntitiesToGiveFeedbackTo: feedbackQuestion.customNumberOfEntitiesToGiveFeedbackTo
                        ? feedbackQuestion.customNumberOfEntitiesToGiveFeedbackTo : 0,
                    showGiverNameTo: feedbackQuestion.showGiverNameTo,
                    showRecipientNameTo: feedbackQuestion.showRecipientNameTo,
                    showResponsesTo: feedbackQuestion.showResponsesTo,
                };
                _this.questionSubmissionForms.push(model);
                _this.loadFeedbackQuestionRecipientsForQuestion(model);
            });
        }, function (resp) { return _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Tracks the question submission form by feedback question id.
     *
     * @see https://angular.io/api/common/NgForOf#properties
     */
    SessionSubmissionPageComponent.prototype.trackQuestionSubmissionFormByFn = function (_, item) {
        return item.feedbackQuestionId;
    };
    /**
     * Loads the feedback question recipients for the question.
     */
    SessionSubmissionPageComponent.prototype.loadFeedbackQuestionRecipientsForQuestion = function (model) {
        var _this = this;
        var paramMap = {
            questionid: model.feedbackQuestionId,
            intent: this.intent,
            key: this.regKey,
            moderatedperson: this.moderatedPerson,
            previewas: this.previewAsPerson,
        };
        this.httpRequestService.get('/question/recipients', paramMap)
            .subscribe(function (response) {
            response.recipients.forEach(function (recipient) {
                model.recipientList.push({
                    recipientIdentifier: recipient.identifier,
                    recipientName: recipient.name,
                });
            });
            if (_this.previewAsPerson) {
                // don't load responses in preview mode
                // generate a list of empty response box
                model.recipientList.forEach(function (recipient) {
                    model.recipientSubmissionForms.push({
                        recipientIdentifier: _this.getQuestionSubmissionFormMode(model) === QuestionSubmissionFormMode.FLEXIBLE_RECIPIENT
                            ? '' : recipient.recipientIdentifier,
                        responseDetails: _this.feedbackResponsesService.getDefaultFeedbackResponseDetails(model.questionType),
                        responseId: '',
                    });
                });
            }
            else {
                _this.loadFeedbackResponses(model);
            }
        }, function (resp) { return _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Gets the form mode of the question submission form.
     */
    SessionSubmissionPageComponent.prototype.getQuestionSubmissionFormMode = function (model) {
        var isNumberOfEntitiesToGiveFeedbackToSettingLimited = (model.recipientType === FeedbackParticipantType.STUDENTS
            || model.recipientType === FeedbackParticipantType.TEAMS
            || model.recipientType === FeedbackParticipantType.INSTRUCTORS)
            && model.numberOfEntitiesToGiveFeedbackToSetting === NumberOfEntitiesToGiveFeedbackToSetting.CUSTOM
            && model.recipientList.length > model.customNumberOfEntitiesToGiveFeedbackTo;
        return isNumberOfEntitiesToGiveFeedbackToSettingLimited
            ? QuestionSubmissionFormMode.FLEXIBLE_RECIPIENT : QuestionSubmissionFormMode.FIXED_RECIPIENT;
    };
    /**
     * Loads the responses of the feedback question to {@recipientSubmissionForms} in the model.
     */
    SessionSubmissionPageComponent.prototype.loadFeedbackResponses = function (model) {
        var _this = this;
        var paramMap = {
            questionid: model.feedbackQuestionId,
            intent: this.intent,
            key: this.regKey,
            moderatedperson: this.moderatedPerson,
        };
        this.httpRequestService.get('/responses', paramMap).subscribe(function (existingResponses) {
            // if student does not have any responses (i.e. first time answering), then enable sending of confirmation email
            _this.shouldSendConfirmationEmail = _this.shouldSendConfirmationEmail && existingResponses.responses.length === 0;
            if (_this.getQuestionSubmissionFormMode(model) === QuestionSubmissionFormMode.FIXED_RECIPIENT) {
                // need to generate a full list of submission forms
                model.recipientList.forEach(function (recipient) {
                    var matchedExistingResponse = existingResponses.responses.find(function (response) { return response.recipientIdentifier === recipient.recipientIdentifier; });
                    model.recipientSubmissionForms.push({
                        recipientIdentifier: recipient.recipientIdentifier,
                        responseDetails: matchedExistingResponse
                            ? matchedExistingResponse.responseDetails
                            : _this.feedbackResponsesService.getDefaultFeedbackResponseDetails(model.questionType),
                        responseId: matchedExistingResponse ? matchedExistingResponse.feedbackResponseId : '',
                    });
                });
            }
            if (_this.getQuestionSubmissionFormMode(model) === QuestionSubmissionFormMode.FLEXIBLE_RECIPIENT) {
                // need to generate limited number of submission forms
                var numberOfRecipientSubmissionFormsNeeded = model.customNumberOfEntitiesToGiveFeedbackTo - existingResponses.responses.length;
                existingResponses.responses.forEach(function (response) {
                    model.recipientSubmissionForms.push({
                        recipientIdentifier: response.recipientIdentifier,
                        responseDetails: response.responseDetails,
                        responseId: response.feedbackResponseId,
                    });
                });
                // generate empty submission forms
                while (numberOfRecipientSubmissionFormsNeeded > 0) {
                    model.recipientSubmissionForms.push({
                        recipientIdentifier: '',
                        responseDetails: _this.feedbackResponsesService.getDefaultFeedbackResponseDetails(model.questionType),
                        responseId: '',
                    });
                    numberOfRecipientSubmissionFormsNeeded -= 1;
                }
            }
        }, function (resp) { return _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    Object.defineProperty(SessionSubmissionPageComponent.prototype, "hasAnyResponseToSubmit", {
        /**
         * Checks whether there is any submission forms in the current page.
         */
        get: function () {
            return this.questionSubmissionForms
                .some(function (model) { return model.recipientSubmissionForms.length !== 0; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Saves all feedback response.
     *
     * <p>All empty feedback response will be deleted; For non-empty responses, update/create them if necessary.
     */
    SessionSubmissionPageComponent.prototype.saveFeedbackResponses = function () {
        var _this = this;
        var notYetAnsweredQuestions = new Set();
        var failToSaveQuestions = new Set();
        var savingRequests = [];
        this.questionSubmissionForms.forEach(function (questionSubmissionFormModel) {
            var isQuestionFullyAnswered = true;
            questionSubmissionFormModel.recipientSubmissionForms
                .forEach(function (recipientSubmissionFormModel) {
                var isFeedbackResponseDetailsEmpty = _this.feedbackResponsesService.isFeedbackResponseDetailsEmpty(questionSubmissionFormModel.questionType, recipientSubmissionFormModel.responseDetails);
                isQuestionFullyAnswered = isQuestionFullyAnswered && !isFeedbackResponseDetailsEmpty;
                if (recipientSubmissionFormModel.responseId !== '' && isFeedbackResponseDetailsEmpty) {
                    // existing response but empty details -> delete response
                    savingRequests.push(_this.httpRequestService.delete('/response', {
                        responseid: recipientSubmissionFormModel.responseId,
                        intent: _this.intent,
                        key: _this.regKey,
                        moderatedperson: _this.moderatedPerson,
                    }).pipe(tap(function () {
                        recipientSubmissionFormModel.responseId = '';
                    }), catchError(function (error) {
                        _this.statusMessageService.showErrorMessage(error.error.message);
                        failToSaveQuestions.add(questionSubmissionFormModel.questionNumber);
                        return of(error);
                    })));
                }
                if (recipientSubmissionFormModel.responseId !== '' && !isFeedbackResponseDetailsEmpty) {
                    // existing response and details is not empty -> update response
                    savingRequests.push(_this.feedbackResponsesService.updateFeedbackResponse(recipientSubmissionFormModel.responseId, {
                        intent: _this.intent,
                        key: _this.regKey,
                        moderatedperson: _this.moderatedPerson,
                    }, {
                        recipientIdentifier: recipientSubmissionFormModel.recipientIdentifier,
                        questionType: questionSubmissionFormModel.questionType,
                        responseDetails: recipientSubmissionFormModel.responseDetails,
                    }).pipe(tap(function (resp) {
                        recipientSubmissionFormModel.responseId = resp.feedbackResponseId;
                        recipientSubmissionFormModel.responseDetails = resp.responseDetails;
                        recipientSubmissionFormModel.recipientIdentifier = resp.recipientIdentifier;
                    }), catchError(function (error) {
                        _this.statusMessageService.showErrorMessage(error.error.message);
                        failToSaveQuestions.add(questionSubmissionFormModel.questionNumber);
                        return of(error);
                    })));
                }
                if (recipientSubmissionFormModel.responseId === '' && !isFeedbackResponseDetailsEmpty) {
                    // new response and the details is not empty -> create response
                    savingRequests.push(_this.feedbackResponsesService.createFeedbackResponse(questionSubmissionFormModel.feedbackQuestionId, {
                        intent: _this.intent,
                        key: _this.regKey,
                        moderatedperson: _this.moderatedPerson,
                    }, {
                        recipientIdentifier: recipientSubmissionFormModel.recipientIdentifier,
                        questionType: questionSubmissionFormModel.questionType,
                        responseDetails: recipientSubmissionFormModel.responseDetails,
                    }).pipe(tap(function (resp) {
                        recipientSubmissionFormModel.responseId = resp.feedbackResponseId;
                        recipientSubmissionFormModel.responseDetails = resp.responseDetails;
                        recipientSubmissionFormModel.recipientIdentifier = resp.recipientIdentifier;
                    }), catchError(function (error) {
                        _this.statusMessageService.showErrorMessage(error.error.message);
                        failToSaveQuestions.add(questionSubmissionFormModel.questionNumber);
                        return of(error);
                    })));
                }
            });
            if (!isQuestionFullyAnswered) {
                notYetAnsweredQuestions.add(questionSubmissionFormModel.questionNumber);
            }
        });
        this.isSavingResponses = true;
        var hasSubmissionConfirmationError = false;
        forkJoin(savingRequests).pipe(switchMap(function () {
            if (failToSaveQuestions.size === 0) {
                _this.statusMessageService.showSuccessMessage('All responses submitted successfully!');
            }
            else {
                _this.statusMessageService.showErrorMessage('Some responses are not saved successfully');
            }
            if (notYetAnsweredQuestions.size !== 0) {
                // TODO use showInfoMessage
                _this.statusMessageService.showSuccessMessage("Note that some questions are yet to be answered. They are:\n                " + Array.from(notYetAnsweredQuestions.values()) + ".");
            }
            return _this.httpRequestService.post('/submission/confirmation', {
                courseid: _this.courseId,
                fsname: _this.feedbackSessionName,
                sendsubmissionemail: String(_this.shouldSendConfirmationEmail),
                intent: _this.intent,
                key: _this.regKey,
                moderatedperson: _this.moderatedPerson,
            });
        })).pipe(finalize(function () {
            _this.isSavingResponses = false;
            var modalRef = _this.modalService.open(SavingCompleteModalComponent);
            modalRef.componentInstance.notYetAnsweredQuestions = Array.from(notYetAnsweredQuestions.values()).join(', ');
            modalRef.componentInstance.failToSaveQuestions = Array.from(failToSaveQuestions.values()).join(', ');
            modalRef.componentInstance.hasSubmissionConfirmationError = hasSubmissionConfirmationError;
        })).subscribe(function (response) {
            switch (response.result) {
                case ConfirmationResult.SUCCESS:
                    break;
                case ConfirmationResult.SUCCESS_BUT_EMAIL_FAIL_TO_SEND:
                    _this.statusMessageService.showErrorMessage("Submission confirmation email failed to send: " + response.message);
                    break;
                default:
                    _this.statusMessageService.showErrorMessage("Unknown result " + response.result);
            }
            hasSubmissionConfirmationError = false;
            _this.shouldSendConfirmationEmail = false;
        }, function (resp) {
            hasSubmissionConfirmationError = true;
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    SessionSubmissionPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-session-submission-page',
            templateUrl: './session-submission-page.component.html',
            styleUrls: ['./session-submission-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, StatusMessageService,
            HttpRequestService, TimezoneService,
            FeedbackResponsesService, NgbModal])
    ], SessionSubmissionPageComponent);
    return SessionSubmissionPageComponent;
}());
export { SessionSubmissionPageComponent };
//# sourceMappingURL=session-submission-page.component.js.map