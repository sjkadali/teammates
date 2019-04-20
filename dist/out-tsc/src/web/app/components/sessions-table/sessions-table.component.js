import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackSessionPublishStatus, FeedbackSessionSubmissionStatus } from '../../../types/api-output';
import { CopySessionModalComponent } from '../copy-session-modal/copy-session-modal.component';
import { ConfirmPublishingSessionModalComponent, } from './confirm-publishing-session-modal/confirm-publishing-session-modal.component';
import { ConfirmSessionMoveToRecycleBinModalComponent, } from './confirm-session-move-to-recycle-bin-modal/confirm-session-move-to-recycle-bin-modal.component';
import { ConfirmUnpublishingSessionModalComponent, } from './confirm-unpublishing-session-modal/confirm-unpublishing-session-modal.component';
import { ResendResultsLinkToStudentModalComponent, } from './resend-results-link-to-student-modal/resend-results-link-to-student-modal.component';
import { SendRemindersToStudentModalComponent, } from './send-reminders-to-student-modal/send-reminders-to-student-modal.component';
import { SessionsTableColumn, SessionsTableHeaderColorScheme, SortBy, SortOrder, } from './sessions-table-model';
/**
 * A table to display a list of feedback sessions.
 */
var SessionsTableComponent = /** @class */ (function () {
    function SessionsTableComponent(modalService) {
        this.modalService = modalService;
        // enum
        this.SortBy = SortBy;
        this.SortOrder = SortOrder;
        this.SessionsTableColumn = SessionsTableColumn;
        this.FeedbackSessionSubmissionStatus = FeedbackSessionSubmissionStatus;
        this.FeedbackSessionPublishStatus = FeedbackSessionPublishStatus;
        this.SessionsTableHeaderColorScheme = SessionsTableHeaderColorScheme;
        this.sessionsTableRowModels = [];
        this.courseCandidates = [];
        this.columnsToShow = [SessionsTableColumn.COURSE_ID];
        this.sessionsTableRowModelsSortBy = SortBy.NONE;
        this.sessionsTableRowModelsSortOrder = SortOrder.ASC;
        this.headerColorScheme = SessionsTableHeaderColorScheme.BLUE;
        this.sortSessionsTableRowModelsEvent = new EventEmitter();
        this.loadResponseRateEvent = new EventEmitter();
        this.editSessionEvent = new EventEmitter();
        this.moveSessionToRecycleBinEvent = new EventEmitter();
        this.copySessionEvent = new EventEmitter();
        this.submitSessionAsInstructorEvent = new EventEmitter();
        this.viewSessionResultEvent = new EventEmitter();
        this.publishSessionEvent = new EventEmitter();
        this.unpublishSessionEvent = new EventEmitter();
        this.sendRemindersToStudentsEvent = new EventEmitter();
        this.resendResultsLinkToStudentsEvent = new EventEmitter();
    }
    /**
     * Sorts the list of feedback session row.
     */
    SessionsTableComponent.prototype.sortSessionsTableRowModels = function (by) {
        this.sortSessionsTableRowModelsEvent.emit(by);
    };
    /**
     * Moves the feedback session to the recycle bin.
     */
    SessionsTableComponent.prototype.moveSessionToRecycleBin = function (rowIndex) {
        var _this = this;
        this.modalService.open(ConfirmSessionMoveToRecycleBinModalComponent).result.then(function () {
            _this.moveSessionToRecycleBinEvent.emit(rowIndex);
        }, function () { });
    };
    /**
     * Copies the feedback session.
     */
    SessionsTableComponent.prototype.copySession = function (rowIndex) {
        var _this = this;
        var modalRef = this.modalService.open(CopySessionModalComponent);
        var model = this.sessionsTableRowModels[rowIndex];
        modalRef.componentInstance.newFeedbackSessionName = model.feedbackSession.feedbackSessionName;
        modalRef.componentInstance.courseCandidates = this.courseCandidates;
        modalRef.componentInstance.sessionToCopyCourseId = model.feedbackSession.courseId;
        modalRef.result.then(function (result) {
            _this.copySessionEvent.emit(tslib_1.__assign({}, result, { sessionToCopyRowIndex: rowIndex }));
        }, function () { });
    };
    /**
     * Publishes a feedback session.
     */
    SessionsTableComponent.prototype.publishSession = function (rowIndex) {
        var _this = this;
        var modalRef = this.modalService.open(ConfirmPublishingSessionModalComponent);
        var model = this.sessionsTableRowModels[rowIndex];
        modalRef.componentInstance.feedbackSessionName = model.feedbackSession.feedbackSessionName;
        modalRef.result.then(function () {
            _this.publishSessionEvent.emit(rowIndex);
        }, function () { });
    };
    /**
     * Unpublishes a feedback session.
     */
    SessionsTableComponent.prototype.unpublishSession = function (rowIndex) {
        var _this = this;
        var modalRef = this.modalService.open(ConfirmUnpublishingSessionModalComponent);
        var model = this.sessionsTableRowModels[rowIndex];
        modalRef.componentInstance.feedbackSessionName = model.feedbackSession.feedbackSessionName;
        modalRef.result.then(function () {
            _this.unpublishSessionEvent.emit(rowIndex);
        }, function () { });
    };
    /**
     * Resend links to students to view results.
     */
    SessionsTableComponent.prototype.remindResultsLinkToStudent = function (rowIndex) {
        var _this = this;
        var modalRef = this.modalService.open(ResendResultsLinkToStudentModalComponent);
        var model = this.sessionsTableRowModels[rowIndex];
        modalRef.componentInstance.courseId = model.feedbackSession.courseId;
        modalRef.componentInstance.feedbackSessionName = model.feedbackSession.feedbackSessionName;
        modalRef.result.then(function (remindRequest) {
            _this.resendResultsLinkToStudentsEvent.emit({ row: rowIndex, request: remindRequest });
        }, function () { });
    };
    /**
     * Sends e-mails to remind students who have not submitted their feedback.
     */
    SessionsTableComponent.prototype.sendRemindersToStudents = function (rowIndex) {
        var _this = this;
        var modalRef = this.modalService.open(SendRemindersToStudentModalComponent);
        var model = this.sessionsTableRowModels[rowIndex];
        modalRef.componentInstance.courseId = model.feedbackSession.courseId;
        modalRef.componentInstance.feedbackSessionName = model.feedbackSession.feedbackSessionName;
        modalRef.result.then(function (remindRequest) {
            _this.sendRemindersToStudentsEvent.emit({ row: rowIndex, request: remindRequest });
        }, function () { });
    };
    SessionsTableComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SessionsTableComponent.prototype, "sessionsTableRowModels", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SessionsTableComponent.prototype, "courseCandidates", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SessionsTableComponent.prototype, "columnsToShow", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SessionsTableComponent.prototype, "sessionsTableRowModelsSortBy", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SessionsTableComponent.prototype, "sessionsTableRowModelsSortOrder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SessionsTableComponent.prototype, "headerColorScheme", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "sortSessionsTableRowModelsEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "loadResponseRateEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "editSessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "moveSessionToRecycleBinEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "copySessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "submitSessionAsInstructorEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "viewSessionResultEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "publishSessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "unpublishSessionEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "sendRemindersToStudentsEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SessionsTableComponent.prototype, "resendResultsLinkToStudentsEvent", void 0);
    SessionsTableComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-sessions-table',
            templateUrl: './sessions-table.component.html',
            styleUrls: ['./sessions-table.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal])
    ], SessionsTableComponent);
    return SessionsTableComponent;
}());
export { SessionsTableComponent };
//# sourceMappingURL=sessions-table.component.js.map