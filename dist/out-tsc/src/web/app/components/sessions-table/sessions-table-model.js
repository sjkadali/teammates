/**
 * The column of the session table
 */
export var SessionsTableColumn;
(function (SessionsTableColumn) {
    /**
     * Course ID column.
     */
    SessionsTableColumn[SessionsTableColumn["COURSE_ID"] = 0] = "COURSE_ID";
    /**
     * Start date of the feedback session column.
     */
    SessionsTableColumn[SessionsTableColumn["START_DATE"] = 1] = "START_DATE";
    /**
     * End date of the feedback session column.
     */
    SessionsTableColumn[SessionsTableColumn["END_DATE"] = 2] = "END_DATE";
})(SessionsTableColumn || (SessionsTableColumn = {}));
/**
 * The color scheme of the header of the table
 */
export var SessionsTableHeaderColorScheme;
(function (SessionsTableHeaderColorScheme) {
    /**
     * Blue background with white text.
     */
    SessionsTableHeaderColorScheme[SessionsTableHeaderColorScheme["BLUE"] = 0] = "BLUE";
    /**
     * White background with black text.
     */
    SessionsTableHeaderColorScheme[SessionsTableHeaderColorScheme["WHITE"] = 1] = "WHITE";
})(SessionsTableHeaderColorScheme || (SessionsTableHeaderColorScheme = {}));
/**
 * Sort criteria for the sessions table.
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
     * Course ID.
     */
    SortBy[SortBy["COURSE_NAME"] = 2] = "COURSE_NAME";
    /**
     * The creation time of the course.
     */
    SortBy[SortBy["COURSE_CREATION_DATE"] = 3] = "COURSE_CREATION_DATE";
    /**
     * Feedback session name.
     */
    SortBy[SortBy["FEEDBACK_SESSION_NAME"] = 4] = "FEEDBACK_SESSION_NAME";
    /**
     * Start time of the feedback session.
     */
    SortBy[SortBy["START_DATE"] = 5] = "START_DATE";
    /**
     * End time of the feedback session.
     */
    SortBy[SortBy["END_DATE"] = 6] = "END_DATE";
    /**
     * The creation time of the feedback session.
     */
    SortBy[SortBy["SESSION_CREATION_DATE"] = 7] = "SESSION_CREATION_DATE";
    /**
     * The time when the feedback session is moved to recycle bin.
     */
    SortBy[SortBy["DELETION_DATE"] = 8] = "DELETION_DATE";
    /**
     * The name of the student's section.
     */
    SortBy[SortBy["SECTION_NAME"] = 9] = "SECTION_NAME";
    /**
     * The name of the student's team.
     */
    SortBy[SortBy["TEAM_NAME"] = 10] = "TEAM_NAME";
    /**
     * The name of the student.
     */
    SortBy[SortBy["STUDENT_NAME"] = 11] = "STUDENT_NAME";
    /**
     * The email of the student.
     */
    SortBy[SortBy["STUDENT_EMAIL"] = 12] = "STUDENT_EMAIL";
    /**
     * The status of the student's feedback submission.
     */
    SortBy[SortBy["SUBMIT_STATUS"] = 13] = "SUBMIT_STATUS";
})(SortBy || (SortBy = {}));
/**
 * Sort order for the sessions table.
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
//# sourceMappingURL=sessions-table-model.js.map