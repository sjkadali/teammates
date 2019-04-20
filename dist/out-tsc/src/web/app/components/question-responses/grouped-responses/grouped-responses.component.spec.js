import { async, TestBed } from '@angular/core/testing';
import { QuestionTextWithInfoModule } from '../../question-text-with-info/question-text-with-info.module';
import { SingleResponseModule } from '../single-response/single-response.module';
import { GroupedResponsesComponent } from './grouped-responses.component';
describe('GroupedResponsesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GroupedResponsesComponent],
            imports: [
                QuestionTextWithInfoModule,
                SingleResponseModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GroupedResponsesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=grouped-responses.component.spec.js.map