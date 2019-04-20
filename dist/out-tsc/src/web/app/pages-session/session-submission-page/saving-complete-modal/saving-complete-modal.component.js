import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Modal to inform the completion of the saving process
 */
var SavingCompleteModalComponent = /** @class */ (function () {
    function SavingCompleteModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.notYetAnsweredQuestions = '';
        this.failToSaveQuestions = '';
        this.hasSubmissionConfirmationError = false;
    }
    SavingCompleteModalComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SavingCompleteModalComponent.prototype, "notYetAnsweredQuestions", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SavingCompleteModalComponent.prototype, "failToSaveQuestions", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SavingCompleteModalComponent.prototype, "hasSubmissionConfirmationError", void 0);
    SavingCompleteModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-saving-complete-modal',
            templateUrl: './saving-complete-modal.component.html',
            styleUrls: ['./saving-complete-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], SavingCompleteModalComponent);
    return SavingCompleteModalComponent;
}());
export { SavingCompleteModalComponent };
//# sourceMappingURL=saving-complete-modal.component.js.map