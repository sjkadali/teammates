import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackSessionPublishStatus } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@code FeedbackSessionPublishStatus}.
 */
var PublishStatusTooltipPipe = /** @class */ (function () {
    function PublishStatusTooltipPipe() {
    }
    /**
     * Transforms {@link FeedbackSessionPublishStatus} to a tooltip description.
     */
    PublishStatusTooltipPipe.prototype.transform = function (status) {
        switch (status) {
            case FeedbackSessionPublishStatus.PUBLISHED:
                return 'The responses for this session are visible.';
            case FeedbackSessionPublishStatus.NOT_PUBLISHED:
                return 'The responses for this session are not visible.';
            default:
                return 'Unknown';
        }
    };
    PublishStatusTooltipPipe = tslib_1.__decorate([
        Pipe({
            name: 'publishStatusTooltip',
        })
    ], PublishStatusTooltipPipe);
    return PublishStatusTooltipPipe;
}());
export { PublishStatusTooltipPipe };
//# sourceMappingURL=publish-status-tooltip.pipe.js.map