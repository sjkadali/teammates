import * as tslib_1 from "tslib";
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FeedbackParticipantType } from '../../../../types/api-output';
import { DEFAULT_MSQ_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditDetailsFormComponent } from './question-edit-details-form.component';
/**
 * Question details edit form component for Msq question.
 */
var MsqQuestionEditDetailsFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MsqQuestionEditDetailsFormComponent, _super);
    function MsqQuestionEditDetailsFormComponent() {
        var _this = _super.call(this, DEFAULT_MSQ_QUESTION_DETAILS()) || this;
        _this.PARTICIPANT_TYPES = [FeedbackParticipantType.STUDENTS,
            FeedbackParticipantType.STUDENTS_EXCLUDING_SELF, FeedbackParticipantType.TEAMS,
            FeedbackParticipantType.TEAMS_EXCLUDING_SELF, FeedbackParticipantType.INSTRUCTORS];
        return _this;
    }
    /**
     * Reorders the list on dragging the Msq options.
     */
    MsqQuestionEditDetailsFormComponent.prototype.onMsqOptionDropped = function (event) {
        moveItemInArray(this.model.msqChoices, event.previousIndex, event.currentIndex);
        moveItemInArray(this.model.msqWeights, event.previousIndex, event.currentIndex);
    };
    /**
     * Displays new Msq weight at specified index.
     */
    MsqQuestionEditDetailsFormComponent.prototype.onMsqWeightEntered = function (event, index) {
        this.model.msqWeights[index] = event;
    };
    /**
     * Increases number of Msq options.
     */
    MsqQuestionEditDetailsFormComponent.prototype.increaseNumberOfMsqOptions = function () {
        this.model.msqChoices.push('');
        if (this.model.hasAssignedWeights) {
            this.model.msqWeights.push(0);
        }
    };
    /**
     * Deletes a Msq option.
     */
    MsqQuestionEditDetailsFormComponent.prototype.onMsqOptionDeleted = function (event) {
        this.model.msqChoices.splice(event, 1);
        if (this.model.hasAssignedWeights) {
            this.model.msqWeights.splice(event, 1);
        }
    };
    Object.defineProperty(MsqQuestionEditDetailsFormComponent.prototype, "displayValueForMaxSelectableOption", {
        /**
         * Displays maxSelectableOption value.
         */
        get: function () {
            return this.model.maxSelectableChoices === -1 ? 2 : this.model.maxSelectableChoices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsqQuestionEditDetailsFormComponent.prototype, "displayValueForMinSelectableOption", {
        /**
         * Displays minSelectableOption value.
         */
        get: function () {
            return this.model.minSelectableChoices === -1 ? 1 : this.model.minSelectableChoices;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Displays new Msq option at specified index.
     */
    MsqQuestionEditDetailsFormComponent.prototype.onMsqOptionEntered = function (event, index) {
        this.model.msqChoices[index] = event;
    };
    /**
     * Triggers the display of the weight for the other option.
     */
    MsqQuestionEditDetailsFormComponent.prototype.triggerOtherWeight = function (event) {
        if (!event.target.checked) {
            this.model.msqOtherWeight = 0;
        }
    };
    /**
     * Assigns a default value to generateOptionsFor when checkbox is clicked.
     */
    MsqQuestionEditDetailsFormComponent.prototype.triggerGeneratedOptionsChange = function (event) {
        this.model.generateOptionsFor
            = event.target.checked ? FeedbackParticipantType.STUDENTS : FeedbackParticipantType.NONE;
    };
    /**
     * Assigns a default value to maxSelectableOptions when checkbox is clicked.
     */
    MsqQuestionEditDetailsFormComponent.prototype.triggerMaxSelectableOptionsChange = function (event) {
        this.model.maxSelectableChoices = event.target.checked ? 2 : -1;
    };
    /**
     * Assigns a default value to minSelectableOptions when checkbox is clicked.
     */
    MsqQuestionEditDetailsFormComponent.prototype.triggerMinSelectableOptionsChange = function (event) {
        this.model.minSelectableChoices = event.target.checked ? 1 : -1;
    };
    /**
     * Tracks the Msq option by index.
     */
    MsqQuestionEditDetailsFormComponent.prototype.trackMsqOption = function (index, item) {
        return item[index];
    };
    /**
     * Tracks the Msq weight by index.
     */
    MsqQuestionEditDetailsFormComponent.prototype.trackMsqWeight = function (index, item) {
        return item[index];
    };
    Object.defineProperty(MsqQuestionEditDetailsFormComponent.prototype, "isGeneratedOptionsEnabled", {
        /**
         * Checks if the generatedOptionsFor checkbox is enabled.
         */
        get: function () {
            return this.model.generateOptionsFor !== FeedbackParticipantType.NONE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsqQuestionEditDetailsFormComponent.prototype, "isMaxSelectableChoicesEnabled", {
        /**
         * Checks if the maxSelectedChoices checkbox is enabled.
         */
        get: function () {
            return this.model.maxSelectableChoices !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MsqQuestionEditDetailsFormComponent.prototype, "isMinSelectableChoicesEnabled", {
        /**
         * Checks if the minSelectedChoices checkbox is enabled.
         */
        get: function () {
            return this.model.minSelectableChoices !== -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Triggers the display of the weight column for the Msq options if weights option is checked/unchecked.
     */
    MsqQuestionEditDetailsFormComponent.prototype.triggerWeightsColumn = function (event) {
        if (!event.target.checked) {
            this.model.msqWeights = [];
            this.model.msqOtherWeight = 0;
        }
        else {
            this.model.msqWeights = Array(this.model.msqChoices.length).fill(0);
        }
    };
    MsqQuestionEditDetailsFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-msq-question-edit-details-form',
            templateUrl: './msq-question-edit-details-form.component.html',
            styleUrls: ['./msq-question-edit-details-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MsqQuestionEditDetailsFormComponent);
    return MsqQuestionEditDetailsFormComponent;
}(QuestionEditDetailsFormComponent));
export { MsqQuestionEditDetailsFormComponent };
//# sourceMappingURL=msq-question-edit-details-form.component.js.map