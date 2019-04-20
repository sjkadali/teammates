import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InstructorSearchBarComponent } from './instructor-search-bar.component';
describe('InstructorSearchBarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InstructorSearchBarComponent],
            imports: [FormsModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InstructorSearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=instructor-search-bar.component.spec.js.map