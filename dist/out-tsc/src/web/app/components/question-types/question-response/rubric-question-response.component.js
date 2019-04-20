import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_RUBRIC_QUESTION_DETAILS, DEFAULT_RUBRIC_RESPONSE_DETAILS, } from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';
/**
 * Rubric question response.
 */
var RubricQuestionResponseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RubricQuestionResponseComponent, _super);
    function RubricQuestionResponseComponent() {
        var _this = _super.call(this, DEFAULT_RUBRIC_RESPONSE_DETAILS(), DEFAULT_RUBRIC_QUESTION_DETAILS()) || this;
        _this.answers = [];
        return _this;
    }
    RubricQuestionResponseComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.responseDetails.answer; _i < _a.length; _i++) {
            var chosenIndex = _a[_i];
            var chosenChoice = chosenIndex === -1 ? 'No Response' : this.questionDetails.rubricChoices[chosenIndex];
            this.answers.push({
                index: chosenIndex + 1,
                answer: chosenChoice,
            });
        }
    };
    RubricQuestionResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rubric-question-response',
            templateUrl: './rubric-question-response.component.html',
            styleUrls: ['./rubric-question-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RubricQuestionResponseComponent);
    return RubricQuestionResponseComponent;
}(QuestionResponse));
export { RubricQuestionResponseComponent };
//# sourceMappingURL=rubric-question-response.component.js.map