webpackJsonp([6],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */])],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, alertCtrl, ph, authProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.ph = ph;
        this.authProvider = authProvider;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.phoneNumber = userProfileSnapshot.val().phoneNumber;
            _this.home = userProfileSnapshot.val().home;
            _this.work = userProfileSnapshot.val().work;
        });
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    ProfilePage.prototype.updateNumber = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Your New Number",
            inputs: [
                {
                    value: this.userProfile.phoneNumber
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log(data);
                        _this.ph.UpdateNumber(data);
                    }
                }
            ]
        });
        alert.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\profile\profile.html"*/'<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n\n    <ion-title>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logOut()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="no-scroll" padding>\n\n  <ion-list no-lines>\n\n    <ion-list-header no-lines>\n\n      <div text-center *ngIf="ph.user.photoURL">\n\n        <img class="profile-pic" [src]="ph.user.photoURL"/>\n\n    </div>\n\n    <div text-center *ngIf="!ph.user.photoURL">\n\n        <img class="profile-pic" src="data:image/png;base64,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"/>\n\n    </div>\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Name/Email\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="ph.user?.displayName">\n\n            {{ph.user?.displayName}}\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="!ph.user.displayName">\n\n            {{ph.user?.email}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="updateNumber()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Phone\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="phoneNumber">\n\n            <ion-icon  name="create"></ion-icon>\n\n            {{phoneNumber}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!phoneNumber">\n\n            <span>\n\n            <ion-icon  name="edit"></ion-icon>\n\n            {{phoneNumber}}\n\n            </span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <!-- <ion-item (click)="updateHome()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Home\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="home">\n\n              <ion-icon  name="create"></ion-icon>\n\n            {{home}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!home">\n\n            <span>\n\n                <ion-icon  name="create"></ion-icon>\n\n              Tap here to edit.\n\n            </span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="updateWork()">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Work\n\n          </ion-col>\n\n          <ion-col col-6 *ngIf="work">\n\n              <ion-icon  name="create"></ion-icon>\n\n            {{work}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!work">\n\n            <span>\n\n                <ion-icon  name="create"></ion-icon>\n\n              Tap here to edit.\n\n            </span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item> -->\n\n  </ion-list>\n\n\n\n  <!-- <button ion-button block (click)="logOut()">\n\n    Sign Out\n\n  </button> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map