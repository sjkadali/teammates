import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_NUMSCALE_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditDetailsFormComponent } from './question-edit-details-form.component';
/**
 * Question details edit form component for numerical scale question.
 */
var NumScaleQuestionEditDetailsFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumScaleQuestionEditDetailsFormComponent, _super);
    function NumScaleQuestionEditDetailsFormComponent() {
        return _super.call(this, DEFAULT_NUMSCALE_QUESTION_DETAILS()) || this;
    }
    Object.defineProperty(NumScaleQuestionEditDetailsFormComponent.prototype, "maxScaleValue", {
        get: function () {
            if (this.model.maxScale <= this.model.minScale) {
                this.model.maxScale = this.model.minScale + this.model.step;
            }
            return this.model.maxScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumScaleQuestionEditDetailsFormComponent.prototype, "isIntervalDivisible", {
        get: function () {
            if (this.model.step <= 0) {
                return false;
            }
            var largestValueInRange = this.model.minScale + (this.numberOfPossibleValues - 1) * this.model.step;
            return largestValueInRange === this.model.maxScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumScaleQuestionEditDetailsFormComponent.prototype, "numberOfPossibleValues", {
        get: function () {
            var minValue = this.model.minScale;
            var maxValue = this.model.maxScale;
            var increment = this.model.step;
            var num = (maxValue - minValue) / increment + 1;
            return Math.floor(parseFloat(num.toFixed(3)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumScaleQuestionEditDetailsFormComponent.prototype, "possibleValues", {
        get: function () {
            if (this.numberOfPossibleValues > 6) {
                return "[" + this.model.minScale + ",\n           " + (Math.round((this.model.minScale + this.model.step) * 1000) / 1000).toString() + ",\n           " + (Math.round((this.model.minScale + 2 * this.model.step) * 1000) / 1000).toString() + ", ...,\n           " + (Math.round((this.model.maxScale - 2 * this.model.step) * 1000) / 1000).toString() + ",\n           " + (Math.round((this.model.maxScale - this.model.step) * 1000) / 1000).toString() + ",\n           " + this.model.maxScale + "]";
            }
            var possibleValuesString = "[" + this.model.minScale.toString();
            var currentValue = this.model.minScale + this.model.step;
            while (this.model.maxScale - currentValue >= -1e-9) {
                possibleValuesString += ", " + (Math.round(currentValue * 1000) / 1000).toString();
                currentValue += this.model.step;
            }
            return possibleValuesString + "]";
        },
        enumerable: true,
        configurable: true
    });
    NumScaleQuestionEditDetailsFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-num-scale-question-edit-details-form',
            templateUrl: './num-scale-question-edit-details-form.component.html',
            styleUrls: ['./num-scale-question-edit-details-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NumScaleQuestionEditDetailsFormComponent);
    return NumScaleQuestionEditDetailsFormComponent;
}(QuestionEditDetailsFormComponent));
export { NumScaleQuestionEditDetailsFormComponent };
//# sourceMappingURL=num-scale-question-edit-details-form.component.js.map