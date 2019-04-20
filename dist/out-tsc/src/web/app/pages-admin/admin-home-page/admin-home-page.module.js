import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminHomePageComponent } from './admin-home-page.component';
/**
 * Module for admin home page.
 */
var AdminHomePageModule = /** @class */ (function () {
    function AdminHomePageModule() {
    }
    AdminHomePageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AdminHomePageComponent,
            ],
            exports: [
                AdminHomePageComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
            ],
        })
    ], AdminHomePageModule);
    return AdminHomePageModule;
}());
export { AdminHomePageModule };
//# sourceMappingURL=admin-home-page.module.js.map