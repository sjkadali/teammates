import { async, TestBed } from '@angular/core/testing';
import { GqrRqgViewResponsesModule, } from '../../components/question-responses/gqr-rqg-view-responses/gqr-rqg-view-responses.module';
import { InstructorSessionResultGqrViewComponent } from './instructor-session-result-gqr-view.component';
describe('InstructorSessionResultGqrViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorSessionResultGqrViewComponent],
            imports: [GqrRqgViewResponsesModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSessionResultGqrViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-session-result-gqr-view.component.spec.js.map