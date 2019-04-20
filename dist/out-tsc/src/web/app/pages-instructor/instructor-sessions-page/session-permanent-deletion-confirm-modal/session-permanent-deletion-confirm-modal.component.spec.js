import { async, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionPermanentDeletionConfirmModalComponent } from './session-permanent-deletion-confirm-modal.component';
describe('SessionPermanentDeletionConfirmModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SessionPermanentDeletionConfirmModalComponent],
            providers: [NgbActiveModal],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SessionPermanentDeletionConfirmModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=session-permanent-deletion-confirm-modal.component.spec.js.map