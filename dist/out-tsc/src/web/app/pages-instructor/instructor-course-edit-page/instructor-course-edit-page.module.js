import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstructorCourseEditPageComponent } from './instructor-course-edit-page.component';
/**
 * Module for instructor course edit page component.
 */
var InstructorCourseEditPageModule = /** @class */ (function () {
    function InstructorCourseEditPageModule() {
    }
    InstructorCourseEditPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorCourseEditPageComponent,
            ],
            exports: [
                InstructorCourseEditPageComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                NgbModule,
            ],
        })
    ], InstructorCourseEditPageModule);
    return InstructorCourseEditPageModule;
}());
export { InstructorCourseEditPageModule };
//# sourceMappingURL=instructor-course-edit-page.module.js.map