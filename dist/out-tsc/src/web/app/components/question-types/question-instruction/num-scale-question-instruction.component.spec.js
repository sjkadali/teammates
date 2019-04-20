import { async, TestBed } from '@angular/core/testing';
import { NumScaleQuestionInstructionComponent } from './num-scale-question-instruction.component';
describe('NumScaleQuestionInstructionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NumScaleQuestionInstructionComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NumScaleQuestionInstructionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=num-scale-question-instruction.component.spec.js.map