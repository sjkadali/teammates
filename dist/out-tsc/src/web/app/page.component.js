import * as tslib_1 from "tslib";
import { Component, Directive, ElementRef, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import uaParser from 'ua-parser-js';
import { environment } from '../environments/environment';
import { fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
var DEFAULT_TITLE = 'TEAMMATES - Online Peer Feedback/Evaluation System for Student Team Projects';
/**
 * Base skeleton for all pages.
 */
var PageComponent = /** @class */ (function () {
    function PageComponent(router, route, title) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.title = title;
        this.isFetchingAuthDetails = false;
        this.studentLoginUrl = '';
        this.instructorLoginUrl = '';
        this.user = '';
        this.isStudent = false;
        this.isInstructor = false;
        this.isAdmin = false;
        this.isValidUser = false;
        this.pageTitle = '';
        this.hideAuthInfo = false;
        this.navItems = [];
        this.institute = '';
        this.isCollapsed = true;
        this.isUnsupportedBrowser = false;
        this.isCookieDisabled = false;
        this.browser = '';
        this.version = environment.version;
        this.logoutUrl = environment.backendUrl + "/logout";
        /**
         * Minimum versions of browsers supported.
         *
         * Angular browser support: https://angular.io/guide/browser-support
         *
         * Bootstrap 4 browser support: https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/
         */
        this.minimumVersions = {
            Chrome: 45,
            IE: 10,
            Firefox: 40,
            Safari: 7,
        };
        this.checkBrowserVersion();
        this.router.events.subscribe(function (val) {
            if (val instanceof NavigationEnd) {
                window.scrollTo(0, 0); // reset viewport
                var r = _this.route;
                while (r.firstChild) {
                    r = r.firstChild;
                }
                r.data.subscribe(function (resp) {
                    _this.pageTitle = resp.pageTitle;
                    _this.title.setTitle(resp.htmlTitle || DEFAULT_TITLE);
                });
            }
        });
        if (environment.frontendUrl) {
            this.logoutUrl += "?frontendUrl=" + environment.frontendUrl;
        }
        this.isNetworkOnline$ = merge(of(navigator.onLine), fromEvent(window, 'online').pipe(mapTo(true)), fromEvent(window, 'offline').pipe(mapTo(false)));
    }
    PageComponent.prototype.checkBrowserVersion = function () {
        var browser = uaParser(navigator.userAgent).browser;
        this.browser = browser.name + " " + browser.version;
        this.isUnsupportedBrowser = !this.minimumVersions[browser.name]
            || this.minimumVersions[browser.name] > parseInt(browser.major, 10);
        this.isCookieDisabled = !navigator.cookieEnabled;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageComponent.prototype, "isFetchingAuthDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PageComponent.prototype, "studentLoginUrl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PageComponent.prototype, "instructorLoginUrl", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PageComponent.prototype, "user", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageComponent.prototype, "isStudent", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageComponent.prototype, "isInstructor", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageComponent.prototype, "isAdmin", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageComponent.prototype, "isValidUser", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PageComponent.prototype, "pageTitle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageComponent.prototype, "hideAuthInfo", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], PageComponent.prototype, "navItems", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PageComponent.prototype, "institute", void 0);
    PageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-page',
            templateUrl: './page.component.html',
            styleUrls: ['./page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, Title])
    ], PageComponent);
    return PageComponent;
}());
export { PageComponent };
/**
 * Directive to emit an event if a click occurred outside the element.
 */
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(elementRef) {
        this.elementRef = elementRef;
        this.tmClickOutside = new EventEmitter();
    }
    /**
     * Method to execute when any part of the document is clicked.
     */
    ClickOutsideDirective.prototype.onDocumentClick = function (event) {
        var targetElement = event.target;
        // Check if the click was outside the element
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.tmClickOutside.emit(event);
        }
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], ClickOutsideDirective.prototype, "tmClickOutside", void 0);
    tslib_1.__decorate([
        HostListener('document:click', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [MouseEvent]),
        tslib_1.__metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onDocumentClick", null);
    ClickOutsideDirective = tslib_1.__decorate([
        Directive({ selector: '[tmClickOutside]' }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
//# sourceMappingURL=page.component.js.map