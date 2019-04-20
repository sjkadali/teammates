import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Confirm publishing session modal.
 */
var ConfirmPublishingSessionModalComponent = /** @class */ (function () {
    function ConfirmPublishingSessionModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.feedbackSessionName = '';
    }
    ConfirmPublishingSessionModalComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ConfirmPublishingSessionModalComponent.prototype, "feedbackSessionName", void 0);
    ConfirmPublishingSessionModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-confirm-publishing-session-modal',
            templateUrl: './confirm-publishing-session-modal.component.html',
            styleUrls: ['./confirm-publishing-session-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], ConfirmPublishingSessionModalComponent);
    return ConfirmPublishingSessionModalComponent;
}());
export { ConfirmPublishingSessionModalComponent };
//# sourceMappingURL=confirm-publishing-session-modal.component.js.map