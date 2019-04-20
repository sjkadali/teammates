import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackParticipantType } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@link FeedbackParticipantType} from giver's perspective.
 */
var GiverTypeDescriptionPipe = /** @class */ (function () {
    function GiverTypeDescriptionPipe() {
    }
    /**
     * Transforms {@link FeedbackParticipantType} to a simple description from giver's perspective.
     */
    GiverTypeDescriptionPipe.prototype.transform = function (type) {
        switch (type) {
            case FeedbackParticipantType.SELF:
                return 'Feedback session creator (i.e., me)';
            case FeedbackParticipantType.STUDENTS:
                return 'Students in this course';
            case FeedbackParticipantType.INSTRUCTORS:
                return 'Instructors in this course';
            case FeedbackParticipantType.TEAMS:
                return 'Teams in this course';
            default:
                return 'Unknown';
        }
    };
    GiverTypeDescriptionPipe = tslib_1.__decorate([
        Pipe({
            name: 'giverTypeDescription',
        })
    ], GiverTypeDescriptionPipe);
    return GiverTypeDescriptionPipe;
}());
export { GiverTypeDescriptionPipe };
/**
 * Pipe to handle the display of {@link FeedbackParticipantType} from recipient's perspective.
 */
var RecipientTypeDescriptionPipe = /** @class */ (function () {
    function RecipientTypeDescriptionPipe() {
    }
    /**
     * Transforms {@link FeedbackParticipantType} to a simple description from recipient's perspective.
     */
    RecipientTypeDescriptionPipe.prototype.transform = function (type) {
        switch (type) {
            case FeedbackParticipantType.SELF:
                return 'Giver (Self feedback)';
            case FeedbackParticipantType.STUDENTS:
                return 'Other students in the course';
            case FeedbackParticipantType.INSTRUCTORS:
                return 'Instructors in the course';
            case FeedbackParticipantType.TEAMS:
                return 'Other teams in the course';
            case FeedbackParticipantType.OWN_TEAM:
                return "Giver's team";
            case FeedbackParticipantType.OWN_TEAM_MEMBERS:
                return "Giver's team members";
            case FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF:
                return "Giver's team members and Giver";
            case FeedbackParticipantType.NONE:
                return 'Nobody specific (For general class feedback)';
            default:
                return 'Unknown';
        }
    };
    RecipientTypeDescriptionPipe = tslib_1.__decorate([
        Pipe({
            name: 'recipientTypeDescription',
        })
    ], RecipientTypeDescriptionPipe);
    return RecipientTypeDescriptionPipe;
}());
export { RecipientTypeDescriptionPipe };
//# sourceMappingURL=feedback-path.pipe.js.map