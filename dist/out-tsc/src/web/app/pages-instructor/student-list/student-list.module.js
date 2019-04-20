import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student-list.component';
/**
 * Module for student list table component.
 */
var StudentListModule = /** @class */ (function () {
    function StudentListModule() {
    }
    StudentListModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                StudentListComponent,
            ],
            exports: [
                StudentListComponent,
            ],
            imports: [
                CommonModule,
                NgbModule,
                RouterModule,
            ],
        })
    ], StudentListModule);
    return StudentListModule;
}());
export { StudentListModule };
//# sourceMappingURL=student-list.module.js.map