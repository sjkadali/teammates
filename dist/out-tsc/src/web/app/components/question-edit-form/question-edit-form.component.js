import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackQuestionsService } from '../../../services/feedback-questions.service';
import { FeedbackParticipantType, FeedbackQuestionType, FeedbackVisibilityType, NumberOfEntitiesToGiveFeedbackToSetting, } from '../../../types/api-output';
import { VisibilityControl } from '../../../types/visibility-control';
import { QuestionEditFormMode } from './question-edit-form-model';
/**
 * The question edit form component.
 */
var QuestionEditFormComponent = /** @class */ (function () {
    function QuestionEditFormComponent(feedbackQuestionsService, modalService) {
        this.feedbackQuestionsService = feedbackQuestionsService;
        this.modalService = modalService;
        // enum
        this.FeedbackQuestionType = FeedbackQuestionType;
        this.QuestionEditFormMode = QuestionEditFormMode;
        this.FeedbackParticipantType = FeedbackParticipantType;
        this.NumberOfEntitiesToGiveFeedbackToSetting = NumberOfEntitiesToGiveFeedbackToSetting;
        this.VisibilityControl = VisibilityControl;
        this.FeedbackVisibilityType = FeedbackVisibilityType;
        this.numOfQuestions = 0;
        this.formMode = QuestionEditFormMode.EDIT;
        // if true, the question edit form is used for displaying of the question edit form only
        // no editing function will be available; the edit button will be hidden
        this.isDisplayOnly = false;
        this.model = {
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
            commonVisibilitySettingName: '',
            isUsingOtherFeedbackPath: false,
            isUsingOtherVisibilitySetting: false,
            isEditable: false,
            isSaving: false,
        };
        this.formModelChange = new EventEmitter();
        this.saveExistingQuestionEvent = new EventEmitter();
        this.deleteCurrentQuestionEvent = new EventEmitter();
        this.duplicateCurrentQuestionEvent = new EventEmitter();
        this.discardExistingQuestionChangesEvent = new EventEmitter();
        this.discardNewQuestionEvent = new EventEmitter();
        this.createNewQuestionEvent = new EventEmitter();
        this.commonFeedbackPaths = new Map();
        this.allowedFeedbackPaths = new Map();
        this.commonFeedbackVisibilitySettings = [];
        this.visibilityStateMachine =
            this.feedbackQuestionsService.getNewVisibilityStateMachine(this.model.giverType, this.model.recipientType);
    }
    Object.defineProperty(QuestionEditFormComponent.prototype, "formModel", {
        set: function (model) {
            this.model = model;
            this.commonFeedbackPaths = this.feedbackQuestionsService.getCommonFeedbackPaths(model.questionType);
            this.allowedFeedbackPaths = this.feedbackQuestionsService.getAllowedFeedbackPaths(model.questionType);
            this.visibilityStateMachine =
                this.feedbackQuestionsService.getNewVisibilityStateMachine(model.giverType, model.recipientType);
            this.commonFeedbackVisibilitySettings =
                this.feedbackQuestionsService.getCommonFeedbackVisibilitySettings(this.visibilityStateMachine, model.questionType);
            var visibilitySetting = {
                SHOW_RESPONSE: model.showResponsesTo,
                SHOW_GIVER_NAME: model.showGiverNameTo,
                SHOW_RECIPIENT_NAME: model.showRecipientNameTo,
            };
            this.visibilityStateMachine.applyVisibilitySettings(visibilitySetting);
            if (!model.isUsingOtherFeedbackPath) {
                // find if the feedback path is in the common feedback paths
                this.model.isUsingOtherFeedbackPath = true;
                if (this.commonFeedbackPaths.has(model.giverType) &&
                    // tslint:disable-next-line:no-non-null-assertion
                    this.commonFeedbackPaths.get(model.giverType).includes(model.recipientType)) {
                    this.model.isUsingOtherFeedbackPath = false;
                }
            }
            if (!model.commonVisibilitySettingName && !model.isUsingOtherVisibilitySetting) {
                // find if the visibility settings is in the common visibility settings
                this.model.isUsingOtherVisibilitySetting = true;
                for (var _i = 0, _a = this.commonFeedbackVisibilitySettings; _i < _a.length; _i++) {
                    var commonVisibilityOption = _a[_i];
                    if (this.isSameSet(visibilitySetting.SHOW_RESPONSE, commonVisibilityOption.visibilitySettings.SHOW_RESPONSE)
                        && this.isSameSet(visibilitySetting.SHOW_GIVER_NAME, commonVisibilityOption.visibilitySettings.SHOW_GIVER_NAME)
                        && this.isSameSet(visibilitySetting.SHOW_RECIPIENT_NAME, commonVisibilityOption.visibilitySettings.SHOW_RECIPIENT_NAME)) {
                        this.model.commonVisibilitySettingName = commonVisibilityOption.name;
                        this.model.isUsingOtherVisibilitySetting = false;
                        break;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionEditFormComponent.prototype, "isCustomFeedbackVisibilitySettingAllowed", {
        /**
         * Returns whether setting the custom feedback visibility is allowed.
         */
        get: function () {
            return this.feedbackQuestionsService.isCustomFeedbackVisibilitySettingAllowed(this.model.questionType);
        },
        enumerable: true,
        configurable: true
    });
    QuestionEditFormComponent.prototype.isSameSet = function (setA, setB) {
        return setA.length === setB.length && setA.every(function (ele) { return setB.includes(ele); });
    };
    QuestionEditFormComponent.prototype.ngOnInit = function () { };
    /**
     * Triggers the change of the model for the form.
     */
    QuestionEditFormComponent.prototype.triggerModelChange = function (field, data) {
        var _a;
        this.formModelChange.emit(tslib_1.__assign({}, this.model, (_a = {}, _a[field] = data, _a)));
    };
    /**
     * Triggers the change of the model for the form.
     */
    QuestionEditFormComponent.prototype.triggerModelChangeBatch = function (obj) {
        this.formModelChange.emit(tslib_1.__assign({}, this.model, obj));
    };
    /**
     * Change the {@code giverType} and {@code recipientType} and reset the visibility settings.
     */
    QuestionEditFormComponent.prototype.changeGiverRecipientType = function (giverType, recipientType) {
        this.triggerModelChangeBatch({
            giverType: giverType,
            recipientType: recipientType,
            commonVisibilitySettingName: 'Please select a visibility option',
            isUsingOtherVisibilitySetting: false,
            showResponsesTo: [],
            showGiverNameTo: [],
            showRecipientNameTo: [],
        });
    };
    /**
     * Applies the common visibility setting.
     */
    QuestionEditFormComponent.prototype.applyCommonVisibilitySettings = function (commonSettings) {
        this.triggerModelChangeBatch({
            showResponsesTo: commonSettings.visibilitySettings.SHOW_RESPONSE,
            showGiverNameTo: commonSettings.visibilitySettings.SHOW_GIVER_NAME,
            showRecipientNameTo: commonSettings.visibilitySettings.SHOW_RECIPIENT_NAME,
            commonVisibilitySettingName: commonSettings.name,
            isUsingOtherVisibilitySetting: false,
        });
    };
    /**
     * Modifies visibility control of visibility type based on {@code isAllowed}.
     */
    QuestionEditFormComponent.prototype.modifyVisibilityControl = function (isAllowed, visibilityType, visibilityControl) {
        if (isAllowed) {
            this.visibilityStateMachine.allowToSee(visibilityType, visibilityControl);
        }
        else {
            this.visibilityStateMachine.disallowToSee(visibilityType, visibilityControl);
        }
        this.triggerModelChangeBatch({
            showResponsesTo: this.visibilityStateMachine.getVisibilityTypesUnderVisibilityControl(VisibilityControl.SHOW_RESPONSE),
            showGiverNameTo: this.visibilityStateMachine.getVisibilityTypesUnderVisibilityControl(VisibilityControl.SHOW_GIVER_NAME),
            showRecipientNameTo: this.visibilityStateMachine.getVisibilityTypesUnderVisibilityControl(VisibilityControl.SHOW_RECIPIENT_NAME),
        });
    };
    /**
     * Helper methods to create a range.
     */
    QuestionEditFormComponent.prototype.range = function (num) {
        var ranges = [];
        for (var i = 0; i < num; i += 1) {
            ranges.push(i);
        }
        return ranges;
    };
    /**
     * Handle event to discard changes users made.
     */
    QuestionEditFormComponent.prototype.discardChangesHandler = function (modal) {
        var _this = this;
        this.modalService.open(modal).result.then(function () {
            if (_this.formMode === QuestionEditFormMode.EDIT) {
                _this.discardExistingQuestionChangesEvent.emit();
            }
            if (_this.formMode === QuestionEditFormMode.ADD) {
                _this.discardNewQuestionEvent.emit();
            }
        }, function () { });
    };
    /**
     * Saves the question.
     */
    QuestionEditFormComponent.prototype.saveQuestionHandler = function (modal) {
        var _this = this;
        if (this.formMode === QuestionEditFormMode.EDIT) {
            // alert user that editing question may result in deletion of responses
            if (this.model.isQuestionHasResponses) {
                this.modalService.open(modal).result.then(function () {
                    _this.saveExistingQuestionEvent.emit();
                }, function () { });
            }
            else {
                this.saveExistingQuestionEvent.emit();
            }
        }
        if (this.formMode === QuestionEditFormMode.ADD) {
            this.createNewQuestionEvent.emit();
        }
    };
    /**
     * Handles event for duplicating the current question.
     */
    QuestionEditFormComponent.prototype.duplicateCurrentQuestionHandler = function () {
        this.duplicateCurrentQuestionEvent.emit();
    };
    /**
     * Handles event for deleting the current question.
     */
    QuestionEditFormComponent.prototype.deleteCurrentQuestionHandler = function (modal) {
        var _this = this;
        this.modalService.open(modal).result.then(function () {
            _this.deleteCurrentQuestionEvent.emit();
        }, function () { });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], QuestionEditFormComponent.prototype, "formModel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], QuestionEditFormComponent.prototype, "numOfQuestions", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], QuestionEditFormComponent.prototype, "formMode", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], QuestionEditFormComponent.prototype, "isDisplayOnly", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditFormComponent.prototype, "formModelChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditFormComponent.prototype, "saveExistingQuestionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditFormComponent.prototype, "deleteCurrentQuestionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditFormComponent.prototype, "duplicateCurrentQuestionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditFormComponent.prototype, "discardExistingQuestionChangesEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditFormComponent.prototype, "discardNewQuestionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditFormComponent.prototype, "createNewQuestionEvent", void 0);
    QuestionEditFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-question-edit-form',
            templateUrl: './question-edit-form.component.html',
            styleUrls: ['./question-edit-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FeedbackQuestionsService, NgbModal])
    ], QuestionEditFormComponent);
    return QuestionEditFormComponent;
}());
export { QuestionEditFormComponent };
//# sourceMappingURL=question-edit-form.component.js.map