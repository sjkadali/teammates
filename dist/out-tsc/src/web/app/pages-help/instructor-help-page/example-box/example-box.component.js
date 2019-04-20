import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Mock NgbModal to disable modal dialogs
 */
var DisabledNgbModal = /** @class */ (function () {
    function DisabledNgbModal() {
    }
    /**
     * Mock open
     */
    DisabledNgbModal.prototype.open = function (_content) { };
    return DisabledNgbModal;
}());
export { DisabledNgbModal };
/**
 * Surround the component with an example box and disable some functionalities
 */
var ExampleBoxComponent = /** @class */ (function () {
    function ExampleBoxComponent() {
    }
    ExampleBoxComponent.prototype.ngOnInit = function () {
    };
    ExampleBoxComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-example-box',
            templateUrl: './example-box.component.html',
            styleUrls: ['./example-box.component.scss'],
            providers: [{ provide: NgbModal, useClass: DisabledNgbModal }],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ExampleBoxComponent);
    return ExampleBoxComponent;
}());
export { ExampleBoxComponent };
//# sourceMappingURL=example-box.component.js.map