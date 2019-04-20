import * as tslib_1 from "tslib";
import { Input, QueryList, ViewChildren, } from '@angular/core';
/**
 * Base section for instructor help page.
 */
var InstructorHelpSectionComponent = /** @class */ (function () {
    function InstructorHelpSectionComponent() {
        this.key = '';
        this.showQuestion = [];
        this.searchedTerms = -1;
        this.questionDetails = [];
    }
    InstructorHelpSectionComponent.prototype.ngOnInit = function () {
    };
    InstructorHelpSectionComponent.prototype.ngOnChanges = function (changes) {
        if (this.key === '') {
            this.resetFaq();
        }
        else {
            this.filterFaq(changes.key.currentValue);
        }
    };
    /**
     * Retrieves HTML components from DOM after its rendered.
     */
    InstructorHelpSectionComponent.prototype.ngAfterViewInit = function () {
        if (this.questionDetails.length === 0) {
            this.generateTerms();
            var size = this.questionDetails.length;
            for (var i = 0; i < size; i += 1) {
                this.showQuestion.push(true);
            }
        }
    };
    InstructorHelpSectionComponent.prototype.generateTerms = function () {
        var _this = this;
        this.questionHTML.forEach(function (question) {
            var className = question.nativeElement.className;
            var text = question.nativeElement.textContent;
            var tag = Number(className.replace(/[^0-9]/g, ''));
            // filter small words away
            var keywords = text.split(' ').filter(function (word) { return word.length > 3; });
            // convert to lower case
            keywords = keywords.map(function (word) { return word.toLowerCase(); });
            // remove punctuation
            keywords = keywords.map(function (word) {
                return word.replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g, '');
            });
            var newQuestion = {
                tag: tag,
                keywords: keywords,
            };
            _this.questionDetails.push(newQuestion);
        });
    };
    InstructorHelpSectionComponent.prototype.resetFaq = function () {
        for (var i = 0; i < this.questionDetails.length; i += 1) {
            this.showQuestion[i] = true;
        }
        this.searchedTerms = -1;
    };
    InstructorHelpSectionComponent.prototype.filterFaq = function (searchTerm) {
        this.searchedTerms = 0;
        for (var _i = 0, _a = this.questionDetails; _i < _a.length; _i++) {
            var questionDetail = _a[_i];
            var tag = questionDetail.tag;
            var terms = questionDetail.keywords;
            this.showQuestion[tag] = terms.includes(searchTerm);
            if (this.showQuestion[tag]) {
                this.searchedTerms += 1;
            }
        }
    };
    /**
     * Checks if any question in the subsection is to be displayed after the search
     */
    InstructorHelpSectionComponent.prototype.displaySubsection = function (questionsToDisplay, firstPoint, lastPoint) {
        return questionsToDisplay.length === 0 || questionsToDisplay.slice(firstPoint, lastPoint)
            .reduce(function (x, y) { return x || y; }, false);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], InstructorHelpSectionComponent.prototype, "key", void 0);
    tslib_1.__decorate([
        ViewChildren('question'),
        tslib_1.__metadata("design:type", QueryList)
    ], InstructorHelpSectionComponent.prototype, "questionHTML", void 0);
    return InstructorHelpSectionComponent;
}());
export { InstructorHelpSectionComponent };
//# sourceMappingURL=instructor-help-section.component.js.map