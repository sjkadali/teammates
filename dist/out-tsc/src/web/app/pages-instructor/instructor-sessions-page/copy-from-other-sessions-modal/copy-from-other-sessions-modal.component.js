import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FEEDBACK_SESSION_NAME_MAX_LENGTH } from '../../../../types/field-validator';
/**
 * Modal for creating new feedback session by copying from other feedback sessions.
 */
var CopyFromOtherSessionsModalComponent = /** @class */ (function () {
    function CopyFromOtherSessionsModalComponent(activeModal) {
        this.activeModal = activeModal;
        // const
        this.FEEDBACK_SESSION_NAME_MAX_LENGTH = FEEDBACK_SESSION_NAME_MAX_LENGTH;
        this.courseCandidates = [];
        this.existingFeedbackSession = [];
        this.copyToCourseId = '';
        this.newFeedbackSessionName = '';
    }
    /**
     * Copies the selected feedback session.
     */
    CopyFromOtherSessionsModalComponent.prototype.copy = function () {
        this.activeModal.close({
            fromFeedbackSession: this.copyFromFeedbackSession,
            newFeedbackSessionName: this.newFeedbackSessionName,
            copyToCourseId: this.copyToCourseId,
        });
    };
    CopyFromOtherSessionsModalComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CopyFromOtherSessionsModalComponent.prototype, "courseCandidates", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CopyFromOtherSessionsModalComponent.prototype, "existingFeedbackSession", void 0);
    CopyFromOtherSessionsModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-copy-from-other-sessions-modal',
            templateUrl: './copy-from-other-sessions-modal.component.html',
            styleUrls: ['./copy-from-other-sessions-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], CopyFromOtherSessionsModalComponent);
    return CopyFromOtherSessionsModalComponent;
}());
export { CopyFromOtherSessionsModalComponent };
//# sourceMappingURL=copy-from-other-sessions-modal.component.js.map