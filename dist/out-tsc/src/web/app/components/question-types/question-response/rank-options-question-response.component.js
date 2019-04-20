import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_RANK_OPTIONS_QUESTION_DETAILS, DEFAULT_RANK_OPTIONS_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { RANK_OPTIONS_ANSWER_NOT_SUBMITTED, } from '../../../../types/feedback-response-details';
import { QuestionResponse } from './question-response';
/**
 * Rank options question response.
 */
var RankOptionsQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RankOptionsQuestionResponseComponent, _super);
    function RankOptionsQuestionResponseComponent() {
        var _this = _super.call(this, DEFAULT_RANK_OPTIONS_RESPONSE_DETAILS(), DEFAULT_RANK_OPTIONS_QUESTION_DETAILS()) || this;
        _this.orderedAnswer = [];
        return _this;
    }
    RankOptionsQuestionResponseComponent.prototype.ngOnInit = function () {
        var arrayOfRanks = [];
        for (var i = 0; i < this.questionDetails.options.length; i += 1) {
            var rank = this.responseDetails.answers[i];
            if (rank === RANK_OPTIONS_ANSWER_NOT_SUBMITTED) {
                continue;
            }
            arrayOfRanks[rank] = arrayOfRanks[rank] || [];
            arrayOfRanks[rank].push({
                rank: rank,
                option: this.questionDetails.options[i],
            });
        }
        arrayOfRanks = arrayOfRanks.filter(function (answer) { return answer; });
        for (var _i = 0, arrayOfRanks_1 = arrayOfRanks; _i < arrayOfRanks_1.length; _i++) {
            var answers = arrayOfRanks_1[_i];
            for (var _a = 0, answers_1 = answers; _a < answers_1.length; _a++) {
                var answer = answers_1[_a];
                this.orderedAnswer.push(answer);
            }
        }
    };
    RankOptionsQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-options-question-response',
            templateUrl: './rank-options-question-response.component.html',
            styleUrls: ['./rank-options-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RankOptionsQuestionResponseComponent);
    return RankOptionsQuestionResponseComponent;
}(QuestionResponse));
export { RankOptionsQuestionResponseComponent };
//# sourceMappingURL=rank-options-question-response.component.js.map