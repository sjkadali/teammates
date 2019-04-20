import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionEditFormModule } from '../../../components/question-edit-form/question-edit-form.module';
import { TeammatesCommonModule } from '../../../components/teammates-common/teammates-common.module';
import { TemplateQuestionModalComponent } from './template-question-modal.component';
describe('TemplateQuestionModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                QuestionEditFormModule,
                TeammatesCommonModule,
                HttpClientTestingModule,
            ],
            declarations: [
                TemplateQuestionModalComponent,
            ],
            providers: [
                NgbActiveModal,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TemplateQuestionModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=template-question-modal.component.spec.js.map