import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import moment from 'moment-timezone';
/**
 * Pipe to handle the display of feedback session start and end time in brief.
 */
var FormatDateBriefPipe = /** @class */ (function () {
    function FormatDateBriefPipe() {
    }
    /**
     * Transforms a timestamp to a date string briefly.
     */
    FormatDateBriefPipe.prototype.transform = function (timestamp, timeZone) {
        return moment(timestamp).tz(timeZone).format('D MMM H:mm A');
    };
    FormatDateBriefPipe = tslib_1.__decorate([
        Pipe({
            name: 'formatDateBrief',
        })
    ], FormatDateBriefPipe);
    return FormatDateBriefPipe;
}());
export { FormatDateBriefPipe };
//# sourceMappingURL=format-date-brief.pipe.js.map