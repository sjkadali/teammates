import * as tslib_1 from "tslib";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ClipboardModule } from 'ngx-clipboard';
import { InstructorCourseDetailsPageComponent } from './instructor-course-details-page.component';
var StudentListStubComponent = /** @class */ (function () {
    function StudentListStubComponent() {
        this.courseId = '';
        this.useGrayHeading = true;
        this.sections = [];
        this.enableRemindButton = true;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], StudentListStubComponent.prototype, "courseId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListStubComponent.prototype, "useGrayHeading", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], StudentListStubComponent.prototype, "sections", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListStubComponent.prototype, "enableRemindButton", void 0);
    StudentListStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-student-list', template: '' })
    ], StudentListStubComponent);
    return StudentListStubComponent;
}());
var AjaxPreloadComponent = /** @class */ (function () {
    function AjaxPreloadComponent() {
    }
    AjaxPreloadComponent = tslib_1.__decorate([
        Component({ selector: 'tm-ajax-preload', template: '' })
    ], AjaxPreloadComponent);
    return AjaxPreloadComponent;
}());
var course = {
    id: 'CS101',
    name: 'Introduction to CS',
};
var student = {
    name: 'Jamie',
    email: 'jamie@gmail.com',
    status: 'Yet to join',
    team: 'Team 1',
};
describe('InstructorCourseDetailsPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorCourseDetailsPageComponent,
                StudentListStubComponent,
                AjaxPreloadComponent,
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                ClipboardModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorCourseDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with a course with one co-owner and no students, and populated course student list', function () {
        var stats = {
            sectionsTotal: 0,
            teamsTotal: 0,
            studentsTotal: 0,
        };
        var coOwner = {
            googleId: 'Hodor',
            name: 'Hodor',
            email: 'hodor@gmail.com',
            key: 'hodor@gmail.com%CS1012345',
            role: 'Co-owner',
            displayedName: 'Hodor',
            isArchived: false,
            isDisplayedToStudents: true,
        };
        var courseDetails = {
            course: course,
            stats: stats,
        };
        component.courseDetails = courseDetails;
        component.instructors = [coOwner];
        component.courseStudentListAsCsv = 'a,b';
        component.loading = true;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with a course with one co-owner and one student, and ajax failure', function () {
        var stats = {
            sectionsTotal: 1,
            teamsTotal: 1,
            studentsTotal: 1,
        };
        var coOwner = {
            googleId: 'Bran',
            name: 'Bran',
            email: 'bran@gmail.com',
            key: 'bran@gmail.com%CS1012345',
            role: 'Co-owner',
            displayedName: 'Bran',
            isArchived: false,
            isDisplayedToStudents: false,
        };
        var courseDetails = {
            course: course,
            stats: stats,
        };
        var studentListSectionData = {
            sectionName: 'Tutorial Group 1',
            isAllowedToViewStudentInSection: true,
            isAllowedToModifyStudent: true,
            students: [student],
        };
        component.sections = [studentListSectionData];
        component.courseDetails = courseDetails;
        component.instructors = [coOwner];
        component.isAjaxSuccess = false;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=instructor-course-details-page.component.spec.js.map