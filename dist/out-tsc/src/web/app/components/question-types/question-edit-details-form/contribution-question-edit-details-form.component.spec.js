import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContributionQuestionEditDetailsFormComponent } from './contribution-question-edit-details-form.component';
describe('ContributionQuestionEditDetailsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [ContributionQuestionEditDetailsFormComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ContributionQuestionEditDetailsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contribution-question-edit-details-form.component.spec.js.map