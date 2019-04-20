import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthService } from '../../services/auth.service';
/**
 * Base skeleton for instructor pages.
 */
var InstructorPageComponent = /** @class */ (function () {
    function InstructorPageComponent(route, authService) {
        this.route = route;
        this.authService = authService;
        this.user = '';
        this.institute = '';
        this.isInstructor = false;
        this.isStudent = false;
        this.isAdmin = false;
        this.navItems = [
            {
                url: '/web/instructor',
                display: 'Home',
            },
            {
                url: '/web/instructor/courses',
                display: 'Courses',
            },
            {
                url: '/web/instructor/sessions',
                display: 'Sessions',
            },
            {
                url: '/web/instructor/students',
                display: 'Students',
            },
            {
                url: '/web/instructor/search',
                display: 'Search',
            },
            {
                url: '/web/instructor/help',
                display: 'Help',
            },
        ];
        this.isFetchingAuthDetails = false;
        this.backendUrl = environment.backendUrl;
    }
    InstructorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isFetchingAuthDetails = true;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.authService.getAuthUser(queryParams.user).subscribe(function (res) {
                if (res.user) {
                    _this.user = res.user.id + (res.masquerade ? ' (M)' : '');
                    _this.institute = res.institute;
                    _this.isInstructor = res.user.isInstructor;
                    _this.isStudent = res.user.isStudent;
                    _this.isAdmin = res.user.isAdmin;
                }
                else {
                    window.location.href = "" + _this.backendUrl + res.instructorLoginUrl;
                }
                _this.isFetchingAuthDetails = false;
            }, function () {
                // TODO
            });
        });
    };
    InstructorPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-page',
            templateUrl: './instructor-page.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, AuthService])
    ], InstructorPageComponent);
    return InstructorPageComponent;
}());
export { InstructorPageComponent };
//# sourceMappingURL=instructor-page.component.js.map