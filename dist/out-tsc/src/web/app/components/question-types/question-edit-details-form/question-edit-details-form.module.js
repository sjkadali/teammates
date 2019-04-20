import * as tslib_1 from "tslib";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContributionQuestionEditDetailsFormComponent } from './contribution-question-edit-details-form.component';
import { McqFieldComponent } from './mcq-field/mcq-field.component';
import { McqQuestionEditDetailsFormComponent } from './mcq-question-edit-details-form.component';
import { MsqFieldComponent } from './msq-field/msq-field.component';
import { MsqQuestionEditDetailsFormComponent } from './msq-question-edit-details-form.component';
import { NumScaleQuestionEditDetailsFormComponent } from './num-scale-question-edit-details-form.component';
import { RankOptionsFieldComponent } from './rank-options-field/rank-options-field.component';
import { RankOptionsQuestionEditDetailsFormComponent } from './rank-options-question-edit-details-form.component';
import { TextQuestionEditDetailsFormComponent } from './text-question-edit-details-form.component';
import { WeightFieldComponent } from './weight-field/weight-field.component';
/**
 * Module for all different types of question edit details forms.
 */
var QuestionEditDetailsFormModule = /** @class */ (function () {
    function QuestionEditDetailsFormModule() {
    }
    QuestionEditDetailsFormModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ContributionQuestionEditDetailsFormComponent,
                McqFieldComponent,
                McqQuestionEditDetailsFormComponent,
                MsqFieldComponent,
                MsqQuestionEditDetailsFormComponent,
                NumScaleQuestionEditDetailsFormComponent,
                RankOptionsFieldComponent,
                RankOptionsQuestionEditDetailsFormComponent,
                TextQuestionEditDetailsFormComponent,
                WeightFieldComponent,
            ],
            exports: [
                ContributionQuestionEditDetailsFormComponent,
                McqFieldComponent,
                McqQuestionEditDetailsFormComponent,
                MsqFieldComponent,
                MsqQuestionEditDetailsFormComponent,
                NumScaleQuestionEditDetailsFormComponent,
                RankOptionsFieldComponent,
                RankOptionsQuestionEditDetailsFormComponent,
                TextQuestionEditDetailsFormComponent,
                WeightFieldComponent,
            ],
            imports: [
                CommonModule,
                DragDropModule,
                FormsModule,
                NgbModule,
            ],
        })
    ], QuestionEditDetailsFormModule);
    return QuestionEditDetailsFormModule;
}());
export { QuestionEditDetailsFormModule };
//# sourceMappingURL=question-edit-details-form.module.js.map