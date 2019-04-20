import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * The input field to specify weights for Mcq/Msq options.
 */
var WeightFieldComponent = /** @class */ (function () {
    function WeightFieldComponent() {
        this.isEditable = false;
        this.weight = 1;
        this.weightEntered = new EventEmitter();
    }
    /**
     * Emit the weight entered to the parent component.
     */
    WeightFieldComponent.prototype.onWeightEntered = function (weight) {
        this.weightEntered.emit(weight);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], WeightFieldComponent.prototype, "isEditable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], WeightFieldComponent.prototype, "weight", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], WeightFieldComponent.prototype, "weightEntered", void 0);
    WeightFieldComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-weight-field',
            templateUrl: './weight-field.component.html',
            styleUrls: ['./weight-field.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], WeightFieldComponent);
    return WeightFieldComponent;
}());
export { WeightFieldComponent };
//# sourceMappingURL=weight-field.component.js.map