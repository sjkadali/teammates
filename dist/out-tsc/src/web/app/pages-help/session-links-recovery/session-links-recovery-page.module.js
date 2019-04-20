import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SessionLinksRecoveryPageComponent } from './session-links-recovery-page.component';
/**
 * Module for student recover session links page.
 */
var SessionLinksRecoveryPageModule = /** @class */ (function () {
    function SessionLinksRecoveryPageModule() {
    }
    SessionLinksRecoveryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgxCaptchaModule,
            ],
            declarations: [
                SessionLinksRecoveryPageComponent,
            ],
            exports: [
                SessionLinksRecoveryPageComponent,
            ],
        })
    ], SessionLinksRecoveryPageModule);
    return SessionLinksRecoveryPageModule;
}());
export { SessionLinksRecoveryPageModule };
//# sourceMappingURL=session-links-recovery-page.module.js.map