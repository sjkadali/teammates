import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
/**
 * Handles HTTP requests to the application back-end.
 *
 * This service is not appropriate for requesting static asset files.
 */
var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(httpClient) {
        this.httpClient = httpClient;
        this.backendUrl = environment.backendUrl;
        this.withCredentials = environment.withCredentials;
    }
    /**
     * Builds an HttpParams object from a standard key-value mapping.
     */
    HttpRequestService.prototype.buildParams = function (paramsMap) {
        var params = new HttpParams();
        for (var _i = 0, _a = Object.keys(paramsMap); _i < _a.length; _i++) {
            var key = _a[_i];
            if (paramsMap[key]) {
                params = params.append(key, paramsMap[key]);
            }
        }
        return params;
    };
    /**
     * Executes GET request.
     */
    HttpRequestService.prototype.get = function (endpoint, paramsMap, responseType) {
        if (paramsMap === void 0) { paramsMap = {}; }
        if (responseType === void 0) { responseType = 'json'; }
        var params = this.buildParams(paramsMap);
        var withCredentials = this.withCredentials;
        return this.httpClient.get(this.backendUrl + "/webapi" + endpoint, { params: params, responseType: responseType, withCredentials: withCredentials });
    };
    /**
     * Executes POST request.
     */
    HttpRequestService.prototype.post = function (endpoint, paramsMap, body) {
        if (paramsMap === void 0) { paramsMap = {}; }
        if (body === void 0) { body = null; }
        var params = this.buildParams(paramsMap);
        var withCredentials = this.withCredentials;
        var headers = this.getCsrfHeader();
        return this.httpClient.post(this.backendUrl + "/webapi" + endpoint, body, { params: params, headers: headers, withCredentials: withCredentials });
    };
    /**
     * Executes PUT request.
     */
    HttpRequestService.prototype.put = function (endpoint, paramsMap, body) {
        if (paramsMap === void 0) { paramsMap = {}; }
        if (body === void 0) { body = null; }
        var params = this.buildParams(paramsMap);
        var withCredentials = this.withCredentials;
        var headers = this.getCsrfHeader();
        return this.httpClient.put(this.backendUrl + "/webapi" + endpoint, body, { params: params, headers: headers, withCredentials: withCredentials });
    };
    /**
     * Executes DELETE request.
     */
    HttpRequestService.prototype.delete = function (endpoint, paramsMap) {
        if (paramsMap === void 0) { paramsMap = {}; }
        var params = this.buildParams(paramsMap);
        var withCredentials = this.withCredentials;
        var headers = this.getCsrfHeader();
        return this.httpClient.delete(this.backendUrl + "/webapi" + endpoint, { params: params, headers: headers, withCredentials: withCredentials });
    };
    HttpRequestService.prototype.getCsrfHeader = function () {
        if (!document.cookie) {
            return new HttpHeaders();
        }
        var csrfTokenCookie = document.cookie.split('; ').filter(function (c) { return c.startsWith('CSRF-TOKEN'); });
        if (csrfTokenCookie.length) {
            return new HttpHeaders({
                'X-CSRF-TOKEN': csrfTokenCookie[0].replace('CSRF-TOKEN=', ''),
            });
        }
        return new HttpHeaders();
    };
    HttpRequestService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HttpRequestService);
    return HttpRequestService;
}());
export { HttpRequestService };
//# sourceMappingURL=http-request.service.js.map