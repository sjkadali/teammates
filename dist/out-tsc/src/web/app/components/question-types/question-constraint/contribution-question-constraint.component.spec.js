import { async, TestBed } from '@angular/core/testing';
import { ContributionQuestionConstraintComponent } from './contribution-question-constraint.component';
describe('ContributionQuestionConstraintComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ContributionQuestionConstraintComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ContributionQuestionConstraintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contribution-question-constraint.component.spec.js.map