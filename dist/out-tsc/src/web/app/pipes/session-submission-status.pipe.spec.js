import { SubmissionStatusPipe } from './session-submission-status.pipe';
describe('SubmissionStatusPipe', function () {
    var submissionStatusPipe;
    beforeEach(function () {
        submissionStatusPipe = new SubmissionStatusPipe();
    });
    it('should be instantiated', function () {
        expect(submissionStatusPipe).toBeTruthy();
    });
    it('should return Submitted if session is open and feedback is submitted', function () {
        expect(submissionStatusPipe.transform(true, false, true)).toBe('Submitted');
    });
    it('should return Pending if session is open and feedback is not submitted', function () {
        expect(submissionStatusPipe.transform(true, false, false)).toBe('Pending');
    });
    it('should return Awaiting if session is waiting to open', function () {
        expect(submissionStatusPipe.transform(false, true, false)).toBe('Awaiting');
    });
    it('should return Closed if session is not open and feedback is submitted', function () {
        expect(submissionStatusPipe.transform(false, false, true)).toBe('Closed');
    });
    it('should return Closed if session is not open and feedback is not submitted', function () {
        expect(submissionStatusPipe.transform(false, false, false)).toBe('Closed');
    });
});
//# sourceMappingURL=session-submission-status.pipe.spec.js.map