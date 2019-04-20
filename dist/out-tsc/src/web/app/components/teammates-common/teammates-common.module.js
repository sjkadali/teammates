import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { FormatDateDetailPipe } from './format-date-detail.pipe';
import { PublishStatusNamePipe } from './publish-status-name.pipe';
import { QuestionTypeNamePipe } from './question-type-name.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SubmissionStatusNamePipe } from './submission-status-name.pipe';
/**
 * Common module in the project.
 */
var TeammatesCommonModule = /** @class */ (function () {
    function TeammatesCommonModule() {
    }
    TeammatesCommonModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [
                EnumToArrayPipe,
                SubmissionStatusNamePipe,
                PublishStatusNamePipe,
                FormatDateDetailPipe,
                SafeHtmlPipe,
                QuestionTypeNamePipe,
            ],
            exports: [
                EnumToArrayPipe,
                SubmissionStatusNamePipe,
                PublishStatusNamePipe,
                FormatDateDetailPipe,
                SafeHtmlPipe,
                QuestionTypeNamePipe,
            ],
        })
    ], TeammatesCommonModule);
    return TeammatesCommonModule;
}());
export { TeammatesCommonModule };
//# sourceMappingURL=teammates-common.module.js.map