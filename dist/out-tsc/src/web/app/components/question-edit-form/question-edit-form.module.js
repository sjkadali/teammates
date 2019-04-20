import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjaxLoadingModule } from '../ajax-loading/ajax-loading.module';
import { QuestionEditDetailsFormModule, } from '../question-types/question-edit-details-form/question-edit-details-form.module';
import { RichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';
import { TeammatesCommonModule } from '../teammates-common/teammates-common.module';
import { VisibilityMessagesModule } from '../visibility-messages/visibility-messages.module';
import { GiverTypeDescriptionPipe, RecipientTypeDescriptionPipe } from './feedback-path.pipe';
import { QuestionEditFormComponent } from './question-edit-form.component';
import { VisibilityControlNamePipe, VisibilityTypeDescriptionPipe, VisibilityTypeNamePipe, } from './visibility-setting.pipe';
/**
 * Module for all question edit UI in session edit page.
 */
var QuestionEditFormModule = /** @class */ (function () {
    function QuestionEditFormModule() {
    }
    QuestionEditFormModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                NgbModule,
                AjaxLoadingModule,
                VisibilityMessagesModule,
                TeammatesCommonModule,
                RichTextEditorModule,
                QuestionEditDetailsFormModule,
            ],
            declarations: [
                QuestionEditFormComponent,
                GiverTypeDescriptionPipe,
                RecipientTypeDescriptionPipe,
                VisibilityTypeDescriptionPipe,
                VisibilityTypeNamePipe,
                VisibilityControlNamePipe,
            ],
            exports: [
                QuestionEditFormComponent,
            ],
        })
    ], QuestionEditFormModule);
    return QuestionEditFormModule;
}());
export { QuestionEditFormModule };
//# sourceMappingURL=question-edit-form.module.js.map