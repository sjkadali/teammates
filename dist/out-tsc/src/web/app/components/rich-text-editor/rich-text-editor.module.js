import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RichTextEditorComponent } from './rich-text-editor.component';
/**
 * Module for a rich text editor.
 */
var RichTextEditorModule = /** @class */ (function () {
    function RichTextEditorModule() {
    }
    RichTextEditorModule = tslib_1.__decorate([
        NgModule({
            declarations: [RichTextEditorComponent],
            imports: [
                CommonModule,
                FormsModule,
                EditorModule,
            ],
            exports: [
                RichTextEditorComponent,
            ],
        })
    ], RichTextEditorModule);
    return RichTextEditorModule;
}());
export { RichTextEditorModule };
//# sourceMappingURL=rich-text-editor.module.js.map