import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentHomePageComponent } from './student-home-page.component';
import { MatSnackBarModule } from '@angular/material';
import { ResponseStatusPipe } from '../../pipes/session-response-status.pipe';
import { SubmissionStatusPipe } from '../../pipes/session-submission-status.pipe';
describe('StudentHomePageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                StudentHomePageComponent,
                ResponseStatusPipe,
                SubmissionStatusPipe,
            ],
            imports: [
                HttpClientTestingModule,
                NgbModule,
                RouterTestingModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentHomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with no feedback sessions', function () {
        var studentName = '';
        var studentCourse = {
            course: {
                id: 'CS3281',
                name: 'Thematic Systems',
            },
            feedbackSessions: [],
        };
        component.user = studentName;
        component.courses = [studentCourse];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with all feedback sessions over 2 courses', function () {
        var studentName = 'John Doe';
        var studentCourseA = {
            course: {
                id: 'CS2103',
                name: 'Software Engineering',
            },
            feedbackSessions: [
                {
                    feedbackSession: {
                        feedbackSessionName: 'First Session',
                        courseId: 'CS2103',
                    },
                },
                {
                    feedbackSession: {
                        feedbackSessionName: 'Second Session',
                        courseId: 'CS2103',
                    },
                },
            ],
        };
        var studentCourseB = {
            course: {
                id: 'CS2102',
                name: 'Databases',
            },
            feedbackSessions: [
                {
                    feedbackSession: {
                        feedbackSessionName: 'Third Session',
                        courseId: 'CS2102',
                    },
                },
                {
                    feedbackSession: {
                        feedbackSessionName: 'Fourth Session',
                        courseId: 'CS2102',
                    },
                },
            ],
        };
        var publishedSessionInfoMap = {
            endTime: '1200',
            isOpened: true,
            isWaitingToOpen: true,
            isPublished: true,
            isSubmitted: true,
        };
        var unpublishedSessionInfoMap = {
            endTime: '1200',
            isOpened: true,
            isWaitingToOpen: false,
            isPublished: false,
            isSubmitted: false,
        };
        var submittedSessionInfoMap = {
            endTime: '1200',
            isOpened: true,
            isWaitingToOpen: false,
            isPublished: false,
            isSubmitted: true,
        };
        var concludedSessionInfoMap = {
            endTime: '1200',
            isOpened: false,
            isWaitingToOpen: false,
            isPublished: false,
            isSubmitted: true,
        };
        component.user = studentName;
        component.courses = [studentCourseA, studentCourseB];
        component.sessionsInfoMap = {
            'CS2103%First Session': publishedSessionInfoMap,
            'CS2103%Second Session': unpublishedSessionInfoMap,
            'CS2102%Third Session': submittedSessionInfoMap,
            'CS2102%Fourth Session': concludedSessionInfoMap,
        };
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=student-home-page.component.spec.js.map