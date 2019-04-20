import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
/**
 * Feedback response in student results page view.
 */
var StudentViewResponsesComponent = /** @class */ (function () {
    function StudentViewResponsesComponent() {
        this.questionDetails = {};
        this.responses = [];
        this.isSelfResponses = false;
        this.recipient = '';
    }
    StudentViewResponsesComponent.prototype.ngOnInit = function () {
        this.recipient = this.responses.length ? this.responses[0].recipient : '';
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StudentViewResponsesComponent.prototype, "questionDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], StudentViewResponsesComponent.prototype, "responses", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentViewResponsesComponent.prototype, "isSelfResponses", void 0);
    StudentViewResponsesComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-view-responses',
            templateUrl: './student-view-responses.component.html',
            styleUrls: ['./student-view-responses.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StudentViewResponsesComponent);
    return StudentViewResponsesComponent;
}());
export { StudentViewResponsesComponent };
//# sourceMappingURL=student-view-responses.component.js.map