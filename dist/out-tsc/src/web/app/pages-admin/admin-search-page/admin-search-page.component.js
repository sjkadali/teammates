import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Admin search page.
 */
var AdminSearchPageComponent = /** @class */ (function () {
    function AdminSearchPageComponent(statusMessageService, accountService) {
        this.statusMessageService = statusMessageService;
        this.accountService = accountService;
        this.searchQuery = '';
        this.instructors = [];
        this.students = [];
    }
    /**
     * Searches for students and instructors matching the search query.
     */
    AdminSearchPageComponent.prototype.search = function () {
        var _this = this;
        this.accountService.searchAccounts(this.searchQuery).subscribe(function (resp) {
            var hasStudents = !!(resp.students && resp.students.length);
            var hasInstructors = !!(resp.instructors && resp.instructors.length);
            if (!hasStudents && !hasInstructors) {
                _this.statusMessageService.showWarningMessage('No results found.');
            }
            else {
                _this.instructors = resp.instructors;
                _this.students = resp.students;
                _this.hideAllInstructorsLinks();
                _this.hideAllStudentsLinks();
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Shows all instructors' links in the page.
     */
    AdminSearchPageComponent.prototype.showAllInstructorsLinks = function () {
        for (var _i = 0, _a = this.instructors; _i < _a.length; _i++) {
            var instructor = _a[_i];
            instructor.showLinks = true;
        }
    };
    /**
     * Hides all instructors' links in the page.
     */
    AdminSearchPageComponent.prototype.hideAllInstructorsLinks = function () {
        for (var _i = 0, _a = this.instructors; _i < _a.length; _i++) {
            var instructor = _a[_i];
            instructor.showLinks = false;
        }
    };
    /**
     * Shows all students' links in the page.
     */
    AdminSearchPageComponent.prototype.showAllStudentsLinks = function () {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            student.showLinks = true;
        }
    };
    /**
     * Hides all students' links in the page.
     */
    AdminSearchPageComponent.prototype.hideAllStudentsLinks = function () {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            student.showLinks = false;
        }
    };
    /**
     * Resets the instructor's Google ID.
     */
    AdminSearchPageComponent.prototype.resetInstructorGoogleId = function (instructor, event) {
        var _this = this;
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.accountService.resetInstructorAccount(instructor.courseId, instructor.email).subscribe(function () {
            _this.search();
            _this.statusMessageService.showSuccessMessage('The instructor\'s Google ID has been reset.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Resets the student's Google ID.
     */
    AdminSearchPageComponent.prototype.resetStudentGoogleId = function (student, event) {
        var _this = this;
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.accountService.resetStudentAccount(student.courseId, student.email).subscribe(function () {
            student.googleId = '';
            _this.statusMessageService.showSuccessMessage('The student\'s Google ID has been reset.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    AdminSearchPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-admin-search-page',
            templateUrl: './admin-search-page.component.html',
            styleUrls: ['./admin-search-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StatusMessageService, AccountService])
    ], AdminSearchPageComponent);
    return AdminSearchPageComponent;
}());
export { AdminSearchPageComponent };
//# sourceMappingURL=admin-search-page.component.js.map