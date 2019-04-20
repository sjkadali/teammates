import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentProfileModule } from '../student-profile/student-profile.module';
import { InstructorStudentRecordsPageComponent } from './instructor-student-records-page.component';
/**
 * Module for instructor student records page.
 */
var InstructorStudentRecordsPageModule = /** @class */ (function () {
    function InstructorStudentRecordsPageModule() {
    }
    InstructorStudentRecordsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorStudentRecordsPageComponent,
            ],
            exports: [
                InstructorStudentRecordsPageComponent,
            ],
            imports: [
                CommonModule,
                StudentProfileModule,
                NgbModule,
            ],
        })
    ], InstructorStudentRecordsPageModule);
    return InstructorStudentRecordsPageModule;
}());
export { InstructorStudentRecordsPageModule };
//# sourceMappingURL=instructor-student-records-page.module.js.map