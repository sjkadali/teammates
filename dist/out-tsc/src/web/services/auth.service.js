import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpRequestService } from './http-request.service';
/**
 * Handles user authentication.
 */
var AuthService = /** @class */ (function () {
    function AuthService(httpRequestService) {
        this.httpRequestService = httpRequestService;
        this.frontendUrl = environment.frontendUrl;
    }
    /**
     * Gets the user authentication information.
     */
    AuthService.prototype.getAuthUser = function (user) {
        var params = { frontendUrl: this.frontendUrl };
        if (user) {
            params.user = user;
        }
        return this.httpRequestService.get('/auth', params);
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map