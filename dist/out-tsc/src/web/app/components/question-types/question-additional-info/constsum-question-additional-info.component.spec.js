import { async, TestBed } from '@angular/core/testing';
import { ConstsumQuestionAdditionalInfoComponent } from './constsum-question-additional-info.component';
describe('ConstsumQuestionAdditionalInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConstsumQuestionAdditionalInfoComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConstsumQuestionAdditionalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=constsum-question-additional-info.component.spec.js.map