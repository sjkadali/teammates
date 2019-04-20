import { async, TestBed } from '@angular/core/testing';
import { McqQuestionAdditionalInfoComponent } from './mcq-question-additional-info.component';
describe('McqQuestionAdditionalInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [McqQuestionAdditionalInfoComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(McqQuestionAdditionalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mcq-question-additional-info.component.spec.js.map