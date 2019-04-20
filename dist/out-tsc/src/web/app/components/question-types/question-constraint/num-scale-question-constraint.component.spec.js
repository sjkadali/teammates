import { async, TestBed } from '@angular/core/testing';
import { NumScaleQuestionConstraintComponent } from './num-scale-question-constraint.component';
describe('NumScaleQuestionConstraintComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NumScaleQuestionConstraintComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NumScaleQuestionConstraintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=num-scale-question-constraint.component.spec.js.map