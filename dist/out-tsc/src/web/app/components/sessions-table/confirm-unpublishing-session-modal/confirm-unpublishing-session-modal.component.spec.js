import { async, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmUnpublishingSessionModalComponent } from './confirm-unpublishing-session-modal.component';
describe('ConfirmUnpublishingSessionModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConfirmUnpublishingSessionModalComponent],
            providers: [NgbActiveModal],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConfirmUnpublishingSessionModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=confirm-unpublishing-session-modal.component.spec.js.map