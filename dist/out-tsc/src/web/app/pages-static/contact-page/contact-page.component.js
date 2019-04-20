import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
/**
 * Contact page.
 */
var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
        this.supportEmail = environment.supportEmail;
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-contact-page',
            templateUrl: './contact-page.component.html',
            styleUrls: ['./contact-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());
export { ContactPageComponent };
//# sourceMappingURL=contact-page.component.js.map