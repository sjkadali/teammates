import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
/**
 * The abstract recipient submission form.
 */
var QuestionEditAnswerFormComponent = /** @class */ (function () {
    function QuestionEditAnswerFormComponent(questionDetails, responseDetails) {
        this.isDisabled = false;
        this.responseDetailsChange = new EventEmitter();
        this.questionDetails = questionDetails;
        this.responseDetails = responseDetails;
    }
    QuestionEditAnswerFormComponent.prototype.ngOnInit = function () {
    };
    /**
     * Triggers the change of the response details for the form.
     */
    QuestionEditAnswerFormComponent.prototype.triggerResponseDetailsChange = function (field, data) {
        var _a;
        this.responseDetailsChange.emit(Object.assign(this.responseDetails, (_a = {}, _a[field] = data, _a)));
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], QuestionEditAnswerFormComponent.prototype, "isDisabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuestionEditAnswerFormComponent.prototype, "questionDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuestionEditAnswerFormComponent.prototype, "responseDetails", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditAnswerFormComponent.prototype, "responseDetailsChange", void 0);
    return QuestionEditAnswerFormComponent;
}());
export { QuestionEditAnswerFormComponent };
//# sourceMappingURL=question-edit-answer-form.js.map