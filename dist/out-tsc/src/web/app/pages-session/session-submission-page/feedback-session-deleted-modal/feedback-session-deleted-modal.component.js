import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to alert the deletion of a feedback session.
 */
var FeedbackSessionDeletedModalComponent = /** @class */ (function () {
    function FeedbackSessionDeletedModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    FeedbackSessionDeletedModalComponent.prototype.ngOnInit = function () {
    };
    FeedbackSessionDeletedModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-feedback-session-deleted-modal',
            templateUrl: './feedback-session-deleted-modal.component.html',
            styleUrls: ['./feedback-session-deleted-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], FeedbackSessionDeletedModalComponent);
    return FeedbackSessionDeletedModalComponent;
}());
export { FeedbackSessionDeletedModalComponent };
//# sourceMappingURL=feedback-session-deleted-modal.component.js.map