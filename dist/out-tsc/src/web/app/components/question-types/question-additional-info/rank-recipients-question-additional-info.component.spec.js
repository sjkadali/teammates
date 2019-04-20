import { async, TestBed } from '@angular/core/testing';
import { RankRecipientsQuestionAdditionalInfoComponent } from './rank-recipients-question-additional-info.component';
describe('RankRecipientsQuestionAdditionalInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RankRecipientsQuestionAdditionalInfoComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RankRecipientsQuestionAdditionalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rank-recipients-question-additional-info.component.spec.js.map