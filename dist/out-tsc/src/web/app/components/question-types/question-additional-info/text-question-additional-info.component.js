import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_TEXT_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for text questions.
 */
var TextQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextQuestionAdditionalInfoComponent, _super);
    function TextQuestionAdditionalInfoComponent() {
        return _super.call(this, DEFAULT_TEXT_QUESTION_DETAILS()) || this;
    }
    TextQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-text-question-additional-info',
            templateUrl: './text-question-additional-info.component.html',
            styleUrls: ['./text-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TextQuestionAdditionalInfoComponent);
    return TextQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { TextQuestionAdditionalInfoComponent };
//# sourceMappingURL=text-question-additional-info.component.js.map