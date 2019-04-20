import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to confirm permanent deletion of a list of feedback session.
 */
var SessionsPermanentDeletionConfirmModalComponent = /** @class */ (function () {
    function SessionsPermanentDeletionConfirmModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.sessionsToDelete = [];
    }
    SessionsPermanentDeletionConfirmModalComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SessionsPermanentDeletionConfirmModalComponent.prototype, "sessionsToDelete", void 0);
    SessionsPermanentDeletionConfirmModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-sessions-permanent-deletion-confirm-modal',
            templateUrl: './sessions-permanent-deletion-confirm-modal.component.html',
            styleUrls: ['./sessions-permanent-deletion-confirm-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], SessionsPermanentDeletionConfirmModalComponent);
    return SessionsPermanentDeletionConfirmModalComponent;
}());
export { SessionsPermanentDeletionConfirmModalComponent };
//# sourceMappingURL=sessions-permanent-deletion-confirm-modal.component.js.map