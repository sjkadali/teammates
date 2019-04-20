import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
/**
 * List of status messages.
 */
var StatusMessageComponent = /** @class */ (function () {
    function StatusMessageComponent() {
        this.messages = [];
    }
    /**
     * Dismisses the status message.
     */
    StatusMessageComponent.prototype.dismiss = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], StatusMessageComponent.prototype, "messages", void 0);
    StatusMessageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-status-message',
            templateUrl: './status-message.component.html',
            styleUrls: ['./status-message.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StatusMessageComponent);
    return StatusMessageComponent;
}());
export { StatusMessageComponent };
//# sourceMappingURL=status-message.component.js.map