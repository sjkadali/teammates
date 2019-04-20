import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackVisibilityType } from '../../../types/api-output';
import { VisibilityControl } from '../../../types/visibility-control';
/**
 * Pipe to handle the simple display of {@link VisibilityControl}.
 */
var VisibilityControlNamePipe = /** @class */ (function () {
    function VisibilityControlNamePipe() {
    }
    /**
     * Transforms {@code type} to a simple name.
     */
    VisibilityControlNamePipe.prototype.transform = function (type) {
        switch (type) {
            case VisibilityControl.SHOW_RESPONSE:
                return 'Can see answer';
            case VisibilityControl.SHOW_RECIPIENT_NAME:
                return "Can see recipient's name";
            case VisibilityControl.SHOW_GIVER_NAME:
                return "Can see giver's name";
            default:
                return 'Unknown';
        }
    };
    VisibilityControlNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'visibilityControlName',
        })
    ], VisibilityControlNamePipe);
    return VisibilityControlNamePipe;
}());
export { VisibilityControlNamePipe };
/**
 * Pipe to handle the detailed display of {@link FeedbackVisibilityType} in the context of
 * visibility control.
 */
var VisibilityTypeDescriptionPipe = /** @class */ (function () {
    function VisibilityTypeDescriptionPipe() {
    }
    /**
     * Transforms {@code type} to a detailed description.
     */
    VisibilityTypeDescriptionPipe.prototype.transform = function (type) {
        switch (type) {
            case FeedbackVisibilityType.RECIPIENT:
                return 'Control what feedback recipient(s) can view';
            case FeedbackVisibilityType.INSTRUCTORS:
                return 'Control what instructors can view';
            case FeedbackVisibilityType.GIVER_TEAM_MEMBERS:
                return 'Control what team members of feedback giver can view';
            case FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS:
                return 'Control what team members of feedback recipients can view';
            case FeedbackVisibilityType.STUDENTS:
                return 'Control what other students can view';
            default:
                return 'Unknown';
        }
    };
    VisibilityTypeDescriptionPipe = tslib_1.__decorate([
        Pipe({
            name: 'visibilityTypeDescription',
        })
    ], VisibilityTypeDescriptionPipe);
    return VisibilityTypeDescriptionPipe;
}());
export { VisibilityTypeDescriptionPipe };
/**
 * Pipe to handle the simple display of {@link FeedbackVisibilityType}.
 */
var VisibilityTypeNamePipe = /** @class */ (function () {
    function VisibilityTypeNamePipe() {
    }
    /**
     * Transforms {@code type} to a simple name.
     */
    VisibilityTypeNamePipe.prototype.transform = function (type) {
        switch (type) {
            case FeedbackVisibilityType.RECIPIENT:
                return 'Recipient(s)';
            case FeedbackVisibilityType.INSTRUCTORS:
                return 'Instructors';
            case FeedbackVisibilityType.GIVER_TEAM_MEMBERS:
                return "Giver's Team Members";
            case FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS:
                return "Recipient's Team Members";
            case FeedbackVisibilityType.STUDENTS:
                return 'Other students';
            default:
                return 'Unknown';
        }
    };
    VisibilityTypeNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'visibilityTypeName',
        })
    ], VisibilityTypeNamePipe);
    return VisibilityTypeNamePipe;
}());
export { VisibilityTypeNamePipe };
//# sourceMappingURL=visibility-setting.pipe.js.map