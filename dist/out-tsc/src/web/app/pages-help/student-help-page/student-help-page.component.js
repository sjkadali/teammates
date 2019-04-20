import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
/**
 * Student help page.
 */
var StudentHelpPageComponent = /** @class */ (function () {
    function StudentHelpPageComponent() {
        this.supportEmail = environment.supportEmail;
    }
    StudentHelpPageComponent.prototype.ngOnInit = function () {
    };
    StudentHelpPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-help-page',
            templateUrl: './student-help-page.component.html',
            styleUrls: ['./student-help-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StudentHelpPageComponent);
    return StudentHelpPageComponent;
}());
export { StudentHelpPageComponent };
//# sourceMappingURL=student-help-page.component.js.map