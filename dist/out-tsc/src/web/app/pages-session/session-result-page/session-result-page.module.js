import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentViewResponsesModule, } from '../../components/question-responses/student-view-responses/student-view-responses.module';
import { QuestionTextWithInfoModule } from '../../components/question-text-with-info/question-text-with-info.module';
import { SessionResultPageComponent } from './session-result-page.component';
/**
 * Module for feedback session result page.
 */
var SessionResultPageModule = /** @class */ (function () {
    function SessionResultPageModule() {
    }
    SessionResultPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                QuestionTextWithInfoModule,
                StudentViewResponsesModule,
            ],
            declarations: [
                SessionResultPageComponent,
            ],
            exports: [
                SessionResultPageComponent,
            ],
        })
    ], SessionResultPageModule);
    return SessionResultPageModule;
}());
export { SessionResultPageModule };
//# sourceMappingURL=session-result-page.module.js.map