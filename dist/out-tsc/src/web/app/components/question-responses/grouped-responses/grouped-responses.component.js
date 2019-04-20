import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { InstructorSessionResultSectionType, } from '../../../pages-instructor/instructor-session-result-page/instructor-session-result-section-type.enum';
/**
 * A list of responses grouped in GRQ/RGQ mode.
 */
var GroupedResponsesComponent = /** @class */ (function () {
    function GroupedResponsesComponent() {
        this.responses = [];
        this.section = '';
        this.sectionType = InstructorSessionResultSectionType.EITHER;
        this.isGrq = true;
        this.header = '';
    }
    GroupedResponsesComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], GroupedResponsesComponent.prototype, "responses", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], GroupedResponsesComponent.prototype, "section", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GroupedResponsesComponent.prototype, "sectionType", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], GroupedResponsesComponent.prototype, "isGrq", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], GroupedResponsesComponent.prototype, "header", void 0);
    GroupedResponsesComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-grouped-responses',
            templateUrl: './grouped-responses.component.html',
            styleUrls: ['./grouped-responses.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GroupedResponsesComponent);
    return GroupedResponsesComponent;
}());
export { GroupedResponsesComponent };
//# sourceMappingURL=grouped-responses.component.js.map