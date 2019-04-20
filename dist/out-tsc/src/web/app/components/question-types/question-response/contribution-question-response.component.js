import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_CONTRIBUTION_QUESTION_DETAILS, DEFAULT_CONTRIBUTION_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { CONTRIBUTION_POINT_EQUAL_SHARE, CONTRIBUTION_POINT_NOT_SUBMITTED, CONTRIBUTION_POINT_NOT_SURE, } from '../../../../types/feedback-response-details';
import { QuestionResponse } from './question-response';
/**
 * Contribution question response.
 */
var ContributionQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContributionQuestionResponseComponent, _super);
    function ContributionQuestionResponseComponent() {
        var _this = _super.call(this, DEFAULT_CONTRIBUTION_RESPONSE_DETAILS(), DEFAULT_CONTRIBUTION_QUESTION_DETAILS()) || this;
        _this.CONTRIBUTION_POINT_EQUAL_SHARE = CONTRIBUTION_POINT_EQUAL_SHARE;
        _this.CONTRIBUTION_POINT_NOT_SUBMITTED = CONTRIBUTION_POINT_NOT_SUBMITTED;
        _this.CONTRIBUTION_POINT_NOT_SURE = CONTRIBUTION_POINT_NOT_SURE;
        return _this;
    }
    ContributionQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-contribution-question-response',
            templateUrl: './contribution-question-response.component.html',
            styleUrls: ['./contribution-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ContributionQuestionResponseComponent);
    return ContributionQuestionResponseComponent;
}(QuestionResponse));
export { ContributionQuestionResponseComponent };
//# sourceMappingURL=contribution-question-response.component.js.map