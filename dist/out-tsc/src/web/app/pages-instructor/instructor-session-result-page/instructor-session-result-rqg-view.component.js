import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { InstructorSessionResultView } from './instructor-session-result-view';
import { InstructorSessionResultViewType } from './instructor-session-result-view-type.enum';
/**
 * Instructor sessions results page RQG view.
 */
var InstructorSessionResultRqgViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorSessionResultRqgViewComponent, _super);
    function InstructorSessionResultRqgViewComponent() {
        var _this = _super.call(this, InstructorSessionResultViewType.RQG) || this;
        _this.loadSection = new EventEmitter();
        return _this;
    }
    /**
     * Expands the tab of the specified section.
     */
    InstructorSessionResultRqgViewComponent.prototype.expandSectionTab = function (sectionName, section) {
        section.isTabExpanded = !section.isTabExpanded;
        if (section.isTabExpanded) {
            this.loadSection.emit(sectionName);
        }
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], InstructorSessionResultRqgViewComponent.prototype, "loadSection", void 0);
    InstructorSessionResultRqgViewComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-session-result-rqg-view',
            templateUrl: './instructor-session-result-rqg-view.component.html',
            styleUrls: ['./instructor-session-result-rqg-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorSessionResultRqgViewComponent);
    return InstructorSessionResultRqgViewComponent;
}(InstructorSessionResultView));
export { InstructorSessionResultRqgViewComponent };
//# sourceMappingURL=instructor-session-result-rqg-view.component.js.map