import { async, TestBed } from '@angular/core/testing';
import { RankOptionsQuestionInstructionComponent } from './rank-options-question-instruction.component';
describe('RankOptionsQuestionInstructionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RankOptionsQuestionInstructionComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RankOptionsQuestionInstructionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rank-options-question-instruction.component.spec.js.map