import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
/**
 * Handles course related logic provision.
 */
var CourseService = /** @class */ (function () {
    function CourseService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    /**
     * Get course data by calling API.
     */
    CourseService.prototype.getCourse = function (courseId) {
        var paramMap = {
            courseid: courseId,
        };
        return this.httpRequestService.get('/course', paramMap);
    };
    /**
     * Creates a course by calling API.
     */
    CourseService.prototype.createCourse = function (request) {
        var paramMap = {};
        return this.httpRequestService.post('/course', paramMap, request);
    };
    /**
     * Updates a course by calling API.
     */
    CourseService.prototype.updateCourse = function (courseid, request) {
        var paramMap = { courseid: courseid };
        return this.httpRequestService.put('/course', paramMap, request);
    };
    /**
     * Deletes a course by calling API.
     */
    CourseService.prototype.deleteCourse = function (courseid) {
        var paramMap = { courseid: courseid };
        return this.httpRequestService.delete('/course', paramMap);
    };
    /**
     * Changes the archive status of a course by calling API.
     */
    CourseService.prototype.changeArchiveStatus = function (courseid, request) {
        var paramMap = { courseid: courseid };
        return this.httpRequestService.put('/course/archive', paramMap, request);
    };
    /**
     * Bin (soft-delete) a course by calling API.
     */
    CourseService.prototype.binCourse = function (courseid) {
        var paramMap = { courseid: courseid };
        return this.httpRequestService.put('/bin/course', paramMap);
    };
    /**
     * Restore a soft-deleted course by calling API.
     */
    CourseService.prototype.restoreCourse = function (courseid) {
        var paramMap = { courseid: courseid };
        return this.httpRequestService.delete('/bin/course', paramMap);
    };
    /**
     * Join a course by calling API.
     */
    CourseService.prototype.joinCourse = function (regKey, entityType) {
        var paramMap = {
            key: regKey,
            entitytype: entityType,
        };
        return this.httpRequestService.get('/join', paramMap);
    };
    /**
     * Send join reminder emails to unregistered students.
     */
    CourseService.prototype.remindUnregisteredStudentsForJoin = function (courseId) {
        var paramMap = {
            courseid: courseId,
        };
        return this.httpRequestService.post('/join/remind', paramMap);
    };
    /**
     * Send join reminder email to a student.
     */
    CourseService.prototype.remindStudentForJoin = function (courseId, studentEmail) {
        var paramMap = {
            courseid: courseId,
            studentemail: studentEmail,
        };
        return this.httpRequestService.post('/join/remind', paramMap);
    };
    /**
     * Send join reminder email to an instructor.
     */
    CourseService.prototype.remindInstructorForJoin = function (courseId, instructorEmail) {
        var paramMap = {
            courseid: courseId,
            instructoremail: instructorEmail,
        };
        return this.httpRequestService.post('/join/remind', paramMap);
    };
    /**
     * Checks if there are responses for a course.
     */
    CourseService.prototype.hasResponsesForCourse = function (courseId) {
        var paramMap = {
            courseid: courseId,
        };
        return this.httpRequestService.get('/hasResponses', paramMap);
    };
    CourseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], CourseService);
    return CourseService;
}());
export { CourseService };
//# sourceMappingURL=course.service.js.map