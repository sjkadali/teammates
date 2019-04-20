import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjaxPreloadModule } from '../../components/ajax-preload/ajax-preload.module';
import { StatusMessageModule } from '../../components/status-message/status-message.module';
import { InstructorCourseEnrollPageComponent } from './instructor-course-enroll-page.component';
/**
 * Module for instructor course enroll page.
 */
var InstructorCourseEnrollPageModule = /** @class */ (function () {
    function InstructorCourseEnrollPageModule() {
    }
    InstructorCourseEnrollPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorCourseEnrollPageComponent,
            ],
            exports: [
                InstructorCourseEnrollPageComponent,
            ],
            imports: [
                CommonModule,
                NgbModule,
                HotTableModule,
                StatusMessageModule,
                AjaxPreloadModule,
            ],
        })
    ], InstructorCourseEnrollPageModule);
    return InstructorCourseEnrollPageModule;
}());
export { InstructorCourseEnrollPageModule };
//# sourceMappingURL=instructor-course-enroll-page.module.js.map