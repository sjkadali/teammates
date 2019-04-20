import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
/**
 * Pipe to handle the transformation of an enum to an array of all types it has.
 *
 * <p>Assums the enum is string in runtime.
 */
var EnumToArrayPipe = /** @class */ (function () {
    function EnumToArrayPipe() {
    }
    /**
     * Transforms enum to an array of all types it has.
     */
    EnumToArrayPipe.prototype.transform = function (enumObj) {
        return Object.keys(enumObj).map(function (s) { return enumObj[s]; });
    };
    EnumToArrayPipe = tslib_1.__decorate([
        Pipe({
            name: 'enumToArray',
        })
    ], EnumToArrayPipe);
    return EnumToArrayPipe;
}());
export { EnumToArrayPipe };
//# sourceMappingURL=enum-to-array.pipe.js.map