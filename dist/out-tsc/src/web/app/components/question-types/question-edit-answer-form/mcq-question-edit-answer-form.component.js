import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DEFAULT_MCQ_QUESTION_DETAILS, DEFAULT_MCQ_RESPONSE_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditAnswerFormComponent } from './question-edit-answer-form';
/**
 * The Mcq question submission form for a recipient.
 */
var McqQuestionEditAnswerFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(McqQuestionEditAnswerFormComponent, _super);
    function McqQuestionEditAnswerFormComponent() {
        var _this = _super.call(this, DEFAULT_MCQ_QUESTION_DETAILS(), DEFAULT_MCQ_RESPONSE_DETAILS()) || this;
        _this.id = '';
        _this.isMcqOptionSelected = Array(_this.questionDetails.numOfMcqChoices).fill(false);
        _this.indexOfPreviousOptionSelected = 0;
        return _this;
    }
    McqQuestionEditAnswerFormComponent.prototype.ngOnInit = function () {
        if (this.responseDetails.answer !== '' && !this.responseDetails.isOther) {
            var indexOfAnswerInPreviousSubmission = this.questionDetails.mcqChoices.indexOf(this.responseDetails.answer);
            this.isMcqOptionSelected[indexOfAnswerInPreviousSubmission] = true;
            this.indexOfPreviousOptionSelected = indexOfAnswerInPreviousSubmission;
        }
    };
    /**
     * Updates the other option radio box when clicked.
     */
    McqQuestionEditAnswerFormComponent.prototype.updateIsOtherOption = function () {
        this.responseDetails.isOther = !this.responseDetails.isOther;
        this.isMcqOptionSelected[this.indexOfPreviousOptionSelected] = false;
        if (!this.responseDetails.isOther) {
            this.responseDetails.otherFieldContent = '';
        }
        else {
            this.responseDetails.answer = '';
        }
    };
    /**
     * Updates the other field content.
     */
    McqQuestionEditAnswerFormComponent.prototype.updateOtherOptionText = function (otherOptionText) {
        this.responseDetails.otherFieldContent = otherOptionText;
    };
    /**
     * Updates the answer to the Mcq option specified by the index.
     */
    McqQuestionEditAnswerFormComponent.prototype.updateSelectedMcqOption = function (index) {
        this.responseDetails.isOther = false;
        this.responseDetails.otherFieldContent = '';
        this.isMcqOptionSelected[this.indexOfPreviousOptionSelected] = false;
        this.isMcqOptionSelected[index] = true;
        this.indexOfPreviousOptionSelected = index;
        this.responseDetails.answer = this.questionDetails.mcqChoices[index];
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], McqQuestionEditAnswerFormComponent.prototype, "id", void 0);
    McqQuestionEditAnswerFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-mcq-question-edit-answer-form',
            templateUrl: './mcq-question-edit-answer-form.component.html',
            styleUrls: ['./mcq-question-edit-answer-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], McqQuestionEditAnswerFormComponent);
    return McqQuestionEditAnswerFormComponent;
}(QuestionEditAnswerFormComponent));
export { McqQuestionEditAnswerFormComponent };
//# sourceMappingURL=mcq-question-edit-answer-form.component.js.map