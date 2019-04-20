import { async, TestBed } from '@angular/core/testing';
import { ExampleBoxComponent } from './example-box.component';
describe('ExampleBoxComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ExampleBoxComponent],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ExampleBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=example-box.component.spec.js.map