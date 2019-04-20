import * as tslib_1 from "tslib";
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment-timezone';
var DATE_FORMAT = 'ddd, DD MMM, YYYY';
/**
 * Date formatter for date picker in session edit form
 */
var SessionEditFormDatePickerFormatter = /** @class */ (function (_super) {
    tslib_1.__extends(SessionEditFormDatePickerFormatter, _super);
    function SessionEditFormDatePickerFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SessionEditFormDatePickerFormatter.prototype.format = function (date) {
        if (date == null) {
            return '';
        }
        var inst = moment();
        inst.set('year', date.year);
        inst.set('month', date.month - 1); // moment month is from 0-11
        inst.set('date', date.day);
        return inst.format(DATE_FORMAT);
    };
    SessionEditFormDatePickerFormatter.prototype.parse = function (value) {
        var inst = moment(value, DATE_FORMAT);
        return {
            year: inst.year(),
            month: inst.month() + 1,
            day: inst.date(),
        };
    };
    return SessionEditFormDatePickerFormatter;
}(NgbDateParserFormatter));
export { SessionEditFormDatePickerFormatter };
//# sourceMappingURL=session-edit-form-datepicker-formatter.js.map