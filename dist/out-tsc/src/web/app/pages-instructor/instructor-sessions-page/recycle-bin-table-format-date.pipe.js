import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
/**
 * Pipe to handle the display of a time in recycle bin table.
 */
var RecycleBinTableFormatDatePipe = /** @class */ (function () {
    function RecycleBinTableFormatDatePipe() {
    }
    /**
     * Transforms timestamp to a date in a timezone in recycle bin table.
     */
    RecycleBinTableFormatDatePipe.prototype.transform = function (timestamp, timeZone) {
        return moment(timestamp).tz(timeZone).format('DD MMM, YYYY');
    };
    RecycleBinTableFormatDatePipe = tslib_1.__decorate([
        Pipe({
            name: 'recycleBinTableFormatDate',
        })
    ], RecycleBinTableFormatDatePipe);
    return RecycleBinTableFormatDatePipe;
}());
export { RecycleBinTableFormatDatePipe };
//# sourceMappingURL=recycle-bin-table-format-date.pipe.js.map