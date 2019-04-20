import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_RUBRIC_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for rubric questions.
 */
var RubricQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RubricQuestionAdditionalInfoComponent, _super);
    function RubricQuestionAdditionalInfoComponent() {
        return _super.call(this, DEFAULT_RUBRIC_QUESTION_DETAILS()) || this;
    }
    RubricQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rubric-question-additional-info',
            templateUrl: './rubric-question-additional-info.component.html',
            styleUrls: ['./rubric-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RubricQuestionAdditionalInfoComponent);
    return RubricQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { RubricQuestionAdditionalInfoComponent };
//# sourceMappingURL=rubric-question-additional-info.component.js.map