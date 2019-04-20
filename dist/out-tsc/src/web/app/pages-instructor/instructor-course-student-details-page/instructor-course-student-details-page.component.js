import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Instructor course student details page.
 */
var InstructorCourseStudentDetailsPageComponent = /** @class */ (function () {
    function InstructorCourseStudentDetailsPageComponent(route, httpRequestService, statusMessageService) {
        this.route = route;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.user = '';
    }
    InstructorCourseStudentDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadStudentDetails(queryParams.courseid, queryParams.studentemail);
        });
    };
    /**
     * Loads the student's details based on the given course ID and email.
     */
    InstructorCourseStudentDetailsPageComponent.prototype.loadStudentDetails = function (courseid, studentemail) {
        var _this = this;
        var paramMap = { courseid: courseid, studentemail: studentemail };
        this.httpRequestService.get('/courses/students/details', paramMap).subscribe(function (resp) {
            _this.student = resp.student;
            _this.studentProfile = resp.studentProfile;
            if (!_this.student) {
                _this.statusMessageService.showErrorMessage('Error retrieving student details');
            }
            if (!_this.studentProfile) {
                _this.statusMessageService.showWarningMessage('Normally, we would show the student\'s profile here. '
                    + 'However, either this student has not created a profile yet, '
                    + 'or you do not have access to view this student\'s profile.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    InstructorCourseStudentDetailsPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-course-student-details-page',
            templateUrl: './instructor-course-student-details-page.component.html',
            styleUrls: ['./instructor-course-student-details-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, HttpRequestService,
            StatusMessageService])
    ], InstructorCourseStudentDetailsPageComponent);
    return InstructorCourseStudentDetailsPageComponent;
}());
export { InstructorCourseStudentDetailsPageComponent };
//# sourceMappingURL=instructor-course-student-details-page.component.js.map