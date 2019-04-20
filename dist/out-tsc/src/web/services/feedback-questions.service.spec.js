import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeedbackQuestionsService } from './feedback-questions.service';
describe('FeedbackQuestionsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ],
    }); });
    it('should be created', function () {
        var service = TestBed.get(FeedbackQuestionsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=feedback-questions.service.spec.js.map