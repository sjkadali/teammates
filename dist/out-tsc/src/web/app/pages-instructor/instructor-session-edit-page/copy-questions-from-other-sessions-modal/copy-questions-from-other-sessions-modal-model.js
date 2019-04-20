/**
 * Sort criteria for questions.
 */
export var SortBy;
(function (SortBy) {
    /**
     * Nothing.
     */
    SortBy[SortBy["NONE"] = 0] = "NONE";
    /**
     * Course ID.
     */
    SortBy[SortBy["COURSE_ID"] = 1] = "COURSE_ID";
    /**
     * Feedback session name.
     */
    SortBy[SortBy["FEEDBACK_SESSION_NAME"] = 2] = "FEEDBACK_SESSION_NAME";
    /**
     * Feedback question type.
     */
    SortBy[SortBy["QUESTION_TYPE"] = 3] = "QUESTION_TYPE";
    /**
     * Feedback question text (brief).
     */
    SortBy[SortBy["QUESTION_TEXT"] = 4] = "QUESTION_TEXT";
})(SortBy || (SortBy = {}));
/**
 * Sort order for questions.
 */
export var SortOrder;
(function (SortOrder) {
    /**
     * Descending sort order.
     */
    SortOrder[SortOrder["DESC"] = 0] = "DESC";
    /**
     * Ascending sort order
     */
    SortOrder[SortOrder["ASC"] = 1] = "ASC";
})(SortOrder || (SortOrder = {}));
//# sourceMappingURL=copy-questions-from-other-sessions-modal-model.js.map