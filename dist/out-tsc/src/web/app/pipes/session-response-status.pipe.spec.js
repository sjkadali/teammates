import { ResponseStatusPipe } from './session-response-status.pipe';
describe('ResponseStatusPipe', function () {
    var responseStatusPipe;
    beforeEach(function () {
        responseStatusPipe = new ResponseStatusPipe();
    });
    it('should be instantiated', function () {
        expect(responseStatusPipe).toBeTruthy();
    });
    it('should return Published when session is published', function () {
        expect(responseStatusPipe.transform(true)).toBe('Published');
    });
    it('should return Not Published when session is not published', function () {
        expect(responseStatusPipe.transform(false)).toBe('Not Published');
    });
});
//# sourceMappingURL=session-response-status.pipe.spec.js.map