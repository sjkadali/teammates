import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_NUMSCALE_QUESTION_DETAILS, DEFAULT_NUMSCALE_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { NUMERICAL_SCALE_ANSWER_NOT_SUBMITTED } from '../../../../types/feedback-response-details';
import { QuestionEditAnswerFormComponent } from './question-edit-answer-form';
/**
 * The numerical scale question submission form for a recipient.
 */
var NumScaleQuestionEditAnswerFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumScaleQuestionEditAnswerFormComponent, _super);
    function NumScaleQuestionEditAnswerFormComponent() {
        var _this = _super.call(this, DEFAULT_NUMSCALE_QUESTION_DETAILS(), DEFAULT_NUMSCALE_RESPONSE_DETAILS()) || this;
        _this.NUMERICAL_SCALE_ANSWER_NOT_SUBMITTED = NUMERICAL_SCALE_ANSWER_NOT_SUBMITTED;
        return _this;
    }
    Object.defineProperty(NumScaleQuestionEditAnswerFormComponent.prototype, "numberOfPossibleValues", {
        get: function () {
            var minValue = this.questionDetails.minScale;
            var maxValue = this.questionDetails.maxScale;
            var increment = this.questionDetails.step;
            var num = (maxValue - minValue) / increment + 1;
            return Math.floor(parseFloat(num.toFixed(3)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumScaleQuestionEditAnswerFormComponent.prototype, "possibleValues", {
        get: function () {
            if (this.numberOfPossibleValues > 6) {
                return "[" + this.questionDetails.minScale + ",\n           " + (Math.round((this.questionDetails.minScale + this.questionDetails.step) * 1000) / 1000).toString() + ",\n           " + (Math.round((this.questionDetails.minScale + 2 * this.questionDetails.step) * 1000) / 1000).toString() + ",\n           ...,\n           " + (Math.round((this.questionDetails.maxScale - 2 * this.questionDetails.step) * 1000) / 1000).toString() + ",\n           " + (Math.round((this.questionDetails.maxScale - this.questionDetails.step) * 1000) / 1000).toString() + ",\n           " + this.questionDetails.maxScale + "]";
            }
            var possibleValuesString = "[" + this.questionDetails.minScale.toString();
            var currentValue = this.questionDetails.minScale + this.questionDetails.step;
            while (this.questionDetails.maxScale - currentValue >= -1e-9) {
                possibleValuesString += ", " + (Math.round(currentValue * 1000) / 1000).toString();
                currentValue += this.questionDetails.step;
            }
            return possibleValuesString + "]";
        },
        enumerable: true,
        configurable: true
    });
    NumScaleQuestionEditAnswerFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-num-scale-question-edit-answer-form',
            templateUrl: './num-scale-question-edit-answer-form.component.html',
            styleUrls: ['./num-scale-question-edit-answer-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NumScaleQuestionEditAnswerFormComponent);
    return NumScaleQuestionEditAnswerFormComponent;
}(QuestionEditAnswerFormComponent));
export { NumScaleQuestionEditAnswerFormComponent };
//# sourceMappingURL=num-scale-question-edit-answer-form.component.js.map