import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
/**
 * Handles operations related to status message provision.
 */
var StatusMessageService = /** @class */ (function () {
    function StatusMessageService(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * Shows a success message on the page.
     */
    StatusMessageService.prototype.showSuccessMessage = function (message) {
        this.showMessage({
            message: message,
            color: 'snackbar-success',
        });
    };
    /**
     * Shows a warning message on the page.
     */
    StatusMessageService.prototype.showWarningMessage = function (message) {
        this.showMessage({
            message: message,
            color: 'snackbar-warning',
        });
    };
    /**
     * Shows an error message on the page.
     */
    StatusMessageService.prototype.showErrorMessage = function (message) {
        this.showMessage({
            message: message,
            color: 'snackbar-danger',
        });
    };
    StatusMessageService.prototype.showMessage = function (message) {
        this.snackBar.open(message.message, '', {
            duration: 10000,
            verticalPosition: 'top',
            panelClass: ['snackbar', message.color],
        });
    };
    /**
     * Shows a success message containing HTML on the page
     */
    StatusMessageService.prototype.showSuccessMessageTemplate = function (template) {
        this.showTemplate(template, 'snackbar-success');
    };
    StatusMessageService.prototype.showTemplate = function (template, color) {
        this.snackBar.openFromTemplate(template, {
            duration: 10000,
            verticalPosition: 'top',
            panelClass: ['snackbar', color],
        });
    };
    StatusMessageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [MatSnackBar])
    ], StatusMessageService);
    return StatusMessageService;
}());
export { StatusMessageService };
//# sourceMappingURL=status-message.service.js.map