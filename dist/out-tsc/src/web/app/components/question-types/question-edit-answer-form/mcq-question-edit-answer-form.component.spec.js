import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { McqQuestionEditAnswerFormComponent } from './mcq-question-edit-answer-form.component';
describe('McqQuestionEditAnswerFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [McqQuestionEditAnswerFormComponent],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(McqQuestionEditAnswerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mcq-question-edit-answer-form.component.spec.js.map