import { async, TestBed } from '@angular/core/testing';
import { TextQuestionResponseComponent } from './text-question-response.component';
describe('TextQuestionResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TextQuestionResponseComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TextQuestionResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=text-question-response.component.spec.js.map