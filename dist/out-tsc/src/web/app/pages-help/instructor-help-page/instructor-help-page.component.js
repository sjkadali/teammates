import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Sections } from './sections';
/**
 * Instructor help page.
 */
var InstructorHelpPageComponent = /** @class */ (function () {
    function InstructorHelpPageComponent() {
        // enum
        this.Sections = Sections;
        this.supportEmail = environment.supportEmail;
        this.searchTerm = '';
        this.key = '';
    }
    InstructorHelpPageComponent.prototype.ngOnInit = function () {
    };
    /**
     * Filters the help contents and displays only those that matches the filter.
     */
    InstructorHelpPageComponent.prototype.search = function () {
        if (this.searchTerm !== '') {
            this.key = this.searchTerm.toLowerCase();
        }
        else {
            this.clear();
        }
    };
    /**
     * Scrolls to the section passed in
     */
    InstructorHelpPageComponent.prototype.scroll = function (section) {
        if (this.bodyRef) {
            var el = Array.prototype.slice
                .call(this.bodyRef.nativeElement.childNodes).find(function (x) { return x.id === section; });
            if (el) {
                el.scrollIntoView();
                window.scrollBy(0, -50);
            }
        }
    };
    /**
     * Clears the filter used for search.
     */
    InstructorHelpPageComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.key = '';
    };
    tslib_1.__decorate([
        ViewChild('helpPage'),
        tslib_1.__metadata("design:type", ElementRef)
    ], InstructorHelpPageComponent.prototype, "bodyRef", void 0);
    InstructorHelpPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-help-page',
            templateUrl: './instructor-help-page.component.html',
            styleUrls: ['./instructor-help-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorHelpPageComponent);
    return InstructorHelpPageComponent;
}());
export { InstructorHelpPageComponent };
//# sourceMappingURL=instructor-help-page.component.js.map