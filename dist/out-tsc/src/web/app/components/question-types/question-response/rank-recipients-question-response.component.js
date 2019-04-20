import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_RANK_RECIPIENTS_QUESTION_DETAILS, DEFAULT_RANK_RECIPIENTS_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';
/**
 * Rank recipients question response.
 */
var RankRecipientsQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RankRecipientsQuestionResponseComponent, _super);
    function RankRecipientsQuestionResponseComponent() {
        return _super.call(this, DEFAULT_RANK_RECIPIENTS_RESPONSE_DETAILS(), DEFAULT_RANK_RECIPIENTS_QUESTION_DETAILS()) || this;
    }
    RankRecipientsQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-recipients-question-response',
            templateUrl: './rank-recipients-question-response.component.html',
            styleUrls: ['./rank-recipients-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RankRecipientsQuestionResponseComponent);
    return RankRecipientsQuestionResponseComponent;
}(QuestionResponse));
export { RankRecipientsQuestionResponseComponent };
//# sourceMappingURL=rank-recipients-question-response.component.js.map