import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Confirm unpublishing session modal.
 */
var ConfirmUnpublishingSessionModalComponent = /** @class */ (function () {
    function ConfirmUnpublishingSessionModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.feedbackSessionName = '';
    }
    ConfirmUnpublishingSessionModalComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ConfirmUnpublishingSessionModalComponent.prototype, "feedbackSessionName", void 0);
    ConfirmUnpublishingSessionModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-confirm-unpublishing-session-modal',
            templateUrl: './confirm-unpublishing-session-modal.component.html',
            styleUrls: ['./confirm-unpublishing-session-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], ConfirmUnpublishingSessionModalComponent);
    return ConfirmUnpublishingSessionModalComponent;
}());
export { ConfirmUnpublishingSessionModalComponent };
//# sourceMappingURL=confirm-unpublishing-session-modal.component.js.map