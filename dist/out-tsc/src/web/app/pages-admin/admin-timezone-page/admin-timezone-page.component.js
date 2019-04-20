import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpRequestService } from '../../../services/http-request.service';
import { TimezoneService } from '../../../services/timezone.service';
/**
 * Timezone listing page for admin use.
 */
var AdminTimezonePageComponent = /** @class */ (function () {
    function AdminTimezonePageComponent(timezoneService, httpRequestService) {
        this.timezoneService = timezoneService;
        this.httpRequestService = httpRequestService;
        this.javaTzVersion = '';
        this.javaTimezones = {};
        this.momentTzVersion = '';
        this.momentTimezones = {};
    }
    AdminTimezonePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.momentTzVersion = this.timezoneService.getTzVersion();
        this.momentTimezones = this.timezoneService.getTzOffsets();
        this.httpRequestService.get('/timezone').subscribe(function (res) {
            _this.javaTzVersion = res.version;
            _this.javaTimezones = res.offsets;
        });
    };
    AdminTimezonePageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-admin-timezone-page',
            templateUrl: './admin-timezone-page.component.html',
            styleUrls: ['./admin-timezone-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TimezoneService, HttpRequestService])
    ], AdminTimezonePageComponent);
    return AdminTimezonePageComponent;
}());
export { AdminTimezonePageComponent };
//# sourceMappingURL=admin-timezone-page.component.js.map