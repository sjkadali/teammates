import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { Gender } from '../../../types/gender';
/**
 * Student course details page.
 */
var StudentCourseDetailsPageComponent = /** @class */ (function () {
    function StudentCourseDetailsPageComponent(route, httpRequestService, statusMessageService) {
        this.route = route;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.Gender = Gender; // enum
        this.user = '';
        this.backendUrl = environment.backendUrl;
    }
    StudentCourseDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadStudentDetails(queryParams.courseid, _this.user);
        });
    };
    /**
     * Fetch the data to be displayed on the page.
     * @param courseid: id of the course queried
     * @param user: only used in admin masquerade mode, value should be student id
     */
    StudentCourseDetailsPageComponent.prototype.loadStudentDetails = function (courseid, user) {
        var _this = this;
        var paramMap = { courseid: courseid, user: user };
        this.httpRequestService.get('/student/course', paramMap).subscribe(function (resp) {
            _this.student = resp.student;
            _this.instructorDetails = resp.instructorDetails;
            _this.course = resp.course;
            _this.teammateProfiles = resp.teammateProfiles;
            if (!_this.student) {
                _this.statusMessageService.showErrorMessage('Error retrieving student details');
            }
            if (!_this.course) {
                _this.statusMessageService.showErrorMessage('Error retrieving course details');
            }
            if (!resp.instructorDetails) {
                _this.statusMessageService.showErrorMessage('Error retrieving instructor details');
            }
            if (!_this.teammateProfiles) {
                _this.statusMessageService.showWarningMessage('You do not have any teammates yet.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Construct the url for the profile picture from the given key.
     */
    StudentCourseDetailsPageComponent.prototype.getPictureUrl = function (pictureKey) {
        if (!pictureKey) {
            return '/assets/images/profile_picture_default.png';
        }
        return this.backendUrl + "/webapi/students/profilePic?blob-key=" + pictureKey;
    };
    StudentCourseDetailsPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-course-details-page',
            templateUrl: './student-course-details-page.component.html',
            styleUrls: ['./student-course-details-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, HttpRequestService,
            StatusMessageService])
    ], StudentCourseDetailsPageComponent);
    return StudentCourseDetailsPageComponent;
}());
export { StudentCourseDetailsPageComponent };
//# sourceMappingURL=student-course-details-page.component.js.map