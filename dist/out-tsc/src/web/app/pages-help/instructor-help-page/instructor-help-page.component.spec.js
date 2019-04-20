import * as tslib_1 from "tslib";
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstructorHelpPageComponent } from './instructor-help-page.component';
import { Component, Input } from '@angular/core';
var InstructorHelpStudentsSectionStubComponent = /** @class */ (function () {
    function InstructorHelpStudentsSectionStubComponent() {
        this.key = '';
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorHelpStudentsSectionStubComponent.prototype, "key", void 0);
    InstructorHelpStudentsSectionStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-instructor-help-students-section', template: '' })
    ], InstructorHelpStudentsSectionStubComponent);
    return InstructorHelpStudentsSectionStubComponent;
}());
var InstructorHelpCoursesSectionStubComponent = /** @class */ (function () {
    function InstructorHelpCoursesSectionStubComponent() {
        this.key = '';
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorHelpCoursesSectionStubComponent.prototype, "key", void 0);
    InstructorHelpCoursesSectionStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-instructor-help-courses-section', template: '' })
    ], InstructorHelpCoursesSectionStubComponent);
    return InstructorHelpCoursesSectionStubComponent;
}());
var InstructorHelpSessionsSectionStubComponent = /** @class */ (function () {
    function InstructorHelpSessionsSectionStubComponent() {
        this.key = '';
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorHelpSessionsSectionStubComponent.prototype, "key", void 0);
    InstructorHelpSessionsSectionStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-instructor-help-sessions-section', template: '' })
    ], InstructorHelpSessionsSectionStubComponent);
    return InstructorHelpSessionsSectionStubComponent;
}());
var InstructorHelpQuestionsSectionStubComponent = /** @class */ (function () {
    function InstructorHelpQuestionsSectionStubComponent() {
        this.key = '';
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorHelpQuestionsSectionStubComponent.prototype, "key", void 0);
    InstructorHelpQuestionsSectionStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-instructor-help-questions-section', template: '' })
    ], InstructorHelpQuestionsSectionStubComponent);
    return InstructorHelpQuestionsSectionStubComponent;
}());
describe('InstructorHelpPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorHelpPageComponent, InstructorHelpCoursesSectionStubComponent,
                InstructorHelpStudentsSectionStubComponent, InstructorHelpSessionsSectionStubComponent,
                InstructorHelpQuestionsSectionStubComponent],
            imports: [FormsModule, NgbModule, RouterTestingModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorHelpPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-help-page.component.spec.js.map