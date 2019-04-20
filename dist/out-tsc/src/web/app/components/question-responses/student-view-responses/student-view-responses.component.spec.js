import { async, TestBed } from '@angular/core/testing';
import { SingleResponseModule } from '../single-response/single-response.module';
import { StudentViewResponsesComponent } from './student-view-responses.component';
describe('StudentViewResponsesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudentViewResponsesComponent],
            imports: [SingleResponseModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentViewResponsesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=student-view-responses.component.spec.js.map