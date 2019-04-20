import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InstructorCourseStudentEditPageComponent } from './instructor-course-student-edit-page.component';
/**
 * Module for instructor course student edit page.
 */
var InstructorCourseStudentEditPageModule = /** @class */ (function () {
    function InstructorCourseStudentEditPageModule() {
    }
    InstructorCourseStudentEditPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorCourseStudentEditPageComponent,
            ],
            exports: [
                InstructorCourseStudentEditPageComponent,
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                RouterModule,
            ],
        })
    ], InstructorCourseStudentEditPageModule);
    return InstructorCourseStudentEditPageModule;
}());
export { InstructorCourseStudentEditPageModule };
//# sourceMappingURL=instructor-course-student-edit-page.module.js.map