import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CopyFromOtherSessionsModalComponent } from './copy-from-other-sessions-modal.component';
describe('CopyFromOtherSessionsModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CopyFromOtherSessionsModalComponent],
            imports: [FormsModule],
            providers: [NgbActiveModal],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CopyFromOtherSessionsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=copy-from-other-sessions-modal.component.spec.js.map