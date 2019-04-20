import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WeightFieldComponent } from './weight-field.component';
describe('WeightFieldComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WeightFieldComponent],
            imports: [
                FormsModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(WeightFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=weight-field.component.spec.js.map