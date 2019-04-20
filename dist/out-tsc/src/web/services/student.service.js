import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
/**
 * Handles student related logic provision.
 */
var StudentService = /** @class */ (function () {
    function StudentService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    /**
     * Gets all students in a course as an instructor by calling API.
     */
    StudentService.prototype.getStudentsFromCourse = function (courseId) {
        var paramsMap = {
            courseid: courseId,
        };
        return this.httpRequestService.get('/students', paramsMap);
    };
    StudentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], StudentService);
    return StudentService;
}());
export { StudentService };
//# sourceMappingURL=student.service.js.map