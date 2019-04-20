import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { default as index } from '../../../data/index.json';
/**
 * Index page.
 */
var IndexPageComponent = /** @class */ (function () {
    function IndexPageComponent() {
        this.submissionsNumber = '10,000,000+';
        this.testimonials = [];
        this.testimonialIndex = -1;
    }
    IndexPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formatNumber = function (n) {
            var number = String(n);
            var expression = /(\d+)(\d{3})/;
            while (expression.test(number)) {
                number = number.replace(expression, '$1,$2');
            }
            return number;
        };
        var timeElapsed = new Date().getTime() - new Date(index.submissionsBaseDate).getTime();
        this.submissionsNumber = formatNumber(index.submissionsBase + Math.floor(timeElapsed / 60 / 60 / 1000) * index.submissionsRate);
        this.testimonials = index.testimonials;
        var cycleTestimonial = function () {
            _this.testimonialIndex = (_this.testimonialIndex + 1) % _this.testimonials.length;
            _this.testimonial = _this.testimonials[_this.testimonialIndex];
        };
        cycleTestimonial();
        setInterval(cycleTestimonial, 5000);
    };
    IndexPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-index-page',
            templateUrl: './index-page.component.html',
            styleUrls: ['./index-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IndexPageComponent);
    return IndexPageComponent;
}());
export { IndexPageComponent };
//# sourceMappingURL=index-page.component.js.map