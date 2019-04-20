import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../services/course.service';
import { HttpRequestService } from '../services/http-request.service';
import { ErrorReportComponent } from './components/error-report/error-report.component';
/**
 * User join page component.
 */
var UserJoinPageComponent = /** @class */ (function () {
    function UserJoinPageComponent(route, router, httpRequestService, courseService, ngbModal) {
        this.route = route;
        this.router = router;
        this.httpRequestService = httpRequestService;
        this.courseService = courseService;
        this.ngbModal = ngbModal;
        this.isLoading = true;
        this.hasJoined = false;
        this.entityType = '';
        this.key = '';
        this.institute = '';
        this.userId = '';
    }
    UserJoinPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.entityType = queryParams.entitytype;
            _this.key = queryParams.key;
            _this.institute = queryParams.instructorinstitution;
            _this.courseService.joinCourse(_this.key, _this.entityType).subscribe(function (resp) {
                _this.hasJoined = resp.hasJoined;
                _this.userId = resp.userId || '';
                _this.isLoading = false;
            }, function (resp) {
                if (resp.status === 403) {
                    _this.isLoading = false;
                }
                else {
                    var modalRef = _this.ngbModal.open(ErrorReportComponent);
                    modalRef.componentInstance.requestId = resp.error.requestId;
                    modalRef.componentInstance.errorMessage = resp.error.message;
                }
            });
        });
    };
    /**
     * Joins the course.
     */
    UserJoinPageComponent.prototype.joinCourse = function () {
        var _this = this;
        var paramMap = {
            key: this.key,
            entitytype: this.entityType,
            instructorinstitution: this.institute,
        };
        this.httpRequestService.put('/join', paramMap).subscribe(function () {
            _this.router.navigate(["/web/" + _this.entityType]);
        }, function (resp) {
            var modalRef = _this.ngbModal.open(ErrorReportComponent);
            modalRef.componentInstance.requestId = resp.error.requestId;
            modalRef.componentInstance.errorMessage = resp.error.message;
        });
    };
    UserJoinPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-user-join-page',
            templateUrl: './user-join-page.component.html',
            styleUrls: ['./user-join-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            HttpRequestService,
            CourseService,
            NgbModal])
    ], UserJoinPageComponent);
    return UserJoinPageComponent;
}());
export { UserJoinPageComponent };
//# sourceMappingURL=user-join-page.component.js.map