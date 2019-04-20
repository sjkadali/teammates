import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FeedbackQuestionType } from '../../../types/api-output';
/**
 * Question text with toggle-able additional info.
 */
var QuestionTextWithInfoComponent = /** @class */ (function () {
    function QuestionTextWithInfoComponent() {
        this.questionNumber = 0;
        this.questionDetails = {
            questionType: FeedbackQuestionType.TEXT,
            questionText: '',
        };
        // enum
        this.FeedbackQuestionType = FeedbackQuestionType;
        this.additionalInfoIsExpanded = false;
    }
    /**
     * Returns true if the question has additional info.
     */
    QuestionTextWithInfoComponent.prototype.hasAdditionalInfo = function (questionDetails) {
        return questionDetails.questionType !== FeedbackQuestionType.TEXT;
    };
    QuestionTextWithInfoComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], QuestionTextWithInfoComponent.prototype, "questionNumber", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuestionTextWithInfoComponent.prototype, "questionDetails", void 0);
    QuestionTextWithInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-question-text-with-info',
            templateUrl: './question-text-with-info.component.html',
            styleUrls: ['./question-text-with-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuestionTextWithInfoComponent);
    return QuestionTextWithInfoComponent;
}());
export { QuestionTextWithInfoComponent };
//# sourceMappingURL=question-text-with-info.component.js.map