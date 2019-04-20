import { async, TestBed } from '@angular/core/testing';
import { UsermapPageComponent } from './usermap-page.component';
describe('UsermapPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UsermapPageComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UsermapPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=usermap-page.component.spec.js.map