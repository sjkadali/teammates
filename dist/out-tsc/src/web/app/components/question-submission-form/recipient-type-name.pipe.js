import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackParticipantType } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@code FeedbackParticipantType}.
 */
var RecipientTypeNamePipe = /** @class */ (function () {
    function RecipientTypeNamePipe() {
    }
    /**
     * Transforms {@link FeedbackQuestionType} to a entity type name.
     */
    RecipientTypeNamePipe.prototype.transform = function (recipientType, giverType) {
        switch (recipientType) {
            case FeedbackParticipantType.TEAMS:
            case FeedbackParticipantType.OWN_TEAM:
                return 'Team';
            case FeedbackParticipantType.STUDENTS:
                return 'Student';
            case FeedbackParticipantType.INSTRUCTORS:
                return 'Instructor';
            case FeedbackParticipantType.OWN_TEAM_MEMBERS:
            case FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF:
                if (giverType === FeedbackParticipantType.STUDENTS) {
                    return 'Student';
                }
                if (giverType === FeedbackParticipantType.INSTRUCTORS) {
                    return 'Instructor';
                }
                return 'Unknown';
            default:
                return 'Unknown';
        }
    };
    RecipientTypeNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'recipientTypeName',
        })
    ], RecipientTypeNamePipe);
    return RecipientTypeNamePipe;
}());
export { RecipientTypeNamePipe };
//# sourceMappingURL=recipient-type-name.pipe.js.map