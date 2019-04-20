import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MsqQuestionEditAnswerFormComponent } from './msq-question-edit-answer-form.component';
describe('MsqQuestionEditAnswerFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MsqQuestionEditAnswerFormComponent],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MsqQuestionEditAnswerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=msq-question-edit-answer-form.component.spec.js.map