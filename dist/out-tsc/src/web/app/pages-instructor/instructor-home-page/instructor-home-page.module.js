import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionsTableModule } from '../../components/sessions-table/sessions-table.module';
import { InstructorHomePageComponent } from './instructor-home-page.component';
/**
 * Module for instructor home page.
 */
var InstructorHomePageModule = /** @class */ (function () {
    function InstructorHomePageModule() {
    }
    InstructorHomePageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                InstructorHomePageComponent,
            ],
            imports: [
                CommonModule,
                SessionsTableModule,
                FormsModule,
                RouterModule,
                NgbModule,
            ],
            exports: [
                InstructorHomePageComponent,
            ],
        })
    ], InstructorHomePageModule);
    return InstructorHomePageModule;
}());
export { InstructorHomePageModule };
//# sourceMappingURL=instructor-home-page.module.js.map