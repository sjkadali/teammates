import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
/**
 * The abstract question response.
 */
var QuestionResponse = /** @class */ (function () {
    function QuestionResponse(responseDetails, questionDetails) {
        this.isStudentPage = false;
        this.responseDetails = responseDetails;
        this.questionDetails = questionDetails;
    }
    QuestionResponse.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuestionResponse.prototype, "responseDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], QuestionResponse.prototype, "questionDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], QuestionResponse.prototype, "isStudentPage", void 0);
    return QuestionResponse;
}());
export { QuestionResponse };
//# sourceMappingURL=question-response.js.map