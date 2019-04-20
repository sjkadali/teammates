import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InstructorHelpSectionComponent } from '../instructor-help-section.component';
/**
 * Sessions Section of the Instructor Help Page.
 */
var InstructorHelpSessionsSectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorHelpSessionsSectionComponent, _super);
    function InstructorHelpSessionsSectionComponent() {
        return _super.call(this) || this;
    }
    InstructorHelpSessionsSectionComponent.prototype.ngOnInit = function () {
    };
    InstructorHelpSessionsSectionComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-help-sessions-section',
            templateUrl: './instructor-help-sessions-section.component.html',
            styleUrls: ['./instructor-help-sessions-section.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorHelpSessionsSectionComponent);
    return InstructorHelpSessionsSectionComponent;
}(InstructorHelpSectionComponent));
export { InstructorHelpSessionsSectionComponent };
//# sourceMappingURL=instructor-help-sessions-section.component.js.map