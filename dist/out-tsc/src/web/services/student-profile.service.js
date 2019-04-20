import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
/**
 * Handles student profile related logic provision.
 */
var StudentProfileService = /** @class */ (function () {
    function StudentProfileService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    /**
     * Gets a student profile by calling API.
     * If both studentEmail and courseId are provided, it returns profile of that student.
     * If either one is missing, it returns the profile of the current login student.
     */
    StudentProfileService.prototype.getStudentProfile = function (studentEmail, courseId) {
        if (studentEmail && courseId) {
            var paramsMap = {
                studentemail: studentEmail,
                courseid: courseId,
            };
            return this.httpRequestService.get('/student/profile', paramsMap);
        }
        return this.httpRequestService.get('/student/profile');
    };
    /**
     * Updates a student profile by calling API.
     */
    StudentProfileService.prototype.updateStudentProfile = function (user, googleId, requestBody) {
        var paramsMap = {
            user: user,
            googleid: googleId,
        };
        return this.httpRequestService.put('/student/profile', paramsMap, requestBody);
    };
    StudentProfileService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], StudentProfileService);
    return StudentProfileService;
}());
export { StudentProfileService };
//# sourceMappingURL=student-profile.service.js.map