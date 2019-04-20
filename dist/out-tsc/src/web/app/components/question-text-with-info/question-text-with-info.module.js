import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionAdditionalInfoModule, } from '../question-types/question-additional-info/question-additional-info.module';
import { QuestionTextWithInfoComponent } from './question-text-with-info.component';
/**
 * Module for question text with toggle-able additional info.
 */
var QuestionTextWithInfoModule = /** @class */ (function () {
    function QuestionTextWithInfoModule() {
    }
    QuestionTextWithInfoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                QuestionTextWithInfoComponent,
            ],
            exports: [
                QuestionTextWithInfoComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
                QuestionAdditionalInfoModule,
            ],
        })
    ], QuestionTextWithInfoModule);
    return QuestionTextWithInfoModule;
}());
export { QuestionTextWithInfoModule };
//# sourceMappingURL=question-text-with-info.module.js.map