import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { environment } from '../../../environments/environment';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Student recover session links page.
 */
var SessionLinksRecoveryPageComponent = /** @class */ (function () {
    function SessionLinksRecoveryPageComponent(httpRequestService, statusMessageService, formBuilder) {
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.formBuilder = formBuilder;
        // ngx-recaptcha2 element properties
        this.captchaSuccess = false;
        this.size = 'normal';
        this.lang = 'en';
        this.captchaSiteKey = environment.captchaSiteKey;
    }
    SessionLinksRecoveryPageComponent.prototype.ngOnInit = function () {
        this.formSessionLinksRecovery = this.formBuilder.group({
            email: ['', Validators.required],
            recaptcha: [''],
        });
    };
    /**
     * Sends the feedback session links to the recovery email address.
     */
    SessionLinksRecoveryPageComponent.prototype.onSubmitFormSessionLinksRecovery = function (sessionLinksRecoveryForm) {
        var _this = this;
        if (!this.captchaSiteKey) {
            this.captchaResponse = '';
        }
        if (!this.formSessionLinksRecovery.valid || this.captchaResponse === undefined) {
            this.statusMessageService.showErrorMessage('Please enter a valid email address and click the reCAPTCHA before submitting.');
            return;
        }
        var paramsMap = {
            sessionlinksrecoveryemail: sessionLinksRecoveryForm.controls.email.value,
            captcharesponse: this.captchaResponse,
        };
        this.httpRequestService.post('/sessionlinksrecovery', paramsMap)
            .subscribe(function (resp) {
            resp.isEmailSent
                ? _this.statusMessageService.showSuccessMessage(resp.message)
                : _this.statusMessageService.showErrorMessage(resp.message);
        }, function (response) {
            _this.statusMessageService.showErrorMessage(response.error.message);
        });
        this.resetFormGroups();
    };
    /**
     * Resets the email and reCAPTCHA input fields in the form.
     */
    SessionLinksRecoveryPageComponent.prototype.resetFormGroups = function () {
        (this.formSessionLinksRecovery = this.formBuilder.group({
            email: ['', Validators.required],
            recaptcha: [''],
        }));
        this.reloadCaptcha();
    };
    /**
     * Reloads the reCAPTCHA widget if a non-empty site key is present.
     */
    SessionLinksRecoveryPageComponent.prototype.reloadCaptcha = function () {
        if (this.captchaSiteKey) {
            this.captchaElem.reloadCaptcha();
        }
    };
    /**
     * Handles successful completion recaptcha challenge.
     * @param captchaResponse User's captcha response token
     */
    SessionLinksRecoveryPageComponent.prototype.handleSuccess = function (captchaResponse) {
        this.captchaSuccess = true;
        this.captchaResponse = captchaResponse;
    };
    tslib_1.__decorate([
        ViewChild('captchaElem'),
        tslib_1.__metadata("design:type", ReCaptcha2Component)
    ], SessionLinksRecoveryPageComponent.prototype, "captchaElem", void 0);
    SessionLinksRecoveryPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-session-links-recovery-page',
            templateUrl: './session-links-recovery-page.component.html',
            styleUrls: ['./session-links-recovery-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService,
            StatusMessageService,
            FormBuilder])
    ], SessionLinksRecoveryPageComponent);
    return SessionLinksRecoveryPageComponent;
}());
export { SessionLinksRecoveryPageComponent };
//# sourceMappingURL=session-links-recovery-page.component.js.map