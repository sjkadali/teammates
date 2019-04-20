import { async, TestBed } from '@angular/core/testing';
import { PerQuestionViewResponsesModule, } from '../../components/question-responses/per-question-view-responses/per-question-view-responses.module';
import { QuestionTextWithInfoModule } from '../../components/question-text-with-info/question-text-with-info.module';
import { InstructorSessionResultQuestionViewComponent } from './instructor-session-result-question-view.component';
describe('InstructorSessionResultQuestionViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorSessionResultQuestionViewComponent],
            imports: [
                PerQuestionViewResponsesModule,
                QuestionTextWithInfoModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSessionResultQuestionViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-session-result-question-view.component.spec.js.map