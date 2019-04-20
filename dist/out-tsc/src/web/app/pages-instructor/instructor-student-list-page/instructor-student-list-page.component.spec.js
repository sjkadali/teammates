import * as tslib_1 from "tslib";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { InstructorStudentListPageComponent } from './instructor-student-list-page.component';
var StudentListStubComponent = /** @class */ (function () {
    function StudentListStubComponent() {
        this.courseId = '';
        this.useGrayHeading = true;
        this.sections = [];
        this.listOfStudentsToHide = [];
        this.isHideTableHead = false;
        this.enableRemindButton = false;
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
        tslib_1.__metadata("design:type", Array)
    ], StudentListStubComponent.prototype, "listOfStudentsToHide", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListStubComponent.prototype, "isHideTableHead", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListStubComponent.prototype, "enableRemindButton", void 0);
    StudentListStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-student-list', template: '' })
    ], StudentListStubComponent);
    return StudentListStubComponent;
}());
describe('InstructorStudentListPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorStudentListPageComponent,
                StudentListStubComponent,
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                FormsModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorStudentListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-student-list-page.component.spec.js.map