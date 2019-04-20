import { TestBed } from '@angular/core/testing';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { HttpRequestService } from './http-request.service';
describe('AuthService', function () {
    var frontendUrl = environment.frontendUrl;
    var spyHttpRequestService;
    var service;
    beforeEach(function () {
        spyHttpRequestService = {
            get: jest.fn(),
        };
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpRequestService, useValue: spyHttpRequestService },
            ],
        });
        service = TestBed.get(AuthService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should execute getAuthUser', function () {
        service.getAuthUser();
        expect(spyHttpRequestService.get).toHaveBeenCalledWith('/auth', { frontendUrl: frontendUrl });
    });
});
//# sourceMappingURL=auth.service.spec.js.map