import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
/**
 * Pipe to handle the display of a map of {@code VisibilityControl} in visibility message.
 */
var VisibilityCapabilityPipe = /** @class */ (function () {
    function VisibilityCapabilityPipe() {
    }
    /**
     * Transforms a map of VisibilityControl to a capability description.
     *
     * @param controls a map where the key is the visibility control
     * and the value indicates whether the visibility control is granted or not.
     */
    VisibilityCapabilityPipe.prototype.transform = function (controls) {
        var message = 'can see your response';
        if (controls.SHOW_RECIPIENT_NAME) {
            message += ', the name of the recipient';
            if (controls.SHOW_GIVER_NAME) {
                message += ', and your name';
            }
            else {
                message += ', but not your name';
            }
        }
        else {
            if (controls.SHOW_GIVER_NAME) {
                message += ', and your name, but not the name of the recipient';
            }
            else {
                message += ', but not the name of the recipient, or your name';
            }
        }
        return message;
    };
    VisibilityCapabilityPipe = tslib_1.__decorate([
        Pipe({
            name: 'visibilityCapability',
        })
    ], VisibilityCapabilityPipe);
    return VisibilityCapabilityPipe;
}());
export { VisibilityCapabilityPipe };
//# sourceMappingURL=visibility-capability.pipe.js.map