import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_NUMSCALE_QUESTION_DETAILS, DEFAULT_NUMSCALE_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';
/**
 * Numerical scale question response.
 */
var NumScaleQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NumScaleQuestionResponseComponent, _super);
    function NumScaleQuestionResponseComponent() {
        return _super.call(this, DEFAULT_NUMSCALE_RESPONSE_DETAILS(), DEFAULT_NUMSCALE_QUESTION_DETAILS()) || this;
    }
    NumScaleQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-num-scale-question-response',
            templateUrl: './num-scale-question-response.component.html',
            styleUrls: ['./num-scale-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NumScaleQuestionResponseComponent);
    return NumScaleQuestionResponseComponent;
}(QuestionResponse));
export { NumScaleQuestionResponseComponent };
//# sourceMappingURL=num-scale-question-response.component.js.map