import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { InstructorSessionResultView } from './instructor-session-result-view';
import { InstructorSessionResultViewType } from './instructor-session-result-view-type.enum';
/**
 * Instructor sessions results page GQR view.
 */
var InstructorSessionResultGqrViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorSessionResultGqrViewComponent, _super);
    function InstructorSessionResultGqrViewComponent() {
        var _this = _super.call(this, InstructorSessionResultViewType.GQR) || this;
        _this.loadSection = new EventEmitter();
        return _this;
    }
    /**
     * Expands the tab of the specified section.
     */
    InstructorSessionResultGqrViewComponent.prototype.expandSectionTab = function (sectionName, section) {
        section.isTabExpanded = !section.isTabExpanded;
        if (section.isTabExpanded) {
            this.loadSection.emit(sectionName);
        }
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], InstructorSessionResultGqrViewComponent.prototype, "loadSection", void 0);
    InstructorSessionResultGqrViewComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-session-result-gqr-view',
            templateUrl: './instructor-session-result-gqr-view.component.html',
            styleUrls: ['./instructor-session-result-gqr-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorSessionResultGqrViewComponent);
    return InstructorSessionResultGqrViewComponent;
}(InstructorSessionResultView));
export { InstructorSessionResultGqrViewComponent };
//# sourceMappingURL=instructor-session-result-gqr-view.component.js.map