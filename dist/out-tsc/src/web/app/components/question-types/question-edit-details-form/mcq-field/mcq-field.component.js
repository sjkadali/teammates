import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusMessageService } from '../../../../../services/status-message.service';
/**
 * The input field to specify options to choose from.
 */
var McqFieldComponent = /** @class */ (function () {
    function McqFieldComponent(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.isEditable = false;
        this.numberOfMcqChoices = 1;
        this.text = '';
        this.index = 0;
        this.elementDeleted = new EventEmitter();
        this.mcqText = new EventEmitter();
    }
    /**
     * Deletes a Mcq option.
     */
    McqFieldComponent.prototype.deleteMcqOption = function () {
        if (this.numberOfMcqChoices > 2) {
            this.elementDeleted.emit(this.index);
        }
        else {
            this.statusMessageService.showErrorMessage('There must be at least two Mcq options.');
        }
    };
    /**
     * When user enters an Mcq option text, emit the change to parent component.
     */
    McqFieldComponent.prototype.onMcqOptionEntered = function (text) {
        this.mcqText.emit(text);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], McqFieldComponent.prototype, "isEditable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], McqFieldComponent.prototype, "numberOfMcqChoices", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], McqFieldComponent.prototype, "text", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], McqFieldComponent.prototype, "index", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], McqFieldComponent.prototype, "elementDeleted", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], McqFieldComponent.prototype, "mcqText", void 0);
    McqFieldComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-mcq-field',
            templateUrl: './mcq-field.component.html',
            styleUrls: ['./mcq-field.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StatusMessageService])
    ], McqFieldComponent);
    return McqFieldComponent;
}());
export { McqFieldComponent };
//# sourceMappingURL=mcq-field.component.js.map