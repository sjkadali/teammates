import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UploadEditProfilePictureModalComponent } from './upload-edit-profile-picture-modal.component';
describe('UploadEditProfilePictureModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                UploadEditProfilePictureModalComponent,
            ],
            imports: [
                HttpClientTestingModule,
                ImageCropperModule,
                MatSnackBarModule,
            ],
            providers: [
                NgbActiveModal,
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UploadEditProfilePictureModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=upload-edit-profile-picture-modal.component.spec.js.map