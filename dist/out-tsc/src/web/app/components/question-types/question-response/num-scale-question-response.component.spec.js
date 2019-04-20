import { async, TestBed } from '@angular/core/testing';
import { NumScaleQuestionResponseComponent } from './num-scale-question-response.component';
describe('NumScaleQuestionResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NumScaleQuestionResponseComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NumScaleQuestionResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=num-scale-question-response.component.spec.js.map