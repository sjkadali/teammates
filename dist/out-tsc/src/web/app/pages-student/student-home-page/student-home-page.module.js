import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Pipes } from '../../pipes/pipes.module';
import { StudentHomePageComponent } from './student-home-page.component';
/**
 * Module for student home page.
 */
var StudentHomePageModule = /** @class */ (function () {
    function StudentHomePageModule() {
    }
    StudentHomePageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                StudentHomePageComponent,
            ],
            exports: [
                StudentHomePageComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
                NgbModule,
                Pipes,
            ],
        })
    ], StudentHomePageModule);
    return StudentHomePageModule;
}());
export { StudentHomePageModule };
//# sourceMappingURL=student-home-page.module.js.map