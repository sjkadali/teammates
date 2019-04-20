import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusMessageService } from '../../../../../services/status-message.service';
/**
 * The input field to specify options to choose from.
 */
var RankOptionsFieldComponent = /** @class */ (function () {
    function RankOptionsFieldComponent(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.isEditable = false;
        this.numberOfRankChoices = 1;
        this.text = '';
        this.index = 0;
        this.elementDeleted = new EventEmitter();
        this.rankOptionText = new EventEmitter();
    }
    /**
     * When user enters an Rank option text, emit the change to parent component.
     */
    RankOptionsFieldComponent.prototype.onRankOptionEntered = function (text) {
        this.rankOptionText.emit(text);
    };
    /**
     * Deletes a Rank option.
     */
    RankOptionsFieldComponent.prototype.deleteRankOption = function () {
        if (this.numberOfRankChoices > 2) {
            this.elementDeleted.emit(this.index);
        }
        else {
            this.statusMessageService.showErrorMessage('There must be at least two Rank options.');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], RankOptionsFieldComponent.prototype, "isEditable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RankOptionsFieldComponent.prototype, "numberOfRankChoices", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], RankOptionsFieldComponent.prototype, "text", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RankOptionsFieldComponent.prototype, "index", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], RankOptionsFieldComponent.prototype, "elementDeleted", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], RankOptionsFieldComponent.prototype, "rankOptionText", void 0);
    RankOptionsFieldComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rank-options-field',
            templateUrl: './rank-options-field.component.html',
            styleUrls: ['./rank-options-field.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StatusMessageService])
    ], RankOptionsFieldComponent);
    return RankOptionsFieldComponent;
}());
export { RankOptionsFieldComponent };
//# sourceMappingURL=rank-options-field.component.js.map