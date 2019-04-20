import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Student home page.
 */
var StudentHomePageComponent = /** @class */ (function () {
    function StudentHomePageComponent(route, httpRequestService, statusMessageService) {
        this.route = route;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        // Tooltip messages
        this.studentFeedbackSessionStatusPublished = 'The responses for the session have been published and can now be viewed.';
        this.studentFeedbackSessionStatusNotPublished = 'The responses for the session have not yet been published and cannot be viewed.';
        this.studentFeedbackSessionStatusAwaiting = 'The session is not open for submission at this time. It is expected to open later.';
        this.studentFeedbackSessionStatusPending = 'The feedback session is yet to be completed by you.';
        this.studentFeedbackSessionStatusSubmitted = 'You have submitted your feedback for this session.';
        this.studentFeedbackSessionStatusClosed = ' The session is now closed for submissions.';
        this.user = '';
        this.recentlyJoinedCourseId = '';
        this.hasEventualConsistencyMsg = false;
        this.courses = [];
        this.sessionsInfoMap = {};
    }
    StudentHomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.getStudentCourses(queryParams.persistencecourse);
        });
    };
    /**
     * Gets the courses and feedback sessions involving the student.
     */
    StudentHomePageComponent.prototype.getStudentCourses = function (persistencecourse) {
        var _this = this;
        var paramMap = { persistencecourse: persistencecourse };
        this.httpRequestService.get('/student/courses', paramMap).subscribe(function (resp) {
            _this.recentlyJoinedCourseId = resp.recentlyJoinedCourseId;
            _this.hasEventualConsistencyMsg = resp.hasEventualConsistencyMsg;
            _this.courses = resp.courses;
            _this.sessionsInfoMap = resp.sessionsInfoMap;
            if (_this.hasEventualConsistencyMsg) {
                _this.statusMessageService.showWarningMessage('You have successfully joined the course ' + ("" + _this.recentlyJoinedCourseId) + '. '
                    + 'Updating of the course data on our servers is currently in progress '
                    + 'and will be completed in a few minutes. '
                    + 'Please refresh this page in a few minutes to see the course ' + ("" + _this.recentlyJoinedCourseId)
                    + ' in the list below.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Gets the tooltip message for the submission status.
     */
    StudentHomePageComponent.prototype.getSubmissionStatusTooltip = function (sessionInfoMap) {
        var msg = '';
        if (sessionInfoMap.isWaitingToOpen) {
            msg += this.studentFeedbackSessionStatusAwaiting;
        }
        else if (sessionInfoMap.isSubmitted) {
            msg += this.studentFeedbackSessionStatusSubmitted;
        }
        else {
            msg += this.studentFeedbackSessionStatusPending;
        }
        if (!sessionInfoMap.isOpened && !sessionInfoMap.isWaitingToOpen) {
            msg += this.studentFeedbackSessionStatusClosed;
        }
        return msg;
    };
    /**
     * Gets the tooltip message for the response status.
     */
    StudentHomePageComponent.prototype.getResponseStatusTooltip = function (isPublished) {
        if (isPublished) {
            return this.studentFeedbackSessionStatusPublished;
        }
        return this.studentFeedbackSessionStatusNotPublished;
    };
    StudentHomePageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-home-page',
            templateUrl: './student-home-page.component.html',
            styleUrls: ['./student-home-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, HttpRequestService,
            StatusMessageService])
    ], StudentHomePageComponent);
    return StudentHomePageComponent;
}());
export { StudentHomePageComponent };
//# sourceMappingURL=student-home-page.component.js.map