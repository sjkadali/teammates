import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeedbackSessionsService } from './feedback-sessions.service';
describe('FeedbackSessionsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ],
    }); });
    it('should be created', function () {
        var service = TestBed.get(FeedbackSessionsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=feedback-sessions.service.spec.js.map