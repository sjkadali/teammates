import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment-timezone';
import { CourseService } from '../../../services/course.service';
import { HttpRequestService } from '../../../services/http-request.service';
import { NavigationService } from '../../../services/navigation.service';
import { StatusMessageService } from '../../../services/status-message.service';
import { TimezoneService } from '../../../services/timezone.service';
/**
 * Instructor course edit page.
 */
var InstructorCourseEditPageComponent = /** @class */ (function () {
    function InstructorCourseEditPageComponent(route, router, navigationService, timezoneService, httpRequestService, statusMessageService, courseService, fb, ngbModal) {
        this.route = route;
        this.router = router;
        this.navigationService = navigationService;
        this.timezoneService = timezoneService;
        this.httpRequestService = httpRequestService;
        this.statusMessageService = statusMessageService;
        this.courseService = courseService;
        this.fb = fb;
        this.ngbModal = ngbModal;
        this.user = '';
        this.timezone = '';
        this.timezones = [];
        this.isEditingCourse = false;
        this.instructorList = [];
        this.instructorToShowIndex = -1;
        this.sectionNames = [];
        this.feedbackNames = [];
        this.isAddingInstructor = false;
    }
    InstructorCourseEditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.user = queryParams.user;
            _this.getCourseEditDetails(queryParams.courseid);
        });
        this.timezones = Object.keys(this.timezoneService.getTzOffsets());
        this.timezone = moment.tz.guess();
    };
    /**
     * Replaces the timezone value with the detected timezone.
     */
    InstructorCourseEditPageComponent.prototype.detectTimezone = function () {
        this.formEditCourse.controls.timeZone.setValue(this.timezone);
    };
    /**
     * Gets the placeholder content for displayed name when it is not displayed to students.
     */
    InstructorCourseEditPageComponent.prototype.getPlaceholderForDisplayedName = function (isDisplayed) {
        return isDisplayed ? 'E.g.Co-lecturer, Teaching Assistant'
            : '(This instructor will NOT be displayed to students)';
    };
    /**
     * Gets details related to the specified course.
     */
    InstructorCourseEditPageComponent.prototype.getCourseEditDetails = function (courseid) {
        var _this = this;
        var paramMap = { courseid: courseid };
        this.httpRequestService.get('/instructors/course/details', paramMap)
            .subscribe(function (resp) {
            _this.courseToEdit = resp.courseToEdit;
            _this.instructorList = resp.instructorList;
            _this.instructor = resp.instructor;
            _this.instructorToShowIndex = resp.instructorToShowIndex;
            _this.sectionNames = resp.sectionNames;
            _this.feedbackNames = resp.feedbackNames;
            _this.instructorPrivileges = resp.instructorPrivileges;
            _this.initEditCourseForm();
            _this.initEditInstructorsForm();
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Initialises the instructor course edit form with fields from the backend.
     */
    InstructorCourseEditPageComponent.prototype.initEditCourseForm = function () {
        this.formEditCourse = this.fb.group({
            id: [{ value: this.courseToEdit.id, disabled: true }],
            name: [{ value: this.courseToEdit.name, disabled: true }],
            timeZone: [{ value: this.courseToEdit.timeZone, disabled: true }],
        });
    };
    /**
     * Initialises the details panels with data from the backend for all instructors.
     */
    InstructorCourseEditPageComponent.prototype.initEditInstructorsForm = function () {
        var _this = this;
        this.formEditInstructors = this.fb.group({ formInstructors: [] });
        var control = this.fb.array([]);
        this.instructorList.forEach(function (instructor, index) {
            var instructorPrivileges = instructor.privileges;
            var instructorEmail = instructor.email ? instructor.email : '';
            var instructorDisplayedName = instructor.isDisplayedToStudents ? instructor.displayedName : '';
            var instructorForm = _this.fb.group({
                googleId: [{ value: instructor.googleId, disabled: true }],
                name: [{ value: instructor.name, disabled: true }],
                email: [{ value: instructorEmail, disabled: true }],
                isDisplayedToStudents: [{ value: instructor.isDisplayedToStudents, disabled: true }],
                displayedName: [{ value: instructorDisplayedName, disabled: true }],
                role: [{ value: instructor.role }],
                privileges: [{ value: instructorPrivileges }],
                tunePermissions: _this.fb.group({
                    permissionsForCourse: _this.fb.group(instructor.privileges.courseLevel),
                    tuneSectionGroupPermissions: _this.fb.array([]),
                }),
            });
            // Listen for specific course value changes
            var courseLevel = instructorForm.controls.tunePermissions
                .controls.permissionsForCourse;
            courseLevel.controls.canviewsessioninsection.valueChanges.subscribe(function (isAbleToView) {
                if (!isAbleToView) {
                    courseLevel.controls.canmodifysessioncommentinsection.setValue(false);
                }
            });
            courseLevel.controls.canmodifysessioncommentinsection.valueChanges.subscribe(function (isAbleToModify) {
                if (isAbleToModify) {
                    courseLevel.controls.canviewsessioninsection.setValue(true);
                }
            });
            instructorForm.controls.tunePermissions.controls.tuneSectionGroupPermissions =
                _this.initSectionGroupPermissions(instructor);
            // Listen for changes to custom privileges
            var roleControl = instructorForm.get('role');
            var permissionsControl = instructorForm.get('tunePermissions');
            if (roleControl != null && permissionsControl != null) {
                roleControl.valueChanges.subscribe(function (selectedRole) {
                    var panelId = "tune-permissions-" + index;
                    var panel = document.getElementById(panelId);
                    if (selectedRole === 'Custom' && panel != null) {
                        panel.style.display = 'block';
                        permissionsControl.controls.permissionsForCourse.reset(_this.instructorList[index].privileges.courseLevel);
                        permissionsControl.controls.tuneSectionGroupPermissions =
                            _this.initSectionGroupPermissions(_this.instructorList[index]);
                    }
                    else if (panel != null) {
                        panel.style.display = 'none';
                    }
                });
            }
            control.push(instructorForm);
        });
        this.formEditInstructors.controls.formInstructors = control;
    };
    /**
     * Initialises section permissions for section group panels.
     */
    InstructorCourseEditPageComponent.prototype.initSectionGroupPermissions = function (instructor) {
        var _this = this;
        var tuneSectionGroupPermissions = this.fb.array([]);
        // Initialise section level privileges for each section group
        Object.keys(instructor.privileges.sectionLevel).forEach(function (sectionName) {
            var sectionPrivileges = instructor.privileges.sectionLevel;
            var sectionPrivilegesForSection = sectionPrivileges[sectionName];
            var specialSectionPermissions = _this.fb.group({
                permissionsForSection: _this.fb.group(sectionPrivilegesForSection),
                permissionsForSessions: _this.fb.group({}),
            });
            specialSectionPermissions.addControl(sectionName, _this.fb.control(true));
            // Initialise remaining controls for non-special sections
            _this.sectionNames.forEach(function (section) {
                if (section !== sectionName) {
                    specialSectionPermissions.addControl(section, _this.fb.control(false));
                }
            });
            // Listen for specific section value changes
            var sectionLevel = specialSectionPermissions.controls.permissionsForSection;
            sectionLevel.controls.canviewsessioninsection.valueChanges.subscribe(function (isAbleToView) {
                if (!isAbleToView) {
                    sectionLevel.controls.canmodifysessioncommentinsection.setValue(false);
                }
            });
            sectionLevel.controls.canmodifysessioncommentinsection.valueChanges.subscribe(function (isAbleToModify) {
                if (isAbleToModify) {
                    sectionLevel.controls.canviewsessioninsection.setValue(true);
                }
            });
            // Initialise session level privileges for each section
            var sessionPrivilegesForSection = instructor.privileges.sessionLevel[sectionName];
            _this.feedbackNames.forEach(function (feedback) {
                var sessionPrivileges;
                if (sessionPrivilegesForSection != null && sessionPrivilegesForSection[feedback] != null) {
                    sessionPrivileges = _this.fb.group(sessionPrivilegesForSection[feedback]);
                }
                else {
                    sessionPrivileges = _this.fb.group({
                        cansubmitsessioninsection: false,
                        canviewsessioninsection: false,
                        canmodifysessioncommentinsection: false,
                    });
                }
                // Listen for specific session value changes
                sessionPrivileges.controls.canviewsessioninsection.valueChanges.subscribe(function (isAbleToSubmit) {
                    if (!isAbleToSubmit) {
                        sessionPrivileges.controls.canmodifysessioncommentinsection.setValue(false);
                    }
                });
                sessionPrivileges.controls.canmodifysessioncommentinsection.valueChanges
                    .subscribe(function (isAbleToModify) {
                    if (isAbleToModify) {
                        sessionPrivileges.controls.canviewsessioninsection.setValue(true);
                    }
                });
                specialSectionPermissions.controls.permissionsForSessions
                    .addControl(feedback, sessionPrivileges);
            });
            tuneSectionGroupPermissions.push(specialSectionPermissions);
        });
        return tuneSectionGroupPermissions;
    };
    /**
     * Toggles the edit course form depending on whether the edit button is clicked.
     */
    InstructorCourseEditPageComponent.prototype.toggleIsEditingCourse = function () {
        this.isEditingCourse = !this.isEditingCourse;
        if (!this.isEditingCourse) {
            this.formEditCourse.controls.name.disable();
            this.formEditCourse.controls.timeZone.disable();
        }
        else {
            this.formEditCourse.controls.name.enable();
            this.formEditCourse.controls.timeZone.enable();
        }
    };
    /**
     * Deletes the current course and redirects to 'Courses' page if action is successful.
     */
    InstructorCourseEditPageComponent.prototype.deleteCourse = function () {
        var _this = this;
        this.courseService.binCourse(this.courseToEdit.id).subscribe(function (course) {
            _this.navigationService.navigateWithSuccessMessage(_this.router, '/web/instructor/courses', "The course " + course.courseId + " has been deleted. You can restore it from the Recycle Bin manually.");
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Saves the updated course details.
     */
    InstructorCourseEditPageComponent.prototype.onSubmitEditCourse = function (formEditCourse) {
        var _this = this;
        var newName = formEditCourse.controls.name.value;
        var newTimeZone = formEditCourse.controls.timeZone.value;
        this.courseService.updateCourse(this.courseToEdit.id, {
            courseName: newName,
            timeZone: newTimeZone,
        }).subscribe(function () {
            _this.statusMessageService.showSuccessMessage('The course has been edited.');
            _this.updateCourseDetails(newName, newTimeZone);
            _this.toggleIsEditingCourse();
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Updates the stored course attributes entity.
     */
    InstructorCourseEditPageComponent.prototype.updateCourseDetails = function (editedCourseName, editedCourseTimezone) {
        this.courseToEdit.name = editedCourseName;
        this.courseToEdit.timeZone = editedCourseTimezone;
    };
    /**
     * Checks if the current instructor has a valid google id.
     */
    InstructorCourseEditPageComponent.prototype.hasGoogleId = function (index) {
        var googleId = this.instructorList[index].googleId;
        return googleId != null && googleId !== '';
    };
    /**
     * Enables/disables editing the displayed instructor name if it is/is not displayed to other students.
     */
    InstructorCourseEditPageComponent.prototype.onChangeIsDisplayedToStudents = function (evt, instr, index) {
        var displayedNameControl = instr.controls.displayedName;
        var nameDisplayId = "name-display-" + index;
        var displayedNameField = document.getElementById(nameDisplayId);
        var isDisplayedToStudents = evt.target.checked;
        if (displayedNameControl != null) {
            if (isDisplayedToStudents) {
                displayedNameControl.enable();
                displayedNameControl.setValue('Instructor');
                displayedNameField.placeholder = this.getPlaceholderForDisplayedName(true);
            }
            else {
                displayedNameControl.disable();
                displayedNameControl.setValue('');
                displayedNameField.placeholder = this.getPlaceholderForDisplayedName(false);
            }
        }
    };
    /**
     * Toggles the edit instructor panel for a given instructor.
     * Instructor email cannot be edited when editing a yet-to-join instructor.
     */
    InstructorCourseEditPageComponent.prototype.toggleIsEditingInstructor = function (control, index) {
        var editBtnId = "btn-edit-" + index;
        var cancelBtnId = "btn-cancel-" + index;
        var saveBtnId = "btn-save-" + index;
        var editBtn = document.getElementById(editBtnId);
        var cancelBtn = document.getElementById(cancelBtnId);
        var saveBtn = document.getElementById(saveBtnId);
        var isEditBtnVisible = true;
        if (editBtn != null) {
            isEditBtnVisible = editBtn.style.display === 'inline-block';
        }
        var viewRoleId = "role-view-" + index;
        var editRoleId = "role-edit-" + index;
        var viewRole = document.getElementById(viewRoleId);
        var editRole = document.getElementById(editRoleId);
        var idControl = control.controls.googleId;
        var roleControl = control.controls.role;
        var displayNameControl = control.controls.displayedName;
        var nameDisplayId = "name-display-" + index;
        var displayedNameField = document.getElementById(nameDisplayId);
        var permissionsPanelId = "tune-permissions-" + index;
        var permissionsPanel = document.getElementById(permissionsPanelId);
        if (editBtn != null && cancelBtn != null && saveBtn != null && viewRole != null && editRole != null
            && idControl != null && roleControl != null && displayNameControl != null && displayedNameField != null
            && permissionsPanel != null) {
            // If the instructor is currently being edited
            if (isEditBtnVisible) {
                editBtn.style.display = 'none';
                cancelBtn.style.display = 'inline-block';
                saveBtn.style.display = 'inline-block';
                viewRole.style.display = 'none';
                editRole.style.display = 'block';
                // Enable all form control elements except for the google id and possibly the displayed name
                control.enable();
                idControl.disable();
                roleControl.setValue(this.instructorList[index].role);
                if (this.instructorList[index].role === 'Custom') {
                    permissionsPanel.style.display = 'block';
                }
                if (!this.instructorList[index].isDisplayedToStudents) {
                    displayNameControl.disable();
                }
            }
            else {
                editBtn.style.display = 'inline-block';
                cancelBtn.style.display = 'none';
                saveBtn.style.display = 'none';
                viewRole.style.display = 'inline-block';
                editRole.style.display = 'none';
                control.disable();
                control.reset(this.instructorList[index]);
                permissionsPanel.style.display = 'none';
                if (!this.instructorList[index].isDisplayedToStudents) {
                    displayNameControl.setValue('');
                    displayedNameField.placeholder = this.getPlaceholderForDisplayedName(false);
                }
            }
        }
        // Disable editing email for yet-to-join instructor
        var email = 'email';
        var emailControl = control.get(email);
        if (emailControl != null && !this.hasGoogleId(index)) {
            emailControl.disable();
        }
    };
    /**
     * Saves the updated instructor details.
     */
    InstructorCourseEditPageComponent.prototype.onSubmitEditInstructor = function (instr, index) {
        var _this = this;
        // Make a copy of the edited instructor
        var editedInstructor = {
            googleId: instr.controls.googleId.value,
            name: instr.controls.name.value,
            email: instr.controls.email.value,
            role: instr.controls.role.value,
            isDisplayedToStudents: instr.controls.isDisplayedToStudents.value,
            displayedName: instr.controls.displayedName.value,
            privileges: this.getPrivilegesForRole(instr.controls.role.value),
        };
        var paramsMap = {
            courseid: this.courseToEdit.id,
        };
        var reqBody = {
            id: editedInstructor.googleId,
            name: editedInstructor.name,
            email: editedInstructor.email,
            roleName: editedInstructor.role,
            displayName: editedInstructor.displayedName,
            isDisplayedToStudent: editedInstructor.isDisplayedToStudents,
        };
        if (instr.controls.role.value === 'Custom') {
            var tuneCoursePermissions_1 = instr.controls.tunePermissions
                .controls.permissionsForCourse;
            // Append custom course level privileges
            Object.keys(tuneCoursePermissions_1.controls).forEach(function (permission) {
                if (tuneCoursePermissions_1.controls[permission].value) {
                    paramsMap[permission] = 'true';
                }
            });
            editedInstructor.privileges.courseLevel = tuneCoursePermissions_1.value;
            // Append custom section level privileges
            var tuneSectionGroupPermissions = instr.controls.tunePermissions
                .controls.tuneSectionGroupPermissions;
            var newSectionLevelPrivileges_1 = {};
            var newSessionLevelPrivileges_1 = {};
            tuneSectionGroupPermissions.controls.forEach(function (sectionGroupPermissions, panelIdx) {
                var specialSections = [];
                // Mark section as special if it has been checked in a section group
                _this.sectionNames.forEach(function (section, sectionIdx) {
                    if (sectionGroupPermissions.controls[section].value) {
                        paramsMap["issectiongroup" + sectionIdx + "set"] = 'true';
                        paramsMap["sectiongroup" + panelIdx + "section" + sectionIdx] = section;
                        specialSections.push(section);
                    }
                });
                // Include section permissions for a section group
                var permissionsInSection = sectionGroupPermissions
                    .controls.permissionsForSection;
                Object.keys(permissionsInSection.controls).forEach(function (permission) {
                    if (permissionsInSection.controls[permission].value) {
                        paramsMap[permission + "sectiongroup" + panelIdx] = 'true';
                    }
                });
                // Save new section level privileges
                specialSections.forEach(function (section) {
                    newSectionLevelPrivileges_1[section] = permissionsInSection.value;
                });
                // Append custom session level privileges
                var permissionsForSessions = sectionGroupPermissions
                    .controls.permissionsForSessions;
                var specialSessionsAndSessionPermissions = {};
                // Mark session as special if a session has different permissions from the section permissions
                var sectionLevelSessionPrivileges = {
                    canviewsessioninsection: permissionsInSection.controls.canviewsessioninsection.value,
                    cansubmitsessioninsection: permissionsInSection.controls.cansubmitsessioninsection.value,
                    canmodifysessioncommentinsection: permissionsInSection.controls.canmodifysessioncommentinsection.value,
                };
                _this.feedbackNames.forEach(function (feedback) {
                    var permissionsForSession = permissionsForSessions.controls[feedback];
                    if (permissionsForSession.value !== sectionLevelSessionPrivileges) {
                        Object.keys(permissionsForSession.controls).forEach(function (permission) {
                            if (permissionsForSession.controls[permission].value) {
                                paramsMap[permission + "sectiongroup" + panelIdx + "feedback" + feedback] = 'true';
                            }
                        });
                        specialSessionsAndSessionPermissions[feedback] = permissionsForSession.value;
                    }
                });
                if (Object.keys(specialSessionsAndSessionPermissions).length > 0) {
                    paramsMap["issectiongroup" + panelIdx + "sessionsset"] = 'true';
                }
                // Save new section level privileges
                specialSections.forEach(function (section) {
                    newSessionLevelPrivileges_1[section] = specialSessionsAndSessionPermissions;
                });
            });
            editedInstructor.privileges.sectionLevel = newSectionLevelPrivileges_1;
            editedInstructor.privileges.sessionLevel = newSessionLevelPrivileges_1;
        }
        this.httpRequestService.put('/instructor', paramsMap, reqBody)
            .subscribe(function (resp) {
            _this.statusMessageService.showSuccessMessage(resp.message);
            _this.updateInstructorDetails(index, editedInstructor);
            _this.toggleIsEditingInstructor(instr, index);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Updates the stored instructor and instructor list entities.
     */
    InstructorCourseEditPageComponent.prototype.updateInstructorDetails = function (index, instr) {
        var newPrivileges = instr.privileges;
        // Update the stored instructor
        if (this.instructorList.length === 1) {
            // If there is only one instructor, the instructor can modify instructors by default
            newPrivileges.courseLevel.canmodifyinstructor = true;
            this.instructor = instr;
        }
        // Update elements for privileges if needed
        if (this.instructor.googleId === instr.googleId) {
            this.updateElementsForPrivileges();
        }
        // Update the stored instructor list
        this.instructorList[index] = instr;
    };
    /**
     * Gets the privileges for a particular role.
     */
    InstructorCourseEditPageComponent.prototype.getPrivilegesForRole = function (role) {
        if (role === 'Co-owner') {
            return this.instructorPrivileges.coowner;
        }
        if (role === 'Manager') {
            return this.instructorPrivileges.manager;
        }
        if (role === 'Observer') {
            return this.instructorPrivileges.observer;
        }
        if (role === 'Tutor') {
            return this.instructorPrivileges.tutor;
        }
        return this.instructorPrivileges.custom;
    };
    /**
     * Updates elements and buttons related to the current instructor's privileges.
     */
    InstructorCourseEditPageComponent.prototype.updateElementsForPrivileges = function () {
        var courseBtns = document.getElementsByClassName('btn-course');
        for (var _i = 0, _a = courseBtns; _i < _a.length; _i++) {
            var courseBtn = _a[_i];
            courseBtn.disabled = !this.instructor.privileges.courseLevel.canmodifycourse;
        }
        var instrBtns = document.getElementsByClassName('btn-instr');
        for (var _b = 0, _c = instrBtns; _b < _c.length; _b++) {
            var instrBtn = _c[_b];
            instrBtn.disabled = !this.instructor.privileges.courseLevel.canmodifyinstructor;
        }
    };
    /**
     * Toggles the add instructor form.
     */
    InstructorCourseEditPageComponent.prototype.toggleIsAddingInstructor = function () {
        this.isAddingInstructor = !this.isAddingInstructor;
        if (this.isAddingInstructor) {
            this.initAddInstructorForm();
        }
    };
    /**
     * Initialises a new form for adding an instructor to the current course.
     */
    InstructorCourseEditPageComponent.prototype.initAddInstructorForm = function () {
        var _this = this;
        this.formAddInstructor = this.fb.group({
            googleId: [''],
            name: [''],
            email: [''],
            isDisplayedToStudents: [{ value: true }],
            displayedName: ['Instructor'],
            role: ['Co-owner'],
            privileges: this.getPrivilegesForRole('Co-owner'),
            tunePermissions: this.fb.group({
                permissionsForCourse: this.fb.group({
                    canmodifycourse: true,
                    canmodifyinstructor: true,
                    canmodifysession: true,
                    canmodifystudent: true,
                    canviewstudentinsection: true,
                    canviewsessioninsection: true,
                    cansubmitsessioninsection: true,
                    canmodifysessioncommentinsection: true,
                }),
                tuneSectionGroupPermissions: this.fb.array([]),
            }),
        });
        // Listen for changes to custom privileges
        var roleControl = this.formAddInstructor.get('role');
        var permissionsControl = this.formAddInstructor.get('tunePermissions');
        if (roleControl != null && permissionsControl != null) {
            roleControl.valueChanges.subscribe(function (selectedRole) {
                var panelId = "tune-permissions-" + _this.instructorList.length;
                var panel = document.getElementById(panelId);
                if (selectedRole === 'Custom' && panel != null) {
                    panel.style.display = 'block';
                    permissionsControl.controls.permissionsForCourse.reset();
                    permissionsControl.controls.tuneSectionGroupPermissions = _this.fb.array([]);
                }
                else if (panel != null) {
                    panel.style.display = 'none';
                }
            });
        }
    };
    /**
     * Adds a new instructor to the current course.
     */
    InstructorCourseEditPageComponent.prototype.onSubmitAddInstructor = function (formAddInstructor) {
        var _this = this;
        // Create a copy of the added instructor
        var addedInstructor = {
            googleId: formAddInstructor.controls.googleId.value,
            name: formAddInstructor.controls.name.value,
            email: formAddInstructor.controls.email.value,
            role: formAddInstructor.controls.role.value,
            isDisplayedToStudents: formAddInstructor.controls.isDisplayedToStudents.value.value,
            displayedName: formAddInstructor.controls.displayedName.value,
            privileges: this.getPrivilegesForRole(formAddInstructor.controls.role.value),
        };
        var paramsMap = {
            courseid: this.courseToEdit.id,
        };
        var reqBody = {
            id: addedInstructor.googleId,
            name: addedInstructor.name,
            email: addedInstructor.email,
            roleName: addedInstructor.role,
            displayName: addedInstructor.displayedName,
            isDisplayedToStudent: addedInstructor.isDisplayedToStudents != null,
        };
        if (formAddInstructor.controls.role.value === 'Custom') {
            var tuneCoursePermissions_2 = formAddInstructor.controls.tunePermissions
                .controls.permissionsForCourse;
            // Append custom course level privileges
            Object.keys(tuneCoursePermissions_2.controls).forEach(function (permission) {
                if (tuneCoursePermissions_2.controls[permission].value) {
                    paramsMap[permission] = 'true';
                }
            });
            addedInstructor.privileges.courseLevel = tuneCoursePermissions_2.value;
            // Append custom section level privileges
            var tuneSectionGroupPermissions = formAddInstructor.controls.tunePermissions
                .controls.tuneSectionGroupPermissions;
            var newSectionLevelPrivileges_2 = {};
            var newSessionLevelPrivileges_2 = {};
            tuneSectionGroupPermissions.controls.forEach(function (sectionGroupPermissions, panelIdx) {
                var specialSections = [];
                // Mark section as special if it has been checked in a section group
                _this.sectionNames.forEach(function (section, sectionIdx) {
                    if (sectionGroupPermissions.controls[section].value) {
                        paramsMap["issectiongroup" + sectionIdx + "set"] = 'true';
                        paramsMap["sectiongroup" + panelIdx + "section" + sectionIdx] = section;
                        specialSections.push(section);
                    }
                });
                // Include section permissions for a section group
                var permissionsInSection = sectionGroupPermissions
                    .controls.permissionsForSection;
                Object.keys(permissionsInSection.controls).forEach(function (permission) {
                    if (permissionsInSection.controls[permission].value) {
                        paramsMap[permission + "sectiongroup" + panelIdx] = 'true';
                    }
                });
                // Save new section level privileges
                specialSections.forEach(function (section) {
                    newSectionLevelPrivileges_2[section] = permissionsInSection.value;
                });
                // Append custom session level privileges
                var permissionsForSessions = sectionGroupPermissions
                    .controls.permissionsForSessions;
                var specialSessionsAndSessionPermissions = {};
                // Mark session as special if a session has different permissions from the section permissions
                var sectionLevelSessionPrivileges = {
                    canviewsessioninsection: permissionsInSection.controls.canviewsessioninsection.value,
                    cansubmitsessioninsection: permissionsInSection.controls.cansubmitsessioninsection.value,
                    canmodifysessioncommentinsection: permissionsInSection.controls.canmodifysessioncommentinsection.value,
                };
                _this.feedbackNames.forEach(function (feedback) {
                    var permissionsForSession = permissionsForSessions.controls[feedback];
                    if (permissionsForSession.value !== sectionLevelSessionPrivileges) {
                        Object.keys(permissionsForSession.controls).forEach(function (permission) {
                            if (permissionsForSession.controls[permission].value) {
                                paramsMap[permission + "sectiongroup" + panelIdx + "feedback" + feedback] = 'true';
                            }
                        });
                        specialSessionsAndSessionPermissions[feedback] = permissionsForSession.value;
                    }
                });
                if (Object.keys(specialSessionsAndSessionPermissions).length > 0) {
                    paramsMap["issectiongroup" + panelIdx + "sessionsset"] = 'true';
                }
                // Save new section level privileges
                specialSections.forEach(function (section) {
                    newSessionLevelPrivileges_2[section] = specialSessionsAndSessionPermissions;
                });
            });
            addedInstructor.privileges.sectionLevel = newSectionLevelPrivileges_2;
            addedInstructor.privileges.sessionLevel = newSessionLevelPrivileges_2;
        }
        this.httpRequestService.post('/instructor', paramsMap, reqBody)
            .subscribe(function (resp) {
            _this.statusMessageService.showSuccessMessage(resp.message);
            _this.addToInstructorList(addedInstructor);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
        this.toggleIsAddingInstructor();
    };
    /**
     * Updates the stored instructor list and forms.
     */
    InstructorCourseEditPageComponent.prototype.addToInstructorList = function (instructor) {
        this.instructorList.push(instructor);
        this.initEditInstructorsForm();
    };
    /**
     * Opens a modal to confirm deleting an instructor.
     */
    InstructorCourseEditPageComponent.prototype.onSubmitDeleteInstructor = function (deleteInstructorModal, index) {
        this.ngbModal.open(deleteInstructorModal);
        var instructorToDelete = this.instructorList[index];
        var modalId = 'delete-instr-modal';
        var courseId = this.courseToEdit.id;
        var modalContent = '';
        var modal = document.getElementById(modalId);
        // Display different text depending on who is being deleted
        if (instructorToDelete.googleId === this.instructor.googleId) {
            modalContent = 'Are you sure you want to delete your instructor role from the '
                + ("course " + courseId + "? You will not be able to access the course anymore.");
        }
        else {
            modalContent = "Are you sure you want to delete the instructor " + instructorToDelete.name + " from the course "
                + (courseId + "? He/she will not be able to access the course anymore.");
        }
        if (modal != null) {
            modal.innerText = modalContent;
        }
    };
    /**
     * Deletes an instructor from the given course.
     */
    InstructorCourseEditPageComponent.prototype.deleteInstructor = function (index) {
        var _this = this;
        var instructorToDelete = this.instructorList[index];
        var paramsMap = {
            courseid: this.courseToEdit.id,
            instructorid: this.instructor.googleId,
        };
        this.httpRequestService.delete('/instructor', paramsMap)
            .subscribe(function () {
            if (instructorToDelete.googleId === _this.instructor.googleId) {
                _this.navigationService.navigateWithSuccessMessage(_this.router, '/web/instructor/courses', 'Instructor is successfully deleted.');
            }
            else {
                _this.removeFromInstructorList(index);
                _this.statusMessageService.showSuccessMessage('Instructor is successfully deleted.');
            }
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Removes a deleted instructor from the stored instructor lists.
     */
    InstructorCourseEditPageComponent.prototype.removeFromInstructorList = function (index) {
        this.instructorList.splice(index, 1);
        this.formEditInstructors.controls.formInstructors.removeAt(index);
    };
    /**
     * Opens a modal to show the privileges for a given instructor.
     */
    InstructorCourseEditPageComponent.prototype.viewInstructorRole = function (viewInstructorRoleModal, index) {
        this.ngbModal.open(viewInstructorRoleModal);
        var instructorToView = this.instructorList[index];
        this.initViewInstructorRole(instructorToView.role, instructorToView.privileges.courseLevel);
        return false;
    };
    /**
     * Opens a modal to show the privileges for a given role.
     */
    InstructorCourseEditPageComponent.prototype.viewRolePrivileges = function (viewInstructorRoleModal, role) {
        this.ngbModal.open(viewInstructorRoleModal);
        var privileges = this.getPrivilegesForRole(role);
        this.initViewInstructorRole(role, privileges.courseLevel);
        return false;
    };
    /**
     * Initialises the modal showing privileges for given privileges.
     */
    InstructorCourseEditPageComponent.prototype.initViewInstructorRole = function (role, courseLevelPrivileges) {
        var modalTitleId = 'role-title';
        var modifyCourseId = 'canmodifycourse';
        var modifyInstructorId = 'canmodifyinstructor';
        var modifySessionId = 'canmodifysession';
        var modifyStudentId = 'canmodifystudent';
        var viewStudentInSectionId = 'canviewstudentinsection';
        var submitSessionInSectionId = 'cansubmitsessioninsection';
        var viewSessionInSectionId = 'canviewsessioninsection';
        var modifySessionCommentInSectionId = 'canmodifysessioncommentinsection';
        var modalTitle = document.getElementById(modalTitleId);
        var canModifyCourse = document.getElementById(modifyCourseId);
        var canModifyInstructor = document.getElementById(modifyInstructorId);
        var canModifySession = document.getElementById(modifySessionId);
        var canModifyStudent = document.getElementById(modifyStudentId);
        var canViewStudentInSection = document.getElementById(viewStudentInSectionId);
        var canSubmitSessionInSection = document.getElementById(submitSessionInSectionId);
        var canViewSessionInSection = document.getElementById(viewSessionInSectionId);
        var canModifySessionCommentInSection = document.getElementById(modifySessionCommentInSectionId);
        if (modalTitle != null && canModifyCourse != null && canModifyInstructor != null && canModifySession != null
            && canModifyStudent != null && canViewStudentInSection != null && canSubmitSessionInSection != null
            && canViewSessionInSection != null && canModifySessionCommentInSection != null) {
            modalTitle.innerText = "Permissions for " + role;
            canModifyCourse.checked = courseLevelPrivileges.canmodifycourse;
            canModifyInstructor.checked = courseLevelPrivileges.canmodifyinstructor;
            canModifySession.checked = courseLevelPrivileges.canmodifysession;
            canModifyStudent.checked = courseLevelPrivileges.canmodifystudent;
            canViewStudentInSection.checked = courseLevelPrivileges.canviewstudentinsection;
            canSubmitSessionInSection.checked = courseLevelPrivileges.cansubmitsessioninsection;
            canViewSessionInSection.checked = courseLevelPrivileges.canviewsessioninsection;
            canModifySessionCommentInSection.checked = courseLevelPrivileges.canmodifysessioncommentinsection;
        }
    };
    /**
     * Opens a modal to confirm resending an invitation email to an instructor.
     */
    InstructorCourseEditPageComponent.prototype.onSubmitResendEmail = function (resendEmailModal, index) {
        this.ngbModal.open(resendEmailModal);
        var instructorToResend = this.instructorList[index];
        var modalId = 'resend-email-modal';
        var courseId = this.courseToEdit.id;
        var modal = document.getElementById(modalId);
        if (modal != null) {
            modal.innerText = "Do you wish to re-send the invitation email to instructor " + instructorToResend.name + " "
                + ("from course " + courseId + "?");
        }
    };
    /**
     * Re-sends an invitation email to an instructor in the course.
     */
    InstructorCourseEditPageComponent.prototype.resendReminderEmail = function (index) {
        var _this = this;
        var instructorToResend = this.instructorList[index];
        this.courseService.remindInstructorForJoin(this.courseToEdit.id, instructorToResend.email)
            .subscribe(function (resp) {
            _this.statusMessageService.showSuccessMessage(resp.message);
        }, function (resp) {
            _this.statusMessageService.showErrorMessage(resp.error.message);
        });
    };
    /**
     * Adds an additional panel to modify custom section privileges for a given instructor.
     */
    InstructorCourseEditPageComponent.prototype.addTuneSectionGroupPermissionsPanel = function (instr, index) {
        var _this = this;
        var instructor = this.instructorList[index];
        var newSection = this.fb.group({
            permissionsForSection: this.fb.group({
                canviewstudentinsection: instructor.privileges.courseLevel.canviewstudentinsection,
                cansubmitsessioninsection: instructor.privileges.courseLevel.cansubmitsessioninsection,
                canviewsessioninsection: instructor.privileges.courseLevel.canviewsessioninsection,
                canmodifysessioncommentinsection: instructor.privileges.courseLevel.canmodifysessioncommentinsection,
            }),
            permissionsForSessions: this.fb.group({}),
        });
        this.sectionNames.forEach(function (sectionName) {
            newSection.addControl(sectionName, _this.fb.control(false));
        });
        var sectionPrivileges = newSection.controls.permissionsForSection;
        sectionPrivileges.controls.canviewsessioninsection.valueChanges.subscribe(function (isAbleToSubmit) {
            if (!isAbleToSubmit) {
                sectionPrivileges.controls.canmodifysessioncommentinsection.setValue(false);
            }
        });
        sectionPrivileges.controls.canmodifysessioncommentinsection.valueChanges.subscribe(function (isAbleToModify) {
            if (isAbleToModify) {
                sectionPrivileges.controls.canviewsessioninsection.setValue(true);
            }
        });
        this.feedbackNames.forEach(function (feedback) {
            var defaultSessionPrivileges = _this.fb.group({
                canviewsessioninsection: false,
                cansubmitsessioninsection: false,
                canmodifysessioncommentinsection: false,
            });
            defaultSessionPrivileges.controls.canviewsessioninsection.valueChanges.subscribe(function (isAbleToSubmit) {
                if (!isAbleToSubmit) {
                    defaultSessionPrivileges.controls.canmodifysessioncommentinsection.setValue(false);
                }
            });
            defaultSessionPrivileges.controls.canmodifysessioncommentinsection.valueChanges
                .subscribe(function (isAbleToModify) {
                if (isAbleToModify) {
                    defaultSessionPrivileges.controls.canviewsessioninsection.setValue(true);
                }
            });
            newSection.controls.permissionsForSessions.addControl(feedback, defaultSessionPrivileges);
        });
        instr.controls.tunePermissions.controls.tuneSectionGroupPermissions.push(newSection);
    };
    /**
     * Adds a default tune section group permission panel.
     */
    InstructorCourseEditPageComponent.prototype.addEmptyTuneSectionGroupPermissionsPanel = function (instr) {
        var _this = this;
        var newSection = this.fb.group({
            permissionsForSection: this.fb.group({
                canviewstudentinsection: false,
                cansubmitsessioninsection: false,
                canviewsessioninsection: false,
                canmodifysessioncommentinsection: false,
            }),
            permissionsForSessions: this.fb.group({}),
        });
        this.sectionNames.forEach(function (sectionName) {
            newSection.addControl(sectionName, _this.fb.control(false));
        });
        var sectionPrivileges = newSection.controls.permissionsForSection;
        sectionPrivileges.controls.canviewsessioninsection.valueChanges.subscribe(function (isAbleToSubmit) {
            if (!isAbleToSubmit) {
                sectionPrivileges.controls.canmodifysessioncommentinsection.setValue(false);
            }
        });
        sectionPrivileges.controls.canmodifysessioncommentinsection.valueChanges.subscribe(function (isAbleToModify) {
            if (isAbleToModify) {
                sectionPrivileges.controls.canviewsessioninsection.setValue(true);
            }
        });
        this.feedbackNames.forEach(function (feedback) {
            var defaultSessionPrivileges = _this.fb.group({
                canviewsessioninsection: false,
                cansubmitsessioninsection: false,
                canmodifysessioncommentinsection: false,
            });
            defaultSessionPrivileges.controls.canviewsessioninsection.valueChanges.subscribe(function (isAbleToSubmit) {
                if (!isAbleToSubmit) {
                    defaultSessionPrivileges.controls.canmodifysessioncommentinsection.setValue(false);
                }
            });
            defaultSessionPrivileges.controls.canmodifysessioncommentinsection.valueChanges
                .subscribe(function (isAbleToModify) {
                if (isAbleToModify) {
                    defaultSessionPrivileges.controls.canviewsessioninsection.setValue(true);
                }
            });
            newSection.controls.permissionsForSessions.addControl(feedback, defaultSessionPrivileges);
        });
        instr.controls.tunePermissions.controls.tuneSectionGroupPermissions.push(newSection);
    };
    /**
     * Removes a panel to modify custom section privileges for a given instructor.
     */
    InstructorCourseEditPageComponent.prototype.removeTuneSectionGroupPermissionsPanel = function (instr, index) {
        instr.controls.tunePermissions.controls.tuneSectionGroupPermissions.removeAt(index);
    };
    /**
     * Hides session level permissions for a section panel.
     */
    InstructorCourseEditPageComponent.prototype.hideSessionLevelPermissions = function (panelIdx, sectionIdx) {
        var table = document.getElementById("tune-session-permissions-" + panelIdx + "-" + sectionIdx);
        var hideLink = document.getElementById("hide-link-" + panelIdx + "-" + sectionIdx);
        var showLink = document.getElementById("show-link-" + panelIdx + "-" + sectionIdx);
        if (table != null && hideLink != null && showLink != null) {
            table.style.display = 'none';
            hideLink.style.display = 'none';
            showLink.style.display = 'block';
        }
    };
    /**
     * Shows session level permissions for a section panel.
     */
    InstructorCourseEditPageComponent.prototype.showSessionLevelPermissions = function (panelIdx, sectionIdx) {
        var table = document.getElementById("tune-session-permissions-" + panelIdx + "-" + sectionIdx);
        var hideLink = document.getElementById("hide-link-" + panelIdx + "-" + sectionIdx);
        var showLink = document.getElementById("show-link-" + panelIdx + "-" + sectionIdx);
        if (table != null && hideLink != null && showLink != null) {
            table.style.display = 'block';
            hideLink.style.display = 'block';
            showLink.style.display = 'none';
        }
    };
    InstructorCourseEditPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-instructor-course-edit-page',
            templateUrl: './instructor-course-edit-page.component.html',
            styleUrls: ['./instructor-course-edit-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            NavigationService,
            TimezoneService,
            HttpRequestService,
            StatusMessageService,
            CourseService,
            FormBuilder,
            NgbModal])
    ], InstructorCourseEditPageComponent);
    return InstructorCourseEditPageComponent;
}());
export { InstructorCourseEditPageComponent };
//# sourceMappingURL=instructor-course-edit-page.component.js.map