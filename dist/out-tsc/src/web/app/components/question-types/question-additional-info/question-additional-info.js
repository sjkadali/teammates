import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
/**
 * The abstract question additional info section.
 */
var QuestionAdditionalInfo = /** @class */ (function () {
    function QuestionAdditionalInfo(questionDetails) {
        this.questionDetails = questionDetails;
    }
    QuestionAdditionalInfo.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuestionAdditionalInfo.prototype, "questionDetails", void 0);
    return QuestionAdditionalInfo;
}());
export { QuestionAdditionalInfo };
//# sourceMappingURL=question-additional-info.js.map