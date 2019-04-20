import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MsqFieldComponent } from './msq-field/msq-field.component';
import { MsqQuestionEditDetailsFormComponent } from './msq-question-edit-details-form.component';
import { WeightFieldComponent } from './weight-field/weight-field.component';
describe('MsqQuestionEditDetailsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                MsqQuestionEditDetailsFormComponent,
                MsqFieldComponent,
                WeightFieldComponent
            ],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MsqQuestionEditDetailsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=msq-question-edit-details-form.component.spec.js.map