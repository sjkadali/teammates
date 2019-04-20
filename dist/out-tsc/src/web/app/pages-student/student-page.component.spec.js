import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { StatusMessageModule } from '../components/status-message/status-message.module';
import { PageComponent } from '../page.component';
import { StudentPageComponent } from './student-page.component';
describe('StudentPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                PageComponent,
                StudentPageComponent,
                LoadingSpinnerComponent,
            ],
            imports: [
                NgbModule,
                HttpClientTestingModule,
                RouterTestingModule,
                StatusMessageModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StudentPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=student-page.component.spec.js.map