import * as tslib_1 from "tslib";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstructorCoursesPageComponent } from './instructor-courses-page.component';
var AddCourseFormStubComponent = /** @class */ (function () {
    function AddCourseFormStubComponent() {
    }
    AddCourseFormStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-add-course-form', template: '' })
    ], AddCourseFormStubComponent);
    return AddCourseFormStubComponent;
}());
describe('InstructorCoursesPageComponent', function () {
    var component;
    var fixture;
    var activeCourses = [
        {
            id: 'CS3281',
            name: 'Modifiable Students and Courses',
            createdAt: '2018-11-05T08:15:30',
            canModifyCourse: true,
            canModifyStudent: true,
        },
        {
            id: 'CS3282',
            name: 'Nothing modifiable',
            createdAt: '2019-02-02T08:15:30',
            canModifyCourse: false,
            canModifyStudent: false,
        },
    ];
    var archivedCourses = [
        {
            id: 'CS2104',
            name: 'Can modify archived',
            createdAt: '2002-11-05T08:15:30',
            canModifyCourse: true,
        },
        {
            id: 'CS2106',
            name: 'Cannot modify archived',
            createdAt: '2002-11-05T08:15:30',
            canModifyCourse: false,
        },
    ];
    var deletedCourses = [
        {
            id: 'CS1020',
            name: 'Can modify deleted',
            createdAt: '2002-11-05T08:15:30',
            deletedAt: '2003-11-05T08:15:30',
            canModifyCourse: true,
        },
        {
            id: 'CS2010',
            name: 'Cannot modify deleted',
            createdAt: '2002-12-05T08:15:30',
            deletedAt: '2003-12-05T08:15:30',
            canModifyCourse: false,
        },
    ];
    var courseStats = {
        CS3281: {
            sections: 1,
            teams: 1,
            students: 1,
            unregistered: 1,
        },
        CS3282: {
            sections: 2,
            teams: 2,
            students: 2,
            unregistered: 2,
        },
    };
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorCoursesPageComponent,
                AddCourseFormStubComponent,
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                NgbModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorCoursesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with all courses in course stats', function () {
        component.activeCourses = activeCourses;
        component.archivedCourses = archivedCourses;
        component.softDeletedCourses = deletedCourses;
        component.courseStats = courseStats;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap when it is undeletable and unrestorable', function () {
        component.activeCourses = activeCourses;
        component.archivedCourses = archivedCourses;
        component.softDeletedCourses = deletedCourses;
        component.courseStats = courseStats;
        component.canDeleteAll = false;
        component.canRestoreAll = false;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with no courses in course stats', function () {
        component.activeCourses = activeCourses;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=instructor-courses-page.component.spec.js.map