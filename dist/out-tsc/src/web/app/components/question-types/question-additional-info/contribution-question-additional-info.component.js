import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_CONTRIBUTION_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for contribution questions.
 */
var ContributionQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContributionQuestionAdditionalInfoComponent, _super);
    function ContributionQuestionAdditionalInfoComponent() {
        return _super.call(this, DEFAULT_CONTRIBUTION_QUESTION_DETAILS()) || this;
    }
    ContributionQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-contribution-question-additional-info',
            templateUrl: './contribution-question-additional-info.component.html',
            styleUrls: ['./contribution-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ContributionQuestionAdditionalInfoComponent);
    return ContributionQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { ContributionQuestionAdditionalInfoComponent };
//# sourceMappingURL=contribution-question-additional-info.component.js.map