import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NumScaleQuestionEditAnswerFormComponent } from './num-scale-question-edit-answer-form.component';
describe('NumScaleQuestionEditAnswerFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NumScaleQuestionEditAnswerFormComponent],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NumScaleQuestionEditAnswerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=num-scale-question-edit-answer-form.component.spec.js.map