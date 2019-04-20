import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { InstructorSessionResultView } from './instructor-session-result-view';
import { InstructorSessionResultViewType } from './instructor-session-result-view-type.enum';
/**
 * Instructor sessions results page GRQ view.
 */
var InstructorSessionResultGrqViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorSessionResultGrqViewComponent, _super);
    function InstructorSessionResultGrqViewComponent() {
        var _this = _super.call(this, InstructorSessionResultViewType.GRQ) || this;
        _this.loadSection = new EventEmitter();
        return _this;
    }
    /**
     * Expands the tab of the specified section.
     */
    InstructorSessionResultGrqViewComponent.prototype.expandSectionTab = function (sectionName, section) {
        section.isTabExpanded = !section.isTabExpanded;
        if (section.isTabExpanded) {
            this.loadSection.emit(sectionName);
        }
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], InstructorSessionResultGrqViewComponent.prototype, "loadSection", void 0);
    InstructorSessionResultGrqViewComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-session-result-grq-view',
            templateUrl: './instructor-session-result-grq-view.component.html',
            styleUrls: ['./instructor-session-result-grq-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorSessionResultGrqViewComponent);
    return InstructorSessionResultGrqViewComponent;
}(InstructorSessionResultView));
export { InstructorSessionResultGrqViewComponent };
//# sourceMappingURL=instructor-session-result-grq-view.component.js.map