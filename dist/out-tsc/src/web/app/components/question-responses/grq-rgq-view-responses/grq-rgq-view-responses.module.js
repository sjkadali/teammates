import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupedResponsesModule } from '../grouped-responses/grouped-responses.module';
import { GrqRgqViewResponsesComponent } from './grq-rgq-view-responses.component';
/**
 * Module for component to display list of responses in GRQ/RGQ view.
 */
var GrqRgqViewResponsesModule = /** @class */ (function () {
    function GrqRgqViewResponsesModule() {
    }
    GrqRgqViewResponsesModule = tslib_1.__decorate([
        NgModule({
            declarations: [GrqRgqViewResponsesComponent],
            exports: [GrqRgqViewResponsesComponent],
            imports: [
                CommonModule,
                GroupedResponsesModule,
            ],
        })
    ], GrqRgqViewResponsesModule);
    return GrqRgqViewResponsesModule;
}());
export { GrqRgqViewResponsesModule };
//# sourceMappingURL=grq-rgq-view-responses.module.js.map