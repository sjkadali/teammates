import * as tslib_1 from "tslib";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { InstructorSearchPageComponent } from './instructor-search-page.component';
var InstructorSearchBarStubComponent = /** @class */ (function () {
    function InstructorSearchBarStubComponent() {
        this.searchKey = '';
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorSearchBarStubComponent.prototype, "searchKey", void 0);
    InstructorSearchBarStubComponent = tslib_1.__decorate([
        Component({ selector: 'tm-instructor-search-bar', template: '' })
    ], InstructorSearchBarStubComponent);
    return InstructorSearchBarStubComponent;
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
describe('InstructorSearchPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                InstructorSearchPageComponent,
                InstructorSearchBarStubComponent,
                StudentResultTableStubComponent,
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSearchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with a search key', function () {
        component.searchKey = 'TEST';
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with a student table', function () {
        component.studentTables = [
            {
                courseId: 'test.tes-demo',
                sections: [
                    {
                        sectionName: 'Tutorial Group 1',
                        isAllowedToViewStudentInSection: true,
                        isAllowedToModifyStudent: true,
                        students: [
                            {
                                name: 'Alice Betsy',
                                email: 'alice.b.tmms@gmail.tmt',
                                status: 'Joined',
                                team: 'Team 1',
                            },
                            {
                                name: 'Benny Charles',
                                email: 'benny.c.tmms@gmail.tmt',
                                status: 'Joined',
                                team: 'Team 1',
                            },
                            {
                                name: 'Danny Engrid',
                                email: 'danny.e.tmms@gmail.tmt',
                                status: 'Joined',
                                team: 'Team 1',
                            },
                            {
                                name: 'Emma Farrell',
                                email: 'emma.f.tmms@gmail.tmt',
                                status: 'Joined',
                                team: 'Team 1',
                            },
                        ],
                    },
                ],
            },
        ];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=instructor-search-page.component.spec.js.map