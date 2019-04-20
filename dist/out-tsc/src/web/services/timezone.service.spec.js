import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TimezoneService } from './timezone.service';
// This test does not check the timezone database used is the latest
// Only check that the version number is returned, and some sample values for timezone offset
describe('TimezoneService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
        });
        service = TestBed.get(TimezoneService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should return non-empty version', function () {
        expect(service.getTzVersion()).toBeTruthy();
    });
    it('should return timezone offsets', function () {
        var tzOffsets = service.getTzOffsets();
        expect(tzOffsets['Etc/GMT-8']).toEqual(8 * 60);
        expect(tzOffsets['Etc/GMT+5']).toEqual(-5 * 60);
        expect(tzOffsets['Etc/GMT-11']).toEqual(11 * 60);
        expect(tzOffsets['Etc/GMT+0']).toEqual(-0);
    });
});
//# sourceMappingURL=timezone.service.spec.js.map