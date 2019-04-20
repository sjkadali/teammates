import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RichTextEditorModule } from '../../rich-text-editor/rich-text-editor.module';
import { TextQuestionEditAnswerFormComponent } from './text-question-edit-answer-form.component';
describe('TextQuestionEditAnswerFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TextQuestionEditAnswerFormComponent],
            imports: [
                FormsModule,
                RichTextEditorModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TextQuestionEditAnswerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=text-question-edit-answer-form.component.spec.js.map