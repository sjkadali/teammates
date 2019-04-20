import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuestionAdditionalInfoModule, } from '../question-types/question-additional-info/question-additional-info.module';
import { QuestionTextWithInfoComponent } from './question-text-with-info.component';
describe('QuestionTextWithInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [QuestionTextWithInfoComponent],
            imports: [
                RouterTestingModule,
                QuestionAdditionalInfoModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(QuestionTextWithInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=question-text-with-info.component.spec.js.map