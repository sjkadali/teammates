import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_MSQ_QUESTION_DETAILS, DEFAULT_MSQ_RESPONSE_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditAnswerFormComponent } from './question-edit-answer-form';
var NONE_OF_THE_ABOVE = 'None of the above';
/**
 * The Msq question submission form for a recipient.
 */
var MsqQuestionEditAnswerFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MsqQuestionEditAnswerFormComponent, _super);
    function MsqQuestionEditAnswerFormComponent() {
        var _this = _super.call(this, DEFAULT_MSQ_QUESTION_DETAILS(), DEFAULT_MSQ_RESPONSE_DETAILS()) || this;
        _this.isMsqOptionSelected = Array(_this.questionDetails.msqChoices.length).fill(false);
        return _this;
    }
    MsqQuestionEditAnswerFormComponent.prototype.ngOnInit = function () {
        if (this.responseDetails.answers[0] !== NONE_OF_THE_ABOVE) {
            for (var i = 0; i < this.questionDetails.msqChoices.length; i += 1) {
                var indexOfElementInAnswerArray = this.responseDetails.answers.indexOf(this.questionDetails.msqChoices[i]);
                if (indexOfElementInAnswerArray > -1) {
                    this.isMsqOptionSelected[i] = true;
                }
            }
        }
    };
    /**
     * Checks if None of the above option is enabled and disables it.
     */
    MsqQuestionEditAnswerFormComponent.prototype.disableNoneOfTheAboveOption = function () {
        if (this.isNoneOfTheAboveEnabled) {
            this.responseDetails.answers.splice(0, 1);
        }
    };
    /**
     * Updates the answers to include/exclude the Msq option specified by the index.
     */
    MsqQuestionEditAnswerFormComponent.prototype.updateSelectedAnswers = function (index) {
        this.isMsqOptionSelected[index] = !this.isMsqOptionSelected[index];
        this.disableNoneOfTheAboveOption();
        if (this.isMsqOptionSelected[index]) {
            this.responseDetails.answers.push(this.questionDetails.msqChoices[index]);
        }
        else {
            var indexInResponseArray = this.responseDetails.answers.indexOf(this.questionDetails.msqChoices[index]);
            this.responseDetails.answers.splice(indexInResponseArray, 1);
        }
    };
    /**
     * Updates the other option checkbox when clicked.
     */
    MsqQuestionEditAnswerFormComponent.prototype.updateIsOtherOption = function () {
        this.disableNoneOfTheAboveOption();
        this.responseDetails.isOther = !this.responseDetails.isOther;
        if (!this.responseDetails.isOther) {
            this.responseDetails.otherFieldContent = '';
        }
    };
    /**
     * Updates the other field content.
     */
    MsqQuestionEditAnswerFormComponent.prototype.updateOtherOptionText = function (otherOptionText) {
        this.responseDetails.otherFieldContent = otherOptionText;
    };
    Object.defineProperty(MsqQuestionEditAnswerFormComponent.prototype, "isNoneOfTheAboveEnabled", {
        /**
         * Checks if None of the above checkbox is enabled.
         */
        get: function () {
            return this.responseDetails.answers[0] === NONE_OF_THE_ABOVE;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates answers if None of the Above option is selected.
     */
    MsqQuestionEditAnswerFormComponent.prototype.updateNoneOfTheAbove = function () {
        if (this.isNoneOfTheAboveEnabled) {
            this.responseDetails.answers.splice(0, 1);
        }
        else {
            this.isMsqOptionSelected = Array(this.questionDetails.msqChoices.length).fill(false);
            this.responseDetails.answers = [];
            this.responseDetails.isOther = false;
            this.responseDetails.otherFieldContent = '';
            this.responseDetails.answers[0] = NONE_OF_THE_ABOVE;
        }
    };
    MsqQuestionEditAnswerFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-msq-question-edit-answer-form',
            templateUrl: './msq-question-edit-answer-form.component.html',
            styleUrls: ['./msq-question-edit-answer-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MsqQuestionEditAnswerFormComponent);
    return MsqQuestionEditAnswerFormComponent;
}(QuestionEditAnswerFormComponent));
export { MsqQuestionEditAnswerFormComponent };
//# sourceMappingURL=msq-question-edit-answer-form.component.js.map