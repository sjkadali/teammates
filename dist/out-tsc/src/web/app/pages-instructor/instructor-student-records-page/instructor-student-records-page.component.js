import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Instructor student records page.
 */
var InstructorStudentRecordsPageComponent = /** @class */ (function () {
    function InstructorStudentRecordsPageComponent(route, httpRequestService, statusMessageService) {
        this.route = route;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.user = '';
        this.courseId = '';
        this.studentName = '';
        this.studentEmail = '';
        this.sessions = [];
    }
    InstructorStudentRecordsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadStudentRecords(queryParams.courseid, queryParams.studentemail);
        });
    };
    /**
     * Loads the student's records based on the given course ID and email.
     */
    InstructorStudentRecordsPageComponent.prototype.loadStudentRecords = function (courseid, studentemail) {
        var _this = this;
        var paramMap = { courseid: courseid, studentemail: studentemail };
        this.httpRequestService.get('/students/records', paramMap).subscribe(function (resp) {
            _this.courseId = resp.courseId;
            _this.studentName = resp.studentName;
            _this.studentEmail = resp.studentEmail;
            _this.studentProfile = resp.studentProfile;
            _this.sessions = resp.sessionNames.map(function (sessionName) { return ({ name: sessionName, isCollapsed: false }); });
            if (!_this.studentProfile) {
                _this.statusMessageService.showWarningMessage('Normally, we would show the student\'s profile here. '
                    + 'However, either this student has not created a profile yet, '
                    + 'or you do not have access to view this student\'s profile.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    InstructorStudentRecordsPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-student-records-page',
            templateUrl: './instructor-student-records-page.component.html',
            styleUrls: ['./instructor-student-records-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, HttpRequestService,
            StatusMessageService])
    ], InstructorStudentRecordsPageComponent);
    return InstructorStudentRecordsPageComponent;
}());
export { InstructorStudentRecordsPageComponent };
//# sourceMappingURL=instructor-student-records-page.component.js.map