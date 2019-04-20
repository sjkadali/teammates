import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminSessionsPageComponent } from './admin-sessions-page.component';
describe('AdminSessionsPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                NgbModule,
                FormsModule,
                HttpClientTestingModule,
                MatSnackBarModule,
            ],
            declarations: [AdminSessionsPageComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminSessionsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-sessions-page.component.spec.js.map