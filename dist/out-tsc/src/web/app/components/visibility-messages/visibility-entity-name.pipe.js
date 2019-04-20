import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackParticipantType, FeedbackVisibilityType, NumberOfEntitiesToGiveFeedbackToSetting, } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@code FeedbackVisibilityType} in visibility message.
 */
var VisibilityEntityNamePipe = /** @class */ (function () {
    function VisibilityEntityNamePipe() {
    }
    /**
     * Transform the {@code FeedbackVisibilityType} to a name.
     *
     * @param visibilityType type to transform
     * @param questionRecipientType if the visibility is {@link FeedbackVisibilityType.RECIPIENT},
     * the param should be provided in order to know the real recipient
     * @param numberOfEntitiesToGiveFeedbackToSetting used to determines the plural form of the name
     * @param customNumberOfEntitiesToGiveFeedbackTo used to determines the plural form of the name
     */
    VisibilityEntityNamePipe.prototype.transform = function (visibilityType, questionRecipientType, numberOfEntitiesToGiveFeedbackToSetting, customNumberOfEntitiesToGiveFeedbackTo) {
        switch (visibilityType) {
            case FeedbackVisibilityType.RECIPIENT:
                // get entity name
                var recipientEntityName = '';
                switch (questionRecipientType) {
                    case FeedbackParticipantType.INSTRUCTORS:
                        recipientEntityName = 'instructor';
                        break;
                    case FeedbackParticipantType.STUDENTS:
                    case FeedbackParticipantType.OWN_TEAM_MEMBERS:
                    case FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF:
                        recipientEntityName = 'student';
                        break;
                    case FeedbackParticipantType.TEAMS:
                    case FeedbackParticipantType.OWN_TEAM:
                        recipientEntityName = 'team';
                        break;
                    default:
                        return 'unknown';
                }
                if ([FeedbackParticipantType.INSTRUCTORS, FeedbackParticipantType.STUDENTS, FeedbackParticipantType.TEAMS]
                    .includes(questionRecipientType)) {
                    // if questionRecipientType is one of certain participant type, add the plural form
                    if (numberOfEntitiesToGiveFeedbackToSetting === NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED
                        || (numberOfEntitiesToGiveFeedbackToSetting === NumberOfEntitiesToGiveFeedbackToSetting.CUSTOM
                            && customNumberOfEntitiesToGiveFeedbackTo !== undefined
                            && customNumberOfEntitiesToGiveFeedbackTo > 1)) {
                        recipientEntityName = recipientEntityName + "s";
                    }
                }
                return "The receiving " + recipientEntityName;
            case FeedbackVisibilityType.GIVER_TEAM_MEMBERS:
                return 'Your team members';
            case FeedbackVisibilityType.INSTRUCTORS:
                return 'Instructors in this course';
            case FeedbackVisibilityType.STUDENTS:
                return 'Other students in the course';
            case FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS:
                return "The recipient's team members";
            default:
                return 'Unknown';
        }
    };
    VisibilityEntityNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'visibilityEntityName',
        })
    ], VisibilityEntityNamePipe);
    return VisibilityEntityNamePipe;
}());
export { VisibilityEntityNamePipe };
//# sourceMappingURL=visibility-entity-name.pipe.js.map