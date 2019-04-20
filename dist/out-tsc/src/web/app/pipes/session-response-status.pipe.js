import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
/**
 * Processes and displays the response status.
 */
var ResponseStatusPipe = /** @class */ (function () {
    function ResponseStatusPipe() {
    }
    /**
     * Displays the response status depending on whether the session is published.
     */
    ResponseStatusPipe.prototype.transform = function (isSessionPublished) {
        return isSessionPublished ? 'Published' : 'Not Published';
    };
    ResponseStatusPipe = tslib_1.__decorate([
        Pipe({ name: 'sessionResponseStatus' })
    ], ResponseStatusPipe);
    return ResponseStatusPipe;
}());
export { ResponseStatusPipe };
//# sourceMappingURL=session-response-status.pipe.js.map