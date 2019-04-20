import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeammatesCommonModule } from '../../../components/teammates-common/teammates-common.module';
import { CopyQuestionsFromOtherSessionsModalComponent } from './copy-questions-from-other-sessions-modal.component';
describe('CopyQuestionsFromOtherSessionsModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CopyQuestionsFromOtherSessionsModalComponent],
            imports: [
                CommonModule,
                FormsModule,
                TeammatesCommonModule,
            ],
            providers: [
                NgbActiveModal,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CopyQuestionsFromOtherSessionsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=copy-questions-from-other-sessions-modal.component.spec.js.map