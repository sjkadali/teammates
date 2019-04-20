import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { Gender } from '../../../types/gender';
import { StudentCourseDetailsPageComponent } from './student-course-details-page.component';
describe('StudentCourseDetailsPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudentCourseDetailsPageComponent],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentCourseDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with populated fields', function () {
        var courseAttributes = {
            createdAt: '2019-03-12T09:13:29.272Z',
            id: 'CS3281',
            name: 'Thematic Systems',
            timeZone: 'Asia/Singapore',
        };
        var instructorDetails = [
            {
                name: 'Ayush',
                email: 'ayush@ayush.com',
            }, {
                name: 'Byush',
                email: 'byush@byush.com',
            },
        ];
        var studentDetails = {
            email: 'cyush@cyush.com',
            course: 'CS3281',
            name: 'Cyush',
            googleId: 'cyush@gmail.com',
            team: 'CSquad',
            section: 'Section 1',
        };
        var teammateProfiles = [
            {
                shortName: 'ash',
                email: 'ash@ash.com',
                institute: 'NUS',
                nationality: 'Indian',
                gender: Gender.MALE,
                pictureKey: 'something.jpg',
            },
            {
                shortName: 'bsh',
                email: 'bsh@bsh.com',
                gender: Gender.OTHER,
                pictureKey: 'something2.jpg',
            },
        ];
        component.course = courseAttributes;
        component.instructorDetails = instructorDetails;
        component.student = studentDetails;
        component.teammateProfiles = teammateProfiles;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=student-course-details-page.component.spec.js.map