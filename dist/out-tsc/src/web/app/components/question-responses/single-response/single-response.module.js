import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionResponseModule } from '../../question-types/question-response/question-response.module';
import { SingleResponseComponent } from './single-response.component';
/**
 * Module for single response component.
 */
var SingleResponseModule = /** @class */ (function () {
    function SingleResponseModule() {
    }
    SingleResponseModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SingleResponseComponent,
            ],
            exports: [
                SingleResponseComponent,
            ],
            imports: [
                CommonModule,
                QuestionResponseModule,
            ],
        })
    ], SingleResponseModule);
    return SingleResponseModule;
}());
export { SingleResponseModule };
//# sourceMappingURL=single-response.module.js.map