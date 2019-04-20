import { async, TestBed } from '@angular/core/testing';
import { McqQuestionResponseComponent } from './mcq-question-response.component';
describe('McqQuestionResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [McqQuestionResponseComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(McqQuestionResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mcq-question-response.component.spec.js.map