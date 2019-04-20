import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { InstructorSessionResultSectionType } from './instructor-session-result-section-type.enum';
/**
 * Abstract component for all different view type components of instructor sessions result page.
 */
var InstructorSessionResultView = /** @class */ (function () {
    function InstructorSessionResultView(viewType) {
        this.viewType = viewType;
        this.responses = {};
        this.section = '';
        this.sectionType = InstructorSessionResultSectionType.EITHER;
        this.groupByTeam = true;
        this.showStatistics = true;
        this.indicateMissingResponses = true;
    }
    InstructorSessionResultView.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], InstructorSessionResultView.prototype, "responses", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorSessionResultView.prototype, "section", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], InstructorSessionResultView.prototype, "sectionType", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InstructorSessionResultView.prototype, "groupByTeam", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InstructorSessionResultView.prototype, "showStatistics", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InstructorSessionResultView.prototype, "indicateMissingResponses", void 0);
    return InstructorSessionResultView;
}());
export { InstructorSessionResultView };
//# sourceMappingURL=instructor-session-result-view.js.map