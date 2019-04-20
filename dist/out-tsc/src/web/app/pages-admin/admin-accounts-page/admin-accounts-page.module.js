import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminAccountsPageComponent } from './admin-accounts-page.component';
/**
 * Module for admin accounts page.
 */
var AdminAccountsPageModule = /** @class */ (function () {
    function AdminAccountsPageModule() {
    }
    AdminAccountsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AdminAccountsPageComponent,
            ],
            exports: [
                AdminAccountsPageComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
            ],
        })
    ], AdminAccountsPageModule);
    return AdminAccountsPageModule;
}());
export { AdminAccountsPageModule };
//# sourceMappingURL=admin-accounts-page.module.js.map