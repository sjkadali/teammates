import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to confirm permanent deletion of one course or all courses in the Recycle Bin.
 */
var CoursePermanentDeletionConfirmModalComponent = /** @class */ (function () {
    function CoursePermanentDeletionConfirmModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.courseId = '';
        this.isDeleteAll = false;
    }
    CoursePermanentDeletionConfirmModalComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CoursePermanentDeletionConfirmModalComponent.prototype, "courseId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CoursePermanentDeletionConfirmModalComponent.prototype, "isDeleteAll", void 0);
    CoursePermanentDeletionConfirmModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-course-permanent-deletion-confirm-modal',
            templateUrl: './course-permanent-deletion-confirm-modal.component.html',
            styleUrls: ['./course-permanent-deletion-confirm-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], CoursePermanentDeletionConfirmModalComponent);
    return CoursePermanentDeletionConfirmModalComponent;
}());
export { CoursePermanentDeletionConfirmModalComponent };
//# sourceMappingURL=course-permanent-deletion-confirm-modal.component.js.map