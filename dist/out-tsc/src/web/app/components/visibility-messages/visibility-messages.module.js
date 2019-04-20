import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VisibilityCapabilityPipe } from './visibility-capability.pipe';
import { VisibilityEntityNamePipe } from './visibility-entity-name.pipe';
/**
 * Module to generate visibility messages.
 */
var VisibilityMessagesModule = /** @class */ (function () {
    function VisibilityMessagesModule() {
    }
    VisibilityMessagesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                VisibilityEntityNamePipe,
                VisibilityCapabilityPipe,
            ],
            exports: [
                VisibilityEntityNamePipe,
                VisibilityCapabilityPipe,
            ],
        })
    ], VisibilityMessagesModule);
    return VisibilityMessagesModule;
}());
export { VisibilityMessagesModule };
//# sourceMappingURL=visibility-messages.module.js.map