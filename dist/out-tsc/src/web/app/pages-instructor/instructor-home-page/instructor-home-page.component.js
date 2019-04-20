import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../../../services/course.service';
import { FeedbackQuestionsService } from '../../../services/feedback-questions.service';
import { FeedbackSessionsService } from '../../../services/feedback-sessions.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { NavigationService } from '../../../services/navigation.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { TimezoneService } from '../../../services/timezone.service';
import { DEFAULT_INSTRUCTOR_PRIVILEGE } from '../../../types/instructor-privilege';
import { SessionsTableColumn, SessionsTableHeaderColorScheme, SortBy, SortOrder, } from '../../components/sessions-table/sessions-table-model';
import { InstructorSessionBasePageComponent } from '../instructor-session-base-page.component';
/**
 * Instructor home page.
 */
var InstructorHomePageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorHomePageComponent, _super);
    function InstructorHomePageComponent(router, httpRequestService, statusMessageService, navigationService, feedbackSessionsService, feedbackQuestionsService, courseService, route, ngbModal, timezoneService) {
        var _this = _super.call(this, router, httpRequestService, statusMessageService, navigationService, feedbackSessionsService, feedbackQuestionsService) || this;
        _this.courseService = courseService;
        _this.route = route;
        _this.ngbModal = ngbModal;
        _this.timezoneService = timezoneService;
        // enum
        _this.SessionsTableColumn = SessionsTableColumn;
        _this.SessionsTableHeaderColorScheme = SessionsTableHeaderColorScheme;
        _this.SortBy = SortBy;
        _this.user = '';
        _this.studentSearchkey = '';
        _this.instructorCoursesSortBy = SortBy.COURSE_CREATION_DATE;
        // data
        _this.courseTabModels = [];
        // need timezone data for moment()
        _this.timezoneService.getTzVersion();
        return _this;
    }
    InstructorHomePageComponent_1 = InstructorHomePageComponent;
    InstructorHomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadCourses();
        });
    };
    Object.defineProperty(InstructorHomePageComponent.prototype, "courseCandidates", {
        /**
         * Gets a list of courses belong to current user.
         */
        get: function () {
            return this.courseTabModels.map(function (m) { return m.course; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles click events on the course tab model.
     */
    InstructorHomePageComponent.prototype.handleClick = function (event, courseTabModel) {
        if (event.srcElement &&
            !event.srcElement.className.includes('dropdown-toggle')) {
            return !courseTabModel.isTabExpanded;
        }
        return courseTabModel.isTabExpanded;
    };
    /**
     * Redirect to the search page and query the search
     */
    InstructorHomePageComponent.prototype.search = function () {
        this.router.navigate(['web/instructor/search'], {
            queryParams: { studentSearchkey: this.studentSearchkey },
        });
    };
    /**
     * Open the modal for different buttons and link.
     */
    InstructorHomePageComponent.prototype.openModal = function (content) {
        this.ngbModal.open(content);
    };
    /**
     * Archives the entire course from the instructor
     */
    InstructorHomePageComponent.prototype.archiveCourse = function (courseId) {
        var _this = this;
        this.httpRequestService.put('/course', { courseid: courseId, archive: 'true' })
            .subscribe(function (resp) {
            _this.loadCourses();
            _this.statusMessageService.showSuccessMessage(resp.message);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Deletes the entire course from the instructor
     */
    InstructorHomePageComponent.prototype.deleteCourse = function (courseId) {
        var _this = this;
        this.courseService.binCourse(courseId).subscribe(function (course) {
            _this.loadCourses();
            _this.statusMessageService.showSuccessMessage("The course " + course.courseId + " has been deleted. You can restore it from the Recycle Bin manually.");
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Loads courses of current instructor.
     */
    InstructorHomePageComponent.prototype.loadCourses = function () {
        var _this = this;
        this.courseTabModels = [];
        this.httpRequestService.get('/courses', {
            entitytype: 'instructor',
            coursestatus: 'active',
        }).subscribe(function (courses) {
            courses.courses.forEach(function (course) {
                var model = {
                    course: course,
                    instructorPrivilege: DEFAULT_INSTRUCTOR_PRIVILEGE,
                    sessionsTableRowModels: [],
                    isTabExpanded: false,
                    isAjaxSuccess: true,
                    hasPopulated: false,
                    sessionsTableRowModelsSortBy: SortBy.NONE,
                    sessionsTableRowModelsSortOrder: SortOrder.ASC,
                };
                _this.courseTabModels.push(model);
                _this.updateCourseInstructorPrivilege(model);
            });
            _this.sortCoursesBy(_this.instructorCoursesSortBy);
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Updates the instructor privilege in {@code CourseTabModel}.
     */
    InstructorHomePageComponent.prototype.updateCourseInstructorPrivilege = function (model) {
        var _this = this;
        this.httpRequestService.get('/instructor/privilege', {
            courseid: model.course.courseId,
        }).subscribe(function (instructorPrivilege) {
            model.instructorPrivilege = instructorPrivilege;
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Loads the feedback session in the course.
     */
    InstructorHomePageComponent.prototype.loadFeedbackSessions = function (model) {
        var _this = this;
        if (!model.hasPopulated) {
            this.feedbackSessionsService.getFeedbackSessionsForInstructor(model.course.courseId)
                .subscribe(function (response) {
                response.feedbackSessions.forEach(function (feedbackSession) {
                    var m = {
                        feedbackSession: feedbackSession,
                        responseRate: '',
                        isLoadingResponseRate: false,
                        instructorPrivilege: DEFAULT_INSTRUCTOR_PRIVILEGE,
                    };
                    model.sessionsTableRowModels.push(m);
                    _this.updateInstructorPrivilege(m);
                });
                model.hasPopulated = true;
                if (!model.isAjaxSuccess) {
                    model.isAjaxSuccess = true;
                }
            }, function (resp) {
                model.isAjaxSuccess = false;
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        }
    };
    /**
     * Checks the option selected to sort courses.
     */
    InstructorHomePageComponent.prototype.isSelectedForSorting = function (by) {
        return this.instructorCoursesSortBy === by;
    };
    /**
     * Sorts the courses according to selected option.
     */
    InstructorHomePageComponent.prototype.sortCoursesBy = function (by) {
        this.instructorCoursesSortBy = by;
        if (this.courseTabModels.length > 1) {
            this.courseTabModels.sort(this.sortPanelsBy(by));
        }
        this.loadLatestCourses();
    };
    /**
     * Loads and expand the latest number of courses.
     */
    InstructorHomePageComponent.prototype.loadLatestCourses = function () {
        for (var i = 0; i < this.courseTabModels.length; i += 1) {
            if (i >= InstructorHomePageComponent_1.coursesToLoad) {
                break;
            }
            this.courseTabModels[i].isTabExpanded = true;
            this.loadFeedbackSessions(this.courseTabModels[i]);
        }
    };
    /**
     * Sorts the panels of courses in order.
     */
    InstructorHomePageComponent.prototype.sortPanelsBy = function (by) {
        return (function (a, b) {
            var strA;
            var strB;
            switch (by) {
                case SortBy.COURSE_NAME:
                    strA = a.course.courseName;
                    strB = b.course.courseName;
                    break;
                case SortBy.COURSE_ID:
                    strA = a.course.courseId;
                    strB = b.course.courseId;
                    break;
                case SortBy.COURSE_CREATION_DATE:
                    strA = a.course.creationDate;
                    strB = b.course.creationDate;
                    break;
                default:
                    strA = '';
                    strB = '';
            }
            return strA.localeCompare(strB);
        });
    };
    /**
     * Sorts the list of feedback session row.
     */
    InstructorHomePageComponent.prototype.sortSessionsTableRowModelsEvent = function (tabIndex, by) {
        var tab = this.courseTabModels[tabIndex];
        tab.sessionsTableRowModelsSortBy = by;
        // reverse the sort order
        tab.sessionsTableRowModelsSortOrder =
            tab.sessionsTableRowModelsSortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;
        tab.sessionsTableRowModels.sort(this.sortModelsBy(by, tab.sessionsTableRowModelsSortOrder));
    };
    /**
     * Loads response rate of a feedback session.
     */
    InstructorHomePageComponent.prototype.loadResponseRateEventHandler = function (tabIndex, rowIndex) {
        this.loadResponseRate(this.courseTabModels[tabIndex].sessionsTableRowModels[rowIndex]);
    };
    /**
     * Edits the feedback session.
     */
    InstructorHomePageComponent.prototype.editSessionEventHandler = function (tabIndex, rowIndex) {
        this.editSession(this.courseTabModels[tabIndex].sessionsTableRowModels[rowIndex]);
    };
    /**
     * Moves the feedback session to the recycle bin.
     */
    InstructorHomePageComponent.prototype.moveSessionToRecycleBinEventHandler = function (tabIndex, rowIndex) {
        var _this = this;
        var model = this.courseTabModels[tabIndex].sessionsTableRowModels[rowIndex];
        var paramMap = {
            courseid: model.feedbackSession.courseId,
            fsname: model.feedbackSession.feedbackSessionName,
        };
        this.httpRequestService.put('/bin/session', paramMap)
            .subscribe(function () {
            _this.courseTabModels[tabIndex].sessionsTableRowModels.splice(_this.courseTabModels[tabIndex].sessionsTableRowModels.indexOf(model), 1);
            _this.statusMessageService.showSuccessMessage("The feedback session has been deleted. You can restore it from the 'Sessions' tab.");
        }, function (resp) { _this.statusMessageService.showErrorMessage(resp.error.message); });
    };
    /**
     * Edits the feedback session.
     */
    InstructorHomePageComponent.prototype.copySessionEventHandler = function (tabIndex, result) {
        this.copySession(this.courseTabModels[tabIndex].sessionsTableRowModels[result.sessionToCopyRowIndex], result);
    };
    /**
     * Submits the feedback session as instructor.
     */
    InstructorHomePageComponent.prototype.submitSessionAsInstructorEventHandler = function (tabIndex, rowIndex) {
        this.submitSessionAsInstructor(this.courseTabModels[tabIndex].sessionsTableRowModels[rowIndex]);
    };
    /**
     * Views the result of a feedback session.
     */
    InstructorHomePageComponent.prototype.viewSessionResultEventHandler = function (tabIndex, rowIndex) {
        this.viewSessionResult(this.courseTabModels[tabIndex].sessionsTableRowModels[rowIndex]);
    };
    /**
     * Publishes a feedback session.
     */
    InstructorHomePageComponent.prototype.publishSessionEventHandler = function (tabIndex, rowIndex) {
        this.publishSession(this.courseTabModels[tabIndex].sessionsTableRowModels[rowIndex]);
    };
    /**
     * Unpublishes a feedback session.
     */
    InstructorHomePageComponent.prototype.unpublishSessionEventHandler = function (tabIndex, rowIndex) {
        this.unpublishSession(this.courseTabModels[tabIndex].sessionsTableRowModels[rowIndex]);
    };
    /**
     * Sends e-mails to remind students on the published results link.
     */
    InstructorHomePageComponent.prototype.resendResultsLinkToStudentsEventHandler = function (tabIndex, remindInfo) {
        this.resendResultsLinkToStudents(this.courseTabModels[tabIndex]
            .sessionsTableRowModels[remindInfo.row], remindInfo.request);
    };
    /**
     * Sends e-mails to remind students who have not submitted their feedback.
     */
    InstructorHomePageComponent.prototype.sendRemindersToStudentsEventHandler = function (tabIndex, remindInfo) {
        this.sendRemindersToStudents(this.courseTabModels[tabIndex]
            .sessionsTableRowModels[remindInfo.row], remindInfo.request);
    };
    var InstructorHomePageComponent_1;
    InstructorHomePageComponent.coursesToLoad = 3;
    InstructorHomePageComponent = InstructorHomePageComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-home-page',
            templateUrl: './instructor-home-page.component.html',
            styleUrls: ['./instructor-home-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            HttpRequestService,
            StatusMessageService,
            NavigationService,
            FeedbackSessionsService,
            FeedbackQuestionsService,
            CourseService,
            ActivatedRoute,
            NgbModal,
            TimezoneService])
    ], InstructorHomePageComponent);
    return InstructorHomePageComponent;
}(InstructorSessionBasePageComponent));
export { InstructorHomePageComponent };
//# sourceMappingURL=instructor-home-page.component.js.map