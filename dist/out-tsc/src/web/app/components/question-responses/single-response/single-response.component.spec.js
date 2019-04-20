import { async, TestBed } from '@angular/core/testing';
import { QuestionResponseModule } from '../../question-types/question-response/question-response.module';
import { SingleResponseComponent } from './single-response.component';
describe('SingleResponseComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SingleResponseComponent],
            imports: [QuestionResponseModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SingleResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=single-response.component.spec.js.map