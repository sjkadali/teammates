import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AjaxPreloadComponent } from './ajax-preload.component';
/**
 * Ajax preload module.
 */
var AjaxPreloadModule = /** @class */ (function () {
    function AjaxPreloadModule() {
    }
    AjaxPreloadModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                AjaxPreloadComponent,
            ],
            exports: [
                AjaxPreloadComponent,
            ],
        })
    ], AjaxPreloadModule);
    return AjaxPreloadModule;
}());
export { AjaxPreloadModule };
//# sourceMappingURL=ajax-preload.module.js.map