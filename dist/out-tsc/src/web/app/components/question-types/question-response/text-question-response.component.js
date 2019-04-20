import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_TEXT_QUESTION_DETAILS, DEFAULT_TEXT_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';
/**
 * Text question response.
 */
var TextQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextQuestionResponseComponent, _super);
    function TextQuestionResponseComponent() {
        return _super.call(this, DEFAULT_TEXT_RESPONSE_DETAILS(), DEFAULT_TEXT_QUESTION_DETAILS()) || this;
    }
    TextQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-text-question-response',
            templateUrl: './text-question-response.component.html',
            styleUrls: ['./text-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TextQuestionResponseComponent);
    return TextQuestionResponseComponent;
}(QuestionResponse));
export { TextQuestionResponseComponent };
//# sourceMappingURL=text-question-response.component.js.map