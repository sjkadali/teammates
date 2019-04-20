import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpRequestService } from '../../../../services/http-request.service';
import { StatusMessageService } from '../../../../services/status-message.service';
import { StudentListInfoBaseModalComponent } from '../student-list-info-base-modal.component';
/**
 * Re-send results link to students modal.
 */
var ResendResultsLinkToStudentModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ResendResultsLinkToStudentModalComponent, _super);
    function ResendResultsLinkToStudentModalComponent(activeModal, httpRequestService, statusMessageService) {
        var _this = _super.call(this, httpRequestService, statusMessageService) || this;
        _this.activeModal = activeModal;
        _this.courseId = '';
        _this.feedbackSessionName = '';
        _this.checkAll = false;
        return _this;
    }
    ResendResultsLinkToStudentModalComponent.prototype.ngOnInit = function () {
        this.initializeStudentsStatusTable();
    };
    /**
     * Gets a list of students' response details.
     */
    ResendResultsLinkToStudentModalComponent.prototype.initializeStudentsStatusTable = function () {
        var paramMap = {
            courseid: this.courseId,
            fsname: this.feedbackSessionName,
        };
        this.getStudentStatusTableRowModel(paramMap, this.studentStatusTableRows);
    };
    /**
     * Bind individual checkboxes to all submitted and all yet submitted students checkbox.
     */
    ResendResultsLinkToStudentModalComponent.prototype.bindSelectedCheckboxes = function () {
        this.checkAll = this.studentStatusTableRows.every(function (tableRow) {
            return tableRow.isChecked;
        });
    };
    /**
     * Check all students checkbox to all students.
     */
    ResendResultsLinkToStudentModalComponent.prototype.checkAllStudentsHandler = function () {
        this.checkAllStudents(this.studentStatusTableRows, this.checkAll);
    };
    /**
     * Collates a list of selected students with selected checkbox.
     */
    ResendResultsLinkToStudentModalComponent.prototype.collateStudentsToSendHandler = function () {
        return this.collateStudentsToSend(this.studentStatusTableRows);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ResendResultsLinkToStudentModalComponent.prototype, "courseId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ResendResultsLinkToStudentModalComponent.prototype, "feedbackSessionName", void 0);
    ResendResultsLinkToStudentModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-resend-results-link-to-student-modal',
            templateUrl: './resend-results-link-to-student-modal.component.html',
            styleUrls: ['./resend-results-link-to-student-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal, HttpRequestService,
            StatusMessageService])
    ], ResendResultsLinkToStudentModalComponent);
    return ResendResultsLinkToStudentModalComponent;
}(StudentListInfoBaseModalComponent));
export { ResendResultsLinkToStudentModalComponent };
//# sourceMappingURL=resend-results-link-to-student-modal.component.js.map