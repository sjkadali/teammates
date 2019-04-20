import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_RANK_OPTIONS_QUESTION_DETAILS, DEFAULT_RANK_OPTIONS_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { RANK_OPTIONS_ANSWER_NOT_SUBMITTED } from '../../../../types/feedback-response-details';
import { QuestionEditAnswerFormComponent } from './question-edit-answer-form';
/**
 * The Rank options question submission form for a recipient.
 */
var RankOptionsQuestionEditAnswerFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RankOptionsQuestionEditAnswerFormComponent, _super);
    function RankOptionsQuestionEditAnswerFormComponent() {
        var _this = _super.call(this, DEFAULT_RANK_OPTIONS_QUESTION_DETAILS(), DEFAULT_RANK_OPTIONS_RESPONSE_DETAILS()) || this;
        _this.RANK_OPTIONS_ANSWER_NOT_SUBMITTED = RANK_OPTIONS_ANSWER_NOT_SUBMITTED;
        return _this;
    }
    RankOptionsQuestionEditAnswerFormComponent.prototype.ngOnInit = function () {
        if (this.responseDetails.answers.length !== this.questionDetails.options.length) {
            this.responseDetails.answers = Array(this.questionDetails.options.length).fill(RANK_OPTIONS_ANSWER_NOT_SUBMITTED);
        }
    };
    Object.defineProperty(RankOptionsQuestionEditAnswerFormComponent.prototype, "ranksToBeAssigned", {
        /**
         * Populates the possible Ranks that can be assigned.
         */
        get: function () {
            var ranks = [];
            for (var i = 1; i <= this.questionDetails.options.length; i += 1) {
                ranks.push(i);
            }
            return ranks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditAnswerFormComponent.prototype, "isNoOptionRanked", {
        /**
         * Checks if any one option has been Ranked.
         */
        get: function () {
            var isAtLeastOneOptionRanked = this.responseDetails.answers
                .some(function (rank) { return rank !== RANK_OPTIONS_ANSWER_NOT_SUBMITTED; });
            return !isAtLeastOneOptionRanked;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Assigns a Rank to the option specified by index.
     */
    RankOptionsQuestionEditAnswerFormComponent.prototype.triggerResponse = function (index, event) {
        this.responseDetails.answers[index] = event;
    };
    Object.defineProperty(RankOptionsQuestionEditAnswerFormComponent.prototype, "isSameRanksAssigned", {
        /**
         * Checks if the answer has same Ranks for different options.
         */
        get: function () {
            var responseCopy = [];
            for (var _i = 0, _a = this.responseDetails.answers; _i < _a.length; _i++) {
                var response = _a[_i];
                if (response !== RANK_OPTIONS_ANSWER_NOT_SUBMITTED) {
                    responseCopy.push(response);
                }
            }
            return (new Set(responseCopy)).size !== responseCopy.length && responseCopy.length !== 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditAnswerFormComponent.prototype, "isMinOptionsEnabled", {
        /**
         * Checks if a minimum number of options needs to be Ranked.
         */
        get: function () {
            return this.questionDetails.minOptionsToBeRanked !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditAnswerFormComponent.prototype, "isMaxOptionsEnabled", {
        /**
         * Checks if a maximum number of options can be Ranked.
         */
        get: function () {
            return this.questionDetails.maxOptionsToBeRanked !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditAnswerFormComponent.prototype, "isOptionsRankedLessThanMin", {
        /**
         * Checks if the options Ranked is less than the minimum required.
         */
        get: function () {
            var numberOfOptionsRanked = this.responseDetails.answers
                .filter(function (rank) { return rank !== RANK_OPTIONS_ANSWER_NOT_SUBMITTED; }).length;
            return (numberOfOptionsRanked < this.questionDetails.minOptionsToBeRanked && numberOfOptionsRanked > 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditAnswerFormComponent.prototype, "isOptionsRankedMoreThanMax", {
        /**
         * Checks if the options Ranked is more than the maximum required.
         */
        get: function () {
            var numberOfOptionsRanked = this.responseDetails.answers
                .filter(function (rank) { return rank !== RANK_OPTIONS_ANSWER_NOT_SUBMITTED; }).length;
            return numberOfOptionsRanked > this.questionDetails.maxOptionsToBeRanked;
        },
        enumerable: true,
        configurable: true
    });
    RankOptionsQuestionEditAnswerFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-options-question-edit-answer-form',
            templateUrl: './rank-options-question-edit-answer-form.component.html',
            styleUrls: ['./rank-options-question-edit-answer-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RankOptionsQuestionEditAnswerFormComponent);
    return RankOptionsQuestionEditAnswerFormComponent;
}(QuestionEditAnswerFormComponent));
export { RankOptionsQuestionEditAnswerFormComponent };
//# sourceMappingURL=rank-options-question-edit-answer-form.component.js.map