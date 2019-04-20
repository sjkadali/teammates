import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResponseStatusPipe } from './session-response-status.pipe';
import { SubmissionStatusPipe } from './session-submission-status.pipe';
/**
 * Module for common pipes.
 */
var Pipes = /** @class */ (function () {
    function Pipes() {
    }
    Pipes = tslib_1.__decorate([
        NgModule({
            declarations: [
                ResponseStatusPipe,
                SubmissionStatusPipe,
            ],
            imports: [
                CommonModule,
            ],
            exports: [
                ResponseStatusPipe,
                SubmissionStatusPipe,
            ],
        })
    ], Pipes);
    return Pipes;
}());
export { Pipes };
//# sourceMappingURL=pipes.module.js.map