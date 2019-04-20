import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Gender } from '../../../../types/gender';
import { InstructorHelpSectionComponent } from '../instructor-help-section.component';
/**
 * Students Section of the Instructor Help Page.
 */
var InstructorHelpStudentsSectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InstructorHelpStudentsSectionComponent, _super);
    function InstructorHelpStudentsSectionComponent() {
        var _this = _super.call(this) || this;
        _this.supportEmail = environment.supportEmail;
        _this.exampleStudentProfile = {
            shortName: 'Alice',
            email: 'alice@email.com',
            institute: 'National University of Singapore',
            nationality: 'American',
            gender: Gender.FEMALE,
            moreInfo: 'Hi I am Alice Betsy! I am from Colorado, America. I am a programming and gaming enthusiast. '
                + 'Aspiring to become a Software Architect in a well reputed organization.',
            pictureKey: '',
        };
        _this.exampleStudentAttributes = {
            email: 'alice@email.com',
            course: 'test.exa-demo',
            name: 'Alice Betsy',
            lastName: 'Betsy',
            comments: 'Alice is a transfer student.',
            team: 'Team A',
            section: 'Section A',
        };
        _this.exampleSingleStudentResultTables = [{
                courseId: 'Course name appears here',
                sections: [{
                        sectionName: 'Section A',
                        isAllowedToViewStudentInSection: true,
                        isAllowedToModifyStudent: true,
                        students: [{
                                name: 'Alice Betsy',
                                email: 'alice@email.com',
                                status: 'Joined',
                                team: 'Team A',
                            }],
                    }],
            }];
        _this.exampleMultipleStudentResultTables = [{
                courseId: 'Course name appears here',
                sections: [
                    {
                        sectionName: 'Section A',
                        isAllowedToViewStudentInSection: true,
                        isAllowedToModifyStudent: true,
                        students: [
                            {
                                name: 'Alice Betsy',
                                email: 'alice@email.com',
                                status: 'Joined',
                                team: 'Team A',
                            },
                            {
                                name: 'Jean Grey',
                                email: 'jean@email.com',
                                status: 'Joined',
                                team: 'Team A',
                            },
                        ],
                    },
                    {
                        sectionName: 'Section B',
                        isAllowedToViewStudentInSection: true,
                        isAllowedToModifyStudent: true,
                        students: [
                            {
                                name: 'Oliver Gates',
                                email: 'oliver@email.com',
                                status: 'Joined',
                                team: 'Team B',
                            },
                            {
                                name: 'Thora Parker',
                                email: 'thora@email.com',
                                status: 'Joined',
                                team: 'Team B',
                            },
                        ],
                    },
                    {
                        sectionName: 'Section C',
                        isAllowedToViewStudentInSection: true,
                        isAllowedToModifyStudent: true,
                        students: [
                            {
                                name: 'Jack Wayne',
                                email: 'jack@email.com',
                                status: 'Joined',
                                team: 'Team C',
                            },
                        ],
                    },
                ],
            }];
        return _this;
    }
    InstructorHelpStudentsSectionComponent.prototype.ngOnInit = function () {
    };
    InstructorHelpStudentsSectionComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-help-students-section',
            templateUrl: './instructor-help-students-section.component.html',
            styleUrls: ['./instructor-help-students-section.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InstructorHelpStudentsSectionComponent);
    return InstructorHelpStudentsSectionComponent;
}(InstructorHelpSectionComponent));
export { InstructorHelpStudentsSectionComponent };
//# sourceMappingURL=instructor-help-students-section.component.js.map