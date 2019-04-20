import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FeedbackParticipantType, } from '../../../../types/api-output';
import { DEFAULT_MSQ_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';
/**
 * Additional info for MSQ questions.
 */
var MsqQuestionAdditionalInfoComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MsqQuestionAdditionalInfoComponent, _super);
    function MsqQuestionAdditionalInfoComponent() {
        var _this = _super.call(this, DEFAULT_MSQ_QUESTION_DETAILS()) || this;
        // enum
        _this.FeedbackParticipantType = FeedbackParticipantType;
        return _this;
    }
    MsqQuestionAdditionalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-msq-question-additional-info',
            templateUrl: './msq-question-additional-info.component.html',
            styleUrls: ['./msq-question-additional-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MsqQuestionAdditionalInfoComponent);
    return MsqQuestionAdditionalInfoComponent;
}(QuestionAdditionalInfo));
export { MsqQuestionAdditionalInfoComponent };
//# sourceMappingURL=msq-question-additional-info.component.js.map