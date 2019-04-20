import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_CONTRIBUTION_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditDetailsFormComponent } from './question-edit-details-form.component';
/**
 * Question details edit form component for contribution question.
 */
var ContributionQuestionEditDetailsFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContributionQuestionEditDetailsFormComponent, _super);
    function ContributionQuestionEditDetailsFormComponent() {
        return _super.call(this, DEFAULT_CONTRIBUTION_QUESTION_DETAILS()) || this;
    }
    ContributionQuestionEditDetailsFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-contribution-question-edit-details-form',
            templateUrl: './contribution-question-edit-details-form.component.html',
            styleUrls: ['./contribution-question-edit-details-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ContributionQuestionEditDetailsFormComponent);
    return ContributionQuestionEditDetailsFormComponent;
}(QuestionEditDetailsFormComponent));
export { ContributionQuestionEditDetailsFormComponent };
//# sourceMappingURL=contribution-question-edit-details-form.component.js.map