import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { default as templateSessions } from '../data/template-sessions.json';
import { HttpRequestService } from './http-request.service';
/**
 * Handles sessions related logic provision.
 */
var FeedbackSessionsService = /** @class */ (function () {
    function FeedbackSessionsService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    /**
     * Gets template sessions.
     */
    FeedbackSessionsService.prototype.getTemplateSessions = function () {
        return templateSessions;
    };
    /**
     * Creates a feedback session by calling API.
     */
    FeedbackSessionsService.prototype.createFeedbackSession = function (courseId, request) {
        var paramMap = { courseid: courseId };
        return this.httpRequestService.post('/session', paramMap, request);
    };
    /**
     * Updates a feedback session by calling API.
     */
    FeedbackSessionsService.prototype.updateFeedbackSession = function (courseId, feedbackSessionName, request) {
        var paramMap = { courseid: courseId, fsname: feedbackSessionName };
        return this.httpRequestService.put('/session', paramMap, request);
    };
    /**
     * Gets all ongoing session by calling API.
     */
    FeedbackSessionsService.prototype.getOngoingSessions = function (startTime, endTime) {
        var paramMap = {
            starttime: String(startTime),
            endtime: String(endTime),
        };
        return this.httpRequestService.get('/sessions/ongoing', paramMap);
    };
    /**
     * Gets all sessions for the instructor by calling API.
     */
    FeedbackSessionsService.prototype.getFeedbackSessionsForInstructor = function (courseId) {
        var paramMap;
        if (courseId != null) {
            paramMap = {
                entitytype: 'instructor',
                courseid: courseId,
            };
        }
        else {
            paramMap = {
                entitytype: 'instructor',
                isinrecyclebin: 'false',
            };
        }
        return this.httpRequestService.get('/sessions', paramMap);
    };
    /**
     * Gets all sessions in the recycle bin for the instructor by calling API.
     */
    FeedbackSessionsService.prototype.getFeedbackSessionsInRecycleBinForInstructor = function () {
        var paramMap = {
            entitytype: 'instructor',
            isinrecyclebin: 'true',
        };
        return this.httpRequestService.get('/sessions', paramMap);
    };
    /**
     * Gets all sessions for the student by calling API.
     */
    FeedbackSessionsService.prototype.getFeedbackSessionsForStudent = function (courseId) {
        var paramMap;
        if (courseId != null) {
            paramMap = {
                entitytype: 'student',
                courseid: courseId,
            };
        }
        else {
            paramMap = {
                entitytype: 'student',
            };
        }
        return this.httpRequestService.get('/sessions', paramMap);
    };
    /**
     * Checks if there are responses for a specific question in a feedback session.
     */
    FeedbackSessionsService.prototype.hasResponsesForQuestion = function (questionId) {
        var paramMap = {
            questionid: questionId,
        };
        return this.httpRequestService.get('/hasResponses', paramMap);
    };
    FeedbackSessionsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], FeedbackSessionsService);
    return FeedbackSessionsService;
}());
export { FeedbackSessionsService };
//# sourceMappingURL=feedback-sessions.service.js.map