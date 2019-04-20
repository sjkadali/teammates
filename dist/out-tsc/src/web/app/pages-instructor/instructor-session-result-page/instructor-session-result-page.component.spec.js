import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GqrRqgViewResponsesModule, } from '../../components/question-responses/gqr-rqg-view-responses/gqr-rqg-view-responses.module';
import { GrqRgqViewResponsesModule, } from '../../components/question-responses/grq-rgq-view-responses/grq-rgq-view-responses.module';
import { PerQuestionViewResponsesModule, } from '../../components/question-responses/per-question-view-responses/per-question-view-responses.module';
import { QuestionTextWithInfoModule } from '../../components/question-text-with-info/question-text-with-info.module';
import { InstructorSessionResultGqrViewComponent } from './instructor-session-result-gqr-view.component';
import { InstructorSessionResultGrqViewComponent } from './instructor-session-result-grq-view.component';
import { InstructorSessionResultPageComponent } from './instructor-session-result-page.component';
import { InstructorSessionResultQuestionViewComponent } from './instructor-session-result-question-view.component';
import { InstructorSessionResultRgqViewComponent } from './instructor-session-result-rgq-view.component';
import { InstructorSessionResultRqgViewComponent } from './instructor-session-result-rqg-view.component';
describe('InstructorSessionResultPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorSessionResultPageComponent,
                InstructorSessionResultQuestionViewComponent,
                InstructorSessionResultRgqViewComponent,
                InstructorSessionResultGrqViewComponent,
                InstructorSessionResultRqgViewComponent,
                InstructorSessionResultGqrViewComponent,
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                FormsModule,
                NgbModule,
                QuestionTextWithInfoModule,
                GqrRqgViewResponsesModule,
                GrqRgqViewResponsesModule,
                PerQuestionViewResponsesModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSessionResultPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-session-result-page.component.spec.js.map