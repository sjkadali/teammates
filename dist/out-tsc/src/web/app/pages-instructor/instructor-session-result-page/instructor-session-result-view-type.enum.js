/**
 * Represents the different supported view types in instructor sessions result page.
 */
export var InstructorSessionResultViewType;
(function (InstructorSessionResultViewType) {
    /**
     * Organize responses by questions.
     */
    InstructorSessionResultViewType[InstructorSessionResultViewType["QUESTION"] = 0] = "QUESTION";
    /**
     * Organize responses by giver name, then recipient name, then questions.
     */
    InstructorSessionResultViewType[InstructorSessionResultViewType["GRQ"] = 1] = "GRQ";
    /**
     * Organize responses by recipient name, then giver name, then questions.
     */
    InstructorSessionResultViewType[InstructorSessionResultViewType["RGQ"] = 2] = "RGQ";
    /**
     * Organize responses by giver name, then questions.
     */
    InstructorSessionResultViewType[InstructorSessionResultViewType["GQR"] = 3] = "GQR";
    /**
     * Organize responses by recipient name, then questions.
     */
    InstructorSessionResultViewType[InstructorSessionResultViewType["RQG"] = 4] = "RQG";
})(InstructorSessionResultViewType || (InstructorSessionResultViewType = {}));
//# sourceMappingURL=instructor-session-result-view-type.enum.js.map