import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment-timezone';
import { CourseService } from '../../../../services/course.service';
import { StatusMessageService } from '../../../../services/status-message.service';
import { TimezoneService } from '../../../../services/timezone.service';
/**
 * The actual component
 */
var AddCourseFormComponent = /** @class */ (function () {
    function AddCourseFormComponent(route, statusMessageService, courseService, timezoneService) {
        this.route = route;
        this.statusMessageService = statusMessageService;
        this.courseService = courseService;
        this.timezoneService = timezoneService;
        this.user = '';
        this.isEnabled = true;
        this.courseAdded = new EventEmitter();
        this.timezones = [];
        this.timezone = '';
        this.newCourseId = '';
        this.newCourseName = '';
    }
    AddCourseFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isEnabled) {
            this.timezones = ['UTC', 'Other options ommitted...'];
            this.timezone = 'UTC';
            return;
        }
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
        });
        this.timezones = Object.keys(this.timezoneService.getTzOffsets());
        this.timezone = moment.tz.guess();
    };
    /**
     * Auto-detects timezone for instructor.
     */
    AddCourseFormComponent.prototype.onAutoDetectTimezone = function () {
        if (!this.isEnabled) {
            return;
        }
        this.timezone = moment.tz.guess();
    };
    /**
     * Submits the data to add the new course.
     */
    AddCourseFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.isEnabled) {
            return;
        }
        if (!this.newCourseId || !this.newCourseName) {
            this.statusMessageService.showErrorMessage('Please make sure you have filled in both Course ID and Name before adding the course!');
            return;
        }
        this.courseService.createCourse({
            courseName: this.newCourseName,
            timeZone: this.timezone,
            courseId: this.newCourseId,
        }).subscribe(function (course) {
            _this.courseAdded.emit();
            _this.course = course;
            _this.statusMessageService.showSuccessMessageTemplate(_this.newCourseMessageTemplate);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
        this.newCourseId = '';
        this.newCourseName = '';
        this.timezone = moment.tz.guess();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AddCourseFormComponent.prototype, "isEnabled", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], AddCourseFormComponent.prototype, "courseAdded", void 0);
    tslib_1.__decorate([
        ViewChild('newCourseMessageTemplate'),
        tslib_1.__metadata("design:type", TemplateRef)
    ], AddCourseFormComponent.prototype, "newCourseMessageTemplate", void 0);
    AddCourseFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-add-course-form',
            templateUrl: './add-course-form.component.html',
            styleUrls: ['./add-course-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            StatusMessageService,
            CourseService,
            TimezoneService])
    ], AddCourseFormComponent);
    return AddCourseFormComponent;
}());
export { AddCourseFormComponent };
//# sourceMappingURL=add-course-form.component.js.map