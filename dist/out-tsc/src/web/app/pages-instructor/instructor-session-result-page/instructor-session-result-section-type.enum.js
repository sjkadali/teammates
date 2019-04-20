/**
 * Represents how responses whose giver/evaluee comes from certain sections should be displayed or not.
 */
export var InstructorSessionResultSectionType;
(function (InstructorSessionResultSectionType) {
    /**
     * Show response if either the giver or evaluee is in the selected section
     */
    InstructorSessionResultSectionType[InstructorSessionResultSectionType["EITHER"] = 0] = "EITHER";
    /**
     * Show response if the giver is in the selected section
     */
    InstructorSessionResultSectionType[InstructorSessionResultSectionType["GIVER"] = 1] = "GIVER";
    /**
     * Show response if the evaluee is in the selected section
     */
    InstructorSessionResultSectionType[InstructorSessionResultSectionType["EVALUEE"] = 2] = "EVALUEE";
    /**
     * Show response only if both are in the selected section
     */
    InstructorSessionResultSectionType[InstructorSessionResultSectionType["BOTH"] = 3] = "BOTH";
})(InstructorSessionResultSectionType || (InstructorSessionResultSectionType = {}));
//# sourceMappingURL=instructor-session-result-section-type.enum.js.map