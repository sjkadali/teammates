import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * Component for publicly available pages.
 */
var PublicPageComponent = /** @class */ (function () {
    function PublicPageComponent() {
    }
    PublicPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-public-page',
            template: '<tm-page [isValidUser]="true" [hideAuthInfo]="true"></tm-page>',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PublicPageComponent);
    return PublicPageComponent;
}());
export { PublicPageComponent };
//# sourceMappingURL=public-page.component.js.map