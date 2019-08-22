webpackJsonp([0],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */])],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, authProvider, formBuilder, loadingCtrl, ph, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.ph = ph;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                _this.loading.dismiss().then(function () {
                    if (_this.ph.phone == null)
                        _this.navCtrl.push('StartupPage');
                    else
                        _this.navCtrl.setRoot('HomePage');
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    SignupPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\signup\signup.html"*/'<ion-header no-border>\n\n    <ion-navbar color="nav-color">\n\n      <ion-title>\n\n        Create an Account\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n<ion-content class="no-scroll" padding>\n\n  <!-- <div text-center>\n\n    <img src=\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMzI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAzMiIgd2lkdGg9IjIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJMYXllcl8xIi8+PGcgaWQ9Im1hcF94NUZfcGluX3g1Rl9zdHJva2UiPjxnPjxwYXRoIGQ9Ik05Ljk5Niw0YzEuNjA1LDAsMy4xMTMsMC42MjUsNC4yNDYsMS43NkMxNS4zNzUsNi44OTEsMTYsOC4zOTgsMTYsMTBzLTAuNjI1LDMuMTA5LTEuNzMsNC4yMTMgICAgYy0wLjE2OCwwLjE2Ni0yLjIzOCwyLjIyNS00LjI3Myw1LjQ0MWMtMi4wMi0zLjIxMS00LjA4Mi01LjI2Mi00LjIzOC01LjQxNEM0LjYyNSwxMy4xMDksNCwxMS42MDIsNCwxMHMwLjYyNS0zLjEwOSwxLjc1OC00LjI0MiAgICBTOC4zMTQsNCw5Ljk5Niw0IE05Ljk5NiwwQzcuNDQxLDAsNC44ODMsMC45NzcsMi45MywyLjkzYy0zLjkwNiwzLjkwNC0zLjkwNiwxMC4yMzYsMCwxNC4xNDFjMCwwLDcuMDY2LDYuOTMsNy4wNjYsMTQuOTMgICAgYzAtOCw3LjA3NC0xNC45Myw3LjA3NC0xNC45M2MzLjkwNi0zLjkwNCwzLjkwNi0xMC4yMzYsMC0xNC4xNDFDMTUuMTE3LDAuOTc3LDEyLjU1OSwwLDkuOTk2LDBMOS45OTYsMHoiIHN0eWxlPSJmaWxsOiM0RTRFNTA7Ii8+PHBhdGggZD0iTTEyLDEwYzAsMS4xMDUtMC44OTUsMi0yLjAwNCwyQzguODExLDEyLDgsMTEuMTA1LDgsMTBzMC44MTEtMiwxLjk5Ni0yQzExLjEwNSw4LDEyLDguODk1LDEyLDEweiIgc3R5bGU9ImZpbGw6IzRFNEU1MDsiLz48L2c+PC9nPjwvc3ZnPg==\'/>\n\n  </div> -->\n\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n\n\n      <ion-label color=\'primary\' stacked>Email</ion-label>\n\n      <ion-input formControlName="email" type="email" placeholder="Your email address" \n\n        [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n\n      </ion-input>\n\n    \n\n\n\n   \n\n      <ion-label color=\'primary\' stacked>Password</ion-label>\n\n      <ion-input formControlName="password" type="password" placeholder="Your password" \n\n        [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n\n      </ion-input>\n\n\n\n\n\n    <button padding ion-button block type="submit" [disabled]="!signupForm.valid">\n\n      Create an Account\n\n    </button>\n\n  </form>\n\n\n\n  <button color=\'light\'ion-button block (click)="goToLogin()">\n\n     Login.\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map