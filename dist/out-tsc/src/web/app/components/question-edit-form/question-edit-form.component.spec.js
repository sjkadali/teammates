import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
describe('QuestionEditFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                QuestionEditFormComponent,
                GiverTypeDescriptionPipe,
                RecipientTypeDescriptionPipe,
                VisibilityControlNamePipe,
                VisibilityTypeDescriptionPipe,
                VisibilityTypeNamePipe,
            ],
            imports: [
                HttpClientTestingModule,
                FormsModule,
                TeammatesCommonModule,
                AjaxLoadingModule,
                RichTextEditorModule,
                QuestionEditDetailsFormModule,
                NgbModule,
                VisibilityMessagesModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(QuestionEditFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=question-edit-form.component.spec.js.map