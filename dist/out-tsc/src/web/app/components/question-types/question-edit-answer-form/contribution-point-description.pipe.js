import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
/**
 * Pipe to handle the display of a contribution question answer.
 */
var ContributionPointDescriptionPipe = /** @class */ (function () {
    function ContributionPointDescriptionPipe() {
    }
    /**
     * Transforms a contribution point to a simple name.
     */
    ContributionPointDescriptionPipe.prototype.transform = function (point) {
        if (point > 100) {
            return "Equal share + " + (point - 100) + "%"; // Do more
        }
        if (point === 100) {
            return 'Equal share'; // Do same
        }
        if (point > 0) {
            return "Equal share - " + (100 - point) + "%"; // Do less
        }
        if (point === 0) {
            return '0%'; // Do none
        }
        return 'Unknown';
    };
    ContributionPointDescriptionPipe = tslib_1.__decorate([
        Pipe({
            name: 'contributionPointDescription',
        })
    ], ContributionPointDescriptionPipe);
    return ContributionPointDescriptionPipe;
}());
export { ContributionPointDescriptionPipe };
//# sourceMappingURL=contribution-point-description.pipe.js.map