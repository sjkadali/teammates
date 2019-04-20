import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { StatusMessageModule } from './components/status-message/status-message.module';
import { PageComponent } from './page.component';
import { PublicPageComponent } from './public-page.component';
describe('PublicPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                PageComponent,
                PublicPageComponent,
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
        fixture = TestBed.createComponent(PublicPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=public-page.component.spec.js.map