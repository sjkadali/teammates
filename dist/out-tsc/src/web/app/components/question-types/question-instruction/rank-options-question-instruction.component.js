import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DEFAULT_RANK_OPTIONS_QUESTION_DETAILS } from '../../../../types/default-question-structs';
/**
 * Instructions for Rank options question.
 */
var RankOptionsQuestionInstructionComponent = /** @class */ (function () {
    function RankOptionsQuestionInstructionComponent() {
        this.questionDetails = DEFAULT_RANK_OPTIONS_QUESTION_DETAILS();
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RankOptionsQuestionInstructionComponent.prototype, "questionDetails", void 0);
    RankOptionsQuestionInstructionComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-options-question-instruction',
            templateUrl: './rank-options-question-instruction.component.html',
            styleUrls: ['./rank-options-question-instruction.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RankOptionsQuestionInstructionComponent);
    return RankOptionsQuestionInstructionComponent;
}());
export { RankOptionsQuestionInstructionComponent };
//# sourceMappingURL=rank-options-question-instruction.component.js.map