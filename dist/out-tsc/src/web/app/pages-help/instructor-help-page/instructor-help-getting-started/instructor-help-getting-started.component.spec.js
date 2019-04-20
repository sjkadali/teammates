import * as tslib_1 from "tslib";
import { async, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InstructorHelpGettingStartedComponent } from './instructor-help-getting-started.component';
var ExampleBoxStubComponent = /** @class */ (function () {
    function ExampleBoxStubComponent() {
    }
    ExampleBoxStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-example-box', template: '' })
    ], ExampleBoxStubComponent);
    return ExampleBoxStubComponent;
}());
var AddCourseFormStubComponent = /** @class */ (function () {
    function AddCourseFormStubComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AddCourseFormStubComponent.prototype, "isEnabled", void 0);
    AddCourseFormStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-add-course-form', template: '' })
    ], AddCourseFormStubComponent);
    return AddCourseFormStubComponent;
}());
describe('InstructorHelpGettingStartedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorHelpGettingStartedComponent,
                ExampleBoxStubComponent,
                AddCourseFormStubComponent,
            ],
            imports: [
                RouterTestingModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorHelpGettingStartedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-help-getting-started.component.spec.js.map