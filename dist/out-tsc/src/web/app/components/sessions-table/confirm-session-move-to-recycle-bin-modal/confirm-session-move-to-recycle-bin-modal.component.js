import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Confirm session move to recycle bin modal.
 */
var ConfirmSessionMoveToRecycleBinModalComponent = /** @class */ (function () {
    function ConfirmSessionMoveToRecycleBinModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmSessionMoveToRecycleBinModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmSessionMoveToRecycleBinModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-confirm-session-move-to-recycle-bin-modal',
            templateUrl: './confirm-session-move-to-recycle-bin-modal.component.html',
            styleUrls: ['./confirm-session-move-to-recycle-bin-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], ConfirmSessionMoveToRecycleBinModalComponent);
    return ConfirmSessionMoveToRecycleBinModalComponent;
}());
export { ConfirmSessionMoveToRecycleBinModalComponent };
//# sourceMappingURL=confirm-session-move-to-recycle-bin-modal.component.js.map