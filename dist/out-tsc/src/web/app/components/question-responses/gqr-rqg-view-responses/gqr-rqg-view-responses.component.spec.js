import { async, TestBed } from '@angular/core/testing';
import { QuestionTextWithInfoModule } from '../../question-text-with-info/question-text-with-info.module';
import { PerQuestionViewResponsesModule } from '../per-question-view-responses/per-question-view-responses.module';
import { GqrRqgViewResponsesComponent } from './gqr-rqg-view-responses.component';
describe('GqrRqgViewResponsesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GqrRqgViewResponsesComponent],
            imports: [
                QuestionTextWithInfoModule,
                PerQuestionViewResponsesModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GqrRqgViewResponsesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gqr-rqg-view-responses.component.spec.js.map