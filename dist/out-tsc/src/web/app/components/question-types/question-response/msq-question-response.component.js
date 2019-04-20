import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_MSQ_QUESTION_DETAILS, DEFAULT_MSQ_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';
/**
 * MSQ question response.
 */
var MsqQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MsqQuestionResponseComponent, _super);
    function MsqQuestionResponseComponent() {
        return _super.call(this, DEFAULT_MSQ_RESPONSE_DETAILS(), DEFAULT_MSQ_QUESTION_DETAILS()) || this;
    }
    MsqQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-msq-question-response',
            templateUrl: './msq-question-response.component.html',
            styleUrls: ['./msq-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MsqQuestionResponseComponent);
    return MsqQuestionResponseComponent;
}(QuestionResponse));
export { MsqQuestionResponseComponent };
//# sourceMappingURL=msq-question-response.component.js.map