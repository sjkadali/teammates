import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DEFAULT_CONTRIBUTION_QUESTION_DETAILS, DEFAULT_CONTRIBUTION_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { CONTRIBUTION_POINT_NOT_SUBMITTED, CONTRIBUTION_POINT_NOT_SURE, } from '../../../../types/feedback-response-details';
import { QuestionEditAnswerFormComponent } from './question-edit-answer-form';
/**
 * The contribution question submission form for a recipient.
 */
var ContributionQuestionEditAnswerFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ContributionQuestionEditAnswerFormComponent, _super);
    function ContributionQuestionEditAnswerFormComponent(modalService) {
        var _this = _super.call(this, DEFAULT_CONTRIBUTION_QUESTION_DETAILS(), DEFAULT_CONTRIBUTION_RESPONSE_DETAILS()) || this;
        _this.modalService = modalService;
        _this.shouldShowHelpLink = true;
        _this.CONTRIBUTION_POINT_NOT_SUBMITTED = CONTRIBUTION_POINT_NOT_SUBMITTED;
        _this.CONTRIBUTION_POINT_NOT_SURE = CONTRIBUTION_POINT_NOT_SURE;
        return _this;
    }
    Object.defineProperty(ContributionQuestionEditAnswerFormComponent.prototype, "contributionQuestionPoints", {
        get: function () {
            var points = [];
            for (var i = 200; i >= 0; i -= 10) {
                points.push(i);
            }
            return points;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens a modal.
     */
    ContributionQuestionEditAnswerFormComponent.prototype.openModal = function (modal) {
        this.modalService.open(modal);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ContributionQuestionEditAnswerFormComponent.prototype, "shouldShowHelpLink", void 0);
    ContributionQuestionEditAnswerFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-contribution-question-edit-answer-form',
            templateUrl: './contribution-question-edit-answer-form.component.html',
            styleUrls: ['./contribution-question-edit-answer-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal])
    ], ContributionQuestionEditAnswerFormComponent);
    return ContributionQuestionEditAnswerFormComponent;
}(QuestionEditAnswerFormComponent));
export { ContributionQuestionEditAnswerFormComponent };
//# sourceMappingURL=contribution-question-edit-answer-form.component.js.map