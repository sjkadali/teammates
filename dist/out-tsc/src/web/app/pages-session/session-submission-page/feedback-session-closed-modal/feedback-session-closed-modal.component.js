import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to alert that a feedback session is closed.
 */
var FeedbackSessionClosedModalComponent = /** @class */ (function () {
    function FeedbackSessionClosedModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    FeedbackSessionClosedModalComponent.prototype.ngOnInit = function () {
    };
    FeedbackSessionClosedModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-feedback-session-closed-modal',
            templateUrl: './feedback-session-closed-modal.component.html',
            styleUrls: ['./feedback-session-closed-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], FeedbackSessionClosedModalComponent);
    return FeedbackSessionClosedModalComponent;
}());
export { FeedbackSessionClosedModalComponent };
//# sourceMappingURL=feedback-session-closed-modal.component.js.map