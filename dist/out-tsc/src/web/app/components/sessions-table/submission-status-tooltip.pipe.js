import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackSessionSubmissionStatus } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@code FeedbackSessionSubmissionStatus}.
 */
var SubmissionStatusTooltipPipe = /** @class */ (function () {
    function SubmissionStatusTooltipPipe() {
    }
    /**
     * Transforms {@link FeedbackSessionSubmissionStatus} to a tooltip description.
     */
    SubmissionStatusTooltipPipe.prototype.transform = function (status) {
        var msg = 'The feedback session has been created';
        switch (status) {
            case FeedbackSessionSubmissionStatus.VISIBLE_NOT_OPEN:
            case FeedbackSessionSubmissionStatus.OPEN:
            case FeedbackSessionSubmissionStatus.GRACE_PERIOD:
            case FeedbackSessionSubmissionStatus.CLOSED:
                msg += ', is visible';
                break;
            default:
        }
        switch (status) {
            case FeedbackSessionSubmissionStatus.VISIBLE_NOT_OPEN:
                msg += ', and is waiting to open';
                break;
            case FeedbackSessionSubmissionStatus.OPEN:
                msg += ', and is open for submissions';
                break;
            case FeedbackSessionSubmissionStatus.CLOSED:
                msg += ', and has ended';
                break;
            default:
        }
        msg += '.';
        return msg;
    };
    SubmissionStatusTooltipPipe = tslib_1.__decorate([
        Pipe({
            name: 'submissionStatusTooltip',
        })
    ], SubmissionStatusTooltipPipe);
    return SubmissionStatusTooltipPipe;
}());
export { SubmissionStatusTooltipPipe };
//# sourceMappingURL=submission-status-tooltip.pipe.js.map