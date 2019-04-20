import { FeedbackParticipantType, FeedbackVisibilityType } from '../types/api-output';
import { VisibilityControl } from '../types/visibility-control';
/* tslint:disable: no-non-null-assertion */
/**
 * The state machine for visibility settings.
 */
var VisibilityStateMachine = /** @class */ (function () {
    function VisibilityStateMachine(giverType, recipientType) {
        this.visibility = new Map();
        this.editability = new Map();
        this.applicability = new Set();
        // init
        this.reset();
        // start from state
        this.startFromNewState(giverType, recipientType);
    }
    VisibilityStateMachine.prototype.reset = function () {
        this.visibility.clear();
        this.editability.clear();
        // set all visibilities as false
        // set all fields as applicable
        for (var _i = 0, _a = Object.keys(FeedbackVisibilityType); _i < _a.length; _i++) {
            var visibilityTypeStr = _a[_i];
            var visibilityType = FeedbackVisibilityType[visibilityTypeStr];
            this.visibility.set(visibilityType, new Map());
            this.editability.set(visibilityType, new Map());
            this.applicability.add(visibilityType);
            for (var _b = 0, _c = Object.keys(VisibilityControl); _b < _c.length; _b++) {
                var visibilityControlStr = _c[_b];
                var visibilityControl = VisibilityControl[visibilityControlStr];
                this.visibility.get(visibilityType).set(visibilityControl, false);
                this.editability.get(visibilityType).set(visibilityControl, true);
            }
        }
        // recipients' show recipient name cannot be edited
        this.editability.get(FeedbackVisibilityType.RECIPIENT).set(VisibilityControl.SHOW_RECIPIENT_NAME, false);
    };
    VisibilityStateMachine.prototype.resetVisibility = function () {
        for (var _i = 0, _a = Array.from(this.visibility.keys()); _i < _a.length; _i++) {
            var visibilityType = _a[_i];
            for (var _b = 0, _c = Array.from(this.visibility.get(visibilityType).keys()); _b < _c.length; _b++) {
                var visibilityControl = _c[_b];
                this.disallowToSee(visibilityType, visibilityControl);
            }
        }
    };
    VisibilityStateMachine.prototype.startFromNewState = function (giverType, recipientType) {
        this.reset();
        // disable according to giver
        switch (giverType) {
            case FeedbackParticipantType.STUDENTS:
                // all options enabled when giverType is STUDENTS (subject to options disabled by recipientType)
                break;
            case FeedbackParticipantType.SELF:
            case FeedbackParticipantType.INSTRUCTORS:
                // GIVER_TEAM_MEMBERS is disabled for SELF and INSTRUCTORS because it is the same as INSTRUCTORS
                this.applicability.delete(FeedbackVisibilityType.GIVER_TEAM_MEMBERS);
                break;
            case FeedbackParticipantType.TEAMS:
                // GIVER_TEAM_MEMBERS is disabled for TEAMS because it is the same as TEAMS
                this.applicability.delete(FeedbackVisibilityType.GIVER_TEAM_MEMBERS);
                break;
            default:
                throw new Error('Unexpected giverType');
        }
        // disable according to recipient
        switch (recipientType) {
            case FeedbackParticipantType.SELF:
                // RECIPIENT is disabled because self-feedback is always visible to giver
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT);
                // RECIPIENT_TEAM_MEMBERS is disabled because it is the same as GIVER_TEAM_MEMBERS
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS);
                break;
            case FeedbackParticipantType.STUDENTS:
                // all options enabled when recipientType is STUDENTS (subject to options disabled by giverType)
                break;
            case FeedbackParticipantType.OWN_TEAM:
                // RECIPIENT and RECIPIENT_TEAM_MEMBERS are disabled because they are the same as GIVER_TEAM_MEMBERS
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT);
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS);
                break;
            case FeedbackParticipantType.INSTRUCTORS:
                // RECIPIENT_TEAM_MEMBERS is disabled because it is the same as INSTRUCTORS
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS);
                break;
            case FeedbackParticipantType.TEAMS:
                // RECIPIENT_TEAM_MEMBERS is disabled because it is the same as RECIPIENT
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS);
                break;
            case FeedbackParticipantType.OWN_TEAM_MEMBERS:
            case FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF:
                // RECIPIENT_TEAM_MEMBERS is disabled for OWN_TEAM_MEMBERS and OWN_TEAM_MEMBERS_INCLUDING_SELF
                // because it is the same as GIVER_TEAM_MEMBERS
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS);
                break;
            case FeedbackParticipantType.NONE:
                // RECIPIENT and RECIPIENT_TEAM_MEMBERS are disabled because there are no recipients
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT);
                this.applicability.delete(FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS);
                break;
            default:
                throw new Error('Unexpected recipientType');
        }
        // disable according to combination
        if ((giverType === FeedbackParticipantType.SELF || giverType === FeedbackParticipantType.INSTRUCTORS)
            && recipientType === FeedbackParticipantType.SELF) {
            // RECIPIENT_TEAM_MEMBERS is disabled because it is the same as INSTRUCTORS
            this.applicability.delete(FeedbackVisibilityType.RECIPIENT_TEAM_MEMBERS);
        }
        if (giverType === FeedbackParticipantType.TEAMS
            && recipientType === FeedbackParticipantType.OWN_TEAM_MEMBERS_INCLUDING_SELF) {
            // RECIPIENT is disabled because this is almost like a self-feedback where giver can always see the response
            this.applicability.delete(FeedbackVisibilityType.RECIPIENT);
        }
    };
    /**
     * Clears existing visibility settings and applied the given visibility settings.
     */
    VisibilityStateMachine.prototype.applyVisibilitySettings = function (visibilitySettings) {
        this.resetVisibility();
        for (var _i = 0, _a = visibilitySettings.SHOW_RESPONSE; _i < _a.length; _i++) {
            var visibilityType = _a[_i];
            this.allowToSee(visibilityType, VisibilityControl.SHOW_RESPONSE);
        }
        for (var _b = 0, _c = visibilitySettings.SHOW_GIVER_NAME; _b < _c.length; _b++) {
            var visibilityType = _c[_b];
            this.allowToSee(visibilityType, VisibilityControl.SHOW_GIVER_NAME);
        }
        for (var _d = 0, _e = visibilitySettings.SHOW_RECIPIENT_NAME; _d < _e.length; _d++) {
            var visibilityType = _e[_d];
            this.allowToSee(visibilityType, VisibilityControl.SHOW_RECIPIENT_NAME);
        }
    };
    /**
     * Allows the {@code visibilityType} to have the {@code VisibilityControl}.
     */
    VisibilityStateMachine.prototype.allowToSee = function (visibilityType, visibilityControl) {
        if (!this.isCellEditable(visibilityType, visibilityControl) || !this.isVisibilityTypeApplicable(visibilityType)) {
            return;
        }
        this.visibility.get(visibilityType).set(visibilityControl, true);
        switch (visibilityControl) {
            case VisibilityControl.SHOW_RESPONSE:
                if (visibilityType === FeedbackVisibilityType.RECIPIENT) {
                    // once the response is visible for recipient, the name should also be visible or it does not make sense.
                    this.visibility.get(visibilityType).set(VisibilityControl.SHOW_RECIPIENT_NAME, true);
                }
                break;
            case VisibilityControl.SHOW_GIVER_NAME:
            case VisibilityControl.SHOW_RECIPIENT_NAME:
                // you cannot only show just giver name or recipient name
                this.visibility.get(visibilityType).set(VisibilityControl.SHOW_RESPONSE, true);
                break;
            default:
        }
    };
    /**
     * Disallows the {@code visibilityType} to have the {@code VisibilityControl}.
     */
    VisibilityStateMachine.prototype.disallowToSee = function (visibilityType, visibilityControl) {
        if (!this.isCellEditable(visibilityType, visibilityControl) || !this.isVisibilityTypeApplicable(visibilityType)) {
            return;
        }
        this.visibility.get(visibilityType).set(visibilityControl, false);
        switch (visibilityControl) {
            case VisibilityControl.SHOW_RESPONSE:
                // giver name and recipient name should be removed together
                this.visibility.get(visibilityType).set(VisibilityControl.SHOW_GIVER_NAME, false);
                this.visibility.get(visibilityType).set(VisibilityControl.SHOW_RECIPIENT_NAME, false);
                break;
            default:
        }
    };
    /**
     * Checks whether the {@code visibilityType} is applicable under current state.
     */
    VisibilityStateMachine.prototype.isVisibilityTypeApplicable = function (visibilityType) {
        return this.applicability.has(visibilityType);
    };
    /**
     * Checks whether there is visibility control for {@code visibilityType}.
     */
    VisibilityStateMachine.prototype.hasAnyVisibilityControl = function (visibilityType) {
        return Array.from(this.visibility.get(visibilityType).values()).some(function (ele) { return ele; });
    };
    /**
     * Checks whether there is visibility control for all visibility type.
     */
    VisibilityStateMachine.prototype.hasAnyVisibilityControlForAll = function () {
        for (var _i = 0, _a = Object.keys(FeedbackVisibilityType); _i < _a.length; _i++) {
            var feedbackVisibilityTypeStr = _a[_i];
            var feedbackVisibilityType = FeedbackVisibilityType[feedbackVisibilityTypeStr];
            if (this.hasAnyVisibilityControl(feedbackVisibilityType)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Checks whether the ({@code visibilityType}, {@code visibilityControl}) is editable or not (i.e. call
     * allowToSee()/disallowToSee() will grant the visibility control).
     */
    VisibilityStateMachine.prototype.isCellEditable = function (visibilityType, visibilityControl) {
        return this.editability.get(visibilityType).get(visibilityControl);
    };
    /**
     * Checks whether the {@code visibilityType} has the {@code visibilityControl} or not.
     */
    VisibilityStateMachine.prototype.isVisible = function (visibilityType, visibilityControl) {
        return this.visibility.get(visibilityType).get(visibilityControl);
    };
    /**
     * Gets the visibility type for a certain {@code visibilityControl}.
     */
    VisibilityStateMachine.prototype.getVisibilityTypesUnderVisibilityControl = function (visibilityControl) {
        var visibilityTypes = [];
        for (var _i = 0, _a = Object.keys(FeedbackVisibilityType); _i < _a.length; _i++) {
            var visibilityTypeStr = _a[_i];
            var visibilityType = FeedbackVisibilityType[visibilityTypeStr];
            if (this.isVisible(visibilityType, visibilityControl)) {
                visibilityTypes.push(visibilityType);
            }
        }
        return visibilityTypes;
    };
    /**
     * Gets the visibility control for a certain {@code visibilityType}.
     */
    VisibilityStateMachine.prototype.getVisibilityControlUnderVisibilityType = function (visibilityType) {
        return {
            SHOW_RESPONSE: this.isVisible(visibilityType, VisibilityControl.SHOW_RESPONSE),
            SHOW_GIVER_NAME: this.isVisible(visibilityType, VisibilityControl.SHOW_GIVER_NAME),
            SHOW_RECIPIENT_NAME: this.isVisible(visibilityType, VisibilityControl.SHOW_RECIPIENT_NAME),
        };
    };
    return VisibilityStateMachine;
}());
export { VisibilityStateMachine };
/* tslint:enable: no-non-null-assertion */
//# sourceMappingURL=visibility-state-machine.js.map