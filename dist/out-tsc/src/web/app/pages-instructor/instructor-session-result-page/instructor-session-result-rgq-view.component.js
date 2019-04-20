import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { InstructorSessionResultView } from './instructor-session-result-view';
import { InstructorSessionResultViewType } from './instructor-session-result-view-type.enum';
/**
 * Instructor sessions results page RGQ view.
 */
var InstructorSessionResultRgqViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorSessionResultRgqViewComponent, _super);
    function InstructorSessionResultRgqViewComponent() {
        var _this = _super.call(this, InstructorSessionResultViewType.RGQ) || this;
        _this.loadSection = new EventEmitter();
        return _this;
    }
    /**
     * Expands the tab of the specified section.
     */
    InstructorSessionResultRgqViewComponent.prototype.expandSectionTab = function (sectionName, section) {
        section.isTabExpanded = !section.isTabExpanded;
        if (section.isTabExpanded) {
            this.loadSection.emit(sectionName);
        }
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], InstructorSessionResultRgqViewComponent.prototype, "loadSection", void 0);
    InstructorSessionResultRgqViewComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-session-result-rgq-view',
            templateUrl: './instructor-session-result-rgq-view.component.html',
            styleUrls: ['./instructor-session-result-rgq-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorSessionResultRgqViewComponent);
    return InstructorSessionResultRgqViewComponent;
}(InstructorSessionResultView));
export { InstructorSessionResultRgqViewComponent };
//# sourceMappingURL=instructor-session-result-rgq-view.component.js.map