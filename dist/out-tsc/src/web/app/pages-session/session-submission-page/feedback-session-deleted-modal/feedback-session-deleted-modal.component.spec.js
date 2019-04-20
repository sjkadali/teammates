import { async, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackSessionDeletedModalComponent } from './feedback-session-deleted-modal.component';
describe('FeedbackSessionDeletedModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FeedbackSessionDeletedModalComponent],
            providers: [
                NgbActiveModal,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FeedbackSessionDeletedModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=feedback-session-deleted-modal.component.spec.js.map