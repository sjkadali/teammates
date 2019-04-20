import { async, TestBed } from '@angular/core/testing';
import { RubricQuestionAdditionalInfoComponent } from './rubric-question-additional-info.component';
describe('RubricQuestionAdditionalInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RubricQuestionAdditionalInfoComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RubricQuestionAdditionalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rubric-question-additional-info.component.spec.js.map