import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import moment from 'moment-timezone';
import { map } from 'rxjs/operators';
import { default as timezone } from '../data/timezone.json';
import { HttpRequestService } from './http-request.service';
import { LocalDateTimeAmbiguityStatus } from '../types/api-output';
/**
 * The date time format used in date time resolution.
 */
export var LOCAL_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
/**
 * Handles timezone information provision.
 */
var TimezoneService = /** @class */ (function () {
    function TimezoneService(httpRequestService) {
        var _this = this;
        this.httpRequestService = httpRequestService;
        this.tzVersion = '';
        this.tzOffsets = {};
        // These short timezones are not supported by Java
        this.badZones = {
            EST: true, 'GMT+0': true, 'GMT-0': true, HST: true, MST: true, ROC: true,
        };
        var d = new Date();
        moment.tz.load(timezone);
        this.tzVersion = moment.tz.dataVersion;
        moment.tz.names()
            .filter(function (tz) { return !_this.isBadZone(tz); })
            .forEach(function (tz) {
            var offset = moment.tz.zone(tz).utcOffset(d) * -1;
            _this.tzOffsets[tz] = offset;
        });
    }
    /**
     * Gets the timezone database version.
     */
    TimezoneService.prototype.getTzVersion = function () {
        return this.tzVersion;
    };
    /**
     * Gets the mapping of time zone ID to offset values.
     */
    TimezoneService.prototype.getTzOffsets = function () {
        return this.tzOffsets;
    };
    /**
     * Returns true if the specified time zone ID is "bad", i.e. not supported by back-end.
     */
    TimezoneService.prototype.isBadZone = function (tz) {
        return this.badZones[tz];
    };
    /**
     * Gets the resolved UNIX timestamp from a local data time with time zone.
     */
    TimezoneService.prototype.getResolvedTimestamp = function (localDateTime, timeZone, fieldName) {
        var params = { localdatetime: localDateTime, timezone: timeZone };
        return this.httpRequestService.get('/localdatetime', params).pipe(map(function (info) {
            var resolvingResult = {
                timestamp: info.resolvedTimestamp,
                message: '',
            };
            var DATE_FORMAT_WITHOUT_ZONE_INFO = 'ddd, DD MMM, YYYY hh:mm A';
            var DATE_FORMAT_WITH_ZONE_INFO = "ddd, DD MMM, YYYY hh:mm A z ('UTC'Z)";
            switch (info.resolvedStatus) {
                case LocalDateTimeAmbiguityStatus.UNAMBIGUOUS:
                    break;
                case LocalDateTimeAmbiguityStatus.GAP:
                    resolvingResult.message =
                        "The " + fieldName + ", " + moment.format(DATE_FORMAT_WITHOUT_ZONE_INFO) + ","
                            + 'falls within the gap period when clocks spring forward at the start of DST. '
                            + ("It was resolved to " + moment(info.resolvedTimestamp).format(DATE_FORMAT_WITH_ZONE_INFO) + ".");
                    break;
                case LocalDateTimeAmbiguityStatus.OVERLAP:
                    resolvingResult.message =
                        "The " + fieldName + ", " + moment.format(DATE_FORMAT_WITHOUT_ZONE_INFO) + ","
                            + 'falls within the overlap period when clocks fall back at the end of DST.'
                            + ("It can refer to " + moment(info.earlierInterpretationTimestamp).format(DATE_FORMAT_WITH_ZONE_INFO))
                            + ("or " + moment(info.laterInterpretationTimestamp).format(DATE_FORMAT_WITH_ZONE_INFO) + ".")
                            + 'It was resolved to %s.';
                    break;
                default:
            }
            return resolvingResult;
        }));
    };
    TimezoneService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], TimezoneService);
    return TimezoneService;
}());
export { TimezoneService };
//# sourceMappingURL=timezone.service.js.map