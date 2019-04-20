import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { RankOptionsFieldComponent } from './rank-options-field.component';
describe('RankOptionsFieldComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RankOptionsFieldComponent],
            imports: [
                FormsModule,
                MatSnackBarModule,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RankOptionsFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rank-options-field.component.spec.js.map