import { async, TestBed } from '@angular/core/testing';
import { GrqRgqViewResponsesModule, } from '../../components/question-responses/grq-rgq-view-responses/grq-rgq-view-responses.module';
import { InstructorSessionResultGrqViewComponent } from './instructor-session-result-grq-view.component';
describe('InstructorSessionResultGrqViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorSessionResultGrqViewComponent],
            imports: [GrqRgqViewResponsesModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSessionResultGrqViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-session-result-grq-view.component.spec.js.map