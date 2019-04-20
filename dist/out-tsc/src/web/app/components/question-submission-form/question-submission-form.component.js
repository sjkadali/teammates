import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeedbackQuestionsService } from '../../../services/feedback-questions.service';
import { FeedbackParticipantType, FeedbackQuestionType, FeedbackVisibilityType, NumberOfEntitiesToGiveFeedbackToSetting, } from '../../../types/api-output';
import { QuestionSubmissionFormMode, } from './question-submission-form-model';
/**
 * The question submission form for a question.
 */
var QuestionSubmissionFormComponent = /** @class */ (function () {
    function QuestionSubmissionFormComponent(feedbackQuestionsService) {
        this.feedbackQuestionsService = feedbackQuestionsService;
        // enum
        this.QuestionSubmissionFormMode = QuestionSubmissionFormMode;
        this.FeedbackQuestionType = FeedbackQuestionType;
        this.FeedbackParticipantType = FeedbackParticipantType;
        this.FeedbackVisibilityType = FeedbackVisibilityType;
        this.formMode = QuestionSubmissionFormMode.FIXED_RECIPIENT;
        this.isDisabled = false;
        this.formModelChange = new EventEmitter();
        this.model = {
            feedbackQuestionId: '',
            questionNumber: 0,
            questionBrief: '',
            questionDescription: '',
            giverType: FeedbackParticipantType.STUDENTS,
            recipientType: FeedbackParticipantType.STUDENTS,
            recipientList: [],
            recipientSubmissionForms: [],
            questionType: FeedbackQuestionType.TEXT,
            questionDetails: {
                recommendedLength: 0,
                questionText: '',
                questionType: FeedbackQuestionType.TEXT,
            },
            numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
            customNumberOfEntitiesToGiveFeedbackTo: 0,
            showGiverNameTo: [],
            showRecipientNameTo: [],
            showResponsesTo: [],
        };
        this.visibilityStateMachine =
            this.feedbackQuestionsService.getNewVisibilityStateMachine(this.model.giverType, this.model.recipientType);
    }
    Object.defineProperty(QuestionSubmissionFormComponent.prototype, "formModel", {
        set: function (model) {
            this.model = model;
            this.visibilityStateMachine =
                this.feedbackQuestionsService.getNewVisibilityStateMachine(model.giverType, model.recipientType);
            var visibilitySetting = {
                SHOW_RESPONSE: model.showResponsesTo,
                SHOW_GIVER_NAME: model.showGiverNameTo,
                SHOW_RECIPIENT_NAME: model.showRecipientNameTo,
            };
            this.visibilityStateMachine.applyVisibilitySettings(visibilitySetting);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSubmissionFormComponent.prototype.ngOnInit = function () {
    };
    /**
     * Tracks submission form for each recipient by the index in the array.
     *
     * @see https://angular.io/api/common/NgForOf#properties
     */
    QuestionSubmissionFormComponent.prototype.trackRecipientSubmissionFormByFn = function (index) {
        return index;
    };
    /**
     * Gets recipient name in {@code FIXED_RECIPIENT} mode.
     */
    QuestionSubmissionFormComponent.prototype.getRecipientName = function (recipientIdentifier) {
        var recipient = this.model.recipientList.find(function (r) { return r.recipientIdentifier === recipientIdentifier; });
        return recipient ? recipient.recipientName : 'Unknown';
    };
    /**
     * Checks whether the recipient is already selected in {@code FLEXIBLE_RECIPIENT} mode.
     */
    QuestionSubmissionFormComponent.prototype.isRecipientSelected = function (recipient) {
        return this.model.recipientSubmissionForms.some(function (recipientSubmissionFormModel) {
            return recipientSubmissionFormModel.recipientIdentifier === recipient.recipientIdentifier;
        });
    };
    /**
     * Triggers the change of the recipient submission form.
     */
    QuestionSubmissionFormComponent.prototype.triggerRecipientSubmissionFormChange = function (index, field, data) {
        var _a;
        var recipientSubmissionForms = this.model.recipientSubmissionForms.slice();
        recipientSubmissionForms[index] = tslib_1.__assign({}, recipientSubmissionForms[index], (_a = {}, _a[field] = data, _a));
        this.formModelChange.emit(tslib_1.__assign({}, this.model, { recipientSubmissionForms: recipientSubmissionForms }));
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], QuestionSubmissionFormComponent.prototype, "formMode", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], QuestionSubmissionFormComponent.prototype, "isDisabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], QuestionSubmissionFormComponent.prototype, "formModel", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionSubmissionFormComponent.prototype, "formModelChange", void 0);
    QuestionSubmissionFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-question-submission-form',
            templateUrl: './question-submission-form.component.html',
            styleUrls: ['./question-submission-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FeedbackQuestionsService])
    ], QuestionSubmissionFormComponent);
    return QuestionSubmissionFormComponent;
}());
export { QuestionSubmissionFormComponent };
//# sourceMappingURL=question-submission-form.component.js.map