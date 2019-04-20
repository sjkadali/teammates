import * as tslib_1 from "tslib";
import { async, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { StudentResultTableComponent } from './student-result-table.component';
var StudentListStubComponent = /** @class */ (function () {
    function StudentListStubComponent() {
        this.courseId = '';
        this.useGrayHeading = true;
        this.sections = [];
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
        tslib_1.__metadata("design:type", Boolean)
    ], StudentListStubComponent.prototype, "enableRemindButton", void 0);
    StudentListStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-student-list', template: '' })
    ], StudentListStubComponent);
    return StudentListStubComponent;
}());
describe('StudentResultTableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                StudentResultTableComponent,
                StudentListStubComponent,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentResultTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=student-result-table.component.spec.js.map