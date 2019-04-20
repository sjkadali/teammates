import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NumScaleQuestionEditDetailsFormComponent } from './num-scale-question-edit-details-form.component';
describe('NumScaleQuestionEditDetailsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NumScaleQuestionEditDetailsFormComponent],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NumScaleQuestionEditDetailsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=num-scale-question-edit-details-form.component.spec.js.map