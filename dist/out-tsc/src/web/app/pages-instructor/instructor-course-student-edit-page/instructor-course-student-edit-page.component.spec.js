import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { InstructorCourseStudentEditPageComponent, } from './instructor-course-student-edit-page.component';
describe('InstructorCourseStudentEditPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorCourseStudentEditPageComponent],
            imports: [
                RouterTestingModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorCourseStudentEditPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with student details', function () {
        component.student = {
            email: 'jake@gmail.com',
            course: 'Crime101',
            name: 'Jake Peralta',
            lastName: 'Santiago',
            comments: 'Cool cool cool.',
            team: 'Team A',
            section: 'Section A',
        };
        component.editForm = new FormGroup({
            studentname: new FormControl('Jake Peralta'),
            sectionname: new FormControl('Section A'),
            teamname: new FormControl('Team A'),
            newstudentemail: new FormControl('jake@gmail.com'),
            comments: new FormControl('Cool cool cool.'),
        });
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=instructor-course-student-edit-page.component.spec.js.map