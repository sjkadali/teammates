import { async, TestBed } from '@angular/core/testing';
import { MsqQuestionAdditionalInfoComponent } from './msq-question-additional-info.component';
describe('MsqQuestionAdditionalInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MsqQuestionAdditionalInfoComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MsqQuestionAdditionalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=msq-question-additional-info.component.spec.js.map