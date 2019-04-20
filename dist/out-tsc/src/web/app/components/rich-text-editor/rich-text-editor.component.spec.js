import { async, TestBed } from '@angular/core/testing';
import { RichTextEditorComponent } from './rich-text-editor.component';
import { RichTextEditorModule } from './rich-text-editor.module';
describe('RichTextEditorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [RichTextEditorModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RichTextEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rich-text-editor.component.spec.js.map