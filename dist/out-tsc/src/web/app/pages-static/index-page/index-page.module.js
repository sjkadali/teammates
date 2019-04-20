import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexPageComponent } from './index-page.component';
/**
 * Module for index page.
 */
var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                IndexPageComponent,
            ],
            exports: [
                IndexPageComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
            ],
        })
    ], IndexPageModule);
    return IndexPageModule;
}());
export { IndexPageModule };
//# sourceMappingURL=index-page.module.js.map