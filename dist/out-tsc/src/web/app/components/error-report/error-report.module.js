import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorReportComponent } from './error-report.component';
/**
 * Error report module.
 */
var ErrorReportModule = /** @class */ (function () {
    function ErrorReportModule() {
    }
    ErrorReportModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
            ],
            exports: [ErrorReportComponent],
            entryComponents: [ErrorReportComponent],
            declarations: [ErrorReportComponent],
        })
    ], ErrorReportModule);
    return ErrorReportModule;
}());
export { ErrorReportModule };
//# sourceMappingURL=error-report.module.js.map