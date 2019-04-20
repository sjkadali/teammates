import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminSessionsPageComponent } from './admin-sessions-page.component';
/**
 * Module for admin sessions page.
 */
var AdminSessionsPageModule = /** @class */ (function () {
    function AdminSessionsPageModule() {
    }
    AdminSessionsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AdminSessionsPageComponent,
            ],
            exports: [
                AdminSessionsPageComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
                NgbModule,
            ],
        })
    ], AdminSessionsPageModule);
    return AdminSessionsPageModule;
}());
export { AdminSessionsPageModule };
//# sourceMappingURL=admin-sessions-page.module.js.map