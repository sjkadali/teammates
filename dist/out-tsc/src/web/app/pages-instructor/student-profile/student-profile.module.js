import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseRelatedInfoComponent } from './course-related-info/course-related-info.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { StudentProfileComponent } from './student-profile.component';
/**
 * Module for student profile component.
 */
var StudentProfileModule = /** @class */ (function () {
    function StudentProfileModule() {
    }
    StudentProfileModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                StudentProfileComponent,
                MoreInfoComponent,
                CourseRelatedInfoComponent,
            ],
            exports: [
                StudentProfileComponent,
                MoreInfoComponent,
                CourseRelatedInfoComponent,
            ],
            imports: [
                CommonModule,
                NgbModule,
                RouterModule,
            ],
        })
    ], StudentProfileModule);
    return StudentProfileModule;
}());
export { StudentProfileModule };
//# sourceMappingURL=student-profile.module.js.map