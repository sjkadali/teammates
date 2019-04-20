import { async, TestBed } from '@angular/core/testing';
import { ConstsumQuestionResponseComponent } from './constsum-question-response.component';
describe('ConstsumQuestionResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConstsumQuestionResponseComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConstsumQuestionResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=constsum-question-response.component.spec.js.map