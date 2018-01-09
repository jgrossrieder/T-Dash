"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_service_1 = require("../../../core/settings/settings.service");
var forms_1 = require("@angular/forms");
var ng2_validation_1 = require("ng2-validation");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(settings, fb) {
        this.settings = settings;
        var password = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        var certainPassword = new forms_1.FormControl('', ng2_validation_1.CustomValidators.equalTo(password));
        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });
        this.valForm = fb.group({
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.email])],
            'accountagreed': [null, forms_1.Validators.required],
            'passwordGroup': this.passwordForm
        });
    }
    RegisterComponent.prototype.submitForm = function ($ev, value) {
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (var c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map