import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { CourseService } from '../../../services/course.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { NavigationService } from '../../../services/navigation.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * A table displaying a list of students from a course, with buttons to view/edit/delete students etc.
 */
var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(router, httpRequestService, statusMessageService, navigationService, courseService, ngbModal) {
        this.router = router;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.navigationService = navigationService;
        this.courseService = courseService;
        this.ngbModal = ngbModal;
        this.courseId = '';
        this.sections = [];
        this.useGrayHeading = true;
        this.listOfStudentsToHide = [];
        this.isHideTableHead = false;
        this.enableRemindButton = false;
        this.backendUrl = environment.backendUrl;
    }
    StudentListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Returns whether this course are divided into sections
     */
    StudentListComponent.prototype.hasSection = function () {
        return !((this.sections.length === 1) && (this.sections[0].sectionName === 'None'));
    };
    /**
     * Function to be passed to ngFor, so that students in the list is tracked by email
     */
    StudentListComponent.prototype.trackByFn = function (_index, item) {
        return item.email;
    };
    /**
     * Load the profile picture of a student
     */
    StudentListComponent.prototype.loadPhoto = function (student) {
        var _this = this;
        var paramMap = { courseid: this.courseId, studentemail: student.email };
        this.httpRequestService.get('/courses/students/details', paramMap).subscribe(function (resp) {
            student.photoUrl = resp.studentProfile ? _this.getPictureUrl(resp.studentProfile.pictureKey)
                : '/assets/images/profile_picture_default.png';
        }, function (resp) {
            _this.statusMessageService.showErrorMessage("Error retrieving student photo: " + resp.error.message);
        });
    };
    /**
     * Construct the url for the profile picture from the given key.
     */
    StudentListComponent.prototype.getPictureUrl = function (pictureKey) {
        if (!pictureKey) {
            return '/assets/images/profile_picture_default.png';
        }
        return this.backendUrl + "/webapi/students/profilePic?blob-key=" + pictureKey;
    };
    /**
     * Open the student delete confirmation modal.
     */
    StudentListComponent.prototype.openModal = function (content) {
        this.ngbModal.open(content);
    };
    /**
     * Remind the student from course.
     */
    StudentListComponent.prototype.remindStudentFromCourse = function (studentEmail) {
        var _this = this;
        this.courseService.remindStudentForJoin(this.courseId, studentEmail)
            .subscribe(function (resp) {
            _this.navigationService.navigateWithSuccessMessagePreservingParams(_this.router, '/web/instructor/courses/details', resp.message);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Removes the student from course.
     */
    StudentListComponent.prototype.removeStudentFromCourse = function (studentEmail) {
        var _this = this;
        var paramMap = {
            courseid: this.courseId,
            studentemail: studentEmail,
        };
        this.httpRequestService.delete('/student', paramMap).subscribe(function () {
            _this.statusMessageService.showSuccessMessage("Student is successfully deleted from course \"" + _this.courseId + "\"");
            _this.sections.forEach(function (section) {
                section.students = section.students.filter(function (student) { return student.email !== studentEmail; });
            });
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Determines which row in the studentTable should be hidden.
     */
    StudentListComponent.prototype.isStudentToHide = function (studentEmail) {
        return this.listOfStudentsToHide.indexOf(studentEmail) > -1;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], StudentListComponent.prototype, "courseId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], StudentListComponent.prototype, "sections", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListComponent.prototype, "useGrayHeading", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], StudentListComponent.prototype, "listOfStudentsToHide", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListComponent.prototype, "isHideTableHead", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListComponent.prototype, "enableRemindButton", void 0);
    StudentListComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-list',
            templateUrl: './student-list.component.html',
            styleUrls: ['./student-list.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            HttpRequestService,
            StatusMessageService,
            NavigationService,
            CourseService,
            NgbModal])
    ], StudentListComponent);
    return StudentListComponent;
}());
export { StudentListComponent };
//# sourceMappingURL=student-list.component.js.map