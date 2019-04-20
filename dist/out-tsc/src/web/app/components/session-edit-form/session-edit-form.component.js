import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment-timezone';
import { environment } from '../../../environments/environment';
import { FeedbackSessionPublishStatus, FeedbackSessionSubmissionStatus, ResponseVisibleSetting, SessionVisibleSetting, } from '../../../types/api-output';
import { FEEDBACK_SESSION_NAME_MAX_LENGTH } from '../../../types/field-validator';
import { SessionEditFormDatePickerFormatter } from './session-edit-form-datepicker-formatter';
import { SessionEditFormMode } from './session-edit-form-model';
/**
 * Form to Add/Edit feedback sessions.
 */
var SessionEditFormComponent = /** @class */ (function () {
    function SessionEditFormComponent(modalService) {
        this.modalService = modalService;
        // enum
        this.SessionEditFormMode = SessionEditFormMode;
        this.SessionVisibleSetting = SessionVisibleSetting;
        this.ResponseVisibleSetting = ResponseVisibleSetting;
        // const
        this.FEEDBACK_SESSION_NAME_MAX_LENGTH = FEEDBACK_SESSION_NAME_MAX_LENGTH;
        this.model = {
            courseId: '',
            timeZone: 'UTC',
            courseName: '',
            feedbackSessionName: '',
            instructions: '',
            submissionStartTime: { hour: 0, minute: 0 },
            submissionStartDate: { year: 0, month: 0, day: 0 },
            submissionEndTime: { hour: 0, minute: 0 },
            submissionEndDate: { year: 0, month: 0, day: 0 },
            gracePeriod: 0,
            sessionVisibleSetting: SessionVisibleSetting.AT_OPEN,
            customSessionVisibleTime: { hour: 0, minute: 0 },
            customSessionVisibleDate: { year: 0, month: 0, day: 0 },
            responseVisibleSetting: ResponseVisibleSetting.CUSTOM,
            customResponseVisibleTime: { hour: 0, minute: 0 },
            customResponseVisibleDate: { year: 0, month: 0, day: 0 },
            submissionStatus: FeedbackSessionSubmissionStatus.OPEN,
            publishStatus: FeedbackSessionPublishStatus.NOT_PUBLISHED,
            isClosingEmailEnabled: true,
            isPublishedEmailEnabled: true,
            templateSessionName: '',
            isSaving: false,
            isEditable: true,
            hasVisibleSettingsPanelExpanded: false,
            hasEmailSettingsPanelExpanded: false,
        };
        this.modelChange = new EventEmitter();
        this.formMode = SessionEditFormMode.ADD;
        // add mode specific
        this.courseCandidates = [];
        this.templateSessions = [];
        // event emission
        this.addNewSessionEvent = new EventEmitter();
        this.editExistingSessionEvent = new EventEmitter();
        this.deleteExistingSessionEvent = new EventEmitter();
        this.copyCurrentSessionEvent = new EventEmitter();
        this.copyOtherSessionsEvent = new EventEmitter();
    }
    SessionEditFormComponent.prototype.ngOnInit = function () {
    };
    /**
     * Triggers the change of the model for the form.
     */
    SessionEditFormComponent.prototype.triggerModelChange = function (field, data) {
        var _a;
        this.modelChange.emit(tslib_1.__assign({}, this.model, (_a = {}, _a[field] = data, _a)));
    };
    /**
     * Handles course Id change event.
     *
     * <p>Used in ADD mode.
     */
    SessionEditFormComponent.prototype.courseIdChangeHandler = function (newCourseId) {
        var course = this.courseCandidates.find(function (c) { return c.courseId === newCourseId; });
        if (course) {
            this.modelChange.emit(tslib_1.__assign({}, this.model, { courseId: newCourseId, courseName: course.courseName, timeZone: course.timeZone }));
        }
    };
    Object.defineProperty(SessionEditFormComponent.prototype, "maxDateForSessionVisible", {
        /**
         * Gets the maximum date for a session to be visible based on the input model.
         */
        get: function () {
            switch (this.model.responseVisibleSetting) {
                case ResponseVisibleSetting.LATER:
                case ResponseVisibleSetting.AT_VISIBLE:
                    return this.model.submissionStartDate;
                case ResponseVisibleSetting.CUSTOM:
                    var submissionStartDate = this.getMomentInstance(this.model.submissionStartDate);
                    var responseVisibleDate = this.getMomentInstance(this.model.customResponseVisibleDate);
                    if (submissionStartDate.isBefore(responseVisibleDate)) {
                        return this.model.submissionStartDate;
                    }
                    return this.model.customResponseVisibleDate;
                default:
                    return {
                        year: 0,
                        month: 0,
                        day: 0,
                    };
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionEditFormComponent.prototype, "minDateForResponseVisible", {
        /**
         * Gets the minimum date for responses to be visible based on the input model.
         */
        get: function () {
            switch (this.model.sessionVisibleSetting) {
                case SessionVisibleSetting.AT_OPEN:
                    return this.model.submissionStartDate;
                case SessionVisibleSetting.CUSTOM:
                    return this.model.customSessionVisibleDate;
                default:
                    return {
                        year: 0,
                        month: 0,
                        day: 0,
                    };
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a moment instance from a date.
     */
    SessionEditFormComponent.prototype.getMomentInstance = function (date) {
        var inst = moment();
        inst.set('year', date.year);
        inst.set('month', date.month - 1); // moment month is from 0-11
        inst.set('date', date.day);
        return inst;
    };
    /**
     * Handles submit button click event.
     */
    SessionEditFormComponent.prototype.submitFormHandler = function () {
        // resolve local date time to timestamp
        if (this.formMode === SessionEditFormMode.ADD) {
            this.addNewSessionEvent.emit();
        }
        if (this.formMode === SessionEditFormMode.EDIT) {
            this.editExistingSessionEvent.emit();
        }
    };
    /**
     * Handles delete current feedback session button click event.
     */
    SessionEditFormComponent.prototype.deleteHandler = function (modal) {
        var _this = this;
        this.modalService.open(modal).result.then(function () {
            _this.deleteExistingSessionEvent.emit();
        }, function () { });
    };
    /**
     * Handles copy current feedback session button click event.
     */
    SessionEditFormComponent.prototype.copyHandler = function () {
        this.copyCurrentSessionEvent.emit();
    };
    /**
     * Handles copy from other feedback sessions button click event.
     */
    SessionEditFormComponent.prototype.copyOthersHandler = function () {
        this.copyOtherSessionsEvent.emit();
    };
    /**
     * Handles session 'Help' link click event.
     */
    SessionEditFormComponent.prototype.sessionHelpHandler = function () {
        window.open(environment.frontendUrl + "/web/instructor/help");
        // TODO scroll down to the session setup specific section in the help page
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SessionEditFormComponent.prototype, "model", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionEditFormComponent.prototype, "modelChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SessionEditFormComponent.prototype, "formMode", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SessionEditFormComponent.prototype, "courseCandidates", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SessionEditFormComponent.prototype, "templateSessions", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionEditFormComponent.prototype, "addNewSessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionEditFormComponent.prototype, "editExistingSessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionEditFormComponent.prototype, "deleteExistingSessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionEditFormComponent.prototype, "copyCurrentSessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionEditFormComponent.prototype, "copyOtherSessionsEvent", void 0);
    SessionEditFormComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-session-edit-form',
            templateUrl: './session-edit-form.component.html',
            styleUrls: ['./session-edit-form.component.scss'],
            providers: [{ provide: NgbDateParserFormatter, useClass: SessionEditFormDatePickerFormatter }],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal])
    ], SessionEditFormComponent);
    return SessionEditFormComponent;
}());
export { SessionEditFormComponent };
//# sourceMappingURL=session-edit-form.component.js.map