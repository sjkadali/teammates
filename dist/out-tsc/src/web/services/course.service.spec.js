import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseService } from './course.service';
describe('CourseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
        ],
    }); });
    it('should be created', function () {
        var service = TestBed.get(CourseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=course.service.spec.js.map