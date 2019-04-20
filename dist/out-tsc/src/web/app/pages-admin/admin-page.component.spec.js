import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { StatusMessageModule } from '../components/status-message/status-message.module';
import { PageComponent } from '../page.component';
import { AdminPageComponent } from './admin-page.component';
describe('AdminPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                PageComponent,
                AdminPageComponent,
                LoadingSpinnerComponent,
            ],
            imports: [
                NgbModule,
                HttpClientTestingModule,
                RouterTestingModule,
                StatusMessageModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-page.component.spec.js.map