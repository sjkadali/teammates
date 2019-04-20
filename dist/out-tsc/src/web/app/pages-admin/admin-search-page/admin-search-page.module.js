import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminSearchPageComponent } from './admin-search-page.component';
/**
 * Module for admin search page.
 */
var AdminSearchPageModule = /** @class */ (function () {
    function AdminSearchPageModule() {
    }
    AdminSearchPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AdminSearchPageComponent,
            ],
            exports: [
                AdminSearchPageComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
            ],
        })
    ], AdminSearchPageModule);
    return AdminSearchPageModule;
}());
export { AdminSearchPageModule };
//# sourceMappingURL=admin-search-page.module.js.map