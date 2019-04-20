import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_RANK_RECIPIENTS_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for rank recipients questions.
 */
var RankRecipientsQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RankRecipientsQuestionAdditionalInfoComponent, _super);
    function RankRecipientsQuestionAdditionalInfoComponent() {
        return _super.call(this, DEFAULT_RANK_RECIPIENTS_QUESTION_DETAILS()) || this;
    }
    RankRecipientsQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-recipients-question-additional-info',
            templateUrl: './rank-recipients-question-additional-info.component.html',
            styleUrls: ['./rank-recipients-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RankRecipientsQuestionAdditionalInfoComponent);
    return RankRecipientsQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { RankRecipientsQuestionAdditionalInfoComponent };
//# sourceMappingURL=rank-recipients-question-additional-info.component.js.map