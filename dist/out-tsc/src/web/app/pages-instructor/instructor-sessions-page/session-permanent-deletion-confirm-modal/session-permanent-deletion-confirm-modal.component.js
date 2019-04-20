import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to confirm permanent deletion of a feedback session.
 */
var SessionPermanentDeletionConfirmModalComponent = /** @class */ (function () {
    function SessionPermanentDeletionConfirmModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.courseId = '';
        this.feedbackSessionName = '';
    }
    SessionPermanentDeletionConfirmModalComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SessionPermanentDeletionConfirmModalComponent.prototype, "courseId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SessionPermanentDeletionConfirmModalComponent.prototype, "feedbackSessionName", void 0);
    SessionPermanentDeletionConfirmModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-session-permanent-deletion-confirm-modal',
            templateUrl: './session-permanent-deletion-confirm-modal.component.html',
            styleUrls: ['./session-permanent-deletion-confirm-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], SessionPermanentDeletionConfirmModalComponent);
    return SessionPermanentDeletionConfirmModalComponent;
}());
export { SessionPermanentDeletionConfirmModalComponent };
//# sourceMappingURL=session-permanent-deletion-confirm-modal.component.js.map