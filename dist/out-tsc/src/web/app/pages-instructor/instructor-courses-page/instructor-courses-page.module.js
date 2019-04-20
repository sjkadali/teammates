import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { CoursePermanentDeletionConfirmModalComponent, } from './course-permanent-deletion-confirm-modal/course-permanent-deletion-confirm-modal.component';
import { CourseSoftDeletionConfirmModalComponent, } from './course-soft-deletion-confirm-modal/course-soft-deletion-confirm-modal.component';
import { InstructorCoursesPageComponent } from './instructor-courses-page.component';
/**
 * Module for instructor courses page.
 */
var InstructorCoursesPageModule = /** @class */ (function () {
    function InstructorCoursesPageModule() {
    }
    InstructorCoursesPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AddCourseFormComponent,
                InstructorCoursesPageComponent,
                CourseSoftDeletionConfirmModalComponent,
                CoursePermanentDeletionConfirmModalComponent,
            ],
            exports: [
                InstructorCoursesPageComponent,
                AddCourseFormComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                NgbModule,
            ],
            entryComponents: [
                CourseSoftDeletionConfirmModalComponent,
                CoursePermanentDeletionConfirmModalComponent,
            ],
        })
    ], InstructorCoursesPageModule);
    return InstructorCoursesPageModule;
}());
export { InstructorCoursesPageModule };
//# sourceMappingURL=instructor-courses-page.module.js.map