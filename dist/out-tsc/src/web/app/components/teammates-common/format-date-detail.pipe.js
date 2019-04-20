import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
/**
 * Pipe to handle the display of a timestamp in detail.
 */
var FormatDateDetailPipe = /** @class */ (function () {
    function FormatDateDetailPipe() {
    }
    /**
     * Transforms a timestamp to a date string in detail.
     */
    FormatDateDetailPipe.prototype.transform = function (timestamp, timeZone) {
        return moment(timestamp).tz(timeZone).format('ddd, DD MMM YYYY, HH:mm A z');
    };
    FormatDateDetailPipe = tslib_1.__decorate([
        Pipe({
            name: 'formatDateDetail',
        })
    ], FormatDateDetailPipe);
    return FormatDateDetailPipe;
}());
export { FormatDateDetailPipe };
//# sourceMappingURL=format-date-detail.pipe.js.map