import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_TEXT_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditDetailsFormComponent } from './question-edit-details-form.component';
/**
 * Question details edit form component for text question.
 */
var TextQuestionEditDetailsFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextQuestionEditDetailsFormComponent, _super);
    function TextQuestionEditDetailsFormComponent() {
        return _super.call(this, DEFAULT_TEXT_QUESTION_DETAILS()) || this;
    }
    TextQuestionEditDetailsFormComponent.prototype.ngOnInit = function () {
    };
    TextQuestionEditDetailsFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-text-question-edit-details-form',
            templateUrl: './text-question-edit-details-form.component.html',
            styleUrls: ['./text-question-edit-details-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TextQuestionEditDetailsFormComponent);
    return TextQuestionEditDetailsFormComponent;
}(QuestionEditDetailsFormComponent));
export { TextQuestionEditDetailsFormComponent };
//# sourceMappingURL=text-question-edit-details-form.component.js.map