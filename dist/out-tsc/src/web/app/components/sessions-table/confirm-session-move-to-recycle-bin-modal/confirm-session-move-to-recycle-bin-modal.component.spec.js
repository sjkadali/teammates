import { async, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmSessionMoveToRecycleBinModalComponent } from './confirm-session-move-to-recycle-bin-modal.component';
describe('ConfirmSessionMoveToRecycleBinModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ConfirmSessionMoveToRecycleBinModalComponent],
            providers: [NgbActiveModal],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ConfirmSessionMoveToRecycleBinModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=confirm-session-move-to-recycle-bin-modal.component.spec.js.map