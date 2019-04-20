import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Instructor student list page.
 */
var InstructorStudentListPageComponent = /** @class */ (function () {
    function InstructorStudentListPageComponent(route, router, httpRequestService, statusMessageService) {
        this.route = route;
        this.router = router;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.user = '';
        this.isDisplayArchive = false;
        this.courses = [];
        this.searchQuery = '';
        this.courseDetailsList = [];
        this.sectionDetailsList = [];
        this.teamDetailsList = [];
        this.studentDetailsList = [];
        this.courseStudentListSectionDataMap = {};
    }
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allPresentCourses", {
        get: function () {
            var _this = this;
            return this.courses.filter(function (course) { return !(course.isArchived && !_this.isDisplayArchive); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allCheckedCourses", {
        get: function () {
            return this.allPresentCourses.filter(function (course) { return course.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allPresentCourseDetails", {
        get: function () {
            var _this = this;
            var courseDetailsList = [];
            this.allPresentCourses.forEach(function (course) {
                var courseDetails = _this.getCourseDetails(course.id);
                if (courseDetails) {
                    courseDetailsList.push(courseDetails);
                }
            });
            return courseDetailsList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allCheckedCourseDetails", {
        get: function () {
            return this.allPresentCourseDetails.filter(function (courseDetails) { return courseDetails.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allPresentSectionDetails", {
        get: function () {
            var allPresentSectionDetails = [];
            this.allCheckedCourseDetails.forEach(function (courseDetails) {
                allPresentSectionDetails = allPresentSectionDetails.concat(courseDetails.sections);
            });
            return allPresentSectionDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allCheckedSectionDetails", {
        get: function () {
            return this.allPresentSectionDetails.filter(function (sectionDetails) { return sectionDetails.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allPresentTeamDetails", {
        get: function () {
            var allPresentTeamDetails = [];
            this.allCheckedSectionDetails.forEach(function (sectionDetails) {
                allPresentTeamDetails = allPresentTeamDetails.concat(sectionDetails.teams);
            });
            return allPresentTeamDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allCheckedTeamDetails", {
        get: function () {
            return this.allPresentTeamDetails.filter(function (teamDetails) { return teamDetails.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allPresentStudentDetails", {
        get: function () {
            var allPresentStudentDetails = [];
            this.allCheckedTeamDetails.forEach(function (teamDetails) {
                allPresentStudentDetails = allPresentStudentDetails.concat(teamDetails.students);
            });
            return allPresentStudentDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "allCheckedStudentDetails", {
        get: function () {
            return this.allPresentStudentDetails.filter(function (studentDetails) { return studentDetails.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "isAllPresentCoursesChecked", {
        get: function () {
            return !!this.allPresentCourses.length && this.allPresentCourses.length === this.allCheckedCourses.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "isAllPresentCourseDetailsChecked", {
        get: function () {
            return !!this.allPresentCourseDetails.length
                && this.allPresentCourseDetails.length === this.allCheckedCourseDetails.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "isAllPresentSectionDetailsChecked", {
        get: function () {
            return !!this.allPresentSectionDetails.length
                && this.allPresentSectionDetails.length === this.allCheckedSectionDetails.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "isAllPresentTeamDetailsChecked", {
        get: function () {
            return !!this.allPresentTeamDetails.length
                && this.allPresentTeamDetails.length === this.allCheckedTeamDetails.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "isAllPresentStudentDetailsChecked", {
        get: function () {
            return !!this.allPresentStudentDetails.length
                && this.allPresentStudentDetails.length === this.allCheckedStudentDetails.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorStudentListPageComponent.prototype, "isAnyPresentCoursesChecked", {
        get: function () {
            return !!this.allPresentCourses.length && this.allCheckedCourses.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    InstructorStudentListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadCourses(_this.user);
        });
    };
    /**
     * Navigate to the instructor search page with query input and query type: student.
     */
    InstructorStudentListPageComponent.prototype.search = function () {
        this.router.navigate(['/web/instructor/search'], { queryParams: { studentSearchkey: this.searchQuery } });
    };
    /**
     * Function to get initial data of the instructor's courses.
     */
    InstructorStudentListPageComponent.prototype.loadCourses = function (user) {
        var _this = this;
        var paramMap = { user: user };
        this.httpRequestService.get('/instructor/students/courses', paramMap)
            .subscribe(function (resp) {
            _this.courses = resp.courses;
            if (!_this.courses) {
                _this.statusMessageService.showWarningMessage('You do not have any courses yet.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Change value of the checkbox Display Archive Courses.
     */
    InstructorStudentListPageComponent.prototype.toggleDisplayArchive = function () {
        var _this = this;
        this.isDisplayArchive = !this.isDisplayArchive;
        var isDisplayArchiveChecked = this.isDisplayArchive;
        this.courses.forEach(function (course) {
            if (course && course.isArchived) {
                _this.toggleCourseStateAtInput(course, isDisplayArchiveChecked);
            }
        });
    };
    /**
     * Change states of all courses.
     */
    InstructorStudentListPageComponent.prototype.toggleAllPresentCoursesStateAtInput = function (defaultState) {
        var _this = this;
        this.allPresentCourses.forEach(function (course) {
            if (course) {
                _this.toggleCourseStateAtInput(course, defaultState);
            }
        });
    };
    /**
     * Change the state of all sections presented on the screen.
     */
    InstructorStudentListPageComponent.prototype.toggleAllPresentSectionDetailsState = function (defaultState) {
        var _this = this;
        this.allPresentSectionDetails.forEach(function (sectionDetails) {
            _this.toggleSectionState(sectionDetails, defaultState);
        });
    };
    /**
     * Change the state of all teams presented on the screen.
     */
    InstructorStudentListPageComponent.prototype.toggleAllPresentTeamDetailsState = function (defaultState) {
        var _this = this;
        this.allPresentTeamDetails.forEach(function (teamDetails) {
            _this.toggleTeamState(teamDetails, defaultState);
        });
    };
    /**
     * Change the state of all students presented on the screen.
     */
    InstructorStudentListPageComponent.prototype.toggleAllPresentStudentDetailsState = function (defaultState) {
        var _this = this;
        this.allPresentStudentDetails.forEach(function (studentDetails) {
            _this.toggleStudentState(studentDetails, defaultState);
        });
    };
    /**
     * Trigger getting CourseDetails data for a course from backend.
     */
    InstructorStudentListPageComponent.prototype.toggleCourseStateAtInput = function (course, designatedState) {
        var _this = this;
        if (course.isChecked === undefined) {
            course.isChecked = false;
        }
        var state = designatedState === undefined
            ? !course.isChecked
            : designatedState;
        this.fetchCourseDetails(course.id)
            .subscribe(function (courseDetails) {
            if (courseDetails) {
                _this.toggleCourseState(courseDetails, state);
                _this.courseStudentListSectionDataMap[courseDetails.id]
                    = _this.getStudentListSectionDataFromCourseDetails(courseDetails);
            }
        }, function (error) {
            _this.statusMessageService.showErrorMessage(error);
        });
    };
    /**
     * Get CourseDetails data for a course.
     */
    InstructorStudentListPageComponent.prototype.fetchCourseDetails = function (courseid) {
        var _this = this;
        if (this.isCourseDetailsFetched(courseid)) {
            return of(this.getCourseDetails(courseid));
        }
        var paramMap = { courseid: courseid };
        return this.httpRequestService.get('/instructor/students', paramMap)
            .pipe(map(function (resp) {
            if (resp.course) {
                resp.course.isChecked = false;
                _this.courseDetailsList.push(resp.course);
                return _this.getCourseDetails(resp.course.id);
            }
            _this.statusMessageService.showErrorMessage("Error retrieving course details for course of id " + courseid);
            return null;
        }));
    };
    /**
     * Return true if the courseDetails of a course is fetched.
     */
    InstructorStudentListPageComponent.prototype.isCourseDetailsFetched = function (courseId) {
        var filteredCourseDetailsList = this.courseDetailsList.filter(function (courseDetails) { return courseDetails.id === courseId; });
        return filteredCourseDetailsList.length > 0;
    };
    /**
     * Return true if the sectionDetails is fetched.
     */
    InstructorStudentListPageComponent.prototype.isSectionDetailsFetched = function (section) {
        var filteredSectionDetailsList = this.sectionDetailsList.filter(function (sectionDetails) {
            return sectionDetails.name === section.name
                && sectionDetails.courseId === section.courseId;
        });
        return filteredSectionDetailsList.length > 0;
    };
    /**
     * Return true if the teamDetails is fetched.
     */
    InstructorStudentListPageComponent.prototype.isTeamDetailsFetched = function (team) {
        var filteredTeamDetailsList = this.teamDetailsList.filter(function (teamDetails) {
            return team.name === teamDetails.name
                && team.section === teamDetails.section
                && team.courseId === teamDetails.courseId;
        });
        return filteredTeamDetailsList.length > 0;
    };
    /**
     * Return true if the studentDetails is fetched.
     */
    InstructorStudentListPageComponent.prototype.isStudentDetailsFetched = function (student) {
        var filteredStudentDetailsList = this.studentDetailsList.filter(function (studentDetails) {
            return student.email === studentDetails.email
                && student.team === studentDetails.team
                && student.section === studentDetails.section
                && student.courseId === studentDetails.courseId;
        });
        return filteredStudentDetailsList.length > 0;
    };
    /**
     * Get the course from the list of courses.
     */
    InstructorStudentListPageComponent.prototype.getCourse = function (courseId) {
        var filteredCourseList = this.courses.filter(function (course) { return course.id === courseId; });
        if (filteredCourseList.length > 0) {
            return filteredCourseList[0];
        }
        return null;
    };
    /**
     * Get the courseDetails from the list of courseDetails.
     */
    InstructorStudentListPageComponent.prototype.getCourseDetails = function (courseId) {
        var filteredCourseDetailsList = this.courseDetailsList.filter(function (courseDetails) { return courseDetails.id === courseId; });
        if (filteredCourseDetailsList.length > 0) {
            return filteredCourseDetailsList[0];
        }
        return null;
    };
    /*------------------------------Functions to toggle item state in state maps----------------------------------*/
    /**
     * Change the state of a specific course.
     */
    InstructorStudentListPageComponent.prototype.toggleCourseState = function (courseDetails, designatedState) {
        var _this = this;
        var state = designatedState === undefined
            ? !courseDetails.isChecked
            : designatedState;
        courseDetails.isChecked = state;
        if (!this.isCourseDetailsFetched(courseDetails.id)) {
            this.courseDetailsList.push(courseDetails);
        }
        var course = this.getCourse(courseDetails.id);
        if (course) {
            course.isChecked = state;
        }
        courseDetails.sections.forEach(function (section) {
            _this.toggleSectionState(section, state);
        });
    };
    /**
     * Change the state of a specific section.
     */
    InstructorStudentListPageComponent.prototype.toggleSectionState = function (section, designatedState) {
        var _this = this;
        var state = designatedState === undefined
            ? !section.isChecked
            : designatedState;
        section.isChecked = state;
        if (!this.isSectionDetailsFetched(section)) {
            this.sectionDetailsList.push(section);
        }
        section.teams.forEach(function (team) {
            _this.toggleTeamState(team, state);
        });
    };
    /**
     * Change the state of a specific team.
     */
    InstructorStudentListPageComponent.prototype.toggleTeamState = function (team, designatedState) {
        var _this = this;
        var state = designatedState === undefined
            ? !team.isChecked
            : designatedState;
        team.isChecked = state;
        if (!this.isTeamDetailsFetched(team)) {
            this.teamDetailsList.push(team);
        }
        team.students.forEach(function (student) {
            _this.toggleStudentState(student, state);
        });
    };
    /**
     * Change the state of a specific student.
     */
    InstructorStudentListPageComponent.prototype.toggleStudentState = function (student, designatedState) {
        var state = designatedState === undefined
            ? !student.isChecked
            : designatedState;
        student.isChecked = state;
        if (!this.isStudentDetailsFetched(student)) {
            this.studentDetailsList.push(student);
        }
    };
    /*------------------------------Functions to get item state from state maps-----------------------------------*/
    /**
     * Get the list of students which need to be hidden on the StudentTable display.
     */
    InstructorStudentListPageComponent.prototype.getStudentsToHide = function (courseId) {
        return this.studentDetailsList
            .filter(function (student) { return student.courseId === courseId && !student.isChecked; })
            .map(function (student) { return student.email; });
    };
    /*------------------------------Functions to formulate data for student list from item------------------------*/
    /**
     * Formulate data for student list.
     */
    InstructorStudentListPageComponent.prototype.getStudentListSectionDataForCourse = function (courseId) {
        return this.courseStudentListSectionDataMap[courseId] || [];
    };
    /**
     * Formulate data for student list.
     */
    InstructorStudentListPageComponent.prototype.getStudentListSectionDataFromCourseDetails = function (courseDetails) {
        var _this = this;
        var sections = [];
        courseDetails.sections.forEach(function (section) {
            var sectionData = _this.mapSectionForStudentList(section);
            sections.push(sectionData);
        });
        return sections;
    };
    /**
     * Formulate data for student list from SectionDetails.
     */
    InstructorStudentListPageComponent.prototype.mapSectionForStudentList = function (sectionDetails) {
        var _this = this;
        var students = [];
        sectionDetails.teams.forEach(function (team) {
            team.students.forEach(function (student) {
                var studentData = _this.mapStudentForStudentList(student);
                students.push(studentData);
            });
        });
        return {
            students: students,
            sectionName: sectionDetails.name,
            isAllowedToViewStudentInSection: sectionDetails.isAllowedToViewStudents,
            isAllowedToModifyStudent: sectionDetails.isAllowedToEditStudents,
        };
    };
    /**
     * Formulate data for student list from StudentDetails.
     */
    InstructorStudentListPageComponent.prototype.mapStudentForStudentList = function (studentDetails) {
        return {
            name: studentDetails.name,
            team: studentDetails.team,
            email: studentDetails.email,
            status: studentDetails.status,
        };
    };
    InstructorStudentListPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-student-list-page',
            templateUrl: './instructor-student-list-page.component.html',
            styleUrls: ['./instructor-student-list-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, HttpRequestService,
            StatusMessageService])
    ], InstructorStudentListPageComponent);
    return InstructorStudentListPageComponent;
}());
export { InstructorStudentListPageComponent };
//# sourceMappingURL=instructor-student-list-page.component.js.map