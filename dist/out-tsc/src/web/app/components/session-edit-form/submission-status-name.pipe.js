import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackSessionSubmissionStatus } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@code FeedbackSessionSubmissionStatus}.
 */
var SubmissionStatusNamePipe = /** @class */ (function () {
    function SubmissionStatusNamePipe() {
    }
    /**
     * Transforms {@link FeedbackSessionSubmissionStatus} to a simple name.
     */
    SubmissionStatusNamePipe.prototype.transform = function (status) {
        switch (status) {
            case FeedbackSessionSubmissionStatus.NOT_VISIBLE:
            case FeedbackSessionSubmissionStatus.VISIBLE_NOT_OPEN:
                return 'Awaiting';
            case FeedbackSessionSubmissionStatus.OPEN:
            case FeedbackSessionSubmissionStatus.GRACE_PERIOD:
                return 'Open';
            case FeedbackSessionSubmissionStatus.CLOSED:
                return 'Closed';
            default:
                return 'Unknown';
        }
    };
    SubmissionStatusNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'submissionStatusName',
        })
    ], SubmissionStatusNamePipe);
    return SubmissionStatusNamePipe;
}());
export { SubmissionStatusNamePipe };
//# sourceMappingURL=submission-status-name.pipe.js.map