import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { StatusMessageService } from './status-message.service';
describe('StatusMessageService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [
            MatSnackBarModule,
        ],
    }); });
    it('should be created', function () {
        var service = TestBed.get(StatusMessageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=status-message.service.spec.js.map