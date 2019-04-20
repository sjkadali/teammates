import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentProfileModule } from '../student-profile/student-profile.module';
import { InstructorCourseStudentDetailsPageComponent } from './instructor-course-student-details-page.component';
/**
 * Module for instructor course student details page.
 */
var InstructorCourseStudentDetailsPageModule = /** @class */ (function () {
    function InstructorCourseStudentDetailsPageModule() {
    }
    InstructorCourseStudentDetailsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorCourseStudentDetailsPageComponent,
            ],
            exports: [
                InstructorCourseStudentDetailsPageComponent,
            ],
            imports: [
                CommonModule,
                StudentProfileModule,
                RouterModule,
            ],
        })
    ], InstructorCourseStudentDetailsPageModule);
    return InstructorCourseStudentDetailsPageModule;
}());
export { InstructorCourseStudentDetailsPageModule };
//# sourceMappingURL=instructor-course-student-details-page.module.js.map