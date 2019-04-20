import * as tslib_1 from "tslib";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstructorStudentRecordsPageComponent } from './instructor-student-records-page.component';
var StudentProfileStubComponent = /** @class */ (function () {
    function StudentProfileStubComponent() {
        this.studentName = '';
        this.hideMoreInfo = false;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StudentProfileStubComponent.prototype, "studentProfile", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], StudentProfileStubComponent.prototype, "studentName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StudentProfileStubComponent.prototype, "hideMoreInfo", void 0);
    StudentProfileStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-student-profile', template: '' })
    ], StudentProfileStubComponent);
    return StudentProfileStubComponent;
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
describe('InstructorStudentRecordsPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorStudentRecordsPageComponent,
                StudentProfileStubComponent,
                MoreInfoStubComponent,
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
        fixture = TestBed.createComponent(InstructorStudentRecordsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-student-records-page.component.spec.js.map