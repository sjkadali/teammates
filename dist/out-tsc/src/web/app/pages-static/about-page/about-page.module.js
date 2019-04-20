import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
/**
 * Module for about page.
 */
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AboutPageComponent,
            ],
            exports: [
                AboutPageComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());
export { AboutPageModule };
//# sourceMappingURL=about-page.module.js.map