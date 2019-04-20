import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopySessionModalComponent } from './copy-session-modal.component';
/**
 * Module for copy current session modal.
 */
var CopySessionModalModule = /** @class */ (function () {
    function CopySessionModalModule() {
    }
    CopySessionModalModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                CopySessionModalComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
            ],
            entryComponents: [
                CopySessionModalComponent,
            ],
            exports: [
                CopySessionModalComponent,
            ],
        })
    ], CopySessionModalModule);
    return CopySessionModalModule;
}());
export { CopySessionModalModule };
//# sourceMappingURL=copy-session-modal.module.js.map