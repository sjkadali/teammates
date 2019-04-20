import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedbackSessionPublishStatus, FeedbackSessionSubmissionStatus, ResponseVisibleSetting, SessionVisibleSetting, } from '../../../types/api-output';
import { SortBy, SortOrder } from '../../components/sessions-table/sessions-table-model';
import { InstructorHomePageComponent } from './instructor-home-page.component';
import { InstructorHomePageModule } from './instructor-home-page.module';
var instructorPrivilege = {
    canModifyCourse: true,
    canModifySession: true,
    canModifyStudent: true,
    canSubmitSessionInSections: true,
};
var defaultCourse = {
    courseId: 'CS3281',
    courseName: 'Thematic Systems',
    creationDate: '26 Feb 23:59 PM',
    deletionDate: '',
    timeZone: 'Asia/Singapore',
};
var feedbackSession = {
    courseId: 'CS3281',
    timeZone: 'Asia/Singapore',
    feedbackSessionName: 'Feedback',
    instructions: 'Answer all questions',
    submissionStartTimestamp: 1552390757,
    submissionEndTimestamp: 1552590757,
    gracePeriod: 0,
    sessionVisibleSetting: SessionVisibleSetting.AT_OPEN,
    customSessionVisibleTimestamp: 0,
    responseVisibleSetting: ResponseVisibleSetting.AT_VISIBLE,
    customResponseVisibleTimestamp: 0,
    submissionStatus: FeedbackSessionSubmissionStatus.NOT_VISIBLE,
    publishStatus: FeedbackSessionPublishStatus.NOT_PUBLISHED,
    isClosingEmailEnabled: true,
    isPublishedEmailEnabled: true,
    createdAtTimestamp: 0,
};
describe('InstructorHomePageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                InstructorHomePageModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorHomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with one course without feedback session', function () {
        var instructorName = '';
        var courseTabModels = {
            instructorPrivilege: instructorPrivilege,
            course: {
                courseId: 'CS3243',
                courseName: 'Introduction to AI',
                creationDate: '01 Feb 23:59 PM',
                timeZone: 'Asia/Singapore',
            },
            sessionsTableRowModels: [],
            sessionsTableRowModelsSortBy: SortBy.NONE,
            sessionsTableRowModelsSortOrder: SortOrder.ASC,
            hasPopulated: true,
            isAjaxSuccess: true,
            isTabExpanded: true,
        };
        component.user = instructorName;
        component.courseTabModels = [courseTabModels];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with one course with unpopulated feedback sessions', function () {
        var instructorName = '';
        var courseTabModels = {
            instructorPrivilege: instructorPrivilege,
            course: defaultCourse,
            sessionsTableRowModels: [],
            sessionsTableRowModelsSortBy: SortBy.NONE,
            sessionsTableRowModelsSortOrder: SortOrder.ASC,
            hasPopulated: false,
            isAjaxSuccess: true,
            isTabExpanded: true,
        };
        component.user = instructorName;
        component.courseTabModels = [courseTabModels];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with one course with error loading feedback sessions', function () {
        var instructorName = 'Jon Snow';
        var courseTabModels = {
            instructorPrivilege: instructorPrivilege,
            course: defaultCourse,
            sessionsTableRowModels: [],
            sessionsTableRowModelsSortBy: SortBy.NONE,
            sessionsTableRowModelsSortOrder: SortOrder.ASC,
            hasPopulated: false,
            isAjaxSuccess: false,
            isTabExpanded: true,
        };
        component.user = instructorName;
        component.courseTabModels = [courseTabModels];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with one course with unexpanded course tab', function () {
        var instructorName = 'Shaun';
        var courseTabModels = {
            instructorPrivilege: instructorPrivilege,
            course: defaultCourse,
            sessionsTableRowModels: [],
            sessionsTableRowModelsSortBy: SortBy.NONE,
            sessionsTableRowModelsSortOrder: SortOrder.ASC,
            hasPopulated: false,
            isAjaxSuccess: true,
            isTabExpanded: false,
        };
        component.user = instructorName;
        component.courseTabModels = [courseTabModels];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with one course with one feedback session with instructor privilege', function () {
        var instructorName = '';
        var sessionsTableRowModel = {
            feedbackSession: feedbackSession,
            instructorPrivilege: instructorPrivilege,
            responseRate: '0 / 6',
            isLoadingResponseRate: false,
        };
        var courseTabModels = {
            instructorPrivilege: instructorPrivilege,
            course: defaultCourse,
            sessionsTableRowModels: [sessionsTableRowModel],
            sessionsTableRowModelsSortBy: SortBy.NONE,
            sessionsTableRowModelsSortOrder: SortOrder.ASC,
            hasPopulated: true,
            isAjaxSuccess: true,
            isTabExpanded: true,
        };
        component.user = instructorName;
        component.courseTabModels = [courseTabModels];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with one course with two feedback sessions with tutor privilege', function () {
        var instructorName = '';
        var feedbackSession1 = {
            courseId: 'CS3281',
            timeZone: 'Asia/Singapore',
            feedbackSessionName: 'Feedback 1',
            instructions: 'Answer all questions',
            submissionStartTimestamp: 0,
            submissionEndTimestamp: 1,
            gracePeriod: 0,
            sessionVisibleSetting: SessionVisibleSetting.AT_OPEN,
            customSessionVisibleTimestamp: 0,
            responseVisibleSetting: ResponseVisibleSetting.AT_VISIBLE,
            customResponseVisibleTimestamp: 0,
            submissionStatus: FeedbackSessionSubmissionStatus.CLOSED,
            publishStatus: FeedbackSessionPublishStatus.PUBLISHED,
            isClosingEmailEnabled: true,
            isPublishedEmailEnabled: true,
            createdAtTimestamp: 0,
        };
        var feedbackSession2 = {
            courseId: 'CS3281',
            timeZone: 'Asia/Singapore',
            feedbackSessionName: 'Feedback 2',
            instructions: 'Answer all questions',
            submissionStartTimestamp: 10000,
            submissionEndTimestamp: 15000,
            gracePeriod: 100,
            sessionVisibleSetting: SessionVisibleSetting.AT_OPEN,
            customSessionVisibleTimestamp: 0,
            responseVisibleSetting: ResponseVisibleSetting.AT_VISIBLE,
            customResponseVisibleTimestamp: 0,
            submissionStatus: FeedbackSessionSubmissionStatus.OPEN,
            publishStatus: FeedbackSessionPublishStatus.NOT_PUBLISHED,
            isClosingEmailEnabled: true,
            isPublishedEmailEnabled: true,
            createdAtTimestamp: 1000,
        };
        var tutorPrivilege = {
            canModifyCourse: false,
            canModifySession: false,
            canModifyStudent: false,
            canSubmitSessionInSections: false,
        };
        var sessionsTableRowModel1 = {
            feedbackSession: feedbackSession1,
            instructorPrivilege: tutorPrivilege,
            responseRate: '0 / 6',
            isLoadingResponseRate: false,
        };
        var sessionsTableRowModel2 = {
            feedbackSession: feedbackSession2,
            instructorPrivilege: tutorPrivilege,
            responseRate: '5 / 6',
            isLoadingResponseRate: false,
        };
        var courseTabModels = {
            instructorPrivilege: tutorPrivilege,
            course: defaultCourse,
            sessionsTableRowModels: [sessionsTableRowModel1, sessionsTableRowModel2],
            sessionsTableRowModelsSortBy: SortBy.COURSE_CREATION_DATE,
            sessionsTableRowModelsSortOrder: SortOrder.ASC,
            hasPopulated: true,
            isAjaxSuccess: true,
            isTabExpanded: true,
        };
        component.user = instructorName;
        component.courseTabModels = [courseTabModels];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=instructor-home-page.component.spec.js.map