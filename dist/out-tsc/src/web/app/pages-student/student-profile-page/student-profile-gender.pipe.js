import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { Gender } from '../../../types/gender';
/**
 * Pipe to handle the display of gender options in the student profile page.
 */
var GenderFormatPipe = /** @class */ (function () {
    function GenderFormatPipe() {
    }
    /**
     * Transforms {@code gender} to a gender display option for the student profile page.
     */
    GenderFormatPipe.prototype.transform = function (gender) {
        switch (gender) {
            case Gender.MALE:
                return 'Male';
            case Gender.FEMALE:
                return 'Female';
            case Gender.OTHER:
                return 'Not Specified';
            default:
                return 'Unknown';
        }
    };
    GenderFormatPipe = tslib_1.__decorate([
        Pipe({
            name: 'genderFormat',
        })
    ], GenderFormatPipe);
    return GenderFormatPipe;
}());
export { GenderFormatPipe };
//# sourceMappingURL=student-profile-gender.pipe.js.map