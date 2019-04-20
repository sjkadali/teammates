import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
/**
 * Account request page.
 */
var RequestPageComponent = /** @class */ (function () {
    function RequestPageComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.accountRequestFormUrl = environment.accountRequestFormUrl
            ? this.sanitizer.bypassSecurityTrustResourceUrl(environment.accountRequestFormUrl)
            : null;
    }
    RequestPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-request-page',
            templateUrl: './request-page.component.html',
            styleUrls: ['./request-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], RequestPageComponent);
    return RequestPageComponent;
}());
export { RequestPageComponent };
//# sourceMappingURL=request-page.component.js.map