import * as tslib_1 from "tslib";
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FeedbackParticipantType, } from '../../../../types/api-output';
import { DEFAULT_MCQ_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditDetailsFormComponent } from './question-edit-details-form.component';
/**
 * Question details edit form component for Mcq question.
 */
var McqQuestionEditDetailsFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(McqQuestionEditDetailsFormComponent, _super);
    function McqQuestionEditDetailsFormComponent() {
        var _this = _super.call(this, DEFAULT_MCQ_QUESTION_DETAILS()) || this;
        _this.PARTICIPANT_TYPES = [FeedbackParticipantType.STUDENTS,
            FeedbackParticipantType.STUDENTS_EXCLUDING_SELF, FeedbackParticipantType.TEAMS,
            FeedbackParticipantType.TEAMS_EXCLUDING_SELF, FeedbackParticipantType.INSTRUCTORS];
        return _this;
    }
    /**
     * Reorders the list on dragging the Mcq options.
     */
    McqQuestionEditDetailsFormComponent.prototype.onMcqOptionDropped = function (event) {
        moveItemInArray(this.model.mcqChoices, event.previousIndex, event.currentIndex);
        moveItemInArray(this.model.mcqWeights, event.previousIndex, event.currentIndex);
    };
    /**
     * Increases number of Mcq options.
     */
    McqQuestionEditDetailsFormComponent.prototype.increaseNumberOfOptions = function () {
        this.model.numOfMcqChoices += 1;
        this.model.mcqChoices.push('');
        if (this.model.hasAssignedWeights) {
            this.model.mcqWeights.push(0);
        }
    };
    /**
     * Deletes a Mcq option.
     */
    McqQuestionEditDetailsFormComponent.prototype.onMcqOptionDeleted = function (event) {
        this.model.numOfMcqChoices -= 1;
        this.model.mcqChoices.splice(event, 1);
        if (this.model.hasAssignedWeights) {
            this.model.mcqWeights.splice(event, 1);
        }
    };
    /**
     * Displays new Mcq option at specified index.
     */
    McqQuestionEditDetailsFormComponent.prototype.onMcqOptionEntered = function (event, index) {
        this.model.mcqChoices[index] = event;
    };
    /**
     * Displays new Mcq weight at specified index.
     */
    McqQuestionEditDetailsFormComponent.prototype.onMcqWeightEntered = function (event, index) {
        this.model.mcqWeights[index] = event;
    };
    /**
     * Tracks the Mcq option by index.
     */
    McqQuestionEditDetailsFormComponent.prototype.trackMcqOption = function (index, item) {
        return item[index];
    };
    /**
     * Tracks the Mcq weight by index.
     */
    McqQuestionEditDetailsFormComponent.prototype.trackMcqWeight = function (index, item) {
        return item[index];
    };
    /**
     * Triggers the display of the weight column for the Mcq options if weights option is checked/unchecked.
     */
    McqQuestionEditDetailsFormComponent.prototype.triggerWeightsColumn = function (event) {
        if (!event.target.checked) {
            this.model.mcqWeights = [];
            this.model.mcqOtherWeight = 0;
        }
        else {
            this.model.mcqWeights = Array(this.model.numOfMcqChoices).fill(0);
        }
    };
    /**
     * Triggers the display of the weight for the other option.
     */
    McqQuestionEditDetailsFormComponent.prototype.triggerOtherWeight = function (event) {
        if (!event.target.checked) {
            this.model.mcqOtherWeight = 0;
        }
    };
    /**
     * Assigns a default value to generateOptionsFor when checkbox is clicked.
     */
    McqQuestionEditDetailsFormComponent.prototype.triggerGeneratedOptionsChange = function (event) {
        if (!event.target.checked) {
            this.model.generateOptionsFor = FeedbackParticipantType.NONE;
        }
        else {
            this.model.generateOptionsFor = FeedbackParticipantType.STUDENTS;
        }
    };
    Object.defineProperty(McqQuestionEditDetailsFormComponent.prototype, "isGeneratedOptionsEnabled", {
        /**
         * Checks if the generatedOptionsFor checkbox is enabled.
         */
        get: function () {
            return this.model.generateOptionsFor !== FeedbackParticipantType.NONE;
        },
        enumerable: true,
        configurable: true
    });
    McqQuestionEditDetailsFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-mcq-question-edit-details-form',
            templateUrl: './mcq-question-edit-details-form.component.html',
            styleUrls: ['./mcq-question-edit-details-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], McqQuestionEditDetailsFormComponent);
    return McqQuestionEditDetailsFormComponent;
}(QuestionEditDetailsFormComponent));
export { McqQuestionEditDetailsFormComponent };
//# sourceMappingURL=mcq-question-edit-details-form.component.js.map