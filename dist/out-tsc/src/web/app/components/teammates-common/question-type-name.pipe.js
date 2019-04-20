import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { FeedbackQuestionType } from '../../../types/api-output';
/**
 * Pipe to handle the display of {@code FeedbackQuestionType}.
 */
var QuestionTypeNamePipe = /** @class */ (function () {
    function QuestionTypeNamePipe() {
    }
    /**
     * Transforms {@link FeedbackQuestionType} to a simple name.
     */
    QuestionTypeNamePipe.prototype.transform = function (type) {
        switch (type) {
            case FeedbackQuestionType.MCQ:
                return 'Multiple-Choice (single answer) question';
            case FeedbackQuestionType.CONTRIB:
                return 'Team contribution question';
            case FeedbackQuestionType.TEXT:
                return 'Essay question';
            case FeedbackQuestionType.NUMSCALE:
                return 'Numerical Scale Question';
            case FeedbackQuestionType.MSQ:
                return 'Multiple-choice (multiple answers) question';
            case FeedbackQuestionType.RANK_OPTIONS:
                return 'Rank (options) question';
            default:
                return 'Unknown';
        }
    };
    QuestionTypeNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'questionTypeName',
        })
    ], QuestionTypeNamePipe);
    return QuestionTypeNamePipe;
}());
export { QuestionTypeNamePipe };
//# sourceMappingURL=question-type-name.pipe.js.map