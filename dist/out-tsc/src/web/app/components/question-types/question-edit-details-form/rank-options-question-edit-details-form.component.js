import * as tslib_1 from "tslib";
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { DEFAULT_RANK_OPTIONS_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditDetailsFormComponent } from './question-edit-details-form.component';
/**
 * Question details edit form component for Rank Options question.
 */
var RankOptionsQuestionEditDetailsFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RankOptionsQuestionEditDetailsFormComponent, _super);
    function RankOptionsQuestionEditDetailsFormComponent() {
        return _super.call(this, DEFAULT_RANK_OPTIONS_QUESTION_DETAILS()) || this;
    }
    /**
     * Increases number of Rank options.
     */
    RankOptionsQuestionEditDetailsFormComponent.prototype.increaseNumberOfRankOptions = function () {
        this.model.options.push('');
    };
    /**
     * Reorders the list on dragging the Rank options.
     */
    RankOptionsQuestionEditDetailsFormComponent.prototype.onRankOptionDropped = function (event) {
        moveItemInArray(this.model.options, event.previousIndex, event.currentIndex);
    };
    /**
     * Tracks the Rank option by index.
     */
    RankOptionsQuestionEditDetailsFormComponent.prototype.trackRankOption = function (index, item) {
        return item[index];
    };
    /**
     * Deletes a Rank option.
     */
    RankOptionsQuestionEditDetailsFormComponent.prototype.onRankOptionDeleted = function (event) {
        this.model.options.splice(event, 1);
        if (this.model.maxOptionsToBeRanked > this.model.options.length) {
            this.model.maxOptionsToBeRanked = this.model.options.length;
        }
    };
    /**
     * Displays new Rank option at specified index.
     */
    RankOptionsQuestionEditDetailsFormComponent.prototype.onRankOptionEntered = function (event, index) {
        this.model.options[index] = event;
    };
    /**
     * Assigns a default value to minOptionsToBeRanked when checkbox is clicked.
     */
    RankOptionsQuestionEditDetailsFormComponent.prototype.triggerMinOptionsToBeRankedChange = function (event) {
        this.model.minOptionsToBeRanked = event.target.checked ? 1 : -1;
    };
    /**
     * Assigns a default value to maxOptionsToBeRanked when checkbox is clicked.
     */
    RankOptionsQuestionEditDetailsFormComponent.prototype.triggerMaxOptionsToBeRankedChange = function (event) {
        this.model.maxOptionsToBeRanked = event.target.checked ? 1 : -1;
    };
    Object.defineProperty(RankOptionsQuestionEditDetailsFormComponent.prototype, "isMinOptionsToBeRankedEnabled", {
        /**
         * Checks if the minOptionsToBeRanked checkbox is enabled.
         */
        get: function () {
            return this.model.minOptionsToBeRanked !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditDetailsFormComponent.prototype, "isMaxOptionsToBeRankedEnabled", {
        /**
         * Checks if the maxOptionsToBeRanked checkbox is enabled.
         */
        get: function () {
            return this.model.maxOptionsToBeRanked !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditDetailsFormComponent.prototype, "displayValueForMinOptionsToBeRanked", {
        /**
         * Displays minOptionsToBeRanked value.
         */
        get: function () {
            return this.model.minOptionsToBeRanked === -1 ? 1 : this.model.minOptionsToBeRanked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RankOptionsQuestionEditDetailsFormComponent.prototype, "displayValueForMaxOptionsToBeRanked", {
        /**
         * Displays minOptionsToBeRanked value.
         */
        get: function () {
            return this.model.maxOptionsToBeRanked === -1 ? 1 : this.model.maxOptionsToBeRanked;
        },
        enumerable: true,
        configurable: true
    });
    RankOptionsQuestionEditDetailsFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-options-question-edit-details-form',
            templateUrl: './rank-options-question-edit-details-form.component.html',
            styleUrls: ['./rank-options-question-edit-details-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RankOptionsQuestionEditDetailsFormComponent);
    return RankOptionsQuestionEditDetailsFormComponent;
}(QuestionEditDetailsFormComponent));
export { RankOptionsQuestionEditDetailsFormComponent };
//# sourceMappingURL=rank-options-question-edit-details-form.component.js.map