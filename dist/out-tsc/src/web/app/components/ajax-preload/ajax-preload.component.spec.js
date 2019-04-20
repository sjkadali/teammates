import { async, TestBed } from '@angular/core/testing';
import { AjaxPreloadComponent } from './ajax-preload.component';
describe('AjaxPreloadComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                AjaxPreloadComponent,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AjaxPreloadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ajax-preload.component.spec.js.map