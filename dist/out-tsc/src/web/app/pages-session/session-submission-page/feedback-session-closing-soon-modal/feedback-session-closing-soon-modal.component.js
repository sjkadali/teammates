import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to alert that a feedback session is closing soon.
 */
var FeedbackSessionClosingSoonModalComponent = /** @class */ (function () {
    function FeedbackSessionClosingSoonModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    FeedbackSessionClosingSoonModalComponent.prototype.ngOnInit = function () {
    };
    FeedbackSessionClosingSoonModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-feedback-session-closing-soon-modal',
            templateUrl: './feedback-session-closing-soon-modal.component.html',
            styleUrls: ['./feedback-session-closing-soon-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], FeedbackSessionClosingSoonModalComponent);
    return FeedbackSessionClosingSoonModalComponent;
}());
export { FeedbackSessionClosingSoonModalComponent };
//# sourceMappingURL=feedback-session-closing-soon-modal.component.js.map