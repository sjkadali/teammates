import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContributionQuestionConstraintComponent } from './contribution-question-constraint.component';
import { NumScaleQuestionConstraintComponent } from './num-scale-question-constraint.component';
import { TextQuestionConstraintComponent } from './text-question-constraint.component';
/**
 * Module for all different types of question constraints.
 */
var QuestionConstraintModule = /** @class */ (function () {
    function QuestionConstraintModule() {
    }
    QuestionConstraintModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ContributionQuestionConstraintComponent,
                NumScaleQuestionConstraintComponent,
                TextQuestionConstraintComponent,
            ],
            exports: [
                ContributionQuestionConstraintComponent,
                NumScaleQuestionConstraintComponent,
                TextQuestionConstraintComponent,
            ],
            imports: [
                CommonModule,
            ],
        })
    ], QuestionConstraintModule);
    return QuestionConstraintModule;
}());
export { QuestionConstraintModule };
//# sourceMappingURL=question-constraint.module.js.map