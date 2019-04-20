import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_NUMSCALE_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for numerical scale questions.
 */
var NumScaleQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumScaleQuestionAdditionalInfoComponent, _super);
    function NumScaleQuestionAdditionalInfoComponent() {
        return _super.call(this, DEFAULT_NUMSCALE_QUESTION_DETAILS()) || this;
    }
    NumScaleQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-num-scale-question-additional-info',
            templateUrl: './num-scale-question-additional-info.component.html',
            styleUrls: ['./num-scale-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NumScaleQuestionAdditionalInfoComponent);
    return NumScaleQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { NumScaleQuestionAdditionalInfoComponent };
//# sourceMappingURL=num-scale-question-additional-info.component.js.map