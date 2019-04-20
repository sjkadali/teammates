import { async, TestBed } from '@angular/core/testing';
import { ContributionQuestionInstructionComponent } from './contribution-question-instruction.component';
describe('ContributionQuestionInstructionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ContributionQuestionInstructionComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ContributionQuestionInstructionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contribution-question-instruction.component.spec.js.map