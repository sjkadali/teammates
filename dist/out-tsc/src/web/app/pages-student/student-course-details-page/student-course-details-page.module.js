import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentCourseDetailsPageComponent } from './student-course-details-page.component';
/**
 * Module for student course details page.
 */
var StudentCourseDetailsPageModule = /** @class */ (function () {
    function StudentCourseDetailsPageModule() {
    }
    StudentCourseDetailsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                StudentCourseDetailsPageComponent,
            ],
            exports: [
                StudentCourseDetailsPageComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
            ],
        })
    ], StudentCourseDetailsPageModule);
    return StudentCourseDetailsPageModule;
}());
export { StudentCourseDetailsPageModule };
//# sourceMappingURL=student-course-details-page.module.js.map