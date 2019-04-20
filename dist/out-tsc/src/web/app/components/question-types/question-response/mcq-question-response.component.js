import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_MCQ_QUESTION_DETAILS, DEFAULT_MCQ_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';
/**
 * MCQ question response.
 */
var McqQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(McqQuestionResponseComponent, _super);
    function McqQuestionResponseComponent() {
        return _super.call(this, DEFAULT_MCQ_RESPONSE_DETAILS(), DEFAULT_MCQ_QUESTION_DETAILS()) || this;
    }
    McqQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-mcq-question-response',
            templateUrl: './mcq-question-response.component.html',
            styleUrls: ['./mcq-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], McqQuestionResponseComponent);
    return McqQuestionResponseComponent;
}(QuestionResponse));
export { McqQuestionResponseComponent };
//# sourceMappingURL=mcq-question-response.component.js.map