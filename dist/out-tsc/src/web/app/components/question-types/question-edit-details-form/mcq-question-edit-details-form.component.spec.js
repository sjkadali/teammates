import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { McqFieldComponent } from './mcq-field/mcq-field.component';
import { McqQuestionEditDetailsFormComponent } from './mcq-question-edit-details-form.component';
import { WeightFieldComponent } from './weight-field/weight-field.component';
describe('McqQuestionEditDetailsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                McqQuestionEditDetailsFormComponent,
                McqFieldComponent,
                WeightFieldComponent
            ],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(McqQuestionEditDetailsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mcq-question-edit-details-form.component.spec.js.map