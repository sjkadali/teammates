import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackQuestionsService } from '../../../../services/feedback-questions.service';
/**
 * Template question adding modal.
 */
var TemplateQuestionModalComponent = /** @class */ (function () {
    function TemplateQuestionModalComponent(activeModal, feedbackQuestionsService) {
        this.activeModal = activeModal;
        this.feedbackQuestionsService = feedbackQuestionsService;
        this.templateQuestionModels = [];
        this.templateQuestionModels = this.feedbackQuestionsService.getTemplateQuestions()
            .map(function (template) { return ({
            description: template.description,
            isShowDetails: false,
            isSelected: false,
            model: {
                feedbackQuestionId: '',
                questionNumber: template.question.questionNumber,
                questionBrief: template.question.questionBrief,
                questionDescription: template.question.questionDescription,
                isQuestionHasResponses: false,
                questionType: template.question.questionType,
                questionDetails: template.question.questionDetails,
                giverType: template.question.giverType,
                recipientType: template.question.recipientType,
                numberOfEntitiesToGiveFeedbackToSetting: template.question.numberOfEntitiesToGiveFeedbackToSetting,
                customNumberOfEntitiesToGiveFeedbackTo: template.question.customNumberOfEntitiesToGiveFeedbackTo || 1,
                showResponsesTo: template.question.showResponsesTo,
                showGiverNameTo: template.question.showGiverNameTo,
                showRecipientNameTo: template.question.showRecipientNameTo,
                isEditable: false,
                isSaving: false,
            },
        }); });
    }
    TemplateQuestionModalComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TemplateQuestionModalComponent.prototype, "hasAnyTemplateQuestionSelected", {
        get: function () {
            return this.templateQuestionModels.some(function (model) { return model.isSelected; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the selected questions.
     */
    TemplateQuestionModalComponent.prototype.getSelectedQuestions = function () {
        return this.templateQuestionModels
            .filter(function (model) { return model.isSelected; })
            .map(function (model) { return model.model; })
            .map(function (model) { return ({
            feedbackQuestionId: '',
            questionNumber: 0,
            questionBrief: model.questionBrief,
            questionDescription: model.questionDescription,
            questionType: model.questionType,
            questionDetails: model.questionDetails,
            giverType: model.giverType,
            recipientType: model.recipientType,
            numberOfEntitiesToGiveFeedbackToSetting: model.numberOfEntitiesToGiveFeedbackToSetting,
            customNumberOfEntitiesToGiveFeedbackTo: model.customNumberOfEntitiesToGiveFeedbackTo,
            showResponsesTo: model.showResponsesTo,
            showGiverNameTo: model.showGiverNameTo,
            showRecipientNameTo: model.showRecipientNameTo,
        }); });
    };
    TemplateQuestionModalComponent = tslib_1.__decorate([
        Component({
            templateUrl: './template-question-modal.component.html',
            styleUrls: ['./template-question-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal, FeedbackQuestionsService])
    ], TemplateQuestionModalComponent);
    return TemplateQuestionModalComponent;
}());
export { TemplateQuestionModalComponent };
//# sourceMappingURL=template-question-modal.component.js.map