import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import moment from 'moment-timezone';
import { FeedbackSessionsService } from '../../../services/feedback-sessions.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { TimezoneService } from '../../../services/timezone.service';
/**
 * Admin sessions page.
 */
var AdminSessionsPageComponent = /** @class */ (function () {
    function AdminSessionsPageComponent(timezoneService, statusMessageService, feedbackSessionsService, httpRequestService) {
        this.timezoneService = timezoneService;
        this.statusMessageService = statusMessageService;
        this.feedbackSessionsService = feedbackSessionsService;
        this.httpRequestService = httpRequestService;
        this.totalOngoingSessions = 0;
        this.totalOpenSessions = 0;
        this.totalClosedSessions = 0;
        this.totalAwaitingSessions = 0;
        this.totalInstitutes = 0;
        this.sessions = {};
        // Tracks the whether the panel of an institute has been opened
        this.institutionPanelsStatus = {};
        this.showFilter = false;
        this.timezones = [];
        this.timezone = '';
        this.startDate = {};
        this.startTime = {};
        this.endDate = {};
        this.endTime = {};
        this.timezoneString = '';
        this.startTimeString = '';
        this.endTimeString = '';
    }
    AdminSessionsPageComponent.prototype.ngOnInit = function () {
        this.timezones = Object.keys(this.timezoneService.getTzOffsets());
        this.timezone = moment.tz.guess();
        var now = moment();
        this.startDate = {
            year: now.year(),
            month: now.month() + 1,
            day: now.date(),
        };
        this.startTime = {
            hour: now.hour(),
            minute: now.minute(),
        };
        this.endTime = {
            hour: now.hour(),
            minute: now.minute(),
        };
        var nextWeek = moment(now).add(1, 'weeks');
        this.endDate = {
            year: nextWeek.year(),
            month: nextWeek.month() + 1,
            day: nextWeek.date(),
        };
        this.getFeedbackSessions();
    };
    /**
     * Opens all institution panels.
     */
    AdminSessionsPageComponent.prototype.openAllInstitutions = function () {
        for (var _i = 0, _a = Object.keys(this.institutionPanelsStatus); _i < _a.length; _i++) {
            var institution = _a[_i];
            this.institutionPanelsStatus[institution] = true;
        }
    };
    /**
     * Closes all institution panels.
     */
    AdminSessionsPageComponent.prototype.closeAllInstitutions = function () {
        for (var _i = 0, _a = Object.keys(this.institutionPanelsStatus); _i < _a.length; _i++) {
            var institution = _a[_i];
            this.institutionPanelsStatus[institution] = false;
        }
    };
    /**
     * Converts milliseconds to readable date format.
     */
    AdminSessionsPageComponent.prototype.showDateFromMillis = function (millis) {
        return moment(millis).format('ddd, DD MMM YYYY, hh:mm a');
    };
    AdminSessionsPageComponent.prototype.getMomentInstant = function (year, month, day, hour, minute) {
        var inst = moment.tz(this.timezone);
        inst.set('year', year);
        inst.set('month', month);
        inst.set('date', day);
        inst.set('hour', hour);
        inst.set('minute', minute);
        return inst;
    };
    /**
     * Gets the feedback sessions which have opening time satisfying the query range.
     */
    AdminSessionsPageComponent.prototype.getFeedbackSessions = function () {
        var _this = this;
        var startTime = this.getMomentInstant(this.startDate.year, this.startDate.month - 1, this.startDate.day, this.startTime.hour, this.startTime.minute);
        var endTime = this.getMomentInstant(this.endDate.year, this.endDate.month - 1, this.endDate.day, this.endTime.hour, this.endTime.minute);
        var displayFormat = 'ddd, DD MMM YYYY, hh:mm a';
        this.startTimeString = startTime.format(displayFormat);
        this.endTimeString = endTime.format(displayFormat);
        this.timezoneString = this.timezone;
        this.feedbackSessionsService.getOngoingSessions(startTime.toDate().getTime(), endTime.toDate().getTime())
            .subscribe(function (resp) {
            _this.totalOngoingSessions = resp.totalOngoingSessions;
            _this.totalOpenSessions = resp.totalOpenSessions;
            _this.totalClosedSessions = resp.totalClosedSessions;
            _this.totalAwaitingSessions = resp.totalAwaitingSessions;
            _this.totalInstitutes = resp.totalInstitutes;
            Object.keys(resp.sessions).forEach(function (key) {
                _this.sessions[key] = resp.sessions[key].map(function (ongoingSession) {
                    return {
                        ongoingSession: ongoingSession,
                    };
                });
            });
            _this.institutionPanelsStatus = {};
            for (var _i = 0, _a = Object.keys(resp.sessions); _i < _a.length; _i++) {
                var institution = _a[_i];
                _this.institutionPanelsStatus[institution] = true;
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Gets the response rate of a feedback session.
     */
    AdminSessionsPageComponent.prototype.getResponseRate = function (institute, courseId, feedbackSessionName, event) {
        var _this = this;
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        var paramMap = {
            courseid: courseId,
            fsname: feedbackSessionName,
        };
        this.httpRequestService.get('/session/stats', paramMap).subscribe(function (resp) {
            var sessions = _this.sessions[institute].filter(function (session) {
                return session.ongoingSession.courseId === courseId
                    && session.ongoingSession.feedbackSessionName === feedbackSessionName;
            });
            if (sessions.length) {
                sessions[0].responseRate = resp.submittedTotal + " / " + resp.expectedTotal;
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    AdminSessionsPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-admin-sessions-page',
            templateUrl: './admin-sessions-page.component.html',
            styleUrls: ['./admin-sessions-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TimezoneService,
            StatusMessageService,
            FeedbackSessionsService,
            HttpRequestService])
    ], AdminSessionsPageComponent);
    return AdminSessionsPageComponent;
}());
export { AdminSessionsPageComponent };
//# sourceMappingURL=admin-sessions-page.component.js.map