import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { default as developers } from '../../../data/developers.json';
/**
 * About page.
 */
var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
        this.nDevelopers = 0;
        this.teamMembers = [];
        this.pastTeamMembers = [];
        this.committers = [];
        this.pastCommitters = [];
        this.majorContributors = [];
        this.multipleContributors = [];
        this.singleContributors = [];
    }
    AboutPageComponent.prototype.setUrl = function (dev) {
        if (dev.url) {
            return dev;
        }
        if (dev.username) {
            dev.url = "https://github.com/" + dev.username;
        }
        return dev;
    };
    AboutPageComponent.prototype.setDisplayedName = function (dev) {
        dev.displayedName = dev.name || "@" + dev.username;
        return dev;
    };
    AboutPageComponent.prototype.ngOnInit = function () {
        this.nDevelopers = developers.teammembers.length + developers.committers.length + developers.contributors.length;
        this.teamMembers = developers.teammembers.filter(function (n) { return n.currentPosition; }).map(this.setUrl);
        this.pastTeamMembers = developers.teammembers.filter(function (n) { return !n.currentPosition; }).map(this.setUrl);
        this.committers = developers.committers.filter(function (n) { return !n.endPeriod; }).map(this.setUrl);
        this.pastCommitters = developers.committers.filter(function (n) { return n.endPeriod; }).map(this.setUrl);
        this.majorContributors = developers.contributors.filter(function (n) { return n.major; }).map(this.setUrl);
        this.multipleContributors = developers.contributors.filter(function (n) { return !n.major && n.multiple; })
            .map(this.setUrl).map(this.setDisplayedName);
        this.singleContributors = developers.contributors.filter(function (n) { return !n.major && !n.multiple; })
            .map(this.setUrl).map(this.setDisplayedName);
    };
    AboutPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-about-page',
            templateUrl: './about-page.component.html',
            styleUrls: ['./about-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());
export { AboutPageComponent };
//# sourceMappingURL=about-page.component.js.map