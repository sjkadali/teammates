import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * More info box and dialog
 */
var MoreInfoComponent = /** @class */ (function () {
    function MoreInfoComponent(ngbModal) {
        this.ngbModal = ngbModal;
        this.studentName = '';
        this.moreInfoText = '';
    }
    MoreInfoComponent.prototype.ngOnInit = function () {
    };
    /**
     * Open the more info modal.
     */
    MoreInfoComponent.prototype.openModal = function (content) {
        this.ngbModal.open(content);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MoreInfoComponent.prototype, "studentName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MoreInfoComponent.prototype, "moreInfoText", void 0);
    MoreInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-more-info',
            templateUrl: './more-info.component.html',
            styleUrls: ['./more-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal])
    ], MoreInfoComponent);
    return MoreInfoComponent;
}());
export { MoreInfoComponent };
//# sourceMappingURL=more-info.component.js.map