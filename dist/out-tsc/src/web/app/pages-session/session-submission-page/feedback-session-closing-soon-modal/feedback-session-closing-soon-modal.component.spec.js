import { async, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackSessionClosingSoonModalComponent } from './feedback-session-closing-soon-modal.component';
describe('FeedbackSessionClosingSoonModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FeedbackSessionClosingSoonModalComponent],
            providers: [
                NgbActiveModal,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FeedbackSessionClosingSoonModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=feedback-session-closing-soon-modal.component.spec.js.map