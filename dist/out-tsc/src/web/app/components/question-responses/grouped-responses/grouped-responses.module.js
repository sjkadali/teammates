import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionTextWithInfoModule } from '../../question-text-with-info/question-text-with-info.module';
import { SingleResponseModule } from '../single-response/single-response.module';
import { GroupedResponsesComponent } from './grouped-responses.component';
/**
 * Module for a list of responses grouped in GRQ/RGQ mode.
 */
var GroupedResponsesModule = /** @class */ (function () {
    function GroupedResponsesModule() {
    }
    GroupedResponsesModule = tslib_1.__decorate([
        NgModule({
            declarations: [GroupedResponsesComponent],
            exports: [GroupedResponsesComponent],
            imports: [
                CommonModule,
                QuestionTextWithInfoModule,
                SingleResponseModule,
            ],
        })
    ], GroupedResponsesModule);
    return GroupedResponsesModule;
}());
export { GroupedResponsesModule };
//# sourceMappingURL=grouped-responses.module.js.map