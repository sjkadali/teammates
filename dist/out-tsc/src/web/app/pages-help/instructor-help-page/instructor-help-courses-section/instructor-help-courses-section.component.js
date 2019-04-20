import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { InstructorHelpSectionComponent } from '../instructor-help-section.component';
/**
 * Courses section of the Instructor Help Page
 */
var InstructorHelpCoursesSectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorHelpCoursesSectionComponent, _super);
    function InstructorHelpCoursesSectionComponent() {
        var _this = _super.call(this) || this;
        _this.supportEmail = environment.supportEmail;
        return _this;
    }
    InstructorHelpCoursesSectionComponent.prototype.ngOnInit = function () {
    };
    InstructorHelpCoursesSectionComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-help-courses-section',
            templateUrl: './instructor-help-courses-section.component.html',
            styleUrls: ['./instructor-help-courses-section.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorHelpCoursesSectionComponent);
    return InstructorHelpCoursesSectionComponent;
}(InstructorHelpSectionComponent));
export { InstructorHelpCoursesSectionComponent };
//# sourceMappingURL=instructor-help-courses-section.component.js.map