import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AccountService } from '../../../services/account.service';
/**
 * Admin home page.
 */
var AdminHomePageComponent = /** @class */ (function () {
    function AdminHomePageComponent(accountService) {
        this.accountService = accountService;
        this.instructorDetails = '';
        this.instructorName = '';
        this.instructorEmail = '';
        this.instructorInstitution = '';
        this.instructorsConsolidated = [];
        this.activeRequests = 0;
    }
    /**
     * Validates and adds the instructor details filled with first form.
     */
    AdminHomePageComponent.prototype.validateAndAddInstructorDetails = function () {
        var invalidLines = [];
        for (var _i = 0, _a = this.instructorDetails.split(/\r?\n/); _i < _a.length; _i++) {
            var instructorDetail = _a[_i];
            var instructorDetailSplit = instructorDetail.split(/ ?\| ?/);
            if (instructorDetailSplit.length < 3) {
                // TODO handle error
                invalidLines.push(instructorDetail);
                continue;
            }
            if (!instructorDetailSplit[0] || !instructorDetailSplit[1] || !instructorDetailSplit[2]) {
                // TODO handle error
                invalidLines.push(instructorDetail);
                continue;
            }
            this.instructorsConsolidated.push({
                name: instructorDetailSplit[0],
                email: instructorDetailSplit[1],
                institution: instructorDetailSplit[2],
                status: 'PENDING',
            });
        }
        this.instructorDetails = invalidLines.join('\r\n');
    };
    /**
     * Validates and adds the instructor detail filled with second form.
     */
    AdminHomePageComponent.prototype.validateAndAddInstructorDetail = function () {
        if (!this.instructorName || !this.instructorEmail || !this.instructorInstitution) {
            // TODO handle error
            return;
        }
        this.instructorsConsolidated.push({
            name: this.instructorName,
            email: this.instructorEmail,
            institution: this.instructorInstitution,
            status: 'PENDING',
        });
        this.instructorName = '';
        this.instructorEmail = '';
        this.instructorInstitution = '';
    };
    /**
     * Adds the instructor at the i-th index.
     */
    AdminHomePageComponent.prototype.addInstructor = function (i) {
        var _this = this;
        var instructor = this.instructorsConsolidated[i];
        if (instructor.status !== 'PENDING' && instructor.status !== 'FAIL') {
            return;
        }
        this.activeRequests += 1;
        instructor.status = 'ADDING';
        this.accountService.createAccount({
            instructorEmail: instructor.email,
            instructorName: instructor.name,
            instructorInstitution: instructor.institution,
        }).subscribe(function (resp) {
            instructor.status = 'SUCCESS';
            instructor.joinLink = resp.joinLink;
            _this.activeRequests -= 1;
        }, function (resp) {
            instructor.status = 'FAIL';
            instructor.message = resp.error.message;
            _this.activeRequests -= 1;
        });
    };
    /**
     * Cancels the instructor at the i-th index.
     */
    AdminHomePageComponent.prototype.cancelInstructor = function (i) {
        this.instructorsConsolidated.splice(i, 1);
    };
    /**
     * Adds all the pending and failed-to-add instructors.
     */
    AdminHomePageComponent.prototype.addAllInstructors = function () {
        for (var i = 0; i < this.instructorsConsolidated.length; i += 1) {
            this.addInstructor(i);
        }
    };
    AdminHomePageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-admin-home-page',
            templateUrl: './admin-home-page.component.html',
            styleUrls: ['./admin-home-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AccountService])
    ], AdminHomePageComponent);
    return AdminHomePageComponent;
}());
export { AdminHomePageComponent };
//# sourceMappingURL=admin-home-page.component.js.map