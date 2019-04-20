import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Gender } from '../../../types/gender';
/**
 * A table displaying a details from a student's profile and a modal to view the more info field.
 */
var StudentProfileComponent = /** @class */ (function () {
    function StudentProfileComponent() {
        this.Gender = Gender; // enum
        this.backendUrl = environment.backendUrl;
    }
    StudentProfileComponent.prototype.ngOnInit = function () {
    };
    /**
     * Construct the url for the profile picture from the given key.
     */
    StudentProfileComponent.prototype.getPictureUrl = function (pictureKey) {
        if (!pictureKey) {
            return '/assets/images/profile_picture_default.png';
        }
        return this.backendUrl + "/webapi/students/profilePic?blob-key=" + pictureKey;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], StudentProfileComponent.prototype, "studentProfile", void 0);
    StudentProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-student-profile',
            templateUrl: './student-profile.component.html',
            styleUrls: ['./student-profile.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StudentProfileComponent);
    return StudentProfileComponent;
}());
export { StudentProfileComponent };
//# sourceMappingURL=student-profile.component.js.map