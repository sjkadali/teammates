import { async, TestBed } from '@angular/core/testing';
import { TextQuestionInstructionComponent } from './text-question-instruction.component';
describe('TextQuestionInstructionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TextQuestionInstructionComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TextQuestionInstructionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=text-question-instruction.component.spec.js.map