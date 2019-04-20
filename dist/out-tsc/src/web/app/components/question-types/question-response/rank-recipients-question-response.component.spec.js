import { async, TestBed } from '@angular/core/testing';
import { RankRecipientsQuestionResponseComponent } from './rank-recipients-question-response.component';
describe('RankRecipientsQuestionResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RankRecipientsQuestionResponseComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RankRecipientsQuestionResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rank-recipients-question-response.component.spec.js.map