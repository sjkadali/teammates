import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AjaxLoadingComponent } from './ajax-loading.component';
/**
 * Ajax loading module.
 */
var AjaxLoadingModule = /** @class */ (function () {
    function AjaxLoadingModule() {
    }
    AjaxLoadingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                AjaxLoadingComponent,
            ],
            exports: [
                AjaxLoadingComponent,
            ],
        })
    ], AjaxLoadingModule);
    return AjaxLoadingModule;
}());
export { AjaxLoadingModule };
//# sourceMappingURL=ajax-loading.module.js.map