import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { StatusMessageModule } from './components/status-message/status-message.module';
import { PageComponent } from './page.component';
describe('PageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                PageComponent,
                LoadingSpinnerComponent,
            ],
            imports: [
                NgbModule,
                RouterTestingModule,
                StatusMessageModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page.component.spec.js.map