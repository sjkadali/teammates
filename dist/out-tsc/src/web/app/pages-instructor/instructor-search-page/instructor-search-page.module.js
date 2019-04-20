import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentListModule } from '../student-list/student-list.module';
import { InstructorSearchBarComponent } from './instructor-search-bar/instructor-search-bar.component';
import { InstructorSearchPageComponent } from './instructor-search-page.component';
import { StudentResultTableComponent } from './student-result-table/student-result-table.component';
/**
 * Module for instructor search page.
 */
var InstructorSearchPageModule = /** @class */ (function () {
    function InstructorSearchPageModule() {
    }
    InstructorSearchPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorSearchPageComponent,
                InstructorSearchBarComponent,
                StudentResultTableComponent,
            ],
            exports: [
                InstructorSearchPageComponent,
                InstructorSearchBarComponent,
                StudentResultTableComponent,
            ],
            imports: [
                CommonModule,
                StudentListModule,
                FormsModule,
                RouterModule,
            ],
        })
    ], InstructorSearchPageModule);
    return InstructorSearchPageModule;
}());
export { InstructorSearchPageModule };
//# sourceMappingURL=instructor-search-page.module.js.map