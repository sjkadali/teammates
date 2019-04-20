import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContributionQuestionInstructionComponent } from './contribution-question-instruction.component';
import { NumScaleQuestionInstructionComponent } from './num-scale-question-instruction.component';
import { RankOptionsQuestionInstructionComponent } from './rank-options-question-instruction.component';
import { TextQuestionInstructionComponent } from './text-question-instruction.component';
/**
 * Module for all different types of question instructions.
 */
var QuestionInstructionModule = /** @class */ (function () {
    function QuestionInstructionModule() {
    }
    QuestionInstructionModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ContributionQuestionInstructionComponent,
                NumScaleQuestionInstructionComponent,
                TextQuestionInstructionComponent,
                RankOptionsQuestionInstructionComponent,
            ],
            exports: [
                ContributionQuestionInstructionComponent,
                NumScaleQuestionInstructionComponent,
                TextQuestionInstructionComponent,
                RankOptionsQuestionInstructionComponent,
            ],
            imports: [
                CommonModule,
            ],
        })
    ], QuestionInstructionModule);
    return QuestionInstructionModule;
}());
export { QuestionInstructionModule };
//# sourceMappingURL=question-instruction.module.js.map