import { async, TestBed } from '@angular/core/testing';
import { NumScaleQuestionAdditionalInfoComponent } from './num-scale-question-additional-info.component';
describe('NumScaleQuestionAdditionalInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NumScaleQuestionAdditionalInfoComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NumScaleQuestionAdditionalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=num-scale-question-additional-info.component.spec.js.map