import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { AjaxPreloadModule } from '../../components/ajax-preload/ajax-preload.module';
import { StudentListModule } from '../student-list/student-list.module';
import { InstructorCourseDetailsPageComponent } from './instructor-course-details-page.component';
/**
 * Module for instructor course details page.
 */
var InstructorCourseDetailsPageModule = /** @class */ (function () {
    function InstructorCourseDetailsPageModule() {
    }
    InstructorCourseDetailsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorCourseDetailsPageComponent,
            ],
            exports: [
                InstructorCourseDetailsPageComponent,
            ],
            imports: [
                CommonModule,
                ClipboardModule,
                RouterModule,
                StudentListModule,
                AjaxPreloadModule,
            ],
        })
    ], InstructorCourseDetailsPageModule);
    return InstructorCourseDetailsPageModule;
}());
export { InstructorCourseDetailsPageModule };
//# sourceMappingURL=instructor-course-details-page.module.js.map