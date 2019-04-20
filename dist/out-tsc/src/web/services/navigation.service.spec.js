import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { NavigationService } from './navigation.service';
describe('NavigationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [
            MatSnackBarModule,
        ],
    }); });
    it('should be created', function () {
        var service = TestBed.get(NavigationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=navigation.service.spec.js.map