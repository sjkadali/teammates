import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SingleResponseModule } from '../single-response/single-response.module';
import { StudentViewResponsesComponent } from './student-view-responses.component';
/**
 * Module for feedback response in student results page view.
 */
var StudentViewResponsesModule = /** @class */ (function () {
    function StudentViewResponsesModule() {
    }
    StudentViewResponsesModule = tslib_1.__decorate([
        NgModule({
            declarations: [StudentViewResponsesComponent],
            exports: [StudentViewResponsesComponent],
            imports: [
                CommonModule,
                SingleResponseModule,
            ],
        })
    ], StudentViewResponsesModule);
    return StudentViewResponsesModule;
}());
export { StudentViewResponsesModule };
//# sourceMappingURL=student-view-responses.module.js.map