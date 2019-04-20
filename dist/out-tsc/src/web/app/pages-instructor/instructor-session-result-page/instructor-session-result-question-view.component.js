import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { InstructorSessionResultView } from './instructor-session-result-view';
import { InstructorSessionResultViewType } from './instructor-session-result-view-type.enum';
/**
 * Instructor sessions results page question view.
 */
var InstructorSessionResultQuestionViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorSessionResultQuestionViewComponent, _super);
    function InstructorSessionResultQuestionViewComponent() {
        var _this = _super.call(this, InstructorSessionResultViewType.QUESTION) || this;
        _this.loadQuestion = new EventEmitter();
        _this.questionsOrder = [];
        return _this;
    }
    InstructorSessionResultQuestionViewComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = Object.keys(this.responses); _i < _a.length; _i++) {
            var questionId = _a[_i];
            var response = this.responses[questionId];
            this.questionsOrder[response.questionNumber] = response;
        }
        this.questionsOrder = this.questionsOrder.filter(function (questionId) { return questionId; });
    };
    /**
     * Expands the tab of the specified question.
     */
    InstructorSessionResultQuestionViewComponent.prototype.expandQuestionTab = function (question) {
        question.isTabExpanded = !question.isTabExpanded;
        if (question.isTabExpanded) {
            this.loadQuestion.emit(question.feedbackQuestionId);
        }
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], InstructorSessionResultQuestionViewComponent.prototype, "loadQuestion", void 0);
    InstructorSessionResultQuestionViewComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-session-result-question-view',
            templateUrl: './instructor-session-result-question-view.component.html',
            styleUrls: ['./instructor-session-result-question-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorSessionResultQuestionViewComponent);
    return InstructorSessionResultQuestionViewComponent;
}(InstructorSessionResultView));
export { InstructorSessionResultQuestionViewComponent };
//# sourceMappingURL=instructor-session-result-question-view.component.js.map