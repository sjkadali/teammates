import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjaxLoadingModule } from '../../components/ajax-loading/ajax-loading.module';
import { QuestionSubmissionFormModule, } from '../../components/question-submission-form/question-submission-form.module';
import { TeammatesCommonModule } from '../../components/teammates-common/teammates-common.module';
import { FeedbackSessionClosedModalComponent, } from './feedback-session-closed-modal/feedback-session-closed-modal.component';
import { FeedbackSessionClosingSoonModalComponent, } from './feedback-session-closing-soon-modal/feedback-session-closing-soon-modal.component';
import { FeedbackSessionDeletedModalComponent, } from './feedback-session-deleted-modal/feedback-session-deleted-modal.component';
import { FeedbackSessionNotOpenModalComponent, } from './feedback-session-not-open-modal/feedback-session-not-open-modal.component';
import { SavingCompleteModalComponent } from './saving-complete-modal/saving-complete-modal.component';
import { SessionSubmissionPageComponent } from './session-submission-page.component';
/**
 * Module for feedback session submission page.
 */
var SessionSubmissionPageModule = /** @class */ (function () {
    function SessionSubmissionPageModule() {
    }
    SessionSubmissionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                AjaxLoadingModule,
                TeammatesCommonModule,
                CommonModule,
                FormsModule,
                NgbModule,
                QuestionSubmissionFormModule,
            ],
            declarations: [
                SavingCompleteModalComponent,
                SessionSubmissionPageComponent,
                FeedbackSessionClosingSoonModalComponent,
                FeedbackSessionClosedModalComponent,
                FeedbackSessionNotOpenModalComponent,
                FeedbackSessionDeletedModalComponent,
            ],
            exports: [
                SessionSubmissionPageComponent,
            ],
            entryComponents: [
                SavingCompleteModalComponent,
                FeedbackSessionClosingSoonModalComponent,
                FeedbackSessionClosedModalComponent,
                FeedbackSessionNotOpenModalComponent,
                FeedbackSessionDeletedModalComponent,
            ],
        })
    ], SessionSubmissionPageModule);
    return SessionSubmissionPageModule;
}());
export { SessionSubmissionPageModule };
//# sourceMappingURL=session-submission-page.module.js.map