import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RankOptionsQuestionEditAnswerFormComponent } from './rank-options-question-edit-answer-form.component';
describe('RankOptionsQuestionEditAnswerFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RankOptionsQuestionEditAnswerFormComponent],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RankOptionsQuestionEditAnswerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rank-options-question-edit-answer-form.component.spec.js.map