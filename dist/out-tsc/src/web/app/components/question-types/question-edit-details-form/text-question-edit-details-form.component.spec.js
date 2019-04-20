import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TextQuestionEditDetailsFormComponent } from './text-question-edit-details-form.component';
describe('TextQuestionEditDetailsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [TextQuestionEditDetailsFormComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TextQuestionEditDetailsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=text-question-edit-details-form.component.spec.js.map