import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Pipe to handle the display of raw HTML.
 */
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    /**
     * Transforms HTML to value that can be displayed without sanitization.
     */
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({
            name: 'safeHtml',
        }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
//# sourceMappingURL=safe-html.pipe.js.map