import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to alert that a feedback session is not open yet.
 */
var FeedbackSessionNotOpenModalComponent = /** @class */ (function () {
    function FeedbackSessionNotOpenModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    FeedbackSessionNotOpenModalComponent.prototype.ngOnInit = function () {
    };
    FeedbackSessionNotOpenModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-feedback-session-not-open-modal',
            templateUrl: './feedback-session-not-open-modal.component.html',
            styleUrls: ['./feedback-session-not-open-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], FeedbackSessionNotOpenModalComponent);
    return FeedbackSessionNotOpenModalComponent;
}());
export { FeedbackSessionNotOpenModalComponent };
//# sourceMappingURL=feedback-session-not-open-modal.component.js.map