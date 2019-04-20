import * as tslib_1 from "tslib";
import { async, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Gender } from '../../../../types/gender';
import { InstructorHelpStudentsSectionComponent } from './instructor-help-students-section.component';
var ExampleBoxStubComponent = /** @class */ (function () {
    function ExampleBoxStubComponent() {
    }
    ExampleBoxStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-example-box', template: '' })
    ], ExampleBoxStubComponent);
    return ExampleBoxStubComponent;
}());
var InstructorSearchBarStubComponent = /** @class */ (function () {
    function InstructorSearchBarStubComponent() {
    }
    InstructorSearchBarStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-instructor-search-bar', template: '' })
    ], InstructorSearchBarStubComponent);
    return InstructorSearchBarStubComponent;
}());
var InstructorCourseStudentEditPageStubComponent = /** @class */ (function () {
    function InstructorCourseStudentEditPageStubComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InstructorCourseStudentEditPageStubComponent.prototype, "isEnabled", void 0);
    InstructorCourseStudentEditPageStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-instructor-course-student-edit-page', template: '' })
    ], InstructorCourseStudentEditPageStubComponent);
    return InstructorCourseStudentEditPageStubComponent;
}());
var StudentResultTableStubComponent = /** @class */ (function () {
    function StudentResultTableStubComponent() {
        this.studentTables = [];
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], StudentResultTableStubComponent.prototype, "studentTables", void 0);
    StudentResultTableStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-student-result-table', template: '' })
    ], StudentResultTableStubComponent);
    return StudentResultTableStubComponent;
}());
var StudentProfileStubComponent = /** @class */ (function () {
    function StudentProfileStubComponent() {
        this.studentProfile = {
            shortName: '',
            email: '',
            institute: '',
            nationality: '',
            gender: Gender.FEMALE,
            moreInfo: '',
            pictureKey: '',
        };
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StudentProfileStubComponent.prototype, "studentProfile", void 0);
    StudentProfileStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-student-profile', template: '' })
    ], StudentProfileStubComponent);
    return StudentProfileStubComponent;
}());
var CourseRelatedInfoStubComponent = /** @class */ (function () {
    function CourseRelatedInfoStubComponent() {
        this.student = {
            email: '',
            course: '',
            name: '',
            lastName: '',
            comments: '',
            team: '',
            section: '',
        };
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CourseRelatedInfoStubComponent.prototype, "student", void 0);
    CourseRelatedInfoStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-course-related-info', template: '' })
    ], CourseRelatedInfoStubComponent);
    return CourseRelatedInfoStubComponent;
}());
var MoreInfoStubComponent = /** @class */ (function () {
    function MoreInfoStubComponent() {
        this.studentName = '';
        this.moreInfoText = '';
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MoreInfoStubComponent.prototype, "studentName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MoreInfoStubComponent.prototype, "moreInfoText", void 0);
    MoreInfoStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-more-info', template: '' })
    ], MoreInfoStubComponent);
    return MoreInfoStubComponent;
}());
describe('InstructorHelpStudentsSectionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorHelpStudentsSectionComponent,
                ExampleBoxStubComponent,
                InstructorSearchBarStubComponent,
                InstructorCourseStudentEditPageStubComponent,
                StudentResultTableStubComponent,
                StudentProfileStubComponent,
                CourseRelatedInfoStubComponent,
                MoreInfoStubComponent,
            ],
            imports: [
                NgbModule,
                RouterTestingModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorHelpStudentsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-help-students-section.component.spec.js.map