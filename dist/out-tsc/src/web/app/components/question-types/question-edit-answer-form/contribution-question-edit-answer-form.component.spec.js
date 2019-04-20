import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContributionPointDescriptionPipe } from './contribution-point-description.pipe';
import { ContributionQuestionEditAnswerFormComponent } from './contribution-question-edit-answer-form.component';
describe('ContributionQuestionEditAnswerFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                ContributionQuestionEditAnswerFormComponent,
                ContributionPointDescriptionPipe,
            ],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ContributionQuestionEditAnswerFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contribution-question-edit-answer-form.component.spec.js.map