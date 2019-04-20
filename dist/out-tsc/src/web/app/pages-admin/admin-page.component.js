import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { NavigationService } from '../../services/navigation.service';
/**
 * Base skeleton for admin pages.
 */
var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(router, authService, navigationService) {
        this.router = router;
        this.authService = authService;
        this.navigationService = navigationService;
        this.user = '';
        this.institute = '';
        this.isInstructor = false;
        this.isStudent = false;
        this.isAdmin = false;
        this.navItems = [
            {
                url: '/web/admin',
                display: 'Home',
            },
            {
                url: '/web/admin/search',
                display: 'Search',
            },
            {
                url: '/web/admin/sessions',
                display: 'Sessions',
            },
            {
                url: '/web/admin/timezone',
                display: 'Timezone Listing',
            },
        ];
        this.isFetchingAuthDetails = false;
        this.backendUrl = environment.backendUrl;
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isFetchingAuthDetails = true;
        this.authService.getAuthUser().subscribe(function (res) {
            if (res.user) {
                _this.user = res.user.id;
                _this.institute = res.institute;
                _this.isInstructor = res.user.isInstructor;
                _this.isStudent = res.user.isStudent;
                _this.isAdmin = res.user.isAdmin;
                if (!_this.isAdmin) {
                    // User is not a valid admin; redirect to home page.
                    // This should not happen in production server as the /web/admin/* routing is protected,
                    // and a 403 error page will be shown instead.
                    _this.navigationService.navigateWithErrorMessage(_this.router, '/web', 'You are not authorized to view the page.');
                }
            }
            else {
                window.location.href = "" + _this.backendUrl + res.adminLoginUrl;
            }
            _this.isFetchingAuthDetails = false;
        }, function () {
            // TODO
        });
    };
    AdminPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-admin-page',
            templateUrl: './admin-page.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [Router, AuthService, NavigationService])
    ], AdminPageComponent);
    return AdminPageComponent;
}());
export { AdminPageComponent };
//# sourceMappingURL=admin-page.component.js.map