import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SessionLinksRecoveryPageComponent } from './session-links-recovery-page.component';
describe('SessionLinksRecoveryPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SessionLinksRecoveryPageComponent],
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                NgxCaptchaModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SessionLinksRecoveryPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=session-links-recovery-page.component.spec.js.map