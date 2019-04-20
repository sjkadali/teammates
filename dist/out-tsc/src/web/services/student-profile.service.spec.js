import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentProfileService } from './student-profile.service';
describe('StudentProfileService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ],
    }); });
    it('should be created', function () {
        var service = TestBed.get(StudentProfileService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=student-profile.service.spec.js.map