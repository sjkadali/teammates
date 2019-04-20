import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * Time picker with fixed time to pick.
 */
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent() {
        this.isDisabled = false;
        this.time = { hour: 0, minute: 0 };
        this.timeChange = new EventEmitter();
    }
    TimePickerComponent.prototype.ngOnInit = function () {
    };
    /**
     * Triggers time change event.
     */
    TimePickerComponent.prototype.triggerTimeChange = function (newTime) {
        this.timeChange.emit(newTime);
    };
    /**
     * Helper function to create a range.
     */
    TimePickerComponent.prototype.range = function (n) {
        var arr = [];
        for (var i = 0; i < n; i += 1) {
            arr.push(i);
        }
        return arr;
    };
    /**
     * Compares two TIMEs.
     *
     * <p>Checks whether they are equal or not.
     */
    TimePickerComponent.prototype.timeCompareFn = function (t1, t2) {
        return t1 && t2 && t1.hour === t2.hour && t1.minute === t2.minute;
    };
    /**
     * Checks whether the time is in the fixed list to select.
     */
    TimePickerComponent.prototype.isInFixedList = function (time) {
        return (time.hour >= 1 && time.hour <= 22 && time.minute === 0)
            || (time.hour === 23 && time.minute === 59);
    };
    /**
     * Formats number {@code i} and pads leading zeros if its digits are less than {@code n}.
     *
     * <p>e.g. n = 2, i = 1 => "01"
     */
    TimePickerComponent.prototype.addLeadingZeros = function (n, i) {
        return ('0'.repeat(n) + i).slice(-n);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TimePickerComponent.prototype, "isDisabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TimePickerComponent.prototype, "time", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TimePickerComponent.prototype, "timeChange", void 0);
    TimePickerComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-time-picker',
            templateUrl: './time-picker.component.html',
            styleUrls: ['./time-picker.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TimePickerComponent);
    return TimePickerComponent;
}());
export { TimePickerComponent };
//# sourceMappingURL=time-picker.component.js.map