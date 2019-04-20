import { FeedbackConstantSumDistributePointsType, FeedbackParticipantType, FeedbackQuestionType, } from './api-output';
import { CONTRIBUTION_POINT_NOT_SUBMITTED } from './feedback-response-details';
/**
 * Structure for default text question details.
 */
export var DEFAULT_TEXT_QUESTION_DETAILS = function () {
    return {
        recommendedLength: 0,
        questionType: FeedbackQuestionType.TEXT,
        questionText: '',
    };
};
/**
 * Structure for default text question response details.
 */
export var DEFAULT_TEXT_RESPONSE_DETAILS = function () {
    return {
        answer: '',
        questionType: FeedbackQuestionType.TEXT,
    };
};
/**
 * Structure for default contribution question details.
 */
export var DEFAULT_CONTRIBUTION_QUESTION_DETAILS = function () {
    return {
        isNotSureAllowed: true,
        questionType: FeedbackQuestionType.CONTRIB,
        questionText: '',
    };
};
/**
 * Structure for default contribution question response details.
 */
export var DEFAULT_CONTRIBUTION_RESPONSE_DETAILS = function () {
    return {
        answer: CONTRIBUTION_POINT_NOT_SUBMITTED,
        questionType: FeedbackQuestionType.CONTRIB,
    };
};
/**
 * Structure for default constant sum question details.
 */
export var DEFAULT_CONSTSUM_QUESTION_DETAILS = function () {
    return {
        numOfConstSumOptions: 0,
        constSumOptions: ['', ''],
        distributeToRecipients: false,
        pointsPerOption: false,
        forceUnevenDistribution: false,
        distributePointsFor: FeedbackConstantSumDistributePointsType.NONE,
        points: 100,
        questionType: FeedbackQuestionType.CONSTSUM,
        questionText: '',
    };
};
/**
 * Structure for default constant sum question response details.
 */
export var DEFAULT_CONSTSUM_RESPONSE_DETAILS = function () {
    return {
        answers: [],
        questionType: FeedbackQuestionType.CONSTSUM,
    };
};
/**
 * Structure for default numerical scale question details.
 */
export var DEFAULT_NUMSCALE_QUESTION_DETAILS = function () {
    return {
        minScale: 1,
        maxScale: 5,
        step: 0.5,
        questionType: FeedbackQuestionType.NUMSCALE,
        questionText: '',
    };
};
/**
 * Structure for default numerical scale question response details.
 */
export var DEFAULT_NUMSCALE_RESPONSE_DETAILS = function () {
    return {
        answer: 0,
        questionType: FeedbackQuestionType.NUMSCALE,
    };
};
/**
 * Structure for default MCQ question details.
 */
export var DEFAULT_MCQ_QUESTION_DETAILS = function () {
    return {
        hasAssignedWeights: false,
        mcqWeights: [],
        mcqOtherWeight: 0,
        numOfMcqChoices: 0,
        mcqChoices: [],
        otherEnabled: false,
        generateOptionsFor: FeedbackParticipantType.NONE,
        questionType: FeedbackQuestionType.MCQ,
        questionText: '',
    };
};
/**
 * Structure for default MCQ question response details.
 */
export var DEFAULT_MCQ_RESPONSE_DETAILS = function () {
    return {
        answer: '',
        isOther: false,
        otherFieldContent: '',
        questionType: FeedbackQuestionType.MCQ,
    };
};
/**
 * Structure for default MSQ question details.
 */
export var DEFAULT_MSQ_QUESTION_DETAILS = function () {
    return {
        msqChoices: [],
        otherEnabled: false,
        generateOptionsFor: FeedbackParticipantType.NONE,
        maxSelectableChoices: Number.MIN_VALUE,
        minSelectableChoices: Number.MIN_VALUE,
        hasAssignedWeights: false,
        msqWeights: [],
        msqOtherWeight: 0,
        questionType: FeedbackQuestionType.MSQ,
        questionText: '',
    };
};
/**
 * Structure for default MSQ question response details.
 */
export var DEFAULT_MSQ_RESPONSE_DETAILS = function () {
    return {
        answers: [],
        isOther: false,
        otherFieldContent: '',
        questionType: FeedbackQuestionType.MSQ,
    };
};
/**
 * Structure for default rubric question details.
 */
export var DEFAULT_RUBRIC_QUESTION_DETAILS = function () {
    return {
        hasAssignedWeights: false,
        numOfRubricChoices: 0,
        rubricChoices: [],
        numOfRubricSubQuestions: 0,
        rubricSubQuestions: [],
        rubricWeightsForEachCell: [],
        rubricDescriptions: [],
        questionType: FeedbackQuestionType.RUBRIC,
        questionText: '',
    };
};
/**
 * Structure for default rubric question response details.
 */
export var DEFAULT_RUBRIC_RESPONSE_DETAILS = function () {
    return {
        answer: [],
        questionType: FeedbackQuestionType.RUBRIC,
    };
};
/**
 * Structure for default rank options question details.
 */
export var DEFAULT_RANK_OPTIONS_QUESTION_DETAILS = function () {
    return {
        minOptionsToBeRanked: Number.MIN_VALUE,
        maxOptionsToBeRanked: Number.MIN_VALUE,
        areDuplicatesAllowed: false,
        options: [],
        questionType: FeedbackQuestionType.RANK_OPTIONS,
        questionText: '',
    };
};
/**
 * Structure for default rank options question response details.
 */
export var DEFAULT_RANK_OPTIONS_RESPONSE_DETAILS = function () {
    return {
        answers: [],
        questionType: FeedbackQuestionType.RANK_OPTIONS,
    };
};
/**
 * Structure for default rank recipients question details.
 */
export var DEFAULT_RANK_RECIPIENTS_QUESTION_DETAILS = function () {
    return {
        minOptionsToBeRanked: Number.MIN_VALUE,
        maxOptionsToBeRanked: Number.MIN_VALUE,
        areDuplicatesAllowed: false,
        questionType: FeedbackQuestionType.RANK_RECIPIENTS,
        questionText: '',
    };
};
/**
 * Structure for default rank recipients question response details.
 */
export var DEFAULT_RANK_RECIPIENTS_RESPONSE_DETAILS = function () {
    return {
        answer: 0,
        questionType: FeedbackQuestionType.RANK_RECIPIENTS,
    };
};
//# sourceMappingURL=default-question-structs.js.map