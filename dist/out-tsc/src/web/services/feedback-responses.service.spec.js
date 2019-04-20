import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeedbackResponsesService } from './feedback-responses.service';
describe('FeedbackResponsesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ],
    }); });
    it('should be created', function () {
        var service = TestBed.get(FeedbackResponsesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=feedback-responses.service.spec.js.map