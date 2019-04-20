import * as tslib_1 from "tslib";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material';
import { ResendResultsLinkToStudentModalComponent } from './resend-results-link-to-student-modal.component';
var AjaxPreloadComponent = /** @class */ (function () {
    function AjaxPreloadComponent() {
    }
    AjaxPreloadComponent = tslib_1.__decorate([
        Component({ selector: 'tm-ajax-preload', template: '' })
    ], AjaxPreloadComponent);
    return AjaxPreloadComponent;
}());
describe('ResendResultsLinkToStudentModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                ResendResultsLinkToStudentModalComponent,
                AjaxPreloadComponent,
            ],
            imports: [
                HttpClientTestingModule,
                FormsModule,
                MatSnackBarModule,
            ],
            providers: [NgbActiveModal],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ResendResultsLinkToStudentModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=resend-results-link-to-student-modal.component.spec.js.map