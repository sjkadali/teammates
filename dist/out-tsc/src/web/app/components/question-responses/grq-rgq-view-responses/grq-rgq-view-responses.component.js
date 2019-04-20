import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { InstructorSessionResultSectionType, } from '../../../pages-instructor/instructor-session-result-page/instructor-session-result-section-type.enum';
/**
 * Component to display list of responses in GRQ/RGQ view.
 */
var GrqRgqViewResponsesComponent = /** @class */ (function () {
    function GrqRgqViewResponsesComponent() {
        this.responses = {};
        this.section = '';
        this.sectionType = InstructorSessionResultSectionType.EITHER;
        this.groupByTeam = true;
        this.showStatistics = true;
        this.indicateMissingResponses = true;
        this.isGrq = true;
        this.teamsToUsers = {};
        this.teamExpanded = {};
        this.userToTeamName = {};
        this.responsesToShow = {};
    }
    GrqRgqViewResponsesComponent.prototype.ngOnInit = function () {
        this.filterResponses();
    };
    GrqRgqViewResponsesComponent.prototype.ngOnChanges = function () {
        this.filterResponses();
    };
    GrqRgqViewResponsesComponent.prototype.filterResponses = function () {
        var _this = this;
        this.responsesToShow = {};
        this.teamsToUsers = {};
        this.teamExpanded = {};
        this.userToTeamName = {};
        for (var _i = 0, _a = this.responses; _i < _a.length; _i++) {
            var question = _a[_i];
            for (var _b = 0, _c = question.allResponses; _b < _c.length; _b++) {
                var response = _c[_b];
                if (this.isGrq) {
                    this.teamsToUsers[response.giverTeam] = this.teamsToUsers[response.giverTeam] || [];
                    if (this.teamsToUsers[response.giverTeam].indexOf(response.giver) === -1) {
                        this.teamsToUsers[response.giverTeam].push(response.giver);
                        this.teamExpanded[response.giverTeam] = false;
                    }
                    this.userToTeamName[response.giver] = {
                        teamName: response.giverTeam,
                        isExpanded: false,
                    };
                }
                else {
                    if (!response.recipientTeam) {
                        // Recipient is team
                        if (this.teamsToUsers[response.recipient].indexOf(response.recipient) === -1) {
                            this.teamsToUsers[response.recipient].push(response.recipient);
                            this.teamExpanded[response.recipient] = false;
                        }
                        this.userToTeamName[response.recipient] = {
                            teamName: response.recipient,
                            isExpanded: false,
                        };
                        continue;
                    }
                    this.teamsToUsers[response.recipientTeam] = this.teamsToUsers[response.recipientTeam] || [];
                    if (this.teamsToUsers[response.recipientTeam].indexOf(response.recipient) === -1) {
                        this.teamsToUsers[response.recipientTeam].push(response.recipient);
                        this.teamExpanded[response.recipientTeam] = false;
                    }
                    this.userToTeamName[response.recipient] = {
                        teamName: response.recipientTeam,
                        isExpanded: false,
                    };
                }
            }
        }
        var _loop_1 = function (user) {
            for (var _i = 0, _a = this_1.responses; _i < _a.length; _i++) {
                var question = _a[_i];
                var questionCopy = JSON.parse(JSON.stringify(question));
                questionCopy.allResponses = questionCopy.allResponses.filter(function (response) {
                    if (_this.isGrq && user !== response.giver) {
                        return false;
                    }
                    if (!_this.isGrq && user !== response.recipient) {
                        return false;
                    }
                    var shouldDisplayBasedOnSection = true;
                    if (_this.section) {
                        switch (_this.sectionType) {
                            case InstructorSessionResultSectionType.EITHER:
                                shouldDisplayBasedOnSection =
                                    response.giverSection === _this.section || response.recipientSection === _this.section;
                                break;
                            case InstructorSessionResultSectionType.GIVER:
                                shouldDisplayBasedOnSection = response.giverSection === _this.section;
                                break;
                            case InstructorSessionResultSectionType.EVALUEE:
                                shouldDisplayBasedOnSection = response.recipientSection === _this.section;
                                break;
                            case InstructorSessionResultSectionType.BOTH:
                                shouldDisplayBasedOnSection =
                                    response.giverSection === _this.section && response.recipientSection === _this.section;
                                break;
                            default:
                        }
                    }
                    if (!shouldDisplayBasedOnSection) {
                        return false;
                    }
                    return true;
                });
                if (questionCopy.allResponses.length) {
                    var others = questionCopy.allResponses.map(function (response) {
                        return _this.isGrq ? response.recipient : response.giver;
                    });
                    var _loop_2 = function (other) {
                        var questionCopy2 = JSON.parse(JSON.stringify(questionCopy));
                        questionCopy2.allResponses = questionCopy2.allResponses.filter(function (response) {
                            return _this.isGrq ? response.recipient === other : response.giver === other;
                        });
                        this_1.responsesToShow[user] = this_1.responsesToShow[user] || {};
                        this_1.responsesToShow[user][other] = this_1.responsesToShow[user][other] || [];
                        this_1.responsesToShow[user][other].push(questionCopy2);
                    };
                    for (var _b = 0, others_1 = others; _b < others_1.length; _b++) {
                        var other = others_1[_b];
                        _loop_2(other);
                    }
                }
            }
        };
        var this_1 = this;
        for (var _d = 0, _e = Object.keys(this.userToTeamName); _d < _e.length; _d++) {
            var user = _e[_d];
            _loop_1(user);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], GrqRgqViewResponsesComponent.prototype, "responses", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], GrqRgqViewResponsesComponent.prototype, "section", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GrqRgqViewResponsesComponent.prototype, "sectionType", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], GrqRgqViewResponsesComponent.prototype, "groupByTeam", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], GrqRgqViewResponsesComponent.prototype, "showStatistics", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], GrqRgqViewResponsesComponent.prototype, "indicateMissingResponses", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], GrqRgqViewResponsesComponent.prototype, "isGrq", void 0);
    GrqRgqViewResponsesComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-grq-rgq-view-responses',
            templateUrl: './grq-rgq-view-responses.component.html',
            styleUrls: ['./grq-rgq-view-responses.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GrqRgqViewResponsesComponent);
    return GrqRgqViewResponsesComponent;
}());
export { GrqRgqViewResponsesComponent };
//# sourceMappingURL=grq-rgq-view-responses.component.js.map