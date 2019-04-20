import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_TEXT_QUESTION_DETAILS, DEFAULT_TEXT_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionEditAnswerFormComponent } from './question-edit-answer-form';
/**
 * The text question submission form for a recipient.
 */
var TextQuestionEditAnswerFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextQuestionEditAnswerFormComponent, _super);
    function TextQuestionEditAnswerFormComponent() {
        return _super.call(this, DEFAULT_TEXT_QUESTION_DETAILS(), DEFAULT_TEXT_RESPONSE_DETAILS()) || this;
    }
    Object.defineProperty(TextQuestionEditAnswerFormComponent.prototype, "wordCount", {
        get: function () {
            return this.responseDetails.answer.split(/\s/g)
                .filter(function (item) { return item.match(/\w/); }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextQuestionEditAnswerFormComponent.prototype, "isWordCountWithinRecommendedBound", {
        get: function () {
            if (this.questionDetails.recommendedLength === 0) {
                // not recommended length set
                return true;
            }
            var upperLimit = this.questionDetails.recommendedLength + this.questionDetails.recommendedLength * 0.1;
            var lowerLimit = this.questionDetails.recommendedLength - this.questionDetails.recommendedLength * 0.1;
            return this.wordCount > lowerLimit && this.wordCount < upperLimit;
        },
        enumerable: true,
        configurable: true
    });
    TextQuestionEditAnswerFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-text-question-edit-answer-form',
            templateUrl: './text-question-edit-answer-form.component.html',
            styleUrls: ['./text-question-edit-answer-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TextQuestionEditAnswerFormComponent);
    return TextQuestionEditAnswerFormComponent;
}(QuestionEditAnswerFormComponent));
export { TextQuestionEditAnswerFormComponent };
//# sourceMappingURL=text-question-edit-answer-form.component.js.map