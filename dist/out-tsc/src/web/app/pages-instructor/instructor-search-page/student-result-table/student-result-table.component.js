import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
/**
 * Table to show student results, grouped by courses
 */
var StudentResultTableComponent = /** @class */ (function () {
    function StudentResultTableComponent() {
        this.studentTables = [];
    }
    StudentResultTableComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], StudentResultTableComponent.prototype, "studentTables", void 0);
    StudentResultTableComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-result-table',
            templateUrl: './student-result-table.component.html',
            styleUrls: ['./student-result-table.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StudentResultTableComponent);
    return StudentResultTableComponent;
}());
export { StudentResultTableComponent };
//# sourceMappingURL=student-result-table.component.js.map