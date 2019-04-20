import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StatusMessageService } from './status-message.service';
/**
 * Handles navigation to different URLs and setting status messages immediately afterwards.
 *
 * Note that this is only effective for internal URLs as it uses Angular routing.
 */
var NavigationService = /** @class */ (function () {
    function NavigationService(statusMessageService) {
        this.statusMessageService = statusMessageService;
    }
    /**
     * Navigates to the selected URL and shows an error message afterwards.
     */
    NavigationService.prototype.navigateWithErrorMessage = function (router, url, message) {
        var _this = this;
        router.navigateByUrl(url).then(function () {
            _this.statusMessageService.showErrorMessage(message);
        });
    };
    /**
     * Navigates to the selected URL and shows a success message afterwards.
     */
    NavigationService.prototype.navigateWithSuccessMessage = function (router, url, message) {
        var _this = this;
        router.navigateByUrl(url).then(function () {
            _this.statusMessageService.showSuccessMessage(message);
        });
    };
    /**
     * Navigates to the selected URL preserving the previous params and shows a success message afterwards.
     */
    NavigationService.prototype.navigateWithSuccessMessagePreservingParams = function (router, url, message) {
        var _this = this;
        router.navigate([url], { queryParamsHandling: 'preserve' }).then(function () {
            _this.statusMessageService.showSuccessMessage(message);
        });
    };
    NavigationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [StatusMessageService])
    ], NavigationService);
    return NavigationService;
}());
export { NavigationService };
//# sourceMappingURL=navigation.service.js.map