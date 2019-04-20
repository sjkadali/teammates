import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
/**
 * The abstract question details edit form component.
 */
var QuestionEditDetailsFormComponent = /** @class */ (function () {
    function QuestionEditDetailsFormComponent(model) {
        this.isEditable = true;
        this.detailsChange = new EventEmitter();
        this.model = model;
    }
    Object.defineProperty(QuestionEditDetailsFormComponent.prototype, "details", {
        set: function (details) {
            this.model = details;
        },
        enumerable: true,
        configurable: true
    });
    QuestionEditDetailsFormComponent.prototype.ngOnInit = function () {
    };
    /**
     * Triggers the change of the model for the form.
     */
    QuestionEditDetailsFormComponent.prototype.triggerModelChange = function (field, data) {
        var _a;
        this.detailsChange.emit(Object.assign(this.model, (_a = {}, _a[field] = data, _a)));
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], QuestionEditDetailsFormComponent.prototype, "isEditable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], QuestionEditDetailsFormComponent.prototype, "details", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuestionEditDetailsFormComponent.prototype, "detailsChange", void 0);
    return QuestionEditDetailsFormComponent;
}());
export { QuestionEditDetailsFormComponent };
//# sourceMappingURL=question-edit-details-form.component.js.map