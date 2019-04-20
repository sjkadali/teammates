import { async, TestBed } from '@angular/core/testing';
import { GrqRgqViewResponsesModule, } from '../../components/question-responses/grq-rgq-view-responses/grq-rgq-view-responses.module';
import { InstructorSessionResultRgqViewComponent } from './instructor-session-result-rgq-view.component';
describe('InstructorSessionResultRgqViewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorSessionResultRgqViewComponent],
            imports: [GrqRgqViewResponsesModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSessionResultRgqViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-session-result-rgq-view.component.spec.js.map