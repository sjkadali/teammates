import { async, TestBed } from '@angular/core/testing';
import { AjaxLoadingComponent } from './ajax-loading.component';
describe('AjaxLoadingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AjaxLoadingComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AjaxLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ajax-loading.component.spec.js.map