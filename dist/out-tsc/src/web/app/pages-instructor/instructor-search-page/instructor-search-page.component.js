import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
/**
 * Instructor search page.
 */
var InstructorSearchPageComponent = /** @class */ (function () {
    function InstructorSearchPageComponent(route, httpRequestService, statusMessageService) {
        this.route = route;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.user = '';
        this.searchKey = '';
        this.studentTables = [];
        this.fbSessionDataTables = [];
    }
    InstructorSearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            if (queryParams.studentSearchkey) {
                _this.searchKey = queryParams.studentSearchkey;
            }
            if (_this.searchKey) {
                _this.search({
                    searchKey: _this.searchKey,
                    searchStudents: true,
                    searchFeedbackSessionData: false,
                });
            }
        });
    };
    /**
     * Searches for students and questions/responses/comments matching the search query.
     */
    InstructorSearchPageComponent.prototype.search = function (searchQuery) {
        var _this = this;
        var paramMap = {
            searchkey: searchQuery.searchKey,
            searchstudents: searchQuery.searchStudents.toString(),
            searchfeedbacksessiondata: searchQuery.searchFeedbackSessionData.toString(),
        };
        this.httpRequestService.get('/studentsAndSessionData/search', paramMap).subscribe(function (resp) {
            _this.studentTables = resp.searchStudentsTables;
            _this.fbSessionDataTables = resp.searchFeedbackSessionDataTables;
            var hasStudents = !!(_this.studentTables && _this.studentTables.length);
            var hasFbSessionData = !!(_this.fbSessionDataTables && _this.fbSessionDataTables.length);
            if (!hasStudents && !hasFbSessionData) {
                _this.statusMessageService.showWarningMessage('No results found.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    InstructorSearchPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-search-page',
            templateUrl: './instructor-search-page.component.html',
            styleUrls: ['./instructor-search-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, HttpRequestService,
            StatusMessageService])
    ], InstructorSearchPageComponent);
    return InstructorSearchPageComponent;
}());
export { InstructorSearchPageComponent };
//# sourceMappingURL=instructor-search-page.component.js.map