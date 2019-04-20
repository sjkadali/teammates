import { SortBy, SortOrder } from './sessions-table-model';
/**
 * The base modal information for a list of students.
 */
var StudentListInfoBaseModalComponent = /** @class */ (function () {
    function StudentListInfoBaseModalComponent(httpRequestService, statusMessageService) {
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        // enum
        this.SortBy = SortBy;
        this.SortOrder = SortOrder;
        this.studentStatusTableRows = [];
        this.studentsTableRowSortBy = SortBy.NONE;
        this.studentsTableRowSortOrder = SortOrder.DESC;
        this.loading = false;
        this.isAjaxSuccess = true;
    }
    /**
     * Get the list of students to remind in table form.
     */
    StudentListInfoBaseModalComponent.prototype.getStudentStatusTableRowModel = function (paramMap, model) {
        var _this = this;
        this.httpRequestService.get('/session/students/response', paramMap)
            .subscribe(function (feedbackSessionStudentsResponse) {
            feedbackSessionStudentsResponse.studentsResponse
                .forEach(function (studentResponse) {
                var studentStatusTableRowModel = {
                    feedbackSessionStudentResponse: studentResponse,
                    isChecked: false,
                };
                model.push(studentStatusTableRowModel);
            });
            _this.sortStudentsTableRows(SortBy.SUBMIT_STATUS);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
            _this.isAjaxSuccess = false;
        });
        this.loading = false;
    };
    /**
     * Sort the students in according to selection option.
     */
    StudentListInfoBaseModalComponent.prototype.sortStudentsTableRows = function (by) {
        this.studentsTableRowSortBy = by;
        // reverse the sort order
        this.studentsTableRowSortOrder =
            this.studentsTableRowSortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;
        this.studentStatusTableRows.sort(this.sortRowsBy(by, this.studentsTableRowSortOrder));
    };
    /**
     * Sorts the rows of students in order.
     */
    StudentListInfoBaseModalComponent.prototype.sortRowsBy = function (by, order) {
        return (function (a, b) {
            var strA;
            var strB;
            switch (by) {
                case SortBy.SECTION_NAME:
                    strA = a.feedbackSessionStudentResponse.sectionName;
                    strB = b.feedbackSessionStudentResponse.sectionName;
                    break;
                case SortBy.TEAM_NAME:
                    strA = a.feedbackSessionStudentResponse.teamName;
                    strB = b.feedbackSessionStudentResponse.teamName;
                    break;
                case SortBy.STUDENT_NAME:
                    strA = a.feedbackSessionStudentResponse.name;
                    strB = b.feedbackSessionStudentResponse.name;
                    break;
                case SortBy.STUDENT_EMAIL:
                    strA = a.feedbackSessionStudentResponse.email;
                    strB = b.feedbackSessionStudentResponse.email;
                    break;
                case SortBy.SUBMIT_STATUS:
                    strA = a.feedbackSessionStudentResponse.responseStatus.toString();
                    strB = b.feedbackSessionStudentResponse.responseStatus.toString();
                    break;
                default:
                    strA = '';
                    strB = '';
            }
            if (order === SortOrder.ASC) {
                return strA.localeCompare(strB);
            }
            if (order === SortOrder.DESC) {
                return strB.localeCompare(strA);
            }
            return 0;
        });
    };
    /**
     * Check all the checkbox of the students.
     */
    StudentListInfoBaseModalComponent.prototype.checkAllStudents = function (model, isCheck) {
        for (var _i = 0, model_1 = model; _i < model_1.length; _i++) {
            var remindStudentRow = model_1[_i];
            remindStudentRow.isChecked = isCheck;
        }
    };
    /**
     * Collates a list of selected students with selected checkbox.
     */
    StudentListInfoBaseModalComponent.prototype.collateStudentsToSend = function (model) {
        var remindStudentList = [];
        for (var _i = 0, model_2 = model; _i < model_2.length; _i++) {
            var studentStatusTableRow = model_2[_i];
            if (studentStatusTableRow.isChecked) {
                remindStudentList.push(studentStatusTableRow.feedbackSessionStudentResponse.email);
            }
        }
        return { usersToRemind: remindStudentList };
    };
    return StudentListInfoBaseModalComponent;
}());
export { StudentListInfoBaseModalComponent };
//# sourceMappingURL=student-list-info-base-modal.component.js.map