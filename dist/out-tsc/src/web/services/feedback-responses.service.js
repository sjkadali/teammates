import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FeedbackQuestionType, } from '../types/api-output';
import { DEFAULT_CONTRIBUTION_RESPONSE_DETAILS, DEFAULT_MCQ_RESPONSE_DETAILS, DEFAULT_MSQ_RESPONSE_DETAILS, DEFAULT_NUMSCALE_RESPONSE_DETAILS, DEFAULT_RANK_OPTIONS_RESPONSE_DETAILS, DEFAULT_TEXT_RESPONSE_DETAILS, } from '../types/default-question-structs';
import { CONTRIBUTION_POINT_NOT_SUBMITTED, NUMERICAL_SCALE_ANSWER_NOT_SUBMITTED, RANK_OPTIONS_ANSWER_NOT_SUBMITTED, } from '../types/feedback-response-details';
import { HttpRequestService } from './http-request.service';
/**
 * Handles feedback response settings provision.
 */
var FeedbackResponsesService = /** @class */ (function () {
    function FeedbackResponsesService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    /**
     * Gets the default feedback response details based on {@code questionType}.
     */
    FeedbackResponsesService.prototype.getDefaultFeedbackResponseDetails = function (questionType) {
        switch (questionType) {
            case FeedbackQuestionType.TEXT:
                return DEFAULT_TEXT_RESPONSE_DETAILS();
            case FeedbackQuestionType.RANK_OPTIONS:
                return DEFAULT_RANK_OPTIONS_RESPONSE_DETAILS();
            case FeedbackQuestionType.CONTRIB:
                return DEFAULT_CONTRIBUTION_RESPONSE_DETAILS();
            case FeedbackQuestionType.NUMSCALE:
                return DEFAULT_NUMSCALE_RESPONSE_DETAILS();
            case FeedbackQuestionType.MCQ:
                return DEFAULT_MCQ_RESPONSE_DETAILS();
            case FeedbackQuestionType.MSQ:
                return DEFAULT_MSQ_RESPONSE_DETAILS();
            default:
                throw new Error("Unknown question type " + questionType);
        }
    };
    /**
     * Checks whether a feedback response details is empty.
     */
    FeedbackResponsesService.prototype.isFeedbackResponseDetailsEmpty = function (questionType, details) {
        switch (questionType) {
            case FeedbackQuestionType.TEXT:
                var textDetails = details;
                return textDetails.answer.length === 0;
            case FeedbackQuestionType.RANK_OPTIONS:
                var rankDetails = details;
                var numberOfOptionsRanked = rankDetails.answers
                    .filter(function (rank) { return rank !== RANK_OPTIONS_ANSWER_NOT_SUBMITTED; }).length;
                return numberOfOptionsRanked === 0;
            case FeedbackQuestionType.CONTRIB:
                var contributionDetails = details;
                return contributionDetails.answer === CONTRIBUTION_POINT_NOT_SUBMITTED;
            case FeedbackQuestionType.NUMSCALE:
                var numScaleDetails = details;
                return numScaleDetails.answer === NUMERICAL_SCALE_ANSWER_NOT_SUBMITTED;
            case FeedbackQuestionType.MCQ:
                var mcqDetails = details;
                return mcqDetails.answer.length === 0 && !mcqDetails.isOther;
            case FeedbackQuestionType.MSQ:
                var msqDetails = details;
                return msqDetails.answers.length === 0 && !msqDetails.isOther;
            default:
                return true;
        }
    };
    /**
     * Creates a feedback response by calling API.
     */
    FeedbackResponsesService.prototype.createFeedbackResponse = function (questionId, additionalParams, request) {
        if (additionalParams === void 0) { additionalParams = {}; }
        return this.httpRequestService.post('/response', tslib_1.__assign({ questionid: questionId }, additionalParams), request);
    };
    /**
     * Updates a feedback response by calling API.
     */
    FeedbackResponsesService.prototype.updateFeedbackResponse = function (responseId, additionalParams, request) {
        if (additionalParams === void 0) { additionalParams = {}; }
        return this.httpRequestService.put('/response', tslib_1.__assign({ responseid: responseId }, additionalParams), request);
    };
    FeedbackResponsesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], FeedbackResponsesService);
    return FeedbackResponsesService;
}());
export { FeedbackResponsesService };
//# sourceMappingURL=feedback-responses.service.js.map