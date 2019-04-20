import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { NavigationService } from '../../../services/navigation.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Admin accounts page.
 */
var AdminAccountsPageComponent = /** @class */ (function () {
    function AdminAccountsPageComponent(route, router, httpRequestService, navigationService, statusMessageService, accountService) {
        this.route = route;
        this.router = router;
        this.httpRequestService = httpRequestService;
        this.navigationService = navigationService;
        this.statusMessageService = statusMessageService;
        this.accountService = accountService;
        this.instructorCourses = [];
        this.studentCourses = [];
        this.accountInfo = {
            googleId: '',
            name: '',
            email: '',
            isInstructor: false,
        };
    }
    AdminAccountsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.loadAccountInfo(queryParams.instructorid);
        });
    };
    /**
     * Loads the account information based on the given ID.
     */
    AdminAccountsPageComponent.prototype.loadAccountInfo = function (instructorid) {
        var _this = this;
        var paramMap = { instructorid: instructorid };
        this.httpRequestService.get('/accounts', paramMap).subscribe(function (resp) {
            _this.instructorCourses = resp.instructorCourses;
            _this.studentCourses = resp.studentCourses;
            _this.accountInfo = resp.accountInfo;
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Downgrades the instructor account to student.
     */
    AdminAccountsPageComponent.prototype.downgradeAccountToStudent = function () {
        var _this = this;
        var id = this.accountInfo.googleId;
        this.accountService.downgradeAccount(id).subscribe(function () {
            _this.loadAccountInfo(id);
            _this.statusMessageService.showSuccessMessage('Instructor account is successfully downgraded to student.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Deletes the entire account.
     */
    AdminAccountsPageComponent.prototype.deleteAccount = function () {
        var _this = this;
        var id = this.accountInfo.googleId;
        this.accountService.deleteAccount(id).subscribe(function () {
            _this.navigationService.navigateWithSuccessMessage(_this.router, '/web/admin/search', "Instructor account \"" + id + "\" is successfully deleted.");
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Removes the student from course.
     */
    AdminAccountsPageComponent.prototype.removeStudentFromCourse = function (courseId) {
        var _this = this;
        var id = this.accountInfo.googleId;
        var paramMap = {
            googleid: id,
            courseid: courseId,
        };
        this.httpRequestService.delete('/student', paramMap).subscribe(function () {
            _this.studentCourses = _this.studentCourses.filter(function (course) { return course.id !== courseId; });
            _this.statusMessageService.showSuccessMessage("Student is successfully deleted from course \"" + courseId + "\"");
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Removes the instructor from course.
     */
    AdminAccountsPageComponent.prototype.removeInstructorFromCourse = function (courseId) {
        var _this = this;
        var id = this.accountInfo.googleId;
        var paramMap = {
            instructorid: id,
            courseid: courseId,
        };
        this.httpRequestService.delete('/instructor', paramMap).subscribe(function () {
            _this.instructorCourses = _this.instructorCourses.filter(function (course) { return course.id !== courseId; });
            _this.statusMessageService.showSuccessMessage("Instructor is successfully deleted from course \"" + courseId + "\"");
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    AdminAccountsPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-admin-accounts-page',
            templateUrl: './admin-accounts-page.component.html',
            styleUrls: ['./admin-accounts-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, HttpRequestService,
            NavigationService, StatusMessageService,
            AccountService])
    ], AdminAccountsPageComponent);
    return AdminAccountsPageComponent;
}());
export { AdminAccountsPageComponent };
//# sourceMappingURL=admin-accounts-page.component.js.map