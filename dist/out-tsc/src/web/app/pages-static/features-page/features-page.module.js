import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesPageComponent } from './features-page.component';
/**
 * Module for features page.
 */
var FeaturesPageModule = /** @class */ (function () {
    function FeaturesPageModule() {
    }
    FeaturesPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                FeaturesPageComponent,
            ],
            exports: [
                FeaturesPageComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
            ],
        })
    ], FeaturesPageModule);
    return FeaturesPageModule;
}());
export { FeaturesPageModule };
//# sourceMappingURL=features-page.module.js.map