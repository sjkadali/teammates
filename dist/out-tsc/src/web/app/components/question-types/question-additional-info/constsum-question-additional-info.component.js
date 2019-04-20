import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_CONSTSUM_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for constant sum questions.
 */
var ConstsumQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ConstsumQuestionAdditionalInfoComponent, _super);
    function ConstsumQuestionAdditionalInfoComponent() {
        return _super.call(this, DEFAULT_CONSTSUM_QUESTION_DETAILS()) || this;
    }
    ConstsumQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-constsum-question-additional-info',
            templateUrl: './constsum-question-additional-info.component.html',
            styleUrls: ['./constsum-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ConstsumQuestionAdditionalInfoComponent);
    return ConstsumQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { ConstsumQuestionAdditionalInfoComponent };
//# sourceMappingURL=constsum-question-additional-info.component.js.map