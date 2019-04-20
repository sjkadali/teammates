import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_CONSTSUM_QUESTION_DETAILS, DEFAULT_CONSTSUM_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';
/**
 * Constant sum question response.
 */
var ConstsumQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ConstsumQuestionResponseComponent, _super);
    function ConstsumQuestionResponseComponent() {
        var _this = _super.call(this, DEFAULT_CONSTSUM_RESPONSE_DETAILS(), DEFAULT_CONSTSUM_QUESTION_DETAILS()) || this;
        _this.optionToAnswer = {};
        return _this;
    }
    ConstsumQuestionResponseComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.questionDetails.constSumOptions.length; i += 1) {
            this.optionToAnswer[this.questionDetails.constSumOptions[i]] = this.responseDetails.answers[i];
        }
    };
    ConstsumQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-constsum-question-response',
            templateUrl: './constsum-question-response.component.html',
            styleUrls: ['./constsum-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ConstsumQuestionResponseComponent);
    return ConstsumQuestionResponseComponent;
}(QuestionResponse));
export { ConstsumQuestionResponseComponent };
//# sourceMappingURL=constsum-question-response.component.js.map