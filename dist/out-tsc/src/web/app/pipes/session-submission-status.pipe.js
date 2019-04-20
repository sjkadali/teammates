import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
/**
 * Processes and displays the submission status.
 */
var SubmissionStatusPipe = /** @class */ (function () {
    function SubmissionStatusPipe() {
    }
    /**
     * Displays the submission status depending on student submissions and whether the session is open.
     */
    SubmissionStatusPipe.prototype.transform = function (isOpened, isWaitingToOpen, isSubmitted) {
        if (isOpened && isSubmitted) {
            return 'Submitted';
        }
        if (isOpened && !isSubmitted) {
            return 'Pending';
        }
        if (isWaitingToOpen) {
            return 'Awaiting';
        }
        return 'Closed';
    };
    SubmissionStatusPipe = tslib_1.__decorate([
        Pipe({ name: 'sessionSubmissionStatus' })
    ], SubmissionStatusPipe);
    return SubmissionStatusPipe;
}());
export { SubmissionStatusPipe };
//# sourceMappingURL=session-submission-status.pipe.js.map