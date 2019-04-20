import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConstsumQuestionResponseComponent } from './constsum-question-response.component';
import { ContributionQuestionResponseComponent } from './contribution-question-response.component';
import { McqQuestionResponseComponent } from './mcq-question-response.component';
import { MsqQuestionResponseComponent } from './msq-question-response.component';
import { NumScaleQuestionResponseComponent } from './num-scale-question-response.component';
import { RankOptionsQuestionResponseComponent } from './rank-options-question-response.component';
import { RankRecipientsQuestionResponseComponent } from './rank-recipients-question-response.component';
import { RubricQuestionResponseComponent } from './rubric-question-response.component';
import { TextQuestionResponseComponent } from './text-question-response.component';
/**
 * Module for all different types of question responses.
 */
var QuestionResponseModule = /** @class */ (function () {
    function QuestionResponseModule() {
    }
    QuestionResponseModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ContributionQuestionResponseComponent,
                TextQuestionResponseComponent,
                NumScaleQuestionResponseComponent,
                McqQuestionResponseComponent,
                MsqQuestionResponseComponent,
                RubricQuestionResponseComponent,
                ConstsumQuestionResponseComponent,
                RankOptionsQuestionResponseComponent,
                RankRecipientsQuestionResponseComponent,
            ],
            exports: [
                ContributionQuestionResponseComponent,
                TextQuestionResponseComponent,
                NumScaleQuestionResponseComponent,
                McqQuestionResponseComponent,
                MsqQuestionResponseComponent,
                RubricQuestionResponseComponent,
                ConstsumQuestionResponseComponent,
                RankOptionsQuestionResponseComponent,
                RankRecipientsQuestionResponseComponent,
            ],
            imports: [
                CommonModule,
            ],
        })
    ], QuestionResponseModule);
    return QuestionResponseModule;
}());
export { QuestionResponseModule };
//# sourceMappingURL=question-response.module.js.map