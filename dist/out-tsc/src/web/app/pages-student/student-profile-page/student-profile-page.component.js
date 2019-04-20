import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from '../../../services/http-request.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { StatusMessageService } from '../../../services/status-message.service';
import { StudentProfileService } from '../../../services/student-profile.service';
import { Gender } from '../../../types/gender';
import { UploadEditProfilePictureModalComponent, } from './upload-edit-profile-picture-modal/upload-edit-profile-picture-modal.component';
/**
 * Student profile page.
 */
var StudentProfilePageComponent = /** @class */ (function () {
    function StudentProfilePageComponent(route, ngbModal, httpRequestService, authService, statusMessageService, studentProfileService) {
        this.route = route;
        this.ngbModal = ngbModal;
        this.httpRequestService = httpRequestService;
        this.authService = authService;
        this.statusMessageService = statusMessageService;
        this.studentProfileService = studentProfileService;
        this.Gender = Gender; // enum
        this.user = '';
        this.id = '';
        this.backendUrl = environment.backendUrl;
    }
    StudentProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // populate drop-down menu for nationality list
        this.initNationalities();
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.loadStudentProfile();
        });
    };
    /**
     * Construct the url for the profile picture from the given key.
     */
    StudentProfilePageComponent.prototype.getProfilePictureUrl = function (pictureKey) {
        if (!pictureKey) {
            return '/assets/images/profile_picture_default.png';
        }
        this.currentTime = (new Date()).getTime(); // forces image reload in HTML template
        return this.backendUrl + "/webapi/students/profilePic?blob-key=" + pictureKey + "&time=" + this.currentTime;
    };
    /**
     * Fetches the list of nationalities needed for the drop down box.
     */
    StudentProfilePageComponent.prototype.initNationalities = function () {
        var _this = this;
        this.httpRequestService.get('/nationalities').subscribe(function (response) {
            _this.nationalities = response.nationalities;
        });
    };
    /**
     * Loads the student profile details for this page.
     */
    StudentProfilePageComponent.prototype.loadStudentProfile = function () {
        var _this = this;
        this.authService.getAuthUser().subscribe(function (auth) {
            if (auth.user) {
                _this.id = auth.user.id;
                // retrieve profile once we have the student's googleId
                _this.studentProfileService.getStudentProfile().subscribe(function (response) {
                    if (response) {
                        _this.student = response;
                        _this.name = response.name;
                        _this.pictureKey = _this.student.pictureKey;
                        _this.profilePicLink = _this.getProfilePictureUrl(_this.pictureKey);
                        _this.initStudentProfileForm(_this.student);
                    }
                    else {
                        _this.statusMessageService.showErrorMessage('Error retrieving student profile');
                    }
                }, function (response) {
                    _this.statusMessageService.showErrorMessage(response.error.message);
                });
            }
        });
    };
    /**
     * Initializes the edit form with the student profile fields fetched from the backend.
     */
    StudentProfilePageComponent.prototype.initStudentProfileForm = function (profile) {
        this.editForm = new FormGroup({
            studentshortname: new FormControl(profile.shortName),
            studentprofileemail: new FormControl(profile.email),
            studentprofileinstitute: new FormControl(profile.institute),
            studentnationality: new FormControl(profile.nationality),
            existingNationality: new FormControl(profile.nationality),
            studentgender: new FormControl(profile.gender),
            studentprofilemoreinfo: new FormControl(profile.moreInfo),
        });
    };
    /**
     * Prompts the user with a modal box to confirm changes made to the form.
     */
    StudentProfilePageComponent.prototype.onSubmit = function (confirmEditProfile) {
        this.ngbModal.open(confirmEditProfile);
    };
    /**
     * Opens a modal box to upload/edit profile picture.
     */
    StudentProfilePageComponent.prototype.onUploadEdit = function () {
        var _this = this;
        var modalRef = this.ngbModal.open(UploadEditProfilePictureModalComponent);
        modalRef.componentInstance.profilePicLink = this.profilePicLink;
        modalRef.componentInstance.pictureKey = this.pictureKey;
        // When a new image is uploaded/edited in the modal box, update the profile pic link in the page too
        modalRef.componentInstance.imageUpdated.subscribe(function (pictureKey) {
            _this.pictureKey = pictureKey;
            _this.profilePicLink =
                _this.getProfilePictureUrl(_this.pictureKey); // Retrieves the profile picture link again
        });
    };
    /**
     * Submits the form data to edit the student profile details.
     */
    StudentProfilePageComponent.prototype.submitEditForm = function () {
        var _this = this;
        this.studentProfileService.updateStudentProfile(this.user, this.id, {
            shortName: this.editForm.controls.studentshortname.value,
            email: this.editForm.controls.studentprofileemail.value,
            institute: this.editForm.controls.studentprofileinstitute.value,
            nationality: this.editForm.controls.studentnationality.value,
            gender: this.editForm.controls.studentgender.value,
            moreInfo: this.editForm.controls.studentprofilemoreinfo.value,
            existingNationality: this.editForm.controls.existingNationality.value,
        }).subscribe(function (response) {
            if (response) {
                _this.statusMessageService.showSuccessMessage(response.message);
            }
        }, function (response) {
            _this.statusMessageService.showErrorMessage("Could not save your profile! " + response.error.message);
        });
    };
    /**
     * Prompts the user with a modal box to confirm deleting the profile picture.
     */
    StudentProfilePageComponent.prototype.onDelete = function (confirmDeleteProfilePicture) {
        this.ngbModal.open(confirmDeleteProfilePicture);
    };
    /**
     * Deletes the profile picture and the profile picture key
     */
    StudentProfilePageComponent.prototype.deleteProfilePicture = function () {
        var _this = this;
        var paramMap = {
            user: this.user,
            googleid: this.id,
        };
        this.httpRequestService.delete('/students/profilePic', paramMap)
            .subscribe(function (response) {
            if (response) {
                _this.statusMessageService.showSuccessMessage(response.message);
                _this.pictureKey = '';
                _this.profilePicLink = _this.getProfilePictureUrl(_this.pictureKey);
            }
        }, function (response) {
            _this.statusMessageService.
                showErrorMessage("Could not delete your profile picture! " + response.error.message);
        });
    };
    StudentProfilePageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-profile-page',
            templateUrl: './student-profile-page.component.html',
            styleUrls: ['./student-profile-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            NgbModal,
            HttpRequestService,
            AuthService,
            StatusMessageService,
            StudentProfileService])
    ], StudentProfilePageComponent);
    return StudentProfilePageComponent;
}());
export { StudentProfilePageComponent };
//# sourceMappingURL=student-profile-page.component.js.map