import { async, TestBed } from '@angular/core/testing';
import { RankOptionsQuestionResponseComponent } from './rank-options-question-response.component';
describe('RankOptionsQuestionResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RankOptionsQuestionResponseComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RankOptionsQuestionResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rank-options-question-response.component.spec.js.map