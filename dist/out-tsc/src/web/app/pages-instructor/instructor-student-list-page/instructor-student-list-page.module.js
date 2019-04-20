import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentListModule } from '../student-list/student-list.module';
import { InstructorStudentListPageComponent } from './instructor-student-list-page.component';
/**
 * Module for instructor student list page.
 */
var InstructorStudentListPageModule = /** @class */ (function () {
    function InstructorStudentListPageModule() {
    }
    InstructorStudentListPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorStudentListPageComponent,
            ],
            exports: [
                InstructorStudentListPageComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
                RouterModule,
                StudentListModule,
            ],
        })
    ], InstructorStudentListPageModule);
    return InstructorStudentListPageModule;
}());
export { InstructorStudentListPageModule };
//# sourceMappingURL=instructor-student-list-page.module.js.map