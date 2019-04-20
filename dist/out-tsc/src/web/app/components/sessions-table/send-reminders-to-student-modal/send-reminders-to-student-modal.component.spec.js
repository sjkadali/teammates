import * as tslib_1 from "tslib";
import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SendRemindersToStudentModalComponent } from './send-reminders-to-student-modal.component';
var AjaxPreloadComponent = /** @class */ (function () {
    function AjaxPreloadComponent() {
    }
    AjaxPreloadComponent = tslib_1.__decorate([
        Component({ selector: 'tm-ajax-preload', template: '' })
    ], AjaxPreloadComponent);
    return AjaxPreloadComponent;
}());
describe('SendRemindersToStudentModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                SendRemindersToStudentModalComponent,
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
        fixture = TestBed.createComponent(SendRemindersToStudentModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=send-reminders-to-student-modal.component.spec.js.map