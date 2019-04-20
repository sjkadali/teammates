import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
/**
 * Handles account related logic provision
 */
var AccountService = /** @class */ (function () {
    function AccountService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    /**
     * Creates an account by calling API.
     */
    AccountService.prototype.createAccount = function (request) {
        return this.httpRequestService.post('/account', {}, request);
    };
    /**
     * Downgrades an account from instructor to student by calling API.
     */
    AccountService.prototype.downgradeAccount = function (id) {
        var paramMap = {
            instructorid: id,
        };
        return this.httpRequestService.put('/account/downgrade', paramMap);
    };
    /**
     * Deletes an account by calling API.
     */
    AccountService.prototype.deleteAccount = function (id) {
        var paramMap = {
            instructorid: id,
        };
        return this.httpRequestService.delete('/account', paramMap);
    };
    /**
     * Resets a student account by calling API.
     */
    AccountService.prototype.resetStudentAccount = function (courseId, studentEmail) {
        var paramMap = {
            courseid: courseId,
            studentemail: studentEmail,
        };
        return this.httpRequestService.put('/account/reset', paramMap);
    };
    /**
     * Resets an instructor account by calling API.
     */
    AccountService.prototype.resetInstructorAccount = function (courseId, instructorEmail) {
        var paramMap = {
            courseid: courseId,
            instructoremail: instructorEmail,
        };
        return this.httpRequestService.put('/account/reset', paramMap);
    };
    /**
     * Search accounts by calling API.
     */
    AccountService.prototype.searchAccounts = function (searchKey) {
        var paramMap = {
            searchkey: searchKey,
        };
        return this.httpRequestService.get('/accounts/search', paramMap);
    };
    AccountService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], AccountService);
    return AccountService;
}());
export { AccountService };
//# sourceMappingURL=account.service.js.map