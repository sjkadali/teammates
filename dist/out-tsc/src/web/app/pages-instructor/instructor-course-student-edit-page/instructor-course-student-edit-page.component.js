import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { FormValidator } from '../../../types/form-validator';
/**
 * Instructor course student edit page.
 */
var InstructorCourseStudentEditPageComponent = /** @class */ (function () {
    function InstructorCourseStudentEditPageComponent(route, router, httpRequestService, statusMessageService, ngbModal) {
        this.route = route;
        this.router = router;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.ngbModal = ngbModal;
        this.user = '';
        this.isEnabled = true;
        this.courseid = '';
        this.studentemail = '';
        this.isSessionSummarySendEmail = false;
        this.isTeamnameFieldChanged = false;
        this.isEmailFieldChanged = false;
        this.FormValidator = FormValidator; // enum
    }
    InstructorCourseStudentEditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isEnabled) {
            this.student = {
                email: 'alice@email.com',
                course: '',
                name: 'Alice Betsy',
                lastName: '',
                comments: 'Alice is a transfer student.',
                team: 'Team A',
                section: 'Section A',
            };
            this.studentemail = this.student.email;
            this.initEditForm();
            return;
        }
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.courseid = queryParams.courseid;
            _this.loadStudentEditDetails(queryParams.courseid, queryParams.studentemail, queryParams.user);
        });
    };
    InstructorCourseStudentEditPageComponent.prototype.ngOnDestroy = function () {
        if (this.emailFieldSubscription) {
            this.emailFieldSubscription.unsubscribe();
        }
        if (this.teamFieldSubscription) {
            this.teamFieldSubscription.unsubscribe();
        }
    };
    /**
     * Loads student details required for this page.
     */
    InstructorCourseStudentEditPageComponent.prototype.loadStudentEditDetails = function (courseid, studentemail, user) {
        var _this = this;
        var paramsMap = { courseid: courseid, studentemail: studentemail, user: user };
        this.httpRequestService.get('/students/editDetails', paramsMap)
            .subscribe(function (resp) {
            _this.student = resp.student;
            if (!_this.student) {
                _this.statusMessageService.showErrorMessage('Error retrieving student details');
            }
            else {
                _this.studentemail = _this.student.email;
                _this.isOpenOrPublishedEmailSentForTheCourse =
                    resp.isOpenOrPublishedEmailSentForTheCourse;
                _this.initEditForm();
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Initializes the student details edit form with the fields fetched from the backend.
     * Subscriptions are set up to listen to changes in the 'teamname' fields and 'newstudentemail' fields.
     */
    InstructorCourseStudentEditPageComponent.prototype.initEditForm = function () {
        var _this = this;
        this.editForm = new FormGroup({
            studentname: new FormControl(this.student.name, [Validators.required, Validators.maxLength(FormValidator.STUDENT_NAME_MAX_LENGTH)]),
            sectionname: new FormControl(this.student.section, [Validators.required, Validators.maxLength(FormValidator.SECTION_NAME_MAX_LENGTH)]),
            teamname: new FormControl(this.student.team, [Validators.required, Validators.maxLength(FormValidator.TEAM_NAME_MAX_LENGTH)]),
            newstudentemail: new FormControl(this.studentemail, // original student email initialized
            [Validators.required, Validators.maxLength(FormValidator.EMAIL_MAX_LENGTH)]),
            comments: new FormControl(this.student.comments),
        });
        this.teamFieldSubscription =
            this.editForm.get('teamname').valueChanges
                .subscribe(function () {
                _this.isTeamnameFieldChanged = true;
            });
        this.emailFieldSubscription =
            this.editForm.get('newstudentemail').valueChanges
                .subscribe(function () { return _this.isEmailFieldChanged = true; });
    };
    /**
     * Displays message to user stating that the field is empty.
     */
    InstructorCourseStudentEditPageComponent.prototype.displayEmptyFieldMessage = function (fieldName) {
        return "The field '" + fieldName + "' should not be empty.";
    };
    /**
     * Displays message to user stating that the field exceeds the max length.
     */
    InstructorCourseStudentEditPageComponent.prototype.displayExceedMaxLengthMessage = function (fieldName, maxLength) {
        return "The field '" + fieldName + "' should not exceed " + maxLength + " characters.";
    };
    /**
     * Handles logic related to showing the appropriate modal boxes
     * upon submission of the form. Submits the form otherwise.
     */
    InstructorCourseStudentEditPageComponent.prototype.onSubmit = function (confirmDelModal, resendPastLinksModal) {
        if (!this.isEnabled) {
            return;
        }
        if (this.isTeamnameFieldChanged) {
            this.ngbModal.open(confirmDelModal);
        }
        else if (this.isEmailFieldChanged) {
            this.ngbModal.open(resendPastLinksModal);
        }
        else {
            this.submitEditForm();
        }
    };
    /**
     * Shows the `resendPastSessionLinks` modal if email field has changed.
     * Submits the form  otherwise.
     */
    InstructorCourseStudentEditPageComponent.prototype.deleteExistingResponses = function (resendPastLinksModal) {
        if (this.isEmailFieldChanged) {
            this.ngbModal.open(resendPastLinksModal);
        }
        else {
            this.submitEditForm();
        }
    };
    /**
     * Sets the boolean value of `isSessionSummarySendEmail` to true if
     * user chooses to resend past session link to the new email.
     */
    InstructorCourseStudentEditPageComponent.prototype.resendPastSessionLinks = function (isResend) {
        if (isResend) {
            this.isSessionSummarySendEmail = true;
        }
        this.submitEditForm();
    };
    /**
     * Submits the form data to edit the student details.
     */
    InstructorCourseStudentEditPageComponent.prototype.submitEditForm = function () {
        var _this = this;
        // creates a new object instead of using its reference
        var paramsMap = {
            user: this.user,
            courseid: this.courseid,
            studentemail: this.studentemail,
        };
        var reqBody = {
            name: this.editForm.value.studentname,
            email: this.editForm.value.newstudentemail,
            team: this.editForm.value.teamname,
            section: this.editForm.value.sectionname,
            comments: this.editForm.value.comments,
            isSessionSummarySendEmail: this.isSessionSummarySendEmail,
        };
        this.httpRequestService.put('/student', paramsMap, reqBody)
            .subscribe(function (resp) {
            _this.router.navigate(['/web/instructor/courses/details'], {
                queryParams: { courseid: _this.courseid },
            }).then(function () {
                _this.statusMessageService.showSuccessMessage(resp.message);
            });
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InstructorCourseStudentEditPageComponent.prototype, "isEnabled", void 0);
    InstructorCourseStudentEditPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-course-student-edit-page',
            templateUrl: './instructor-course-student-edit-page.component.html',
            styleUrls: ['./instructor-course-student-edit-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            HttpRequestService,
            StatusMessageService,
            NgbModal])
    ], InstructorCourseStudentEditPageComponent);
    return InstructorCourseStudentEditPageComponent;
}());
export { InstructorCourseStudentEditPageComponent };
//# sourceMappingURL=instructor-course-student-edit-page.component.js.map