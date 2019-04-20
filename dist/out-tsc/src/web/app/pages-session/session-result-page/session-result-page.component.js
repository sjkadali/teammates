import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment-timezone';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { TimezoneService } from '../../../services/timezone.service';
import { Intent } from '../../Intent';
/**
 * Feedback session result page.
 */
var SessionResultPageComponent = /** @class */ (function () {
    function SessionResultPageComponent(httpRequestService, route, timezoneService, statusMessageService) {
        this.httpRequestService = httpRequestService;
        this.route = route;
        this.timezoneService = timezoneService;
        this.statusMessageService = statusMessageService;
        this.session = {};
        this.questions = [];
        this.formattedSessionOpeningTime = '';
        this.formattedSessionClosingTime = '';
        this.timezoneService.getTzVersion(); // import timezone service to load timezone data
    }
    SessionResultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            var paramMap = {
                courseid: queryParams.courseid,
                fsname: queryParams.fsname,
                intent: Intent.STUDENT_RESULT,
            };
            _this.httpRequestService.get('/session', paramMap).subscribe(function (resp) {
                var TIME_FORMAT = 'ddd, DD MMM, YYYY, hh:mm A zz';
                _this.session = resp;
                _this.formattedSessionOpeningTime =
                    moment(_this.session.submissionStartTimestamp).tz(_this.session.timeZone).format(TIME_FORMAT);
                _this.formattedSessionClosingTime =
                    moment(_this.session.submissionEndTimestamp).tz(_this.session.timeZone).format(TIME_FORMAT);
                _this.httpRequestService.get('/result', paramMap).subscribe(function (resp2) {
                    _this.questions = resp2.questions.sort(function (a, b) { return a.questionNumber - b.questionNumber; });
                }, function (resp2) {
                    _this.statusMessageService.showErrorMessage(resp2.error.message);
                });
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        });
    };
    SessionResultPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-session-result-page',
            templateUrl: './session-result-page.component.html',
            styleUrls: ['./session-result-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService, ActivatedRoute,
            TimezoneService, StatusMessageService])
    ], SessionResultPageComponent);
    return SessionResultPageComponent;
}());
export { SessionResultPageComponent };
//# sourceMappingURL=session-result-page.component.js.map