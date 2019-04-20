import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstructorHelpSectionComponent } from '../instructor-help-section.component';
/**
 * Questions Section of the Instructor Help Page.
 */
var InstructorHelpQuestionsSectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorHelpQuestionsSectionComponent, _super);
    function InstructorHelpQuestionsSectionComponent(modalService) {
        var _this = _super.call(this) || this;
        _this.modalService = modalService;
        return _this;
    }
    /**
     * Opens modal window.
     */
    InstructorHelpQuestionsSectionComponent.prototype.openModal = function (modal) {
        this.modalService.open(modal);
    };
    InstructorHelpQuestionsSectionComponent.prototype.ngOnInit = function () {
    };
    InstructorHelpQuestionsSectionComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-help-questions-section',
            templateUrl: './instructor-help-questions-section.component.html',
            styleUrls: ['./instructor-help-questions-section.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbModal])
    ], InstructorHelpQuestionsSectionComponent);
    return InstructorHelpQuestionsSectionComponent;
}(InstructorHelpSectionComponent));
export { InstructorHelpQuestionsSectionComponent };
//# sourceMappingURL=instructor-help-questions-section.component.js.map