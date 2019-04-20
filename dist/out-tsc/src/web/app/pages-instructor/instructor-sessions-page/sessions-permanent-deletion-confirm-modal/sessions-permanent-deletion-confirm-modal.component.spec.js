import { async, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionsPermanentDeletionConfirmModalComponent } from './sessions-permanent-deletion-confirm-modal.component';
describe('SessionsPermanentDeletionConfirmModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SessionsPermanentDeletionConfirmModalComponent],
            providers: [NgbActiveModal],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SessionsPermanentDeletionConfirmModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sessions-permanent-deletion-confirm-modal.component.spec.js.map