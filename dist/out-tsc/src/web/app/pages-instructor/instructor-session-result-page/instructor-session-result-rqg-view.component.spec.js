import { async, TestBed } from '@angular/core/testing';
import { GqrRqgViewResponsesModule, } from '../../components/question-responses/gqr-rqg-view-responses/gqr-rqg-view-responses.module';
import { InstructorSessionResultRqgViewComponent } from './instructor-session-result-rqg-view.component';
describe('InstructorSessionResultRqgViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorSessionResultRqgViewComponent],
            imports: [GqrRqgViewResponsesModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSessionResultRqgViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-session-result-rqg-view.component.spec.js.map