import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SingleResponseModule } from '../single-response/single-response.module';
import { PerQuestionViewResponsesComponent } from './per-question-view-responses.component';
/**
 * Module for component to display list of responses for one question.
 */
var PerQuestionViewResponsesModule = /** @class */ (function () {
    function PerQuestionViewResponsesModule() {
    }
    PerQuestionViewResponsesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                PerQuestionViewResponsesComponent,
            ],
            exports: [
                PerQuestionViewResponsesComponent,
            ],
            imports: [
                CommonModule,
                SingleResponseModule,
            ],
        })
    ], PerQuestionViewResponsesModule);
    return PerQuestionViewResponsesModule;
}());
export { PerQuestionViewResponsesModule };
//# sourceMappingURL=per-question-view-responses.module.js.map