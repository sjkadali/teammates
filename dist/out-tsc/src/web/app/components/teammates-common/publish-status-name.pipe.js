import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackSessionPublishStatus } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@code FeedbackSessionPublishStatus}.
 */
var PublishStatusNamePipe = /** @class */ (function () {
    function PublishStatusNamePipe() {
    }
    /**
     * Transforms {@link FeedbackSessionPublishStatus} to a simple name.
     */
    PublishStatusNamePipe.prototype.transform = function (status) {
        switch (status) {
            case FeedbackSessionPublishStatus.PUBLISHED:
                return 'Published';
            case FeedbackSessionPublishStatus.NOT_PUBLISHED:
                return 'Not Published';
            default:
                return 'Unknown';
        }
    };
    PublishStatusNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'publishStatusName',
        })
    ], PublishStatusNamePipe);
    return PublishStatusNamePipe;
}());
export { PublishStatusNamePipe };
//# sourceMappingURL=publish-status-name.pipe.js.map