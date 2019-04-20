import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RankOptionsFieldComponent } from './rank-options-field/rank-options-field.component';
import { RankOptionsQuestionEditDetailsFormComponent } from './rank-options-question-edit-details-form.component';
describe('RankOptionsQuestionEditDetailsFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                RankOptionsQuestionEditDetailsFormComponent,
                RankOptionsFieldComponent
            ],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RankOptionsQuestionEditDetailsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rank-options-question-edit-details-form.component.spec.js.map