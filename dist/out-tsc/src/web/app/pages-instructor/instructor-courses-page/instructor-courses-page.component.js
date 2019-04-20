import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { CourseService } from '../../../services/course.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { StudentService } from '../../../services/student.service';
import { JoinState } from '../../../types/api-output';
import { CoursePermanentDeletionConfirmModalComponent, } from './course-permanent-deletion-confirm-modal/course-permanent-deletion-confirm-modal.component';
import { CourseSoftDeletionConfirmModalComponent, } from './course-soft-deletion-confirm-modal/course-soft-deletion-confirm-modal.component';
/**
 * Instructor courses list page.
 */
var InstructorCoursesPageComponent = /** @class */ (function () {
    function InstructorCoursesPageComponent(route, httpRequestService, statusMessageService, courseService, studentService, modalService) {
        this.route = route;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.courseService = courseService;
        this.studentService = studentService;
        this.modalService = modalService;
        this.user = '';
        this.activeCourses = [];
        this.archivedCourses = [];
        this.softDeletedCourses = [];
        this.instructorList = [];
        this.courseStats = {};
        this.canDeleteAll = true;
        this.canRestoreAll = true;
    }
    InstructorCoursesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadInstructorCourses();
        });
    };
    /**
     * Loads instructor courses required for this page.
     */
    InstructorCoursesPageComponent.prototype.loadInstructorCourses = function () {
        var _this = this;
        var paramMap = {
            user: this.user,
        };
        this.httpRequestService.get('/instructor/courses', paramMap).subscribe(function (resp) {
            _this.activeCourses = resp.activeCourses;
            _this.archivedCourses = resp.archivedCourses;
            _this.softDeletedCourses = resp.softDeletedCourses;
            _this.instructorList = resp.instructorList;
            for (var _i = 0, _a = _this.activeCourses; _i < _a.length; _i++) {
                var course = _a[_i];
                for (var _b = 0, _c = _this.instructorList; _b < _c.length; _b++) {
                    var instructor = _c[_b];
                    if (course.id === instructor.courseId) {
                        course.canModifyCourse = instructor.privileges.courseLevel.canmodifycourse;
                        course.canModifyStudent = instructor.privileges.courseLevel.canmodifystudent;
                        break;
                    }
                }
            }
            for (var _d = 0, _e = _this.archivedCourses; _d < _e.length; _d++) {
                var course = _e[_d];
                for (var _f = 0, _g = _this.instructorList; _f < _g.length; _f++) {
                    var instructor = _g[_f];
                    if (course.id === instructor.courseId) {
                        course.canModifyCourse = instructor.privileges.courseLevel.canmodifycourse;
                        break;
                    }
                }
            }
            for (var _h = 0, _j = _this.softDeletedCourses; _h < _j.length; _h++) {
                var course = _j[_h];
                for (var _k = 0, _l = _this.instructorList; _k < _l.length; _k++) {
                    var instructor = _l[_k];
                    if (course.id === instructor.courseId) {
                        course.canModifyCourse = instructor.privileges.courseLevel.canmodifycourse;
                        if (!course.canModifyCourse) {
                            _this.canDeleteAll = false;
                            _this.canRestoreAll = false;
                        }
                        break;
                    }
                }
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Constructs the url for course stats from the given course id.
     */
    InstructorCoursesPageComponent.prototype.getCourseStats = function (courseId) {
        var _this = this;
        if (!courseId) {
            this.statusMessageService.showErrorMessage("Course " + courseId + " is not found!");
            return;
        }
        this.studentService.getStudentsFromCourse(courseId).subscribe(function (students) {
            _this.courseStats[courseId] = {
                sections: (new Set(students.students.map(function (value) { return value.sectionName; }))).size,
                teams: (new Set(students.students.map(function (value) { return value.teamName; }))).size,
                students: students.students.length,
                unregistered: students.students.filter(function (value) { return value.joinState === JoinState.NOT_JOINED; })
                    .length,
            };
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Changes the status of an archived course.
     */
    InstructorCoursesPageComponent.prototype.changeArchiveStatus = function (courseId, toArchive) {
        var _this = this;
        if (!courseId) {
            this.statusMessageService.showErrorMessage("Course " + courseId + " is not found!");
            return;
        }
        this.courseService.changeArchiveStatus(courseId, {
            archiveStatus: toArchive,
        }).subscribe(function (courseArchive) {
            _this.loadInstructorCourses();
            if (courseArchive.isArchived) {
                _this.statusMessageService.showSuccessMessage("The course has been archived.\n          It will not appear in the home page any more. You can access archived courses from the 'Courses' tab.\n          Go there to undo the archiving and bring the course back to the home page.");
            }
            else {
                _this.statusMessageService.showSuccessMessage('The course has been unarchived.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Moves an active/archived course to Recycle Bin.
     */
    InstructorCoursesPageComponent.prototype.onDelete = function (courseId) {
        var _this = this;
        if (!courseId) {
            this.statusMessageService.showErrorMessage("Course " + courseId + " is not found!");
            return;
        }
        var modalRef = this.modalService.open(CourseSoftDeletionConfirmModalComponent);
        modalRef.result.then(function () {
            _this.courseService.binCourse(courseId).subscribe(function (course) {
                _this.loadInstructorCourses();
                _this.statusMessageService.showSuccessMessage("The course " + course.courseId + " has been deleted. You can restore it from the Recycle Bin manually.");
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        }, function () { });
    };
    /**
     * Permanently deletes a soft-deleted course in Recycle Bin.
     */
    InstructorCoursesPageComponent.prototype.onDeletePermanently = function (courseId) {
        var _this = this;
        if (!courseId) {
            this.statusMessageService.showErrorMessage("Course " + courseId + " is not found!");
            return;
        }
        var modalRef = this.modalService.open(CoursePermanentDeletionConfirmModalComponent);
        modalRef.componentInstance.courseId = courseId;
        modalRef.result.then(function () {
            _this.courseService.deleteCourse(courseId).subscribe(function () {
                _this.loadInstructorCourses();
                _this.statusMessageService.showSuccessMessage("The course " + courseId + " has been permanently deleted.");
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        }, function () { });
    };
    /**
     * Restores a soft-deleted course from Recycle Bin.
     */
    InstructorCoursesPageComponent.prototype.onRestore = function (courseId) {
        var _this = this;
        if (!courseId) {
            this.statusMessageService.showErrorMessage("Course " + courseId + " is not found!");
            return;
        }
        var paramMap = {
            courseid: courseId,
            user: this.user,
        };
        this.httpRequestService.delete('/bin/course', paramMap).subscribe(function (resp) {
            _this.loadInstructorCourses();
            _this.statusMessageService.showSuccessMessage(resp.message);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Permanently deletes all soft-deleted courses in Recycle Bin.
     */
    InstructorCoursesPageComponent.prototype.onDeleteAll = function () {
        var _this = this;
        var modalRef = this.modalService.open(CoursePermanentDeletionConfirmModalComponent);
        modalRef.componentInstance.isDeleteAll = true;
        modalRef.result.then(function () {
            var deleteRequests = [];
            _this.softDeletedCourses.forEach(function (courseToDelete) {
                deleteRequests.push(_this.courseService.deleteCourse(courseToDelete.id));
            });
            forkJoin(deleteRequests).subscribe(function () {
                _this.loadInstructorCourses();
                _this.statusMessageService.showSuccessMessage('All courses have been permanently deleted.');
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        }, function () { });
    };
    /**
     * Restores all soft-deleted courses from Recycle Bin.
     */
    InstructorCoursesPageComponent.prototype.onRestoreAll = function () {
        var _this = this;
        var restoreRequests = [];
        this.softDeletedCourses.forEach(function (courseToRestore) {
            restoreRequests.push(_this.courseService.restoreCourse(courseToRestore.id));
        });
        forkJoin(restoreRequests).subscribe(function () {
            _this.loadInstructorCourses();
            _this.statusMessageService.showSuccessMessage('All courses have been restored.');
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    InstructorCoursesPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-courses-page',
            templateUrl: './instructor-courses-page.component.html',
            styleUrls: ['./instructor-courses-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            HttpRequestService,
            StatusMessageService,
            CourseService,
            StudentService,
            NgbModal])
    ], InstructorCoursesPageComponent);
    return InstructorCoursesPageComponent;
}());
export { InstructorCoursesPageComponent };
//# sourceMappingURL=instructor-courses-page.component.js.map