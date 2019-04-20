import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpRequestService } from '../../../services/http-request.service';
/**
 * Error report component.
 */
var ErrorReportComponent = /** @class */ (function () {
    function ErrorReportComponent(httpRequestService) {
        this.httpRequestService = httpRequestService;
        this.errorMessage = '';
        this.subject = 'User-submitted Error Report';
        this.content = '';
        this.requestId = '';
        this.sendButtonEnabled = true;
        this.errorReportSubmitted = false;
    }
    ErrorReportComponent.prototype.ngOnInit = function () {
    };
    /**
     * Sends the error report.
     */
    ErrorReportComponent.prototype.sendErrorReport = function () {
        var _this = this;
        var request = {
            requestId: this.requestId,
            subject: this.subject,
            content: this.content,
        };
        this.sendButtonEnabled = false;
        this.httpRequestService.post('/errorreport', {}, request).subscribe(function () {
            _this.errorReportSubmitted = true;
        }, function (res) {
            _this.sendButtonEnabled = true;
            console.error(res);
        });
    };
    ErrorReportComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-error-report',
            templateUrl: './error-report.component.html',
            styleUrls: ['./error-report.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], ErrorReportComponent);
    return ErrorReportComponent;
}());
export { ErrorReportComponent };
//# sourceMappingURL=error-report.component.js.map