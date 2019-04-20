import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_RANK_OPTIONS_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for rank options questions.
 */
var RankOptionsQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RankOptionsQuestionAdditionalInfoComponent, _super);
    function RankOptionsQuestionAdditionalInfoComponent() {
        return _super.call(this, DEFAULT_RANK_OPTIONS_QUESTION_DETAILS()) || this;
    }
    RankOptionsQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-options-question-additional-info',
            templateUrl: './rank-options-question-additional-info.component.html',
            styleUrls: ['./rank-options-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RankOptionsQuestionAdditionalInfoComponent);
    return RankOptionsQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { RankOptionsQuestionAdditionalInfoComponent };
//# sourceMappingURL=rank-options-question-additional-info.component.js.map