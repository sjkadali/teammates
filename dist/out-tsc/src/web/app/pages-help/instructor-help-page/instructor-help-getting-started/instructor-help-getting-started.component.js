import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
/**
 * Getting Started Section for Instructors
 */
var InstructorHelpGettingStartedComponent = /** @class */ (function () {
    function InstructorHelpGettingStartedComponent(route) {
        var _this = this;
        this.route = route;
        this.supportEmail = environment.supportEmail;
        this.instructorHelpPath = '';
        var r = this.route;
        while (r.firstChild) {
            r = r.firstChild;
        }
        r.data.subscribe(function (resp) {
            _this.instructorHelpPath = resp.instructorHelpPath;
        });
    }
    InstructorHelpGettingStartedComponent.prototype.ngOnInit = function () {
    };
    /**
     * To scroll to a specific HTML id
     */
    InstructorHelpGettingStartedComponent.prototype.jumpTo = function (target) {
        var destination = document.getElementById(target);
        if (destination) {
            destination.scrollIntoView();
            // to prevent the navbar from covering the text
            window.scrollTo(0, window.pageYOffset - 50);
        }
        return false;
    };
    InstructorHelpGettingStartedComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-help-getting-started',
            templateUrl: './instructor-help-getting-started.component.html',
            styleUrls: ['./instructor-help-getting-started.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], InstructorHelpGettingStartedComponent);
    return InstructorHelpGettingStartedComponent;
}());
export { InstructorHelpGettingStartedComponent };
//# sourceMappingURL=instructor-help-getting-started.component.js.map