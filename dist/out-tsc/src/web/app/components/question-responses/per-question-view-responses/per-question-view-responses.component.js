import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { InstructorSessionResultSectionType, } from '../../../pages-instructor/instructor-session-result-page/instructor-session-result-section-type.enum';
/**
 * Component to display list of responses for one question.
 */
var PerQuestionViewResponsesComponent = /** @class */ (function () {
    function PerQuestionViewResponsesComponent() {
        this.questionDetails = {};
        this.responses = [];
        this.section = '';
        this.sectionType = InstructorSessionResultSectionType.EITHER;
        this.groupByTeam = true;
        this.indicateMissingResponses = true;
        this.showGiver = true;
        this.showRecipient = true;
        this.responsesToShow = [];
    }
    PerQuestionViewResponsesComponent.prototype.ngOnInit = function () {
        this.filterResponses();
    };
    PerQuestionViewResponsesComponent.prototype.ngOnChanges = function () {
        this.filterResponses();
    };
    PerQuestionViewResponsesComponent.prototype.filterResponses = function () {
        var responsesToShow = [];
        for (var _i = 0, _a = this.responses; _i < _a.length; _i++) {
            var response = _a[_i];
            if (this.section) {
                var shouldDisplayBasedOnSection = true;
                switch (this.sectionType) {
                    case InstructorSessionResultSectionType.EITHER:
                        shouldDisplayBasedOnSection =
                            response.giverSection === this.section || response.recipientSection === this.section;
                        break;
                    case InstructorSessionResultSectionType.GIVER:
                        shouldDisplayBasedOnSection = response.giverSection === this.section;
                        break;
                    case InstructorSessionResultSectionType.EVALUEE:
                        shouldDisplayBasedOnSection = response.recipientSection === this.section;
                        break;
                    case InstructorSessionResultSectionType.BOTH:
                        shouldDisplayBasedOnSection =
                            response.giverSection === this.section && response.recipientSection === this.section;
                        break;
                    default:
                }
                if (!shouldDisplayBasedOnSection) {
                    continue;
                }
            }
            responsesToShow.push(response);
        }
        this.responsesToShow = responsesToShow;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PerQuestionViewResponsesComponent.prototype, "questionDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], PerQuestionViewResponsesComponent.prototype, "responses", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PerQuestionViewResponsesComponent.prototype, "section", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], PerQuestionViewResponsesComponent.prototype, "sectionType", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PerQuestionViewResponsesComponent.prototype, "groupByTeam", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PerQuestionViewResponsesComponent.prototype, "indicateMissingResponses", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PerQuestionViewResponsesComponent.prototype, "showGiver", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PerQuestionViewResponsesComponent.prototype, "showRecipient", void 0);
    PerQuestionViewResponsesComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-per-question-view-responses',
            templateUrl: './per-question-view-responses.component.html',
            styleUrls: ['./per-question-view-responses.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PerQuestionViewResponsesComponent);
    return PerQuestionViewResponsesComponent;
}());
export { PerQuestionViewResponsesComponent };
//# sourceMappingURL=per-question-view-responses.component.js.map