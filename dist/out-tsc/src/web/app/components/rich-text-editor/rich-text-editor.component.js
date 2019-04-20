import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * A rich text editor.
 */
var RichTextEditorComponent = /** @class */ (function () {
    function RichTextEditorComponent() {
        this.isDisabled = false;
        this.isInlineMode = true;
        this.minHeightInPx = 120;
        this.placeholderText = '';
        this.richText = '';
        this.richTextChange = new EventEmitter();
        // the argument passed to tinymce.init() in native JavaScript
        this.init = {
            skin_url: '/tinymce/skins/lightgray',
            resize: false,
            fontsize_formats: '8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 26pt 28pt 36pt 48pt 72pt',
            font_formats: 'Andale Mono=andale mono,times;'
                + 'Arial=arial,helvetica,sans-serif;'
                + 'Arial Black=arial black,avant garde;'
                + 'Book Antiqua=book antiqua,palatino;'
                + 'Comic Sans MS=comic sans ms,sans-serif;'
                + 'Courier New=courier new,courier;'
                + 'Georgia=georgia,palatino;'
                + 'Helvetica=helvetica;'
                + 'Impact=impact,chicago;'
                + 'Symbol=symbol;'
                + 'Tahoma=tahoma,arial,helvetica,sans-serif;'
                + 'Terminal=terminal,monaco;'
                + 'Times New Roman=times new roman,times;'
                + 'Trebuchet MS=trebuchet ms,geneva;'
                + 'Verdana=verdana,geneva;'
                + 'Webdings=webdings;'
                + 'Wingdings=wingdings,zapf dingbats',
            relative_urls: false,
            convert_urls: false,
            remove_linebreaks: false,
            plugins: [
                'placeholder',
                'advlist autolink lists link image charmap print hr anchor',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime nonbreaking save table contextmenu directionality',
                'emoticons paste textcolor colorpicker textpattern',
            ],
            toolbar1: 'insertfile undo redo | styleselect | bold italic underline '
                + '| alignleft aligncenter alignright alignjustify '
                + '| bullist numlist outdent indent | link image',
            toolbar2: 'print | forecolor backcolor | fontsizeselect fontselect | emoticons | fullscreen',
        };
    }
    RichTextEditorComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], RichTextEditorComponent.prototype, "isDisabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], RichTextEditorComponent.prototype, "isInlineMode", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RichTextEditorComponent.prototype, "minHeightInPx", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], RichTextEditorComponent.prototype, "placeholderText", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], RichTextEditorComponent.prototype, "richText", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], RichTextEditorComponent.prototype, "richTextChange", void 0);
    RichTextEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-rich-text-editor',
            templateUrl: './rich-text-editor.component.html',
            styleUrls: ['./rich-text-editor.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RichTextEditorComponent);
    return RichTextEditorComponent;
}());
export { RichTextEditorComponent };
//# sourceMappingURL=rich-text-editor.component.js.map