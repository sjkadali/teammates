/**
 * The intent of calling the REST API.
 */
export var Intent;
(function (Intent) {
    /**
     * To get the full detail of the entities.
     */
    Intent["FULL_DETAIL"] = "FULL_DETAIL";
    /**
     * To submit the feedback session as instructors.
     */
    Intent["INSTRUCTOR_SUBMISSION"] = "INSTRUCTOR_SUBMISSION";
    /**
     * To submit the feedback session as students.
     */
    Intent["STUDENT_SUBMISSION"] = "STUDENT_SUBMISSION";
    /**
     * To view the feedback session results as instructors.
     */
    Intent["INSTRUCTOR_RESULT"] = "INSTRUCTOR_RESULT";
    /**
     * To view the feedback session results as students.
     */
    Intent["STUDENT_RESULT"] = "STUDENT_RESULT";
})(Intent || (Intent = {}));
//# sourceMappingURL=Intent.js.map