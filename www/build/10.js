webpackJsonp([10],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_map_container_map_container__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_native_map_container_native_map_container__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_anim_control_anim_control__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pop_up_pop_up__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_directionservice_directionservice__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_onesignal_onesignal__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_geocoder_geocoder__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_vibration__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_rate_rate__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var HomePage = (function () {
    function HomePage(storage, stB, geolocation, loadingCtrl, vibration, diagnostic, alert, cMap, callNumber, myGcode, dProvider, platform, OneSignal, modalCtrl, menu, pop, anim, ph, myMap, navCtrl, eventProvider) {
        this.storage = storage;
        this.stB = stB;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.vibration = vibration;
        this.diagnostic = diagnostic;
        this.alert = alert;
        this.cMap = cMap;
        this.callNumber = callNumber;
        this.myGcode = myGcode;
        this.dProvider = dProvider;
        this.platform = platform;
        this.OneSignal = OneSignal;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.pop = pop;
        this.anim = anim;
        this.ph = ph;
        this.myMap = myMap;
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
        this.canStopCheck = false;
        this.canStop = false;
        this.onGpsEnabled = true;
        this.toggleMore = false;
        this.returningUser = false;
        this.started = false;
        this.NotifyTimes = -1;
        this.timerBeforeNotify = 30000;
        this.startedNavigation = false;
        this.added = true;
        menu.swipeEnable(false, 'menu1');
        this.address = {
            place: ''
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            var centerBar = document.getElementById("onbar");
            centerBar.style.display = 'block';
            var bottomBar1 = document.getElementById("bar2").style.display = 'none';
        }
        else {
            var centerBar = document.getElementById("onbar");
            centerBar.style.display = 'none';
            var bottomBar1 = document.getElementById("bar2").style.display = 'none';
        }
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_13_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (!user) {
                _this.navCtrl.setRoot('LoginEntrancePage');
                unsubscribe();
                _this.stB.hide();
            }
            else {
                unsubscribe();
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_13_firebase_app__["database"]().ref("userProfile/" + user.uid);
                _this.ph.getUserProfile().on('value', function (userProfileSnapshot) {
                    var phone = userProfileSnapshot.val().phoneNumber;
                    if (phone == null || phone == undefined)
                        _this.navCtrl.setRoot('PhonePage');
                    _this.stB.show();
                });
                _this.cMap.loadMap();
                _this.WaitForGeolocation();
            }
        });
    };
    HomePage.prototype.WaitForGeolocation = function () {
        var _this = this;
        //   console.log(this.cMap.lat)
        var location_tracker_loop = setTimeout(function () {
            if (_this.cMap.hasShown) {
                clearTimeout(location_tracker_loop);
                _this.showMap();
                console.log("connected");
            }
            else {
                _this.WaitForGeolocation();
            }
        }, 1000);
    };
    HomePage.prototype.toggleMoreBtn = function () {
        this.toggleMore = this.toggleMore ? false : true;
    };
    HomePage.prototype.callDriver = function () {
        console.log(this.number);
        window.open("tel:" + this.number);
    };
    HomePage.prototype.sendMessage = function () {
        var id = this.uid;
        this.pop.Send(id);
    };
    HomePage.prototype.showMap = function () {
        this.lat = this.cMap.lat;
        this.lng = this.cMap.lng;
        this.CheckForPreviousData();
        console.log('woe');
    };
    HomePage.prototype.showAddressModal = function (selectedBar) {
        var _this = this;
        clearTimeout(this.cMap.timer1);
        console.log(this.myGcode.locationName);
        var modal = this.modalCtrl.create('AutocompletePage');
        modal.onDidDismiss(function (data) {
            _this.address.place = data;
            if (selectedBar == 1 && data != null) {
                if (!_this.startedNavigation) {
                    document.getElementById("location").innerText = data;
                    _this.myGcode.locationName = data;
                    _this.cMap.RefreshMap(data);
                }
            }
            if (selectedBar == 2 && data != null) {
                document.getElementById("destination").innerText = data;
                _this.destinationSetName = data;
                var myPos_1 = new google.maps.LatLng(_this.cMap.lat, _this.cMap.lng);
                _this.myGcode.geocoder.geocode({ 'address': data }, function (results, status) {
                    if (status == 'OK') {
                        var position = results[0].geometry.location;
                        var calPos = new google.maps.LatLng(position.lat(), position.lng());
                        if (!_this.dProvider.calculateBtn) {
                            _this.dProvider.calcRoute(myPos_1, calPos, false, true, data);
                            console.log(data);
                        }
                        else {
                            console.log(data);
                            _this.dProvider.calcRoute(myPos_1, calPos, false, false, data);
                        }
                    }
                    else {
                        // alert('Geocode was not successful for the following reason: ' + status);
                    }
                });
            }
        });
        modal.present();
    };
    HomePage.prototype.estimate = function () {
        this.cMap.onDestinatiobarHide = true;
        this.dProvider.calculateBtn = true;
    };
    HomePage.prototype.CheckForPreviousData = function () {
        var _this = this;
        this.storage.get('currentUserId').then(function (value) {
            if (value != null) {
                _this.uid = value;
                _this.startWaitingForResponse();
                _this.hideFunctions();
                _this.returningUser = true;
                _this.pop.uid = _this.uid;
                _this.dProvider.id = _this.uid;
            }
            else {
                _this.storage.remove("currentUserId");
            }
        }).catch(function (er) { console.log("error"); });
    };
    HomePage.prototype.pickLocation = function () {
        var bottomBar1 = document.getElementById("bar2").style.display = 'block';
    };
    HomePage.prototype.hideFunctions = function () {
        var bottomBar1 = document.getElementById("bar2").style.display = 'none';
        this.cMap.onbar2 = true;
        var centerBar = document.getElementById("onbar");
        centerBar.style.display = 'none';
        document.getElementById("destination").innerHTML = 'Set Destination';
        this.cMap.map.setCameraZoom(6);
        this.startedNavigation = true;
        this.pop.onRequest = true;
        this.cMap.hasRequested = true;
        this.cMap.isCarAvailable = false;
        this.dProvider.calculateBtn = false;
        this.ph.getAllDrivers().off("child_added");
        this.ph.getAllDrivers().off("child_changed");
        this.cMap.map.clear();
    };
    HomePage.prototype.StartListeningForChanges = function () {
        this.hideFunctions();
        this.returningUser = false;
        var image = this.ph.user.photoURL;
        var name = this.ph.user.displayName;
        var pay = this.ph.paymentType;
        this.pop.calculateBtn = false;
        clearTimeout(this.cMap.timer1);
        if (image == null) {
            image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png';
        }
        if (name == null) {
            name = this.ph.user.email;
        }
        if (pay == null) {
            pay = 1;
        }
        if (this.cMap.lat == null && this.cMap.lng == null) {
            var pos = this.cMap.location;
            this.cMap.lng = pos.lng;
            this.cMap.lat = pos.lat;
        }
        this.createUserInformation(name, image, this.cMap.lat, this.cMap.lng, this.myGcode.locationName, pay);
    };
    HomePage.prototype.cancelRequest = function () {
        clearTimeout(this.timeTonotify);
        this.NotifyTimes = -1;
        if (this.pop.allowed)
            this.pop.showAlertComplex('Why Do You Want To Cancel?', 'Please Choose An Option', 'Accept', 'Reject', true);
    };
    HomePage.prototype.gotoPayment = function () {
        this.navCtrl.push('PaymentPage');
    };
    HomePage.prototype.createUserInformation = function (name, picture, lat, lng, locationName, payWith) {
        var _this = this;
        this.NotifyTimes++;
        var driver_id = this.cMap.car_notificationIds[this.NotifyTimes];
        if (driver_id != null) {
            var selected_driver = driver_id.toString();
            console.log(selected_driver);
            this.pop.uid = selected_driver;
            this.dProvider.id = selected_driver;
            this.uid = selected_driver;
            var dest = 'Waiting For Input..';
            if (this.destinationSetName != null) {
                dest = this.destinationSetName;
            }
            var CustomerRef = __WEBPACK_IMPORTED_MODULE_13_firebase_app__["database"]().ref("Customer/" + selected_driver);
            return CustomerRef.child("/client").set({
                Client_username: name,
                Client_location: [lat, lng],
                Client_locationName: locationName,
                Client_paymentForm: payWith,
                Client_picture: picture,
                Client_destinationName: dest,
                Client_CanChargeCard: false,
                Client_PickedUp: false,
                Client_Dropped: false,
                Client_HasRated: false
            }).then(function (suc) {
                _this.CreatePushNotification();
            });
        }
        else {
            clearTimeout(this.timeTonotify);
            this.pop.clearAll(this.uid, true);
            console.log(this.NotifyTimes);
            this.pop.show('All Our Drivers Are Busy, Please Try Again. Sorry For The Incovenience.');
            this.NotifyTimes = -1;
        }
    };
    HomePage.prototype.CreatePushNotification = function () {
        var _this = this;
        var current_id = this.cMap.car_notificationIds[this.NotifyTimes];
        if (this.platform.is('cordova'))
            this.OneSignal.sendPush(current_id);
        console.log(this.cMap.car_notificationIds.length, this.NotifyTimes);
        if (this.NotifyTimes < this.cMap.car_notificationIds.length) {
            this.startWaitingForResponse();
            this.timeTonotify = setTimeout(function () {
                _this.ClearInformation();
            }, this.timerBeforeNotify);
        }
        else {
            clearTimeout(this.timeTonotify);
            this.pop.clearAll(this.uid, true);
            console.log(this.NotifyTimes);
        }
    };
    HomePage.prototype.ClearInformation = function () {
        var _this = this;
        var customer = __WEBPACK_IMPORTED_MODULE_13_firebase_app__["database"]().ref("Customer/" + this.uid);
        customer.remove().then(function (success) {
            _this.returningUser = false;
            var image = _this.ph.user.photoURL;
            var name = _this.ph.user.displayName;
            var pay = _this.ph.paymentType;
            _this.pop.calculateBtn = false;
            if (image == null) {
                image = 'https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-10-128.png';
            }
            if (name == null) {
                name = _this.ph.user.email;
            }
            if (pay == null) {
                pay = 1;
            }
            if (_this.cMap.lat == null && _this.cMap.lng == null) {
                _this.cMap.lat = _this.lat;
                _this.cMap.lng = _this.lng;
            }
            _this.createUserInformation(name, image, _this.cMap.lat, _this.cMap.lng, _this.myGcode.locationName, pay);
        });
    };
    HomePage.prototype.startWaitingForResponse = function () {
        var _this = this;
        var connectedRef = __WEBPACK_IMPORTED_MODULE_13_firebase_app__["database"]().ref(".info/connected");
        var CustomerRef = __WEBPACK_IMPORTED_MODULE_13_firebase_app__["database"]().ref("Customer/" + this.uid + "/");
        var connect_change = true;
        var picked_up = true;
        var dropped = true;
        var rated = true;
        clearTimeout(this.cMap.timer1);
        CustomerRef.on('child_added', function (customerSnapshot) {
            if (_this.returningUser) {
                if (customerSnapshot.val().Driver_location) {
                    _this.presentRouteLoader('Waiting...');
                    _this.vibration.vibrate(1000);
                    _this.DriverFound(customerSnapshot.val().Driver_location, customerSnapshot.val().Driver_plate, customerSnapshot.val().Driver_carType, customerSnapshot.val().Driver_name, customerSnapshot.val().Driver_seat, customerSnapshot.val().Driver_locationName, customerSnapshot.val().Driver_rating, customerSnapshot.val().Driver_picture, customerSnapshot.val().Driver_number, customerSnapshot.val().Client_locationName, customerSnapshot.val().Client_location[0], customerSnapshot.val().Client_location[1]);
                    _this.cMap.onDestinatiobarHide = true;
                    //  if (customerSnapshot.val().Client_PickedUp && picked_up){
                    //   picked_up = false
                    //   document.getElementById("header").innerHTML = "Your Journey Has Started.";
                    //   document.getElementById("header").style.textAlign = 'center';
                    //   document.getElementById("header").style.fontSize = "1.34em";
                    //  } else if (customerSnapshot.val().Client_Dropped && dropped){
                    //   dropped = false
                    //   document.getElementById("header").innerHTML = "Your Journey Has Started.";
                    //   document.getElementById("header").style.textAlign = 'center';
                    //   document.getElementById("header").style.fontSize = "1.34em";
                    //  } else if (!customerSnapshot.val().Client_HasRated && rated){
                    //   if (this.ph.paymentType != 1){
                    //     console.log(this.ph.card, this.ph.month, this.ph.cvc, this.ph.year, customerSnapshot.val().Client_price, this.ph.email)
                    //    this.price = customerSnapshot.val().Client_price
                    //    this.showPayAlert(this.price)
                    //    } else{
                    //     this.showPayCash('Pay NGN ' + customerSnapshot.val().Client_price + ' To This Driver.')
                    //    }
                    //    rated = false
                    //   }
                }
                var driverPos = new google.maps.LatLng(customerSnapshot.val().Driver_location[0], customerSnapshot.val().Driver_location[1]);
                var userPos = new google.maps.LatLng(customerSnapshot.val().Client_location[0], customerSnapshot.val().Client_location[1]);
                _this.dProvider.calcRoute(userPos, driverPos, true, false, 'ghjtfd');
            }
        });
        CustomerRef.on('child_changed', function (customerSnapshot) {
            if (customerSnapshot.val().Client_PickedUp && picked_up) {
                _this.presentRouteLoader('Waiting...');
                clearInterval(_this.cMap.detectCarChange);
                _this.cMap.toggleBtn = false;
                document.getElementById("header").innerText = "Your Journey Has Started.";
                _this.toggleMore = true;
                if (customerSnapshot.val().Client_price == null) {
                    _this.presentRouteLoader('Waiting...');
                    _this.cMap.toggleBtn = false;
                    _this.toggleMore = true;
                    picked_up = false;
                    _this.pop.showAlert("Please Add Your Destination", 'We Need This To Process Your Charge');
                }
            }
            if (customerSnapshot.val().Client_Dropped && dropped) {
                _this.presentRouteLoader('Waiting...');
                document.getElementById("header").innerText = "Your Journey Has Ended.";
                if (!customerSnapshot.val().Client_CanChargeCard) {
                    _this.pop.dropoff(_this.uid);
                    _this.ph.uid = _this.uid;
                    dropped = false;
                }
            }
            if (customerSnapshot.val().Client_CanChargeCard) {
                _this.presentRouteLoader('Waiting...');
                if (!customerSnapshot.val().Client_HasRated && rated) {
                    if (_this.ph.card != null) {
                        console.log(_this.ph.card, _this.ph.month, _this.ph.cvc, _this.ph.year, customerSnapshot.val().Client_price, _this.ph.email);
                        _this.price = customerSnapshot.val().Client_price;
                        _this.showPayAlert(_this.price);
                    }
                    else {
                        _this.showPayCash('Pay NGN ' + customerSnapshot.val().Client_price + ' To This Driver.');
                    }
                    rated = false;
                }
            }
            if (connect_change) {
                _this.presentRouteLoader('Waiting...');
                _this.vibration.vibrate(1000);
                connect_change = false;
                _this.pop.uid = _this.uid;
                _this.DriverFound(customerSnapshot.val().Driver_location, customerSnapshot.val().Driver_plate, customerSnapshot.val().Driver_carType, customerSnapshot.val().Driver_name, customerSnapshot.val().Driver_seat, customerSnapshot.val().Driver_locationName, customerSnapshot.val().Driver_rating, customerSnapshot.val().Driver_picture, customerSnapshot.val().Driver_number, customerSnapshot.val().Client_locationName, customerSnapshot.val().Client_location[0], customerSnapshot.val().Client_location[1]);
                _this.storage.set("currentUserId", _this.uid);
                _this.cMap.onDestinatiobarHide = true;
            }
            _this.userDestName = customerSnapshot.val().Client_destinationName;
            _this.dProvider.name = customerSnapshot.val().Driver_name;
            _this.number = customerSnapshot.val().Driver_number;
            _this.pop.uid = _this.uid;
            if (customerSnapshot.val().Client_HasRated) {
                _this.presentRouteLoader('Waiting...');
                _this.pop.clearAll(_this.uid, true);
            }
            _this.cMap.D_lat = customerSnapshot.val().Driver_location[0];
            _this.cMap.D_lng = customerSnapshot.val().Driver_location[1];
            var userPos = new google.maps.LatLng(customerSnapshot.val().Client_location[0], customerSnapshot.val().Client_location[1]);
            var driverPos = new google.maps.LatLng(customerSnapshot.val().Driver_location[0], customerSnapshot.val().Driver_location[1]);
            console.log(_this.myGcode.locationName, customerSnapshot.val().Driver_locationName);
            _this.driverLocationName = customerSnapshot.val().Driver_locationName;
            _this.dProvider.calcRoute(userPos, driverPos, true, false, 'wertyrw');
        });
        CustomerRef.on('child_removed', function (customerSnapshot) {
            clearInterval(_this.cMap.detectCarChange);
            CustomerRef.off('child_added');
            CustomerRef.off('child_changed');
            CustomerRef.off('child_removed');
            connectedRef.off('value');
            _this.startedNavigation = false;
            _this.storage.remove("currentUserId");
            connect_change = true;
        });
        connectedRef.on("value", function (snap) {
            if (snap.val() === true) {
                _this.eventProvider.UpdateNetworkSate(true, _this.uid);
            }
            else {
                // this.pop.showPimp("Connection Lost!. Please connect to the Internet.");
                _this.eventProvider.UpdateNetworkSate(false, _this.uid);
            }
        });
    };
    HomePage.prototype.showPayCash = function (title) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: "Please Setup Your Card Payment",
            buttons: [{
                    text: "Okay",
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__pages_rate_rate__["a" /* RatePage */], { 'eventId': _this.uid });
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    HomePage.prototype.hideFunctionsOnDriverFound = function () {
        this.cMap.onbar2 = false;
        this.cMap.onbar3 = true;
        this.cMap.toggleBtn = true;
        this.cMap.onPointerHide = true;
        this.cMap.car_notificationIds = [];
        clearTimeout(this.timeTonotify);
        this.NotifyTimes = -1;
    };
    HomePage.prototype.DriverFound = function (location, plate, carType, name, seat, locationName, rating, picture, number, userPos, client_lat, client_lng) {
        this.location = location;
        this.plate = plate;
        this.carType = carType;
        this.name = name;
        this.seat = seat;
        this.rating = rating;
        this.picture = picture;
        this.hideFunctionsOnDriverFound();
        this.cMap.lat = client_lat;
        this.cMap.lng = client_lng;
        //this.calcRoute(userPos, locationName)
        this.cMap.D_lat = location[0];
        this.cMap.D_lng = location[1];
        // this.cMap.moveDriver(this.cMap.D_lat, this.cMap.D_lng);
        this.cMap.setMarkers(location, this.uid);
        return;
    };
    HomePage.prototype.ChargeCard = function (card, month, cvc, year, amount, email) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Processing Charge...'
        });
        loading.present();
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                // Now safe to use device APIs
                window.window.PaystackPlugin.chargeCard(function (resp) {
                    loading.dismiss();
                    //this.pop.showPayMentAlert("Payment Was Successful", "We will Now Refund Your Balance");
                    console.log('charge successful: ', resp);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__pages_rate_rate__["a" /* RatePage */], { 'eventId': _this.uid });
                }, function (resp) {
                    loading.dismiss();
                    _this.showPayMentErrorAlert('We Encountered An Error While Charging Your Card Pay Cash Of NGN ' + _this.price);
                }, {
                    cardNumber: card,
                    expiryMonth: month,
                    expiryYear: year,
                    cvc: cvc,
                    email: email,
                    amountInKobo: amount,
                });
            }
            else {
            }
        });
    };
    HomePage.prototype.showPayAlert = function (price) {
        var _this = this;
        var alert = this.alert.create({
            title: 'Charge For This Trip is ' + price,
            subTitle: 'From ' + this.myGcode.locationName + ' To ' + this.userDestName + ' at 72NGN per KM.',
            buttons: [
                {
                    text: "Checkout",
                    handler: function () {
                        _this.ChargeCard(_this.ph.card, _this.ph.month, _this.ph.cvc, _this.ph.year, price * 100, _this.ph.email);
                    }
                },
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    HomePage.prototype.showPayMentErrorAlert = function (title) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: "",
            buttons: [
                {
                    text: "Okay",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__pages_rate_rate__["a" /* RatePage */], { 'eventId': _this.uid });
                    }
                },
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    HomePage.prototype.presentRouteLoader = function (message) {
        var loading = this.loadingCtrl.create({
            content: message
        });
        loading.present();
        var myInterval = setInterval(function () {
            loading.dismiss();
            clearInterval(myInterval);
        }, 500);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\home\home.html"*/'<ion-header  no-border>\n\n  <ion-navbar color="nav-color">\n\n    <button [hidden]="pop.onRequest" ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title [ngStyle]="{\'font-size\': 1.32 + \'em\', \'text-align\': \'center\'}" [hidden]="!pop.onRequest" id="header" >Please Wait..</ion-title>\n\n    <ion-title [hidden]="pop.onRequest">\n\n     TAXIHUB \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="no-scroll">\n\n   \n\n    <div id="map">\n\n      \n\n      \n\n        <div class="bars">\n\n            \n\n             <button [hidden]="!cMap.onLocationbarHide" id="location" ion-item class="bars-locate" icon-start (click)="showAddressModal(1)" >\n\n                 <ion-spinner name="crescent"></ion-spinner>\n\n                 Waiting For Location\n\n               </button>\n\n               \n\n       \n\n               <div [hidden]="!cMap.onGpsEnabled" class="bars-gps">\n\n                   <ion-icon name="navigate"></ion-icon>\n\n                   For Better Tracking Enable GPS\n\n               </div>\n\n       \n\n               <button [hidden]="!cMap.onDestinatiobarHide" id="destination" ion-item class="bars-destinate" (click)="showAddressModal(2)">\n\n                   Set Destination\n\n                 </button>\n\n       \n\n                 <div [hidden]="!cMap.hasRequested" class="bars-position">\n\n                   <ion-icon name="navigate"></ion-icon>\n\n               </div>\n\n       \n\n               <!-- <div [hidden]="cMap.hasRequested" class="reset">\n\n                   <ion-icon name="navigate"></ion-icon>\n\n               </div> -->\n\n       \n\n          </div>\n\n  \n\n   <div class="centerMarker" [hidden]="cMap.onPointerHide">\n\n      <img src=\'data:image/png;base64,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\'/>\n\n      <div class="circular">\n\n        <h3 id=\'timetocar\' ></h3>\n\n        <p id=\'timecar\'></p>\n\n       </div>\n\n  </div> \n\n\n\n  \n\n    \n\n  <!-- <div> -->\n\n \n\n      <button no-lines class="bar" id=\'onbar\' ion-item (click)="pickLocation()">\n\n          Set Pickup Location\n\n         <ion-icon color=\'light\' class="icon" name="arrow-dropright"></ion-icon>\n\n     </button>\n\n   \n\n  <!-- </div> -->\n\n \n\n \n\n\n\n  <div  id=\'bar2\' class="bottom-bar">\n\n\n\n     <div class="request-for-ride">\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n              <button *ngIf="ph.paymentType == 1" [ngStyle]="{\'bottom\': 0 + \'px\'}" icon-start ion-item color="primary" (click)="gotoPayment()">\n\n                 <ion-icon name="cash"></ion-icon>\n\n                 Cash\n\n               </button>\n\n               <button *ngIf="ph.paymentType == 2" [ngStyle]="{\'bottom\': 0 + \'px\'}" icon-start ion-item color="primary" (click)="gotoPayment()">\n\n                 <ion-icon name="card"></ion-icon>\n\n                 Card\n\n               </button>\n\n                <button *ngIf="ph.paymentType != 1 && ph.paymentType != 2" [ngStyle]="{\'bottom\': 0 + \'px\'}" icon-start ion-item color="primary" (click)="gotoPayment()">\n\n                  <ion-icon name="cash"></ion-icon>\n\n                  <ion-icon name="create"></ion-icon>\n\n                  Cash\n\n                </button>\n\n          </ion-col>\n\n          <ion-col>\n\n              <button [ngStyle]="{\'bottom\': 0 + \'px\'}" icon-start ion-item color="primary" (click)="estimate()">\n\n                 <ion-icon name="calculator"></ion-icon>\n\n                 Estimate\n\n               </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      \n\n      <div class="text" text-center>\n\n         Taxihub Charges NGN 55 Per Km\n\n      </div>\n\n\n\n      <button class="gutton" icon-start ion-item color="primary" (click)="StartListeningForChanges()">\n\n          <ion-icon name="car"></ion-icon>\n\n          Request A Ride\n\n        </button>\n\n\n\n      </div>\n\n\n\n    </div>\n\n\n\n\n\n\n\n    <div *ngIf="cMap.onbar2" class="bottom-bar2">\n\n\n\n              \n\n                      <div class="text" text-center>\n\n                          <ion-spinner name="crescent"></ion-spinner>\n\n                          Finding A Driver\n\n                       </div>\n\n                 \n\n              \n\n              <button class="gutton" ion-item color="primary" (click)="cancelRequest()">\n\n                  Cancel Request\n\n               </button>\n\n            </div>\n\n\n\n           \n\n\n\n        <div class="bottom3-container">\n\n\n\n            <button class="toggle-container" icon-start ion-item [hidden]="!cMap.toggleBtn" (click)="toggleMoreBtn()">\n\n                    <ion-icon [hidden]="toggleMore" name="arrow-back"></ion-icon>\n\n                    <ion-icon [hidden]="!toggleMore" name="arrow-forward"></ion-icon>\n\n               </button>\n\n\n\n            <div *ngIf="cMap.onbar3" class="bottom-bar3">\n\n                \n\n                        \n\n                           <div *ngIf="!toggleMore" class="top-buttons" text-center>\n\n                              <ion-grid>\n\n                                <ion-row>\n\n                                  <ion-col>\n\n                                      <ion-icon name="call" (click)="callDriver()"></ion-icon>\n\n                                  </ion-col>\n\n                                  <ion-col>\n\n                                      <ion-icon name="mail" (click)="sendMessage()" ></ion-icon>\n\n                                  </ion-col>\n\n                                  <ion-col>\n\n                                      <ion-icon name="close" (click)="cancelRequest()"></ion-icon>\n\n                                  </ion-col>\n\n                                </ion-row>\n\n                              </ion-grid>\n\n                           </div>\n\n                        \n\n\n\n                           <ion-grid>\n\n                              <ion-row>\n\n                                <ion-col>\n\n                                    <img class="profile-pic" [src]="picture"/>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                <div class="text">\n\n                                    {{name}}\n\n                                 </div>\n\n                                </ion-col>\n\n                                 <ion-col>\n\n                                  \n\n                                    <ion-icon [ngStyle]="{\'margin-top\': 17 + \'px\', \'margin-left\': 20 + \'px\', \'font-size\': 2 + \'em\'}" name="star">\n\n                                    </ion-icon>\n\n                                    {{rating}}|5\n\n                                \n\n                                </ion-col>\n\n                              </ion-row>\n\n                            </ion-grid>\n\n                              \n\n                           <div class="logos">\n\n                            <ion-grid>\n\n                                <ion-row>\n\n                                  <ion-col>\n\n                                    \n\n                                      <ion-icon name="car">\n\n                                      </ion-icon>\n\n                                      {{carType}}\n\n                                   \n\n                                  </ion-col>\n\n                                  \n\n                                  <ion-col>\n\n                                     \n\n                                      <ion-icon name="contacts">\n\n                                      \n\n                                      </ion-icon>\n\n                                      {{seat}}\n\n                                    \n\n                                  </ion-col>\n\n                                  <ion-col>\n\n                                    \n\n                                      <ion-icon name="barcode">\n\n                                     \n\n                                      </ion-icon>\n\n                                      {{plate}}\n\n                                     \n\n                                  </ion-col>\n\n                                </ion-row>\n\n                              </ion-grid>\n\n\n\n                           </div>\n\n                             \n\n                            </div>\n\n       \n\n        </div>    \n\n                          \n\n      </div> \n\n\n\n    \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_map_container_map_container__["a" /* MapContainerProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_anim_control_anim_control__["a" /* AnimControlProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_geocoder_geocoder__["a" /* GeocoderProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_14__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_10__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_onesignal_onesignal__["a" /* OnesignalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_anim_control_anim_control__["a" /* AnimControlProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_map_container_map_container__["a" /* MapContainerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=10.js.map