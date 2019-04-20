import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
/**
 * A simple table to show course-related information about a student
 */
var CourseRelatedInfoComponent = /** @class */ (function () {
    function CourseRelatedInfoComponent() {
    }
    CourseRelatedInfoComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CourseRelatedInfoComponent.prototype, "student", void 0);
    CourseRelatedInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-course-related-info',
            templateUrl: './course-related-info.component.html',
            styleUrls: ['./course-related-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CourseRelatedInfoComponent);
    return CourseRelatedInfoComponent;
}());
export { CourseRelatedInfoComponent };
//# sourceMappingURL=course-related-info.component.js.map