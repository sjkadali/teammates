import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { QuestionConstraintModule } from '../question-types/question-constraint/question-constraint.module';
import { QuestionEditAnswerFormModule, } from '../question-types/question-edit-answer-form/question-edit-answer-form.module';
import { QuestionInstructionModule } from '../question-types/question-instruction/question-instruction.module';
import { RichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';
import { TeammatesCommonModule } from '../teammates-common/teammates-common.module';
import { VisibilityMessagesModule } from '../visibility-messages/visibility-messages.module';
import { QuestionSubmissionFormComponent } from './question-submission-form.component';
import { RecipientTypeNamePipe } from './recipient-type-name.pipe';
describe('QuestionSubmissionFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                QuestionSubmissionFormComponent,
                RecipientTypeNamePipe,
            ],
            imports: [
                HttpClientTestingModule,
                TeammatesCommonModule,
                VisibilityMessagesModule,
                QuestionInstructionModule,
                QuestionConstraintModule,
                QuestionEditAnswerFormModule,
                RichTextEditorModule,
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(QuestionSubmissionFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=question-submission-form.component.spec.js.map