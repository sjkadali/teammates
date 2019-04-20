import { async, TestBed } from '@angular/core/testing';
import { SessionsTableComponent } from './sessions-table.component';
import { SessionsTableModule } from './sessions-table.module';
describe('SessionsTableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [SessionsTableModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SessionsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sessions-table.component.spec.js.map