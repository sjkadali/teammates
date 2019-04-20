import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjaxLoadingModule } from '../../components/ajax-loading/ajax-loading.module';
import { CopySessionModalModule } from '../../components/copy-session-modal/copy-session-modal.module';
import { QuestionEditFormModule } from '../../components/question-edit-form/question-edit-form.module';
import { SessionEditFormModule } from '../../components/session-edit-form/session-edit-form.module';
import { TeammatesCommonModule } from '../../components/teammates-common/teammates-common.module';
import { CopyQuestionsFromOtherSessionsModalComponent, } from './copy-questions-from-other-sessions-modal/copy-questions-from-other-sessions-modal.component';
import { InstructorSessionEditPageComponent } from './instructor-session-edit-page.component';
import { TemplateQuestionModalComponent } from './template-question-modal/template-question-modal.component';
/**
 * Module for instructor session edit page.
 */
var InstructorSessionEditPageModule = /** @class */ (function () {
    function InstructorSessionEditPageModule() {
    }
    InstructorSessionEditPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                AjaxLoadingModule,
                CommonModule,
                FormsModule,
                NgbModule,
                TeammatesCommonModule,
                SessionEditFormModule,
                QuestionEditFormModule,
                CopySessionModalModule,
            ],
            entryComponents: [
                TemplateQuestionModalComponent,
                CopyQuestionsFromOtherSessionsModalComponent,
            ],
            declarations: [
                InstructorSessionEditPageComponent,
                TemplateQuestionModalComponent,
                CopyQuestionsFromOtherSessionsModalComponent,
            ],
            exports: [
                InstructorSessionEditPageComponent,
            ],
        })
    ], InstructorSessionEditPageModule);
    return InstructorSessionEditPageModule;
}());
export { InstructorSessionEditPageModule };
//# sourceMappingURL=instructor-session-edit-page.module.js.map