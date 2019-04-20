import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to confirm soft deletion of a course.
 */
var CourseSoftDeletionConfirmModalComponent = /** @class */ (function () {
    function CourseSoftDeletionConfirmModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    CourseSoftDeletionConfirmModalComponent.prototype.ngOnInit = function () {
    };
    CourseSoftDeletionConfirmModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-course-soft-deletion-confirm-modal',
            templateUrl: './course-soft-deletion-confirm-modal.component.html',
            styleUrls: ['./course-soft-deletion-confirm-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], CourseSoftDeletionConfirmModalComponent);
    return CourseSoftDeletionConfirmModalComponent;
}());
export { CourseSoftDeletionConfirmModalComponent };
//# sourceMappingURL=course-soft-deletion-confirm-modal.component.js.map