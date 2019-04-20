import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusMessageService } from '../../../../../services/status-message.service';
/**
 * The input field to specify options to choose from.
 */
var MsqFieldComponent = /** @class */ (function () {
    function MsqFieldComponent(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.isEditable = false;
        this.numberOfMsqChoices = 1;
        this.text = '';
        this.index = 0;
        this.elementDeleted = new EventEmitter();
        this.msqText = new EventEmitter();
    }
    /**
     * Deletes a Msq option.
     */
    MsqFieldComponent.prototype.deleteMsqOption = function () {
        if (this.numberOfMsqChoices > 2) {
            this.elementDeleted.emit(this.index);
        }
        else {
            this.statusMessageService.showErrorMessage('There must be at least two Msq options.');
        }
    };
    /**
     * When user enters an Msq option text, emit the change to parent component.
     */
    MsqFieldComponent.prototype.onMsqOptionEntered = function (text) {
        this.msqText.emit(text);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MsqFieldComponent.prototype, "isEditable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MsqFieldComponent.prototype, "numberOfMsqChoices", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MsqFieldComponent.prototype, "text", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MsqFieldComponent.prototype, "index", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MsqFieldComponent.prototype, "elementDeleted", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MsqFieldComponent.prototype, "msqText", void 0);
    MsqFieldComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-msq-field',
            templateUrl: './msq-field.component.html',
            styleUrls: ['./msq-field.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StatusMessageService])
    ], MsqFieldComponent);
    return MsqFieldComponent;
}());
export { MsqFieldComponent };
//# sourceMappingURL=msq-field.component.js.map