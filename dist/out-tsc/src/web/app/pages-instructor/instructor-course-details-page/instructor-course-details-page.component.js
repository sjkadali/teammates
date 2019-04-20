import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { ClipboardService } from 'ngx-clipboard';
import { CourseService } from '../../../services/course.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { NavigationService } from '../../../services/navigation.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Instructor course details page.
 */
var InstructorCourseDetailsPageComponent = /** @class */ (function () {
    function InstructorCourseDetailsPageComponent(route, router, clipboardService, httpRequestService, statusMessageService, courseService, ngbModal, navigationService) {
        this.route = route;
        this.router = router;
        this.clipboardService = clipboardService;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.courseService = courseService;
        this.ngbModal = ngbModal;
        this.navigationService = navigationService;
        this.user = '';
        this.instructors = [];
        this.sections = [];
        this.courseStudentListAsCsv = '';
        this.loading = false;
        this.isAjaxSuccess = true;
    }
    InstructorCourseDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadCourseDetails(queryParams.courseid);
        });
    };
    /**
     * Loads the course's details based on the given course ID and email.
     */
    InstructorCourseDetailsPageComponent.prototype.loadCourseDetails = function (courseid) {
        var _this = this;
        var paramMap = { courseid: courseid };
        this.httpRequestService.get('/courses/details', paramMap).subscribe(function (resp) {
            _this.courseDetails = resp.courseDetails;
            _this.currentInstructor = resp.currentInstructor;
            _this.instructors = resp.instructors;
            _this.sections = resp.sections;
            if (!_this.courseDetails) {
                _this.statusMessageService.showErrorMessage('Error retrieving course details');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Automatically copy the text content provided.
     */
    InstructorCourseDetailsPageComponent.prototype.copyContent = function (text) {
        this.clipboardService.copyFromContent(text);
    };
    /**
     * Open the modal for different buttons and link.
     */
    InstructorCourseDetailsPageComponent.prototype.openModal = function (content) {
        this.ngbModal.open(content);
    };
    /**
     * Delete all the students in a course.
     */
    InstructorCourseDetailsPageComponent.prototype.deleteAllStudentsFromCourse = function (courseId) {
        var _this = this;
        var paramsMap = {
            user: this.user,
            courseid: courseId,
        };
        this.httpRequestService.delete('/students', paramsMap)
            .subscribe(function (resp) {
            _this.loadCourseDetails(courseId);
            _this.statusMessageService.showSuccessMessage(resp.message);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Download all the students from a course.
     */
    InstructorCourseDetailsPageComponent.prototype.downloadAllStudentsFromCourse = function (courseId) {
        var _this = this;
        var filename = courseId.concat('_studentList') + ".csv";
        var blob;
        // Calling REST API only the first time to laod the downloadable data
        if (this.loading) {
            blob = new Blob([this.courseStudentListAsCsv], { type: 'text/csv' });
            saveAs(blob, filename);
        }
        else {
            var paramsMap = {
                user: this.user,
                courseid: courseId,
            };
            this.httpRequestService.get('/students/csv', paramsMap, 'text')
                .subscribe(function (resp) {
                blob = new Blob([resp], { type: 'text/csv' });
                saveAs(blob, filename);
                _this.courseStudentListAsCsv = resp;
                _this.loading = false;
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        }
    };
    /**
     * Load the student list in csv table format
     */
    InstructorCourseDetailsPageComponent.prototype.loadStudentsListCsv = function (courseId) {
        var _this = this;
        this.loading = true;
        // Calls the REST API once only when student list is not loaded
        if (this.courseStudentListAsCsv !== '') {
            this.loading = false;
            return;
        }
        var paramsMap = {
            user: this.user,
            courseid: courseId,
        };
        this.httpRequestService.get('/students/csv', paramsMap, 'text')
            .subscribe(function (resp) {
            _this.courseStudentListAsCsv = resp;
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
            _this.isAjaxSuccess = false;
        });
        this.loading = false;
    };
    /**
     * Remind all yet to join students in a course.
     */
    InstructorCourseDetailsPageComponent.prototype.remindAllStudentsFromCourse = function (courseId) {
        var _this = this;
        this.courseService.remindUnregisteredStudentsForJoin(courseId).subscribe(function (resp) {
            _this.navigationService.navigateWithSuccessMessagePreservingParams(_this.router, '/web/instructor/courses/details', resp.message);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Converts a csv string to a html table string for displaying.
     */
    InstructorCourseDetailsPageComponent.prototype.convertToHtmlTable = function (str) {
        var _this = this;
        var result = '<table class=\"table table-bordered table-striped table-sm\">';
        var rowData;
        var lines = str.split(/\r?\n/);
        lines.forEach(function (line) {
            rowData = _this.getTableData(line);
            if (rowData.filter(function (s) { return s !== ''; }).length === 0) {
                return;
            }
            result = result.concat('<tr>');
            for (var _i = 0, rowData_1 = rowData; _i < rowData_1.length; _i++) {
                var td = rowData_1[_i];
                result = result.concat("<td>" + td + "</td>");
            }
            result = result.concat('</tr>');
        });
        return result.concat('</table>');
    };
    /**
     * Obtain a string without quotations.
     */
    InstructorCourseDetailsPageComponent.prototype.getTableData = function (line) {
        var output = [];
        var inquote = false;
        var buffer = '';
        var data = line.split('');
        for (var i = 0; i < data.length; i += 1) {
            if (data[i] === '"') {
                if (i + 1 < data.length && data[i + 1] === '"') {
                    i += 1;
                }
                else {
                    inquote = !inquote;
                    continue;
                }
            }
            if (data[i] === ',') {
                if (inquote) {
                    buffer = buffer.concat(data[i]);
                }
                else {
                    output.push(buffer);
                    buffer = '';
                }
            }
            else {
                buffer = buffer.concat(data[i]);
            }
        }
        output.push(buffer.trim());
        return output;
    };
    InstructorCourseDetailsPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-course-details-page',
            templateUrl: './instructor-course-details-page.component.html',
            styleUrls: ['./instructor-course-details-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
            ClipboardService,
            HttpRequestService,
            StatusMessageService,
            CourseService,
            NgbModal, NavigationService])
    ], InstructorCourseDetailsPageComponent);
    return InstructorCourseDetailsPageComponent;
}());
export { InstructorCourseDetailsPageComponent };
//# sourceMappingURL=instructor-course-details-page.component.js.map