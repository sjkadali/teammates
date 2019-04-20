import { async, TestBed } from '@angular/core/testing';
import { TextQuestionConstraintComponent } from './text-question-constraint.component';
describe('TextQuestionConstraintComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TextQuestionConstraintComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TextQuestionConstraintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=text-question-constraint.component.spec.js.map