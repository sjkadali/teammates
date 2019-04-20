import { async, TestBed } from '@angular/core/testing';
import { GenderFormatPipe } from './student-profile-gender.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../../environments/environment.prod';
import { Gender } from '../../../types/gender';
import { TeammatesCommonModule } from '../../components/teammates-common/teammates-common.module';
import { StudentProfilePageComponent } from './student-profile-page.component';
describe('StudentProfilePageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                StudentProfilePageComponent,
                GenderFormatPipe,
            ],
            imports: [
                RouterTestingModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                TeammatesCommonModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentProfilePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with a student field without information', function () {
        var studentDetails = {
            studentProfile: {
                shortName: '',
                email: '',
                institute: '',
                nationality: '',
                gender: Gender,
                moreInfo: '',
                pictureKey: '',
            },
            name: '',
            requestId: '',
        };
        component.student = studentDetails;
        component.editForm = new FormGroup({
            studentshortname: new FormControl(''),
            studentprofileemail: new FormControl(''),
            studentprofileinstitute: new FormControl(''),
            studentnationality: new FormControl(''),
            existingNationality: new FormControl(''),
            studentgender: new FormControl(''),
            studentprofilemoreinfo: new FormControl(''),
        });
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with values and a profile photo', function () {
        var studentDetails = {
            studentProfile: {
                shortName: 'Ash',
                email: 'ayush@nus.com',
                institute: 'NUS',
                nationality: 'Indian',
                gender: Gender.MALE,
                moreInfo: 'I like to party',
                pictureKey: 'photo.jpg',
            },
            name: 'Ayush',
            requestId: '16',
        };
        component.student = studentDetails;
        component.pictureKey = 'photo.jpg';
        component.profilePicLink = environment.backendUrl + "/webapi/students/" +
            'profilePic?blob-key=$photo.jpg&time=1552509888215';
        component.nationalities = ['Derpistan', 'Blablaland'];
        // Note: we are not using the full list of countries as the purpose of the snapshot test is to only check whether
        // the page is being rendered correctly.
        component.editForm = new FormGroup({
            studentshortname: new FormControl('Ash'),
            studentprofileemail: new FormControl('ayush@nus.com'),
            studentprofileinstitute: new FormControl('NUS'),
            studentnationality: new FormControl('Indian'),
            existingNationality: new FormControl('Indian'),
            studentgender: new FormControl(Gender.MALE),
            studentprofilemoreinfo: new FormControl('I like to party'),
        });
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=student-profile-page.component.spec.js.map