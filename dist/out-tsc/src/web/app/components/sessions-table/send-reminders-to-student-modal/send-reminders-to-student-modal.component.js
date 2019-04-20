import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestService } from '../../../../services/http-request.service';
import { StatusMessageService } from '../../../../services/status-message.service';
import { StudentListInfoBaseModalComponent } from '../student-list-info-base-modal.component';
/**
 * Send reminders to students modal.
 */
var SendRemindersToStudentModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SendRemindersToStudentModalComponent, _super);
    function SendRemindersToStudentModalComponent(activeModal, httpRequestService, statusMessageService) {
        var _this = _super.call(this, httpRequestService, statusMessageService) || this;
        _this.activeModal = activeModal;
        _this.courseId = '';
        _this.feedbackSessionName = '';
        _this.checkAll = false;
        _this.checkAllYetSubmitted = false;
        return _this;
    }
    SendRemindersToStudentModalComponent.prototype.ngOnInit = function () {
        this.initializeStudentsStatusTable();
    };
    /**
     * Gets a list of students' response details.
     */
    SendRemindersToStudentModalComponent.prototype.initializeStudentsStatusTable = function () {
        var paramMap = {
            courseid: this.courseId,
            fsname: this.feedbackSessionName,
        };
        this.getStudentStatusTableRowModel(paramMap, this.studentStatusTableRows);
    };
    /**
     * Check all students checkbox to all students.
     */
    SendRemindersToStudentModalComponent.prototype.checkAllStudentsHandler = function () {
        this.checkAllStudents(this.studentStatusTableRows, this.checkAll);
        this.checkAllYetSubmitted = this.checkAll;
    };
    /**
     * Check all yet to submit students checkbox to respective students.
     */
    SendRemindersToStudentModalComponent.prototype.checkAllYetSubmittedStudents = function () {
        for (var _i = 0, _a = this.studentStatusTableRows; _i < _a.length; _i++) {
            var remindStudentRow = _a[_i];
            if (!remindStudentRow.feedbackSessionStudentResponse.responseStatus) {
                remindStudentRow.isChecked = this.checkAllYetSubmitted;
            }
        }
    };
    /**
     * Bind individual checkboxes to all submitted and all yet submitted students checkbox.
     */
    SendRemindersToStudentModalComponent.prototype.bindSelectedCheckboxes = function () {
        this.checkAll = this.studentStatusTableRows.every(function (tableRow) {
            return tableRow.isChecked;
        });
        this.checkAllYetSubmitted = this.studentStatusTableRows.filter(function (tableRow) { return !tableRow.feedbackSessionStudentResponse.responseStatus; }).every(function (tableRow) {
            return tableRow.isChecked && !tableRow.feedbackSessionStudentResponse.responseStatus;
        });
    };
    /**
     * Collates a list of selected students with selected checkbox.
     */
    SendRemindersToStudentModalComponent.prototype.collateStudentsToSendHandler = function () {
        return this.collateStudentsToSend(this.studentStatusTableRows);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SendRemindersToStudentModalComponent.prototype, "courseId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SendRemindersToStudentModalComponent.prototype, "feedbackSessionName", void 0);
    SendRemindersToStudentModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-send-reminders-to-student-modal',
            templateUrl: './send-reminders-to-student-modal.component.html',
            styleUrls: ['./send-reminders-to-student-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal, HttpRequestService,
            StatusMessageService])
    ], SendRemindersToStudentModalComponent);
    return SendRemindersToStudentModalComponent;
}(StudentListInfoBaseModalComponent));
export { SendRemindersToStudentModalComponent };
//# sourceMappingURL=send-reminders-to-student-modal.component.js.map