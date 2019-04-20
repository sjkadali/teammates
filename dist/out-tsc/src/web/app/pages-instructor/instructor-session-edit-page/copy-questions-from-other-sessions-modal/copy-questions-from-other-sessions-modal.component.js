import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SortBy, SortOrder } from './copy-questions-from-other-sessions-modal-model';
/**
 * Modal to select questions to copy from other sessions.
 */
var CopyQuestionsFromOtherSessionsModalComponent = /** @class */ (function () {
    function CopyQuestionsFromOtherSessionsModalComponent(activeModal) {
        this.activeModal = activeModal;
        // enum
        this.SortBy = SortBy;
        this.SortOrder = SortOrder;
        // data
        this.questionToCopyCandidates = [];
        this.candidatesSortBy = SortBy.NONE;
        this.candidatesSortOrder = SortOrder.ASC;
    }
    CopyQuestionsFromOtherSessionsModalComponent.prototype.ngOnInit = function () {
    };
    /**
     * Gets the selected questions to copy.
     */
    CopyQuestionsFromOtherSessionsModalComponent.prototype.getSelectedQuestions = function () {
        return this.questionToCopyCandidates
            .filter(function (c) { return c.isSelected; })
            .map(function (c) { return c.question; });
    };
    /**
     * Sorts the list of questions to copy.
     */
    CopyQuestionsFromOtherSessionsModalComponent.prototype.sortQuestionToCopyCandidates = function (by) {
        this.candidatesSortBy = by;
        // reverse the sort order
        this.candidatesSortOrder =
            this.candidatesSortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;
        this.questionToCopyCandidates.sort(this.sortCandidatesBy(by, this.candidatesSortOrder));
    };
    /**
     * Generates a sorting function.
     */
    CopyQuestionsFromOtherSessionsModalComponent.prototype.sortCandidatesBy = function (by, order) {
        return (function (a, b) {
            var strA;
            var strB;
            switch (by) {
                case SortBy.FEEDBACK_SESSION_NAME:
                    strA = a.feedbackSessionName;
                    strB = b.feedbackSessionName;
                    break;
                case SortBy.COURSE_ID:
                    strA = a.courseId;
                    strB = b.courseId;
                    break;
                case SortBy.QUESTION_TYPE:
                    strA = String(a.question.questionType);
                    strB = String(b.question.questionType);
                    break;
                case SortBy.QUESTION_TEXT:
                    strA = a.question.questionBrief;
                    strB = b.question.questionBrief;
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
    Object.defineProperty(CopyQuestionsFromOtherSessionsModalComponent.prototype, "hasAnyQuestionsToCopySelected", {
        /**
         * Checks whether there are any selected question.
         */
        get: function () {
            return this.questionToCopyCandidates.find(function (c) { return c.isSelected; }) !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    CopyQuestionsFromOtherSessionsModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-copy-questions-from-other-sessions-modal',
            templateUrl: './copy-questions-from-other-sessions-modal.component.html',
            styleUrls: ['./copy-questions-from-other-sessions-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal])
    ], CopyQuestionsFromOtherSessionsModalComponent);
    return CopyQuestionsFromOtherSessionsModalComponent;
}());
export { CopyQuestionsFromOtherSessionsModalComponent };
//# sourceMappingURL=copy-questions-from-other-sessions-modal.component.js.map