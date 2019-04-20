import { async, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CoursePermanentDeletionConfirmModalComponent } from './course-permanent-deletion-confirm-modal.component';
describe('CoursePermanentDeletionConfirmModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CoursePermanentDeletionConfirmModalComponent],
            providers: [NgbActiveModal],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CoursePermanentDeletionConfirmModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=course-permanent-deletion-confirm-modal.component.spec.js.map