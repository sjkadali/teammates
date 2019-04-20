import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student-list.component';
describe('StudentListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StudentListComponent],
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
        fixture = TestBed.createComponent(StudentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should snap with default fields', function () {
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with table head set to hidden', function () {
        component.isHideTableHead = true;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with some student list data', function () {
        component.sections = [
            {
                students: [
                    {
                        name: 'tester',
                        team: '1',
                        email: 'tester@tester.com',
                        status: 'Joined',
                    },
                ],
                sectionName: '1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
            {
                students: [
                    {
                        name: 'Alice Betsy',
                        team: 'Team 1',
                        email: 'alice.b.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Benny Charles',
                        team: 'Team 1',
                        email: 'benny.c.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Danny Engrid',
                        team: 'Team 1',
                        email: 'danny.e.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Emma Farrell',
                        team: 'Team 1',
                        email: 'emma.f.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                ],
                sectionName: 'Tutorial Group 1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
        ];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with some student list data when not allowed to modify student for a specific section', function () {
        component.sections = [
            {
                students: [
                    {
                        name: 'tester',
                        team: '1',
                        email: 'tester@tester.com',
                        status: 'Joined',
                    },
                ],
                sectionName: '1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
            {
                students: [
                    {
                        name: 'Alice Betsy',
                        team: 'Team 1',
                        email: 'alice.b.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Benny Charles',
                        team: 'Team 1',
                        email: 'benny.c.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Danny Engrid',
                        team: 'Team 1',
                        email: 'danny.e.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Emma Farrell',
                        team: 'Team 1',
                        email: 'emma.f.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                ],
                sectionName: 'Tutorial Group 1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: false,
            },
        ];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with enable remind button set to true and two students yet to join', function () {
        component.sections = [
            {
                students: [
                    {
                        name: 'tester',
                        team: '1',
                        email: 'tester@tester.com',
                        status: 'Yet to join',
                    },
                ],
                sectionName: '1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
            {
                students: [
                    {
                        name: 'Alice Betsy',
                        team: 'Team 1',
                        email: 'alice.b.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Benny Charles',
                        team: 'Team 1',
                        email: 'benny.c.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Danny Engrid',
                        team: 'Team 1',
                        email: 'danny.e.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Emma Farrell',
                        team: 'Team 1',
                        email: 'emma.f.tmms@gmail.tmt',
                        status: 'Yet to join',
                    },
                ],
                sectionName: 'Tutorial Group 1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
        ];
        component.enableRemindButton = true;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with enable remind button set to true, one student yet to join when not allowed to modify' +
        ' student', function () {
        component.sections = [
            {
                students: [
                    {
                        name: 'tester',
                        team: '1',
                        email: 'tester@tester.com',
                        status: 'Yet to join',
                    },
                ],
                sectionName: '1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
            {
                students: [
                    {
                        name: 'Alice Betsy',
                        team: 'Team 1',
                        email: 'alice.b.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Benny Charles',
                        team: 'Team 1',
                        email: 'benny.c.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Danny Engrid',
                        team: 'Team 1',
                        email: 'danny.e.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Emma Farrell',
                        team: 'Team 1',
                        email: 'emma.f.tmms@gmail.tmt',
                        status: 'Yet to join',
                    },
                ],
                sectionName: 'Tutorial Group 1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: false,
            },
        ];
        component.enableRemindButton = true;
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with some student list data and some students to hide', function () {
        component.sections = [
            {
                students: [
                    {
                        name: 'tester',
                        team: '1',
                        email: 'tester@tester.com',
                        status: 'Yet to join',
                    },
                ],
                sectionName: '1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
            {
                students: [
                    {
                        name: 'Alice Betsy',
                        team: 'Team 1',
                        email: 'alice.b.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Benny Charles',
                        team: 'Team 1',
                        email: 'benny.c.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Danny Engrid',
                        team: 'Team 1',
                        email: 'danny.e.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                    {
                        name: 'Emma Farrell',
                        team: 'Team 1',
                        email: 'emma.f.tmms@gmail.tmt',
                        status: 'Joined',
                    },
                ],
                sectionName: 'Tutorial Group 1',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
        ];
        component.listOfStudentsToHide = [
            'alice.b.tmms@gmail.tmt',
            'tester@tester.com',
        ];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
    it('should snap with some student list data with no sections', function () {
        component.sections = [
            {
                students: [
                    {
                        name: 'tester',
                        team: '1',
                        email: 'tester@tester.com',
                        status: 'Yet to join',
                    },
                ],
                sectionName: 'None',
                isAllowedToViewStudentInSection: true,
                isAllowedToModifyStudent: true,
            },
        ];
        fixture.detectChanges();
        expect(fixture).toMatchSnapshot();
    });
});
//# sourceMappingURL=student-list.component.spec.js.map