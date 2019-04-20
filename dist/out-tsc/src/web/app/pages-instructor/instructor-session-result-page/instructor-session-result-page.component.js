import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment-timezone';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { TimezoneService } from '../../../services/timezone.service';
import { Intent } from '../../Intent';
import { InstructorSessionResultSectionType } from './instructor-session-result-section-type.enum';
/**
 * Instructor feedback session result page.
 */
var InstructorSessionResultPageComponent = /** @class */ (function () {
    function InstructorSessionResultPageComponent(httpRequestService, route, timezoneService, statusMessageService) {
        this.httpRequestService = httpRequestService;
        this.route = route;
        this.timezoneService = timezoneService;
        this.statusMessageService = statusMessageService;
        // enum
        this.InstructorSessionResultSectionType = InstructorSessionResultSectionType;
        this.session = {};
        this.formattedSessionOpeningTime = '';
        this.formattedSessionClosingTime = '';
        this.viewType = 'QUESTION';
        this.section = '';
        this.sectionType = InstructorSessionResultSectionType.EITHER;
        this.groupByTeam = true;
        this.showStatistics = true;
        this.indicateMissingResponses = true;
        this.user = '';
        this.sectionsModel = {};
        this.isSectionsLoaded = false;
        this.questionsModel = {};
        this.isQuestionsLoaded = false;
        this.timezoneService.getTzVersion(); // import timezone service to load timezone data
    }
    InstructorSessionResultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            var paramMap = {
                courseid: queryParams.courseid,
                fsname: queryParams.fsname,
                intent: Intent.INSTRUCTOR_RESULT,
                user: _this.user,
            };
            _this.httpRequestService.get('/session', paramMap).subscribe(function (resp) {
                var TIME_FORMAT = 'ddd, DD MMM, YYYY, hh:mm A zz';
                _this.session = resp;
                _this.formattedSessionOpeningTime =
                    moment(_this.session.submissionStartTimestamp).tz(_this.session.timeZone).format(TIME_FORMAT);
                _this.formattedSessionClosingTime =
                    moment(_this.session.submissionEndTimestamp).tz(_this.session.timeZone).format(TIME_FORMAT);
                var sectionsParamMap = {
                    courseid: queryParams.courseid,
                    user: _this.user,
                };
                _this.httpRequestService.get('/course/sections', sectionsParamMap).subscribe(function (resp2) {
                    for (var _i = 0, _a = resp2.sectionNames; _i < _a.length; _i++) {
                        var sectionName = _a[_i];
                        _this.sectionsModel[sectionName] = {
                            responses: [],
                            hasPopulated: false,
                        };
                    }
                    _this.isSectionsLoaded = true;
                }, function (resp2) {
                    _this.statusMessageService.showErrorMessage(resp2.error.message);
                });
                _this.httpRequestService.get('/questions', paramMap).subscribe(function (resp2) {
                    for (var _i = 0, _a = resp2.questions; _i < _a.length; _i++) {
                        var question = _a[_i];
                        question.responses = [];
                        question.hasPopulated = false;
                        _this.questionsModel[question.feedbackQuestionId] = question;
                    }
                    _this.isQuestionsLoaded = true;
                }, function (resp2) {
                    _this.statusMessageService.showErrorMessage(resp2.error.message);
                });
            }, function (resp) {
                _this.statusMessageService.showErrorMessage(resp.error.message);
            });
        });
    };
    /**
     * Loads all the responses and response statistics for the specified question.
     */
    InstructorSessionResultPageComponent.prototype.loadQuestion = function (questionId) {
        var _this = this;
        if (this.questionsModel[questionId].hasPopulated) {
            // Do not re-fetch data
            return;
        }
        var paramMap = {
            courseid: this.session.courseId,
            fsname: this.session.feedbackSessionName,
            questionid: questionId,
            intent: Intent.INSTRUCTOR_RESULT,
        };
        this.httpRequestService.get('/result', paramMap).subscribe(function (resp) {
            if (resp.questions.length) {
                var responses = resp.questions[0];
                _this.questionsModel[questionId].responses = responses.allResponses;
                _this.questionsModel[questionId].statistics = responses.questionStatistics;
                _this.questionsModel[questionId].hasPopulated = true;
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Loads all the responses and response statistics for the specified section.
     */
    InstructorSessionResultPageComponent.prototype.loadSection = function (sectionName) {
        var _this = this;
        if (this.sectionsModel[sectionName].hasPopulated) {
            // Do not re-fetch data
            return;
        }
        var paramMap = {
            courseid: this.session.courseId,
            fsname: this.session.feedbackSessionName,
            frgroupbysection: sectionName,
            intent: Intent.INSTRUCTOR_RESULT,
        };
        this.httpRequestService.get('/result', paramMap).subscribe(function (resp) {
            _this.sectionsModel[sectionName].questions = resp.questions;
            _this.sectionsModel[sectionName].hasPopulated = true;
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    InstructorSessionResultPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-session-result-page',
            templateUrl: './instructor-session-result-page.component.html',
            styleUrls: ['./instructor-session-result-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService, ActivatedRoute,
            TimezoneService, StatusMessageService])
    ], InstructorSessionResultPageComponent);
    return InstructorSessionResultPageComponent;
}());
export { InstructorSessionResultPageComponent };
//# sourceMappingURL=instructor-session-result-page.component.js.map