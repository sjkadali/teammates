import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FeedbackParticipantType, } from '../../../../types/api-output';
import { DEFAULT_MCQ_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for MCQ questions.
 */
var McqQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(McqQuestionAdditionalInfoComponent, _super);
    function McqQuestionAdditionalInfoComponent() {
        var _this = _super.call(this, DEFAULT_MCQ_QUESTION_DETAILS()) || this;
        // enum
        _this.FeedbackParticipantType = FeedbackParticipantType;
        return _this;
    }
    McqQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-mcq-question-additional-info',
            templateUrl: './mcq-question-additional-info.component.html',
            styleUrls: ['./mcq-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], McqQuestionAdditionalInfoComponent);
    return McqQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { McqQuestionAdditionalInfoComponent };
//# sourceMappingURL=mcq-question-additional-info.component.js.map