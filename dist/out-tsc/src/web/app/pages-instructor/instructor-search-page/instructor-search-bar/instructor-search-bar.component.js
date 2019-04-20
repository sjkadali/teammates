import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * Search bar on instructor search page
 */
var InstructorSearchBarComponent = /** @class */ (function () {
    function InstructorSearchBarComponent() {
        this.searchKey = '';
        this.searchStudents = true;
        this.searchFeedbackSessionData = false;
        this.searched = new EventEmitter();
    }
    InstructorSearchBarComponent.prototype.ngOnInit = function () {
    };
    /**
     * send the search data to parent for processing
     */
    InstructorSearchBarComponent.prototype.search = function () {
        this.searched.emit({
            searchKey: this.searchKey,
            searchStudents: this.searchStudents,
            searchFeedbackSessionData: this.searchFeedbackSessionData,
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorSearchBarComponent.prototype, "searchKey", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], InstructorSearchBarComponent.prototype, "searched", void 0);
    InstructorSearchBarComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-search-bar',
            templateUrl: './instructor-search-bar.component.html',
            styleUrls: ['./instructor-search-bar.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorSearchBarComponent);
    return InstructorSearchBarComponent;
}());
export { InstructorSearchBarComponent };
//# sourceMappingURL=instructor-search-bar.component.js.map