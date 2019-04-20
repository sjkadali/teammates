import { async, TestBed } from '@angular/core/testing';
import { GroupedResponsesModule } from '../grouped-responses/grouped-responses.module';
import { GrqRgqViewResponsesComponent } from './grq-rgq-view-responses.component';
describe('GrqRgqViewResponsesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GrqRgqViewResponsesComponent],
            imports: [GroupedResponsesModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GrqRgqViewResponsesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=grq-rgq-view-responses.component.spec.js.map