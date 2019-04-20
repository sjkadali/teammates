import * as tslib_1 from "tslib";
import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { HotTableRegisterer } from '@handsontable/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Instructor course enroll page.
 */
var InstructorCourseEnrollPageComponent = /** @class */ (function () {
    function InstructorCourseEnrollPageComponent(route, httpRequestService, statusMessageService, courseService, ngbModal) {
        this.route = route;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.courseService = courseService;
        this.ngbModal = ngbModal;
        this.user = '';
        this.courseid = '';
        this.showEnrollResults = false;
        this.statusMessage = [];
        this.isNewStudentsPanelCollapsed = false;
        this.isExistingStudentsPanelCollapsed = true;
        this.colHeaders = ['Section', 'Team', 'Name', 'Email', 'Comments'];
        this.contextMenuOptions = ['row_above',
            'row_below',
            'remove_row',
            'undo',
            'redo',
            {
                key: 'paste',
                name: 'Paste',
                callback: this.pasteClick,
            },
            'make_read_only',
            'alignment'];
        this.hotRegisterer = new HotTableRegisterer();
        this.newStudentsHOT = 'newStudentsHOT';
        this.existingStudentsHOT = 'existingStudentsHOT';
        this.isExistingStudentsPresent = true;
        this.loading = false;
        this.isAjaxSuccess = true;
    }
    InstructorCourseEnrollPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.getCourseEnrollPageData(queryParams.courseid);
        });
    };
    /**
     * Retrieves updated column header order and generates a header string.
     *
     * Example: Changes this array ['Section', 'Team', 'Name', 'Email', 'Comments']
     * into a string = "Section|Team|Name|Email|Comments\n"
     *
     */
    InstructorCourseEnrollPageComponent.prototype.getUpdatedHeaderString = function (handsontableColHeader) {
        var colHeaders = handsontableColHeader.join('|');
        return colHeaders.concat('\n');
    };
    /**
     * Retrieves user data rows in the spreadsheet interface and transforms it into a string.
     *
     * Null value from cell is changed to empty string after .join(). Filters empty rows in the process.
     *
     * Example:
     * 2 by 5 spreadsheetData (before)
     * ['TestSection1', 'Team1', 'null', 'test1@xample.com', 'test1comments']
     * ['TestSection2', null, 'TestName2', 'test2@example.com', null]
     *
     * 2 by 5 spreadsheetData (after)
     * "TestSection1|Team1||test1@xample.com|test1comments\n
     *  TestSection2||TestName2|test2@example.com|\n"
     */
    InstructorCourseEnrollPageComponent.prototype.getUserDataRows = function (spreadsheetData) {
        // needs to check for '' as an initial empty row with null values will be converted to e.g. "||||" after .map
        return spreadsheetData.filter(function (row) { return (!row.every(function (cell) { return cell === null || cell === ''; })); })
            .map(function (row) { return row.join('|'); })
            .map(function (row) { return row.replace(/\n|\r/g, ''); })
            .join('\n');
    };
    /**
     * Submits enroll data
     */
    InstructorCourseEnrollPageComponent.prototype.submitEnrollData = function () {
        var _this = this;
        var newStudentsHOTInstance = this.hotRegisterer.getInstance(this.newStudentsHOT);
        var spreadsheetData = newStudentsHOTInstance.getData();
        var hotInstanceColHeaders = newStudentsHOTInstance.getColHeader();
        var dataPushToTextarea = this.getUpdatedHeaderString(hotInstanceColHeaders);
        var userDataRows = this.getUserDataRows(spreadsheetData);
        this.enrollData = (userDataRows === ''
            ? '' : dataPushToTextarea + userDataRows); // only include header string if userDataRows is not empty
        var paramMap = {
            courseid: this.courseid,
            user: this.user,
        };
        this.httpRequestService.post('/course/enrollSave', paramMap, this.enrollData)
            .subscribe(function (resp) {
            _this.showEnrollResults = true;
            _this.statusMessage.pop(); // removes any existing error status message
            _this.statusMessageService.showSuccessMessage('Enrollment successful. Summary given below.');
            _this.enrollResultPanelList = resp.enrollResultPanelList;
        }, function (resp) {
            _this.statusMessage.pop(); // removes any existing error status message
            _this.statusMessage.push({
                message: resp.error.message,
                color: 'danger',
            });
        });
    };
    /**
     * Adds new rows to the 'New students' spreadsheet interface
     * according to user input
     */
    InstructorCourseEnrollPageComponent.prototype.addRows = function (numOfRows) {
        this.hotRegisterer.getInstance(this.newStudentsHOT).alter('insert_row', [], numOfRows);
    };
    /**
     * Toggles the view of 'New Students' spreadsheet interface
     * and/or its affiliated buttons
     */
    InstructorCourseEnrollPageComponent.prototype.toggleNewStudentsPanel = function () {
        this.isNewStudentsPanelCollapsed = !this.isNewStudentsPanelCollapsed;
    };
    /**
     * Returns the length of the current spreadsheet.
     * Rows with all null values are filtered.
     */
    InstructorCourseEnrollPageComponent.prototype.getSpreadsheetLength = function (dataHandsontable) {
        return dataHandsontable
            .filter(function (row) { return (!row.every(function (cell) { return cell === null; })); })
            .length;
    };
    /**
     * Transforms the first uppercase letter of a string into a lowercase letter.
     */
    InstructorCourseEnrollPageComponent.prototype.unCapitalizeFirstLetter = function (targetString) {
        return targetString.charAt(0).toLowerCase() + targetString.slice(1);
    };
    /**
     * Converts returned student list to a suitable format required by Handsontable.
     */
    InstructorCourseEnrollPageComponent.prototype.studentListDataToHandsontableData = function (studentsData, handsontableColHeader) {
        var headers = handsontableColHeader.map(this.unCapitalizeFirstLetter);
        return studentsData.map(function (student) { return (headers.map(function (header) { return student[header]; })); });
    };
    /**
     * Loads existing student data into the spreadsheet interface.
     */
    InstructorCourseEnrollPageComponent.prototype.loadExistingStudentsData = function (existingStudentsHOTInstance, studentsData) {
        existingStudentsHOTInstance.loadData(this.studentListDataToHandsontableData(studentsData, existingStudentsHOTInstance.getColHeader()));
    };
    /**
     * Toggles the view of 'Existing Students' spreadsheet interface
     */
    InstructorCourseEnrollPageComponent.prototype.toggleExistingStudentsPanel = function () {
        var _this = this;
        // Has to be done before the API call is made so that HOT is available for data population
        this.isExistingStudentsPanelCollapsed = !this.isExistingStudentsPanelCollapsed;
        this.loading = true;
        var existingStudentsHOTInstance = this.hotRegisterer.getInstance(this.existingStudentsHOT);
        // Calling REST API only the first time when spreadsheet has no data
        if (this.getSpreadsheetLength(existingStudentsHOTInstance.getData()) !== 0) {
            this.loading = false;
            return;
        }
        var paramMap = {
            courseid: this.courseid,
            user: this.user,
        };
        this.httpRequestService.get('/course/enroll/students', paramMap).subscribe(function (resp) {
            if (resp.enrolledStudents.length !== 0) {
                _this.loadExistingStudentsData(existingStudentsHOTInstance, resp.enrolledStudents);
            }
            else {
                // Shows a message if there are no existing students. Panel would not be expanded.
                _this.isExistingStudentsPresent = false;
                _this.isExistingStudentsPanelCollapsed = !_this.isExistingStudentsPanelCollapsed; // Collapse the panel again
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
            _this.isAjaxSuccess = false;
            _this.isExistingStudentsPanelCollapsed = !_this.isExistingStudentsPanelCollapsed; // Collapse the panel again
        });
        this.loading = false;
    };
    /**
     * Trigger click button
     */
    InstructorCourseEnrollPageComponent.prototype.pasteClick = function () {
        var element = document.getElementById('paste');
        element.click();
    };
    /**
     * Shows modal box when user clicks on the 'paste' option in the
     * Handsontable context menu
     */
    InstructorCourseEnrollPageComponent.prototype.showPasteModalBox = function (pasteModalBox) {
        this.ngbModal.open(pasteModalBox);
    };
    /**
     * Reset page to default view
     */
    InstructorCourseEnrollPageComponent.prototype.hideEnrollResults = function () {
        this.showEnrollResults = false;
        this.statusMessage.pop();
        window.scroll(0, 0);
    };
    /**
     * Checks whether the course is present
     */
    InstructorCourseEnrollPageComponent.prototype.getCourseEnrollPageData = function (courseid) {
        var _this = this;
        this.courseService.hasResponsesForCourse(courseid).subscribe(function (resp) {
            _this.coursePresent = true;
            _this.courseid = courseid;
            if (resp.hasResponses) {
                _this.statusMessageService.showWarningMessage('There are existing feedback responses for this course. '
                    + 'Modifying records of enrolled students will result in some existing responses '
                    + 'from those modified students to be deleted. You may wish to download the data '
                    + 'before you make the changes.');
            }
        }, function (resp) {
            _this.coursePresent = false;
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Shows user more information about the spreadsheet interfaces
     */
    InstructorCourseEnrollPageComponent.prototype.navigateToMoreInfo = function () {
        this.moreInfo
            .nativeElement.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    tslib_1.__decorate([
        ViewChild('moreInfo'),
        tslib_1.__metadata("design:type", ElementRef)
    ], InstructorCourseEnrollPageComponent.prototype, "moreInfo", void 0);
    tslib_1.__decorate([
        ContentChild('pasteModalBox'),
        tslib_1.__metadata("design:type", NgbModal)
    ], InstructorCourseEnrollPageComponent.prototype, "pasteModalBox", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InstructorCourseEnrollPageComponent.prototype, "isNewStudentsPanelCollapsed", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InstructorCourseEnrollPageComponent.prototype, "isExistingStudentsPanelCollapsed", void 0);
    InstructorCourseEnrollPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-course-enroll-page',
            templateUrl: './instructor-course-enroll-page.component.html',
            styleUrls: ['./instructor-course-enroll-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            HttpRequestService,
            StatusMessageService,
            CourseService,
            NgbModal])
    ], InstructorCourseEnrollPageComponent);
    return InstructorCourseEnrollPageComponent;
}());
export { InstructorCourseEnrollPageComponent };
//# sourceMappingURL=instructor-course-enroll-page.component.js.map