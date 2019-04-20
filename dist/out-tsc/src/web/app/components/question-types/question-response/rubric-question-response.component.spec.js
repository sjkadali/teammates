import { async, TestBed } from '@angular/core/testing';
import { RubricQuestionResponseComponent } from './rubric-question-response.component';
describe('RubricQuestionResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RubricQuestionResponseComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RubricQuestionResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rubric-question-response.component.spec.js.map