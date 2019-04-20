import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusMessageComponent } from './status-message.component';
/**
 * Module for status messages.
 */
var StatusMessageModule = /** @class */ (function () {
    function StatusMessageModule() {
    }
    StatusMessageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            exports: [
                StatusMessageComponent,
            ],
            declarations: [
                StatusMessageComponent,
            ],
        })
    ], StatusMessageModule);
    return StatusMessageModule;
}());
export { StatusMessageModule };
//# sourceMappingURL=status-message.module.js.map