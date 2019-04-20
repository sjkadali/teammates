import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FEEDBACK_SESSION_NAME_MAX_LENGTH } from '../../../types/field-validator';
/**
 * Copy current session modal.
 */
var CopySessionModalComponent = /** @class */ (function () {
    function CopySessionModalComponent(activeModal) {
        this.activeModal = activeModal;
        // const
        this.FEEDBACK_SESSION_NAME_MAX_LENGTH = FEEDBACK_SESSION_NAME_MAX_LENGTH;
        this.courseCandidates = [];
        this.sessionToCopyCourseId = '';
        this.newFeedbackSessionName = '';
        this.copyToCourseId = '';
    }
    CopySessionModalComponent.prototype.ngOnInit = function () {
    };
    /**
     * Fires the copy event.
     */
    CopySessionModalComponent.prototype.copy = function () {
        this.activeModal.close({
            newFeedbackSessionName: this.newFeedbackSessionName,
            copyToCourseId: this.copyToCourseId,
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CopySessionModalComponent.prototype, "courseCandidates", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CopySessionModalComponent.prototype, "sessionToCopyCourseId", void 0);
    CopySessionModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-copy-session-modal',
            templateUrl: './copy-session-modal.component.html',
            styleUrls: ['./copy-session-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], CopySessionModalComponent);
    return CopySessionModalComponent;
}());
export { CopySessionModalComponent };
//# sourceMappingURL=copy-session-modal.component.js.map