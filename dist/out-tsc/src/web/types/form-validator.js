/**
 * Represents the root FormValidator object of all form fields.
 */
export var FormValidator;
(function (FormValidator) {
    /**
     * Max length for the 'Student Name` field.
     */
    FormValidator[FormValidator["STUDENT_NAME_MAX_LENGTH"] = 100] = "STUDENT_NAME_MAX_LENGTH";
    /**
     * Max length for the 'Section Name` field.
     */
    FormValidator[FormValidator["SECTION_NAME_MAX_LENGTH"] = 60] = "SECTION_NAME_MAX_LENGTH";
    /**
     * Max length for the 'Team Name` field.
     */
    FormValidator[FormValidator["TEAM_NAME_MAX_LENGTH"] = 60] = "TEAM_NAME_MAX_LENGTH";
    /**
     * Max length for the 'E-mail Address` field.
     */
    FormValidator[FormValidator["EMAIL_MAX_LENGTH"] = 254] = "EMAIL_MAX_LENGTH";
})(FormValidator || (FormValidator = {}));
//# sourceMappingURL=form-validator.js.map