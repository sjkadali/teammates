import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthService } from '../../services/auth.service';
/**
 * Base skeleton for student pages.
 */
var StudentPageComponent = /** @class */ (function () {
    function StudentPageComponent(route, authService) {
        this.route = route;
        this.authService = authService;
        this.user = '';
        this.institute = '';
        this.isInstructor = false;
        this.isStudent = false;
        this.isAdmin = false;
        this.navItems = [
            {
                url: '/web/student',
                display: 'Home',
            },
            {
                url: '/web/student/profile',
                display: 'Profile',
            },
            {
                url: '/web/student/help',
                display: 'Help',
            },
        ];
        this.isFetchingAuthDetails = false;
        this.backendUrl = environment.backendUrl;
    }
    StudentPageComponent.prototype.ngOnInit = function () {
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
                    window.location.href = "" + _this.backendUrl + res.studentLoginUrl;
                }
                _this.isFetchingAuthDetails = false;
            }, function () {
                // TODO
            });
        });
    };
    StudentPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-page',
            templateUrl: './student-page.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, AuthService])
    ], StudentPageComponent);
    return StudentPageComponent;
}());
export { StudentPageComponent };
//# sourceMappingURL=student-page.component.js.map