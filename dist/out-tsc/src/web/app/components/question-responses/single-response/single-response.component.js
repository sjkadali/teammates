import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FeedbackQuestionType, } from '../../../../types/api-output';
/**
 * The component that will map a generic response to its specialized response view component.
 */
var SingleResponseComponent = /** @class */ (function () {
    function SingleResponseComponent() {
        this.responseDetails = {
            questionType: FeedbackQuestionType.TEXT,
        };
        this.questionDetails = {
            questionType: FeedbackQuestionType.TEXT,
            questionText: '',
        };
        this.isStudentPage = false;
        // enum
        this.FeedbackQuestionType = FeedbackQuestionType;
    }
    SingleResponseComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SingleResponseComponent.prototype, "responseDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SingleResponseComponent.prototype, "questionDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SingleResponseComponent.prototype, "isStudentPage", void 0);
    SingleResponseComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-single-response',
            templateUrl: './single-response.component.html',
            styleUrls: ['./single-response.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SingleResponseComponent);
    return SingleResponseComponent;
}());
export { SingleResponseComponent };
//# sourceMappingURL=single-response.component.js.map