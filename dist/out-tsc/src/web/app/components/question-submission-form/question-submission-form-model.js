/**
 * The mode of operation for question submission form.
 */
export var QuestionSubmissionFormMode;
(function (QuestionSubmissionFormMode) {
    /**
     * User cannot select recipient to give feedback to.
     */
    QuestionSubmissionFormMode[QuestionSubmissionFormMode["FIXED_RECIPIENT"] = 0] = "FIXED_RECIPIENT";
    /**
     * User can select recipient to give feedback to.
     */
    QuestionSubmissionFormMode[QuestionSubmissionFormMode["FLEXIBLE_RECIPIENT"] = 1] = "FLEXIBLE_RECIPIENT";
})(QuestionSubmissionFormMode || (QuestionSubmissionFormMode = {}));
//# sourceMappingURL=question-submission-form-model.js.map