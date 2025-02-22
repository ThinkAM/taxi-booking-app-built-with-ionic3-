webpackJsonp([7],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePageModule", function() { return PhonePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhonePageModule = (function () {
    function PhonePageModule() {
    }
    return PhonePageModule;
}());
PhonePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone__["a" /* PhonePage */])],
    })
], PhonePageModule);

//# sourceMappingURL=phone.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhonePage = (function () {
    function PhonePage(navCtrl, stB, menu, authProvider, formBuilder, loadingCtrl, ph, alertCtrl) {
        this.navCtrl = navCtrl;
        this.stB = stB;
        this.menu = menu;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.ph = ph;
        this.alertCtrl = alertCtrl;
        menu.swipeEnable(false, 'menu1');
        this.phoneForm = formBuilder.group({
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
        });
    }
    PhonePage.prototype.ionViewDidEnter = function () {
    };
    PhonePage.prototype.UpdateNumber = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Finalizing..'
        });
        loading.present();
        this.ph.UpdateNumber(this.phoneForm.value.phone).then(function (success) {
            loading.dismiss().then(function (suc) {
                _this.stB.show();
                _this.navCtrl.setRoot('HomePage');
            });
        });
    };
    return PhonePage;
}());
PhonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])()
    /**
     * Generated class for the PhonePage page.
     *
     * See http://ionicframework.com/docs/components/#navigation for more info
     * on Ionic pages and navigation.
     */
    ,
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-phone',template:/*ion-inline-start:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\phone\phone.html"*/'<ion-header no-border>\n\n    <ion-navbar color="nav-color">\n\n      <ion-title>\n\n        Add Your Phone Number\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="no-scroll" padding>\n\n    <!-- <div text-center>\n\n      <img src=\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMzI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAzMiIgd2lkdGg9IjIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJMYXllcl8xIi8+PGcgaWQ9Im1hcF94NUZfcGluX3g1Rl9zdHJva2UiPjxnPjxwYXRoIGQ9Ik05Ljk5Niw0YzEuNjA1LDAsMy4xMTMsMC42MjUsNC4yNDYsMS43NkMxNS4zNzUsNi44OTEsMTYsOC4zOTgsMTYsMTBzLTAuNjI1LDMuMTA5LTEuNzMsNC4yMTMgICAgYy0wLjE2OCwwLjE2Ni0yLjIzOCwyLjIyNS00LjI3Myw1LjQ0MWMtMi4wMi0zLjIxMS00LjA4Mi01LjI2Mi00LjIzOC01LjQxNEM0LjYyNSwxMy4xMDksNCwxMS42MDIsNCwxMHMwLjYyNS0zLjEwOSwxLjc1OC00LjI0MiAgICBTOC4zMTQsNCw5Ljk5Niw0IE05Ljk5NiwwQzcuNDQxLDAsNC44ODMsMC45NzcsMi45MywyLjkzYy0zLjkwNiwzLjkwNC0zLjkwNiwxMC4yMzYsMCwxNC4xNDFjMCwwLDcuMDY2LDYuOTMsNy4wNjYsMTQuOTMgICAgYzAtOCw3LjA3NC0xNC45Myw3LjA3NC0xNC45M2MzLjkwNi0zLjkwNCwzLjkwNi0xMC4yMzYsMC0xNC4xNDFDMTUuMTE3LDAuOTc3LDEyLjU1OSwwLDkuOTk2LDBMOS45OTYsMHoiIHN0eWxlPSJmaWxsOiM0RTRFNTA7Ii8+PHBhdGggZD0iTTEyLDEwYzAsMS4xMDUtMC44OTUsMi0yLjAwNCwyQzguODExLDEyLDgsMTEuMTA1LDgsMTBzMC44MTEtMiwxLjk5Ni0yQzExLjEwNSw4LDEyLDguODk1LDEyLDEweiIgc3R5bGU9ImZpbGw6IzRFNEU1MDsiLz48L2c+PC9nPjwvc3ZnPg==\'/>\n\n    </div> -->\n\n  \n\n    <form [formGroup]="phoneForm" (submit)="UpdateNumber(phone)" novalidate>\n\n     \n\n\n\n        <ion-label text-center color="primary" paddding stacked>PhoneNumber</ion-label>\n\n        <ion-input formControlName="phone" type="tel" placeholder="Your phone number" \n\n          [class.invalid]="!phoneForm.controls.phone.valid && phoneForm.controls.phone.dirty">\n\n        </ion-input>\n\n      \n\n      <ion-item no-lines class="error-message" \n\n        *ngIf="!phoneForm.controls.phone.valid  && phoneForm.controls.phone.dirty">\n\n        <p>11 numbers needed e.g 080XXXXXXXXX</p>\n\n      </ion-item>\n\n  \n\n  \n\n      <button padding ion-button block type="submit" [disabled]="!phoneForm.valid">\n\n        Next\n\n      </button>\n\n\n\n    </form>\n\n\n\n    <ion-item-divider text-center class=\'warn\'>\n\n        Please Check Number Again, For Any Error.\n\n      </ion-item-divider>\n\n  </ion-content>'/*ion-inline-end:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\phone\phone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], PhonePage);

//# sourceMappingURL=phone.js.map

/***/ })

});
//# sourceMappingURL=7.js.map