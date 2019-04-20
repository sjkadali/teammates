import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../../services/auth.service';
/**
 * Base skeleton for static pages.
 */
var StaticPageComponent = /** @class */ (function () {
    function StaticPageComponent(authService) {
        this.authService = authService;
        this.studentLoginUrl = '';
        this.instructorLoginUrl = '';
        this.user = '';
        this.institute = '';
        this.isInstructor = false;
        this.isStudent = false;
        this.isAdmin = false;
        this.navItems = [
            {
                url: '/web/front',
                display: 'Home',
            },
            {
                url: '/web/front/features',
                display: 'Features',
            },
            {
                url: '/web/front/about',
                display: 'About',
            },
            {
                url: '/web/front/contact',
                display: 'Contact',
            },
            {
                url: '/web/front/terms',
                display: 'Terms',
            },
            {
                display: 'Help',
                children: [
                    {
                        url: '/web/front/help/student',
                        display: 'Student Help',
                    },
                    {
                        url: '/web/front/help/instructor',
                        display: 'Instructor Help',
                    },
                    {
                        url: '/web/front/help/session-links-recovery',
                        display: 'Recover Session Links',
                    },
                ],
            },
        ];
        this.isFetchingAuthDetails = false;
        this.backendUrl = environment.backendUrl;
    }
    StaticPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isFetchingAuthDetails = true;
        this.authService.getAuthUser().subscribe(function (res) {
            if (res.user) {
                _this.user = res.user.id;
                _this.institute = res.institute;
                _this.isInstructor = res.user.isInstructor;
                _this.isStudent = res.user.isStudent;
                _this.isAdmin = res.user.isAdmin;
            }
            else {
                _this.studentLoginUrl = "" + _this.backendUrl + res.studentLoginUrl;
                _this.instructorLoginUrl = "" + _this.backendUrl + res.instructorLoginUrl;
            }
            _this.isFetchingAuthDetails = false;
        }, function () {
            // TODO
        });
    };
    StaticPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-static-page',
            templateUrl: './static-page.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], StaticPageComponent);
    return StaticPageComponent;
}());
export { StaticPageComponent };
//# sourceMappingURL=static-page.component.js.map