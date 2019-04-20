import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { environment } from '../../../../environments/environment';
import { HttpRequestService } from '../../../../services/http-request.service';
import { StatusMessageService } from '../../../../services/status-message.service';
/**
 * Student profile page's modal to upload/edit photo.
 */
var UploadEditProfilePictureModalComponent = /** @class */ (function () {
    function UploadEditProfilePictureModalComponent(activeModal, httpRequestService, statusMessageService) {
        this.activeModal = activeModal;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.isImageLoaded = false;
        this.user = '';
        this.fileName = 'No File Selected';
        this.isFileSelected = false;
        this.imageUpdated = new EventEmitter();
        this.backendUrl = environment.backendUrl;
    }
    UploadEditProfilePictureModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.pictureKey) {
            this.getProfilePicture().subscribe(function (resp) {
                _this.blobToBase64Image(resp);
            });
            this.isImageLoaded = false;
        }
    };
    /**
     * Populates form data with the image blob.
     */
    UploadEditProfilePictureModalComponent.prototype.populateFormData = function (file) {
        this.formData = new FormData();
        this.formData.append('studentprofilephoto', file, file.name);
    };
    /**
     * Handles event(s) when a file is selected from the user's file browser.
     */
    UploadEditProfilePictureModalComponent.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            this.isFileSelected = true;
            this.populateFormData(file);
        }
    };
    /**
     * Uploads the picture that has been newly uploaded/edited.
     */
    UploadEditProfilePictureModalComponent.prototype.uploadPicture = function () {
        var _this = this;
        var paramsMap = {
            user: this.user,
        };
        this.httpRequestService.post('/students/profilePic', paramsMap, this.formData)
            .subscribe(function (response) {
            _this.statusMessageService.showSuccessMessage('Your profile picture has been saved successfully');
            _this.pictureKey = response.pictureKey;
            _this.profilePicLink = _this.backendUrl + "/webapi/students/profilePic?blob-key=" + _this.pictureKey;
            // Gets the updated picture as blob to be filled in the image cropper
            _this.getProfilePicture().subscribe(function (resp) {
                _this.blobToBase64Image(resp);
                _this.imageUpdated.emit(_this.pictureKey);
            });
            // Reset upload section
            _this.fileName = 'No File Selected';
            _this.isFileSelected = false;
        }, function (response) {
            _this.statusMessageService.showErrorMessage(response.error.message);
        });
    };
    /**
     * Triggers the appropriate actions when the 'Save Edited Photo' button is clicked.
     */
    UploadEditProfilePictureModalComponent.prototype.saveEditedPhoto = function () {
        this.populateFormData(this.croppedImage);
        this.uploadPicture();
    };
    /**
     * Gets the profile picture as blob image.
     */
    UploadEditProfilePictureModalComponent.prototype.getProfilePicture = function () {
        var profilePicEndPoint = this.profilePicLink.replace(this.backendUrl + "/webapi", '');
        return this.httpRequestService.get(profilePicEndPoint, {}, 'blob');
    };
    /**
     * Converts the blob image into a base64 string to be shown in the image cropper.
     */
    UploadEditProfilePictureModalComponent.prototype.blobToBase64Image = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.imageToShow = reader.result;
            _this.isImageLoaded = true;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    /**
     * Saves the latest cropped image.
     */
    UploadEditProfilePictureModalComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.file;
    };
    /**
     * Rotates the image in the image cropper to the left.
     */
    UploadEditProfilePictureModalComponent.prototype.rotateLeft = function () {
        this.imageCropper.last.rotateLeft();
    };
    /**
     * Rotates the image in the image cropper to the right.
     */
    UploadEditProfilePictureModalComponent.prototype.rotateRight = function () {
        this.imageCropper.last.rotateRight();
    };
    /**
     * Flips the image in the image cropper horizontally.
     */
    UploadEditProfilePictureModalComponent.prototype.flipHorizontal = function () {
        this.imageCropper.last.flipHorizontal();
    };
    /**
     * Flips the image in the image cropper vertically.
     */
    UploadEditProfilePictureModalComponent.prototype.flipVertical = function () {
        this.imageCropper.last.flipVertical();
    };
    tslib_1.__decorate([
        ViewChildren(ImageCropperComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], UploadEditProfilePictureModalComponent.prototype, "imageCropper", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], UploadEditProfilePictureModalComponent.prototype, "pictureKey", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], UploadEditProfilePictureModalComponent.prototype, "profilePicLink", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], UploadEditProfilePictureModalComponent.prototype, "imageUpdated", void 0);
    UploadEditProfilePictureModalComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-upload-edit-profile-picture-modal',
            templateUrl: './upload-edit-profile-picture-modal.component.html',
            styleUrls: ['./upload-edit-profile-picture-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NgbActiveModal,
            HttpRequestService,
            StatusMessageService])
    ], UploadEditProfilePictureModalComponent);
    return UploadEditProfilePictureModalComponent;
}());
export { UploadEditProfilePictureModalComponent };
//# sourceMappingURL=upload-edit-profile-picture-modal.component.js.map