import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { default as templateQuestions } from '../data/template-questions.json';
import { FeedbackParticipantType, FeedbackQuestionType, FeedbackVisibilityType, NumberOfEntitiesToGiveFeedbackToSetting, } from '../types/api-output';
import { DEFAULT_CONTRIBUTION_QUESTION_DETAILS, DEFAULT_MCQ_QUESTION_DETAILS, DEFAULT_MSQ_QUESTION_DETAILS, DEFAULT_NUMSCALE_QUESTION_DETAILS, DEFAULT_RANK_OPTIONS_QUESTION_DETAILS, DEFAULT_TEXT_QUESTION_DETAILS, } from '../types/default-question-structs';
import { HttpRequestService } from './http-request.service';
import { VisibilityStateMachine } from './visibility-state-machine';
/**
 * Handles feedback question logic provision.
 */
var FeedbackQuestionsService = /** @class */ (function () {
    function FeedbackQuestionsService(httpRequestService) {
        this.httpRequestService = httpRequestService;
    }
    /**
     * Gets allowed feedback paths based on question type as some feedback paths does not make
     * sense under certain question.
     */
    FeedbackQuestionsService.prototype.getAllowedFeedbackPaths = function (type) {
        var paths = new Map();
        switch (type) {
            case FeedbackQuestionType.CONTRIB:
                paths.set(FeedbackParticipantType.STUDENTS, [FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF]);
                break;
            case FeedbackQuestionType.TEXT:
            case FeedbackQuestionType.MCQ:
            case FeedbackQuestionType.MSQ:
            case FeedbackQuestionType.NUMSCALE:
            case FeedbackQuestionType.RANK_OPTIONS:
                paths.set(FeedbackParticipantType.SELF, [FeedbackParticipantType.SELF, FeedbackParticipantType.STUDENTS, FeedbackParticipantType.INSTRUCTORS,
                    FeedbackParticipantType.TEAMS, FeedbackParticipantType.OWN_TEAM, FeedbackParticipantType.NONE]);
                paths.set(FeedbackParticipantType.STUDENTS, [FeedbackParticipantType.SELF, FeedbackParticipantType.STUDENTS, FeedbackParticipantType.INSTRUCTORS,
                    FeedbackParticipantType.TEAMS, FeedbackParticipantType.OWN_TEAM, FeedbackParticipantType.OWN_TEAM_MEMBERS,
                    FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF, FeedbackParticipantType.NONE]);
                paths.set(FeedbackParticipantType.INSTRUCTORS, [FeedbackParticipantType.SELF, FeedbackParticipantType.STUDENTS, FeedbackParticipantType.INSTRUCTORS,
                    FeedbackParticipantType.TEAMS, FeedbackParticipantType.OWN_TEAM, FeedbackParticipantType.NONE]);
                paths.set(FeedbackParticipantType.TEAMS, [FeedbackParticipantType.SELF, FeedbackParticipantType.STUDENTS, FeedbackParticipantType.INSTRUCTORS,
                    FeedbackParticipantType.TEAMS, FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF,
                    FeedbackParticipantType.NONE]);
                break;
            default:
        }
        return paths;
    };
    /**
     * Gets common feedback paths based on question type.
     */
    FeedbackQuestionsService.prototype.getCommonFeedbackPaths = function (type) {
        var paths = new Map();
        switch (type) {
            case FeedbackQuestionType.CONTRIB:
                paths.set(FeedbackParticipantType.STUDENTS, [FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF]);
                break;
            case FeedbackQuestionType.TEXT:
            case FeedbackQuestionType.MCQ:
            case FeedbackQuestionType.MSQ:
            case FeedbackQuestionType.NUMSCALE:
            case FeedbackQuestionType.RANK_OPTIONS:
                paths.set(FeedbackParticipantType.SELF, [FeedbackParticipantType.NONE, FeedbackParticipantType.SELF, FeedbackParticipantType.INSTRUCTORS]);
                paths.set(FeedbackParticipantType.STUDENTS, [FeedbackParticipantType.NONE, FeedbackParticipantType.SELF, FeedbackParticipantType.INSTRUCTORS,
                    FeedbackParticipantType.OWN_TEAM_MEMBERS, FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF]);
                paths.set(FeedbackParticipantType.INSTRUCTORS, [FeedbackParticipantType.NONE, FeedbackParticipantType.SELF, FeedbackParticipantType.INSTRUCTORS]);
                break;
            default:
        }
        return paths;
    };
    /**
     * Gets a state machine of visibility settings under {@code giverType} and {@code recipientType}.
     */
    FeedbackQuestionsService.prototype.getNewVisibilityStateMachine = function (giverType, recipientType) {
        return new VisibilityStateMachine(giverType, recipientType);
    };
    /**
     * Gets common feedback visibility settings under a feedback question type.
     *
     * @param visibilityStateMachine the state machine with current giverType and recipientType.
     * @param type the feedback question type.
     */
    FeedbackQuestionsService.prototype.getCommonFeedbackVisibilitySettings = function (visibilityStateMachine, type) {
        var settings = [];
        switch (type) {
            case FeedbackQuestionType.CONTRIB:
                settings.push({
                    name: "Shown anonymously to recipient and giver's team members, visible to instructors",
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT,
                            FeedbackVisibilityType.GIVER_TEAM_MEMBERS],
                        SHOW_GIVER_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    },
                }, {
                    name: 'Visible to instructors only',
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_GIVER_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                    },
                });
                break;
            case FeedbackQuestionType.TEXT:
            case FeedbackQuestionType.MCQ:
            case FeedbackQuestionType.MSQ:
            case FeedbackQuestionType.NUMSCALE:
            case FeedbackQuestionType.RANK_OPTIONS:
                settings.push({
                    name: 'Shown anonymously to recipient and instructors',
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                        SHOW_GIVER_NAME: [],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    },
                }, {
                    name: 'Shown anonymously to recipient, visible to instructors',
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                        SHOW_GIVER_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    },
                }, {
                    name: "Shown anonymously to recipient and giver/recipient's team members, visible to instructors",
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT,
                            FeedbackVisibilityType.GIVER_TEAM_MEMBERS, FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS,
                        ],
                        SHOW_GIVER_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    },
                }, {
                    name: "Shown anonymously to recipient and giver's team members, visible to instructors",
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT,
                            FeedbackVisibilityType.GIVER_TEAM_MEMBERS,
                        ],
                        SHOW_GIVER_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    },
                }, {
                    name: 'Visible to instructors only',
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_GIVER_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS],
                    },
                }, {
                    name: 'Visible to recipient and instructors',
                    visibilitySettings: {
                        SHOW_RESPONSE: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                        SHOW_GIVER_NAME: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                        SHOW_RECIPIENT_NAME: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    },
                });
                break;
            default:
        }
        // filter common settings based on visibility state
        // (i.e. some common settings does not make sense under certain state)
        settings = settings.filter(function (setting) {
            for (var _i = 0, _a = setting.visibilitySettings.SHOW_RESPONSE; _i < _a.length; _i++) {
                var visibilityType = _a[_i];
                if (!visibilityStateMachine.isVisibilityTypeApplicable(visibilityType)) {
                    return false;
                }
            }
            for (var _b = 0, _c = setting.visibilitySettings.SHOW_GIVER_NAME; _b < _c.length; _b++) {
                var visibilityType = _c[_b];
                if (!visibilityStateMachine.isVisibilityTypeApplicable(visibilityType)) {
                    return false;
                }
            }
            for (var _d = 0, _e = setting.visibilitySettings.SHOW_RECIPIENT_NAME; _d < _e.length; _d++) {
                var visibilityType = _e[_d];
                if (!visibilityStateMachine.isVisibilityTypeApplicable(visibilityType)) {
                    return false;
                }
            }
            return true;
        });
        return settings;
    };
    /**
     * Returns whether setting custom feedback visibility is allowed.
     */
    FeedbackQuestionsService.prototype.isCustomFeedbackVisibilitySettingAllowed = function (type) {
        switch (type) {
            case FeedbackQuestionType.TEXT:
                return true;
            case FeedbackQuestionType.CONTRIB:
                return false;
            case FeedbackQuestionType.MCQ:
                return true;
            case FeedbackQuestionType.NUMSCALE:
                return true;
            case FeedbackQuestionType.MSQ:
                return true;
            case FeedbackQuestionType.RANK_OPTIONS:
                return true;
            default:
                throw new Error("Unsupported question type: " + type);
        }
    };
    /**
     * Gets the model (contains default values) for new question.
     */
    FeedbackQuestionsService.prototype.getNewQuestionModel = function (type) {
        switch (type) {
            case FeedbackQuestionType.TEXT:
                return {
                    questionBrief: '',
                    questionDescription: '',
                    questionType: FeedbackQuestionType.TEXT,
                    questionDetails: DEFAULT_TEXT_QUESTION_DETAILS(),
                    giverType: FeedbackParticipantType.STUDENTS,
                    recipientType: FeedbackParticipantType.OWN_TEAM_MEMBERS,
                    numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
                    showResponsesTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    showGiverNameTo: [FeedbackVisibilityType.INSTRUCTORS],
                    showRecipientNameTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                };
            case FeedbackQuestionType.CONTRIB:
                return {
                    questionBrief: '',
                    questionDescription: '',
                    questionType: FeedbackQuestionType.CONTRIB,
                    questionDetails: DEFAULT_CONTRIBUTION_QUESTION_DETAILS(),
                    giverType: FeedbackParticipantType.STUDENTS,
                    recipientType: FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF,
                    numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
                    showResponsesTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT,
                        FeedbackVisibilityType.GIVER_TEAM_MEMBERS],
                    showGiverNameTo: [FeedbackVisibilityType.INSTRUCTORS],
                    showRecipientNameTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                };
            case FeedbackQuestionType.NUMSCALE:
                return {
                    questionBrief: '',
                    questionDescription: '',
                    questionType: FeedbackQuestionType.NUMSCALE,
                    questionDetails: DEFAULT_NUMSCALE_QUESTION_DETAILS(),
                    giverType: FeedbackParticipantType.STUDENTS,
                    recipientType: FeedbackParticipantType.OWN_TEAM_MEMBERS,
                    numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
                    showResponsesTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                    showGiverNameTo: [FeedbackVisibilityType.INSTRUCTORS],
                    showRecipientNameTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                };
            case FeedbackQuestionType.MCQ:
                var mcqQuestionDetails = DEFAULT_MCQ_QUESTION_DETAILS();
                mcqQuestionDetails.numOfMcqChoices = 2;
                mcqQuestionDetails.mcqChoices = [' ', ' '];
                return {
                    questionBrief: '',
                    questionDescription: '',
                    questionType: FeedbackQuestionType.MCQ,
                    questionDetails: mcqQuestionDetails,
                    giverType: FeedbackParticipantType.STUDENTS,
                    recipientType: FeedbackParticipantType.OWN_TEAM_MEMBERS,
                    numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
                    showResponsesTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT,
                        FeedbackVisibilityType.GIVER_TEAM_MEMBERS],
                    showGiverNameTo: [FeedbackVisibilityType.INSTRUCTORS],
                    showRecipientNameTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                };
            case FeedbackQuestionType.MSQ:
                var msqQuestionDetails = DEFAULT_MSQ_QUESTION_DETAILS();
                msqQuestionDetails.msqChoices = [' ', ' '];
                msqQuestionDetails.minSelectableChoices = -1;
                msqQuestionDetails.maxSelectableChoices = -1;
                return {
                    questionBrief: '',
                    questionDescription: '',
                    questionType: FeedbackQuestionType.MSQ,
                    questionDetails: msqQuestionDetails,
                    giverType: FeedbackParticipantType.STUDENTS,
                    recipientType: FeedbackParticipantType.OWN_TEAM_MEMBERS,
                    numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
                    showResponsesTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT,
                        FeedbackVisibilityType.GIVER_TEAM_MEMBERS],
                    showGiverNameTo: [FeedbackVisibilityType.INSTRUCTORS],
                    showRecipientNameTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                };
            case FeedbackQuestionType.RANK_OPTIONS:
                var rankOptionsQuestionDetails = DEFAULT_RANK_OPTIONS_QUESTION_DETAILS();
                rankOptionsQuestionDetails.maxOptionsToBeRanked = -1;
                rankOptionsQuestionDetails.minOptionsToBeRanked = -1;
                rankOptionsQuestionDetails.options = [' ', ' '];
                return {
                    questionBrief: '',
                    questionDescription: '',
                    questionType: FeedbackQuestionType.RANK_OPTIONS,
                    questionDetails: rankOptionsQuestionDetails,
                    giverType: FeedbackParticipantType.STUDENTS,
                    recipientType: FeedbackParticipantType.OWN_TEAM_MEMBERS,
                    numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting.UNLIMITED,
                    showResponsesTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT,
                        FeedbackVisibilityType.GIVER_TEAM_MEMBERS],
                    showGiverNameTo: [FeedbackVisibilityType.INSTRUCTORS],
                    showRecipientNameTo: [FeedbackVisibilityType.INSTRUCTORS, FeedbackVisibilityType.RECIPIENT],
                };
            default:
                throw new Error("Unsupported question type " + type);
        }
    };
    /**
     * Gets template questions.
     */
    FeedbackQuestionsService.prototype.getTemplateQuestions = function () {
        return templateQuestions;
    };
    /**
     * Creates a feedback question by calling API.
     */
    FeedbackQuestionsService.prototype.createFeedbackQuestion = function (courseId, feedbackSessionName, request) {
        var paramMap = {
            courseid: courseId,
            fsname: feedbackSessionName,
        };
        return this.httpRequestService.post('/question', paramMap, request);
    };
    /**
     * Saves a feedback question by calling API.
     */
    FeedbackQuestionsService.prototype.saveFeedbackQuestion = function (feedbackQuestionId, request) {
        var paramMap = { questionid: feedbackQuestionId };
        return this.httpRequestService.put('/question', paramMap, request);
    };
    FeedbackQuestionsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpRequestService])
    ], FeedbackQuestionsService);
    return FeedbackQuestionsService;
}());
export { FeedbackQuestionsService };
//# sourceMappingURL=feedback-questions.service.js.map