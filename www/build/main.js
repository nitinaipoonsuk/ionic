webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(866);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__map__["a"]; });
/* unused harmony reexport MapService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__map__["b"]; });
/* unused harmony reexport InfoModel */
/* unused harmony reexport LatLngBounds */
/* unused harmony reexport LatLngModel */
/* unused harmony reexport LatLngStatusModel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__map__["c"]; });
/* unused harmony reexport MockedMapModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status__ = __webpack_require__(879);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__status__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__translate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__translate__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__license_search__ = __webpack_require__(881);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__license_search__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__license_search__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__license_search__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__license_search__["d"]; });
/* unused harmony reexport OptionModel */
/* unused harmony reexport SearchModel */
/* unused harmony reexport MockedLicenstList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service__ = __webpack_require__(166);
/* unused harmony reexport SearchService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_search_paging_model__ = __webpack_require__(489);
/* unused harmony reexport SearchPagingModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__multiselect_license__ = __webpack_require__(887);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__multiselect_license__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__realtimes__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_license__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_select__ = __webpack_require__(905);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        var _this = this;
        this.t = __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* Translations */];
        this.roles = [];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__realtimes__["a" /* RealtimePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__history_license__["a" /* HistoryLicensePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__report_select__["a" /* ReportSelectPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__more__["a" /* MorePage */];
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var roles = currentUser.roles;
        roles.forEach(function (role) {
            if (!role.toLowerCase().includes("realtime")) {
                _this.showHistoryTap = true;
                _this.showReportTap = true;
            }
            else if (role.toLowerCase().includes("history"))
                _this.showHistoryTap = true;
            _this.showMoreTap = true;
        });
    }
    TabsPage.prototype.realtimeEvent = function () {
        console.log('realtimeEvent');
    };
    TabsPage.prototype.historyEvent = function () {
        console.log('historyEvent');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\tabs\tabs.html"*/'\n\n<ion-tabs color="bsup">\n\n\n\n  <ion-tab [root]="tab1Root" tabTitle="{{t.language.Realtime}}"  tabIcon="navigate"></ion-tab>\n\n  <ion-tab *ngIf="showHistoryTap" [root]="tab2Root" tabTitle="{{t.language.History}}"  tabIcon="clock"></ion-tab>\n\n  <ion-tab *ngIf="showReportTap" [root]="tab3Root" tabTitle="{{t.language.Report}}" tabIcon="ios-paper"></ion-tab>\n\n  <ion-tab *ngIf="showMoreTap" [root]="tab4Root" tabTitle="{{t.language.More}}" tabIcon="more"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpClient = /** @class */ (function () {
    function HttpClient(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader();
    }
    HttpClient.prototype.createAuthorizationHeader = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = this.currentUser && this.currentUser.token;
        this.remember = this.currentUser && this.currentUser.remember;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + token);
    };
    HttpClient.prototype.getToken = function (url, data) {
        console.log(data);
        if (data.remember)
            this.remember = true;
        else
            this.remember = false;
        var dataJson = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* AppConfig */].webApiBaseUrl + url, dataJson, { headers: headers });
    };
    HttpClient.prototype.perTimeToken = function () {
        var _this = this;
        if (this.remember) {
            return;
        }
        var token = this.currentUser.token;
        console.log('per time token');
        this.getToken('/gettoken', { token: token })
            .subscribe(function (response) {
            _this.setToken(response, _this.currentUser.username);
        });
    };
    HttpClient.prototype.setToken = function (response, username) {
        var token = response.json() && response.json().access_token;
        var roles = response.json() && response.json().roles;
        if (token) {
            this.currentUser = {
                token: token
            };
            localStorage.setItem('currentUser', JSON.stringify({ token: token, username: username, remember: this.remember, roles: roles }));
            this.createAuthorizationHeader();
            return true;
        }
        return false;
    };
    HttpClient.prototype.get = function (url) {
        this.perTimeToken();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* AppConfig */].webApiBaseUrl + url, { headers: this.headers });
    };
    HttpClient.prototype.post = function (url, data) {
        this.perTimeToken();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* AppConfig */].webApiBaseUrl + url, data, { headers: this.headers });
    };
    HttpClient.prototype.put = function (url, data) {
        this.perTimeToken();
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* AppConfig */].webApiBaseUrl + url, data, { headers: this.headers });
    };
    HttpClient.prototype.delete = function (url) {
        this.perTimeToken();
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* AppConfig */].webApiBaseUrl + url, { headers: this.headers });
    };
    HttpClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpClient);
    return HttpClient;
}());

//# sourceMappingURL=http-client.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tool_helper__ = __webpack_require__(874);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tool_helper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__(877);
/* unused harmony reexport SearchService */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderGroupSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_group__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderGroupSearchPage = /** @class */ (function () {
    function HeaderGroupSearchPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.masterEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
        this.h = HeaderGroupSearchPage_1;
        this.searchInput = '';
    }
    HeaderGroupSearchPage_1 = HeaderGroupSearchPage;
    HeaderGroupSearchPage.prototype.ionViewDidLoad = function () {
    };
    HeaderGroupSearchPage.prototype.onInput = function (event) {
        console.log(this.searchInput);
        this.masterEvent.emit();
    };
    HeaderGroupSearchPage.prototype.onCancel = function (event) {
        this.searchInput = '';
        this.showSearch = false;
        this.masterEvent.emit();
    };
    HeaderGroupSearchPage.prototype.changeGroup = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__change_group__["a" /* ChangeGroupPage */]);
        profileModal.onDidDismiss(function () {
            _this.masterEvent.emit();
        });
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderGroupSearchPage.prototype, "masterEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderGroupSearchPage.prototype, "headerName", void 0);
    HeaderGroupSearchPage = HeaderGroupSearchPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header-group-search',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\header-group-search\header-group-search.html"*/'<div *ngIf="!showSearch">\n\n  <ion-title start>\n\n\n\n  </ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button (click)="changeGroup()" strong>\n\n        <ion-icon name="contacts"></ion-icon>\n\n        <ion-label>({{h.vehicleGroup && h.vehicleGroup.Id != 0 ? h.vehicleGroup.Name : t.language.All}}){{headerName}}</ion-label>\n\n      </button>\n\n    <button ion-button strong (click)="showSearch = !showSearch">\n\n      <ion-icon name="search"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n</div>\n\n\n\n<ion-searchbar showCancelButton *ngIf="showSearch" [(ngModel)]="searchInput" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"\n\n  [debounce]=777>\n\n</ion-searchbar>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\header-group-search\header-group-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HeaderGroupSearchPage);
    return HeaderGroupSearchPage;
    var HeaderGroupSearchPage_1;
}());

//# sourceMappingURL=header-group-search.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_group_search__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_group_search__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimeList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealtimeList = /** @class */ (function () {
    function RealtimeList(statusService) {
        this.statusService = statusService;
        this.listClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.routeModels = [];
        this.t = __WEBPACK_IMPORTED_MODULE_1__shared__["l" /* Translations */];
    }
    RealtimeList.prototype.ngOnInit = function () {
    };
    RealtimeList.prototype.createDataList = function (realtimeModel) {
        this.routeModels = realtimeModel.RouteList;
        for (var i = 0; i < this.routeModels.length; i++) {
            var r = this.routeModels[i];
            if (r.Temp1 === null)
                r.Temp1 = '-';
            if (r.Temp2 === null)
                r.Temp2 = '-';
        }
    };
    RealtimeList.prototype.pushDataList = function (realtimeModel) {
        var _this = this;
        realtimeModel.RouteList.forEach(function (r) {
            _this.routeModels.push(r);
        });
    };
    RealtimeList.prototype.rowClick = function (item) {
        this.listClick.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], RealtimeList.prototype, "listClick", void 0);
    RealtimeList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-realtime-list',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\realtimes\realtime-list\realtime-list.html"*/'<ion-list>\n\n  <ion-card *ngFor="let item of routeModels" (click)="rowClick(item)" color="{{\n\n          item.Status == \'Running\' ||  item.Status == \'IgOn\' || item.Status == \'Overspeed\' ? \'running\' : \n\n          item.Status == \'Idling\' || item.Status == \'IdlingStart\' ? \'idling\' : \'\'\n\n          }}">\n\n    <ion-grid>\n\n      <ion-row class="font-head">\n\n        <ion-col col-8>\n\n          <ion-row>\n\n            <b>{{item.License}}</b>\n\n            <div *ngIf="settingTemp">\n\n              <ion-col *ngIf="item.CheckTemp1" class="font-detail">\n\n                <ion-icon name="thermometer"></ion-icon> 1 ({{item.Temp1}})\n\n              </ion-col>\n\n              <ion-col *ngIf="item.CheckTemp2" class="font-detail">\n\n                <ion-icon name="thermometer"></ion-icon> 2 ({{item.Temp2}})\n\n              </ion-col>\n\n            </div>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4 align="right">\n\n          <ion-row class="{{item.Status == \'Overspeed\' ? \'font-overspeed\': \'\'}}">\n\n            <b>{{t.language[item.Status]}}</b>\n\n            <ion-col *ngIf="item.Speed > 5" class="font-detail">\n\n              <ion-icon name="speedometer"></ion-icon> {{item.Speed}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5 col-sm-4 class="font-detail">{{item.StatusDate}}\n\n          <ion-icon name="clock"></ion-icon> {{item.Up}}</ion-col>\n\n        <ion-col col-7 col-sm-8 align="right" class="font-detail">{{item.Address}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-list>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\realtimes\realtime-list\realtime-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared__["i" /* StatusService */]])
    ], RealtimeList);
    return RealtimeList;
}());

//# sourceMappingURL=realtime-list.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimeMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RealtimeMapPage = /** @class */ (function () {
    function RealtimeMapPage(navCtrl, navParams, realtimeService, toolHelper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.realtimeService = realtimeService;
        this.toolHelper = toolHelper;
        this.t = __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* Translations */];
    }
    RealtimeMapPage.prototype.ngOnInit = function () {
        this.mapComponent.mapId = 'realtimeMap';
        this.routeModel = this.navParams.data;
        var realtimeLicense = new __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* ListModel */]();
        realtimeLicense.Id = this.routeModel.CustomerBoxId;
        realtimeLicense.Name = this.routeModel.License;
        localStorage.setItem('licenseModel', JSON.stringify(realtimeLicense));
        this.markerModel = this.realtimeService.mappingToMarkerModel(this.routeModel);
    };
    RealtimeMapPage.prototype.ionViewDidLoad = function () {
        this.marker = this.mapComponent.addMarker(this.markerModel, true);
    };
    RealtimeMapPage.prototype.ionViewWillEnter = function () {
        this.updateData();
    };
    RealtimeMapPage.prototype.ionViewWillLeave = function () {
        console.log('unsubscribe');
        this.subScription && this.subScription.unsubscribe();
        this.mapComponent.mapService.toast.dismiss();
        //this.markerModel = null
    };
    RealtimeMapPage.prototype.ionViewCanLeave = function () {
        console.log('remove licenseModel');
        localStorage.removeItem('licenseModel');
    };
    RealtimeMapPage.prototype.updateData = function () {
        var _this = this;
        this.subScription && this.subScription.unsubscribe();
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(2000, 1000);
        this.subScription = timer.subscribe(function (t) {
            _this.ticks = 20 - t;
            if (_this.ticks < 1) {
                _this.realtimeService.getAlone(_this.routeModel.CustomerBoxId).subscribe(function (data) {
                    data.Up = _this.toolHelper.getTimeUp(data.LastDate);
                    data.StatusDate = _this.toolHelper.setFormatDatetime(data.StatusDate);
                    _this.markerModel = _this.realtimeService.mappingToMarkerModel(data);
                    _this.mapComponent.updateMarker(_this.marker, _this.markerModel);
                    console.log('updateData');
                    _this.subScription.unsubscribe();
                    _this.updateData();
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__shared__["e" /* MapComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared__["e" /* MapComponent */])
    ], RealtimeMapPage.prototype, "mapComponent", void 0);
    RealtimeMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-realtime-map',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\realtimes\realtime-map\realtime-map.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <ion-title>\n\n      {{routeModel.License}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <app-map></app-map>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\realtimes\realtime-map\realtime-map.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* RealtimeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* RealtimeService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["j" /* ToolHelper */]])
    ], RealtimeMapPage);
    return RealtimeMapPage;
}());

//# sourceMappingURL=realtime-map.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history_model__ = __webpack_require__(894);
/* unused harmony reexport HistoryDataGroupEventModel */
/* unused harmony reexport HistoryEventsModel */
/* unused harmony reexport HistoryMarkerModel */
/* unused harmony reexport HistoryModel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__history_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_mocked_model__ = __webpack_require__(895);
/* unused harmony reexport MockedHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_service__ = __webpack_require__(896);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__history_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_select_service__ = __webpack_require__(521);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_select_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_select_model__ = __webpack_require__(522);
/* unused harmony reexport DailyReportModel */
/* unused harmony reexport DetailOfDaily */
/* unused harmony reexport ReportSelectModel */
/* unused harmony reexport StationModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_model__ = __webpack_require__(523);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__search_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_select_mocked_model__ = __webpack_require__(524);
/* unused harmony reexport MockReportSelect */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_select_license__ = __webpack_require__(526);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__report_select_license__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_report_select_service__ = __webpack_require__(521);
/* unused harmony reexport ReportSelectService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_report_select_model__ = __webpack_require__(522);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_report_select_model__["a"]; });
/* unused harmony reexport DetailOfDaily */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_report_select_model__["b"]; });
/* unused harmony reexport StationModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_search_model__ = __webpack_require__(523);
/* unused harmony reexport SearchModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_report_select_mocked_model__ = __webpack_require__(524);
/* unused harmony reexport MockReportSelect */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__realtime_list_realtime_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__realtime_map_realtime_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__change_group__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_group_search__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RealtimePage = /** @class */ (function () {
    function RealtimePage(realtimeService, toolHelper, navCtrl, modalCtrl, authService, storage) {
        this.realtimeService = realtimeService;
        this.toolHelper = toolHelper;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.storage = storage;
        this.realtimeModel = new __WEBPACK_IMPORTED_MODULE_7__shared__["a" /* RealtimeModel */]();
        this.t = __WEBPACK_IMPORTED_MODULE_6__shared__["l" /* Translations */];
        this.enabled = true;
        this.skip = 0;
        this.take = 30;
        this.loading = true;
    }
    RealtimePage.prototype.ngOnInit = function () {
        this.loginName = '';
    };
    RealtimePage.prototype.ngAfterViewInit = function () {
    };
    RealtimePage.prototype.ngOnDestroy = function () {
        this.subScription && this.subScription.unsubscribe();
    };
    RealtimePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading = true;
        this.realtimeList.routeModels = [];
        setTimeout(function () {
            _this.storage.get('settingtempRealtime').then(function (val) {
                _this.realtimeList.settingTemp = val;
            });
        }, 1000);
        this.getData(0, this.take).subscribe(function (data) {
            _this.realtimeList.createDataList(_this.realtimeModel);
        }, function (err) {
            _this.loading = false;
            var alert = err.statusText ?
                _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                :
                    _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.onDidDismiss(function () {
                _this.authService.logout();
                _this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            });
            alert.present();
        });
    };
    RealtimePage.prototype.ionViewWillLeave = function () {
        this.subScription && this.subScription.unsubscribe();
    };
    RealtimePage.prototype.changeGroup = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__change_group__["a" /* ChangeGroupPage */]);
        profileModal.present();
    };
    RealtimePage.prototype.getData = function (skip, take) {
        var _this = this;
        var fromQuery = this.toolHelper.searchPagger(skip, take, this.header.searchInput, this.header.h.vehicleGroup ? this.header.h.vehicleGroup.Id : 0);
        return this.realtimeService.gets(fromQuery)
            .map(function (data) {
            _this.loading = false;
            if (data.Message) {
                var alert_1 = _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                alert_1.present();
                return false;
            }
            else if (data.StatusCode) {
                var alert_2 = _this.toolHelper.alert(_this.t.getByValueEn(data.StatusCode));
                alert_2.present();
                return false;
            }
            else {
                _this.realtimeModel = _this.realtimeService.mappingToRealtimeModel(data);
                _this.updateData();
                return true;
            }
        });
    };
    RealtimePage.prototype.updateData = function () {
        var _this = this;
        this.subScription && this.subScription.unsubscribe();
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(2000, 1000);
        this.subScription = timer.subscribe(function (t) {
            _this.ticks = 60 - t;
            if (_this.ticks < 1) {
                _this.subScription.unsubscribe();
                _this.getData(0, _this.realtimeList.routeModels.length).subscribe(function (data) {
                    if (data)
                        _this.realtimeList.createDataList(_this.realtimeModel);
                }, function (err) {
                    _this.loading = false;
                    var alert = err.statusText ?
                        _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                        :
                            _this.toolHelper.alert(_this.t.language.ConnectionRefused);
                    alert.onDidDismiss(function () {
                        _this.updateData();
                    });
                    alert.present();
                });
            }
        });
    };
    RealtimePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (!this.enabled || this.realtimeList.routeModels.length >= this.realtimeModel.DataAllLength) {
            infiniteScroll.complete();
            return;
        }
        this.skip += 30;
        this.getData(this.skip, this.take)
            .subscribe(function (res) {
            if (res)
                _this.realtimeList.pushDataList(_this.realtimeModel);
            else
                _this.enabled = false;
            console.log(_this.realtimeList.routeModels.length);
            infiniteScroll.complete();
        }, function (err) {
            _this.loading = false;
            var alert = err.statusText ?
                _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                :
                    _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.onDidDismiss(function () {
                _this.updateData();
            });
            alert.present();
        });
    };
    RealtimePage.prototype.openMap = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__realtime_map_realtime_map__["a" /* RealtimeMapPage */], data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_11__header_group_search__["a" /* HeaderGroupSearchPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__header_group_search__["a" /* HeaderGroupSearchPage */])
    ], RealtimePage.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8__realtime_list_realtime_list__["a" /* RealtimeList */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__realtime_list_realtime_list__["a" /* RealtimeList */])
    ], RealtimePage.prototype, "realtimeList", void 0);
    RealtimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-realtimes',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\realtimes\realtimes.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-group-search [headerName]="\'(\'+ realtimeList.routeModels.length +\'/\'+ realtimeModel.DataAllLength +\')\'"\n\n      (masterEvent)="ionViewWillEnter()"></page-header-group-search>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <page-loading *ngIf="loading" loading=loading></page-loading>\n\n\n\n  <app-realtime-list (listClick)="openMap($event)"></app-realtime-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" [enabled]="enabled" threshold="100px">\n\n    <ion-infinite-scroll-content loadingSpinner="dots" loadingText="{{t.language.Loading}}"></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\realtimes\realtimes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared__["b" /* RealtimeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__shared__["b" /* RealtimeService */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RealtimePage);
    return RealtimePage;
}());

//# sourceMappingURL=realtimes.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (username, password, remember) {
        var _this = this;
        return this.http.getToken('/gettoken', { username: username, password: password, remember: remember })
            .map(function (response) {
            console.log(response);
            return _this.http.setToken(response, username);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        //localStorage.setItem('touchId', JSON.stringify({ token: this.token }));
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    //public static webApiBaseUrl: string = 'http://localhost:6967/api';         
    // public static webApiBaseUrl: string = 'http://192.168.10.3:1313/api';
    // public static webApiBaseUrl: string = 'http://61.91.38.106:1313/api';
    AppConfig.webApiBaseUrl = 'http://203.146.127.231:1313/api';
    return AppConfig;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_model__ = __webpack_require__(867);
/* unused harmony reexport InfoModel */
/* unused harmony reexport LatLngBounds */
/* unused harmony reexport LatLngModel */
/* unused harmony reexport LatLngStatusModel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__map_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__map_model__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_mocked_model__ = __webpack_require__(868);
/* unused harmony reexport MockedMapModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_service__ = __webpack_require__(869);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__map_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPagingModel; });
var SearchPagingModel = /** @class */ (function () {
    function SearchPagingModel() {
    }
    return SearchPagingModel;
}());

//# sourceMappingURL=search-paging-model.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select_options_model__ = __webpack_require__(883);
/* unused harmony reexport OptionModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_model__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__list_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__list_model__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__license_list_mocked_model__ = __webpack_require__(884);
/* unused harmony reexport MockedLicenstList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__license_search_service__ = __webpack_require__(885);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__license_search_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_model__ = __webpack_require__(886);
/* unused harmony reexport SearchModel */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListPagingModel; });
var ListModel = /** @class */ (function () {
    function ListModel() {
        this.CheckBoxSelect = false;
    }
    return ListModel;
}());

var ListPagingModel = /** @class */ (function () {
    function ListPagingModel() {
        this.ListModels = [];
        this.DataAllLength = 0;
    }
    return ListPagingModel;
}());

//# sourceMappingURL=list.model.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_group__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__change_group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_group_mocked_model__ = __webpack_require__(889);
/* unused harmony reexport MockGroupList */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_group_search__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeGroupPage = /** @class */ (function () {
    function ChangeGroupPage(navCtrl, toolHelper, licenseSearchService, navParams) {
        this.navCtrl = navCtrl;
        this.toolHelper = toolHelper;
        this.licenseSearchService = licenseSearchService;
        this.navParams = navParams;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
        this.h = __WEBPACK_IMPORTED_MODULE_3__header_group_search__["a" /* HeaderGroupSearchPage */];
        this.listModels = new __WEBPACK_IMPORTED_MODULE_2__shared__["d" /* ListPagingModel */]();
        this.skip = 0;
        this.take = 30;
        this.enabled = true;
        this.currentGroup = 0;
        this.searchInput = '';
    }
    ChangeGroupPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.h.vehicleGroup)
            this.currentGroup = this.h.vehicleGroup.Id;
        this.getData(0, this.take).subscribe(function (data) {
            if (data)
                _this.listModels = data;
        });
    };
    ChangeGroupPage.prototype.getData = function (skip, take) {
        var _this = this;
        var fromQuery = this.toolHelper.searchPagger(skip, take, this.searchInput);
        return this.licenseSearchService.getVehicleGroup(fromQuery)
            .map(function (data) {
            if (data.Message) {
                var alert = _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                alert.present();
                return null;
            }
            else {
                return data;
            }
        }, function (err) {
            var alert = err.statusText ?
                _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                :
                    _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.present();
            return null;
        });
    };
    ChangeGroupPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (!this.enabled || this.listModels.ListModels.length == this.listModels.DataAllLength) {
            infiniteScroll.complete();
            return;
        }
        this.skip += 30;
        this.getData(this.skip, this.take)
            .subscribe(function (data) {
            if (data) {
                var listModel = data;
                _this.listModels.DataAllLength = listModel.DataAllLength;
                listModel.ListModels.forEach(function (listModel) {
                    _this.listModels.ListModels.push(listModel);
                });
            }
            else
                _this.enabled = false;
            infiniteScroll.complete();
        });
    };
    ChangeGroupPage.prototype.rowClick = function (data) {
        this.h.vehicleGroup = data;
        this.navCtrl.pop();
    };
    ChangeGroupPage.prototype.onInput = function (event) {
        this.ionViewWillEnter();
    };
    ChangeGroupPage.prototype.onCancel = function (event) {
        this.searchInput = '';
        this.showSearch = false;
        this.ionViewWillEnter();
    };
    ChangeGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-group',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\change-group\change-group.html"*/'<!--\n\n  Generated template for the ChangeGroup page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-modal *ngIf="!showSearch" [headerName]="t.language.SelectGroup + \'(\'+ listModels.ListModels.length +\'/\'+ listModels.DataAllLength +\')\'"></page-header-modal>\n\n    <ion-buttons end *ngIf="!showSearch">\n\n      <button ion-button strong (click)="showSearch = !showSearch">\n\n      <ion-icon name="search"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-searchbar showCancelButton *ngIf="showSearch" [(ngModel)]="searchInput" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"\n\n      [debounce]=777>\n\n    </ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div *ngIf="listModels">\n\n    <ion-card radio-group [(ngModel)]="currentGroup" *ngFor="let item of listModels.ListModels">\n\n      <ion-item>\n\n        <ion-label>{{item.Id == 0 ? t.language.All : item.Name}}</ion-label>\n\n        <ion-radio value={{item.Id}} checked="{{currentGroup == item.Id}}" (ionSelect)="rowClick(item)"></ion-radio>\n\n      </ion-item>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\change-group\change-group.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared__["b" /* LicenseSearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* LicenseSearchService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChangeGroupPage);
    return ChangeGroupPage;
}());

//# sourceMappingURL=change-group.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__realtime_mocked_model__ = __webpack_require__(496);
/* unused harmony reexport MockedRealtime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__realtime_model__ = __webpack_require__(497);
/* unused harmony reexport LatLngModel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__realtime_model__["a"]; });
/* unused harmony reexport RouteModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realtime_service__ = __webpack_require__(498);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__realtime_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MockedRealtime */
var mockRoutes = [
    {
        License: 'AA-1111',
        Status: 'start',
        Speed: 0,
        StatusDate: '2015-11-06T07:21:25.510Z',
        LastDate: '2015-11-06T07:21:25.510Z',
        Address: 'Bangkok',
        CustomerBoxId: 1,
        Head: 5,
        CheckTemp1: true,
        CheckTemp2: false,
        Temp1: '10',
        Temp2: '',
        Paths: [
            {
                Lat: 19.0001,
                Lng: 105.0215
            }
        ]
    },
    {
        License: 'BB-1212',
        Status: 'run',
        Speed: 90,
        StatusDate: '2014-12-20T00:48:40.276Z',
        LastDate: '2014-12-20T00:48:40.276Z',
        Address: 'Bangkok',
        CustomerBoxId: 2,
        Head: 90,
        CheckTemp1: true,
        CheckTemp2: false,
        Temp1: '-5',
        Temp2: '',
        Paths: [
            {
                Lat: 17.0001,
                Lng: 95.0215
            }
        ]
    },
    {
        License: 'CC-2222',
        Status: 'stop',
        Speed: 0,
        StatusDate: '2015-09-29T04:33:38.544Z',
        LastDate: '2014-12-20T00:48:40.276Z',
        Address: 'Bangkok',
        CustomerBoxId: 3,
        Head: 0,
        CheckTemp1: true,
        CheckTemp2: false,
        Temp1: '',
        Temp2: '0',
        Paths: [
            {
                Lat: 15.0001,
                Lng: 100.0215
            }
        ]
    }
];
var realtimeModel = {
    RouteList: mockRoutes,
    DataAllLength: mockRoutes.length
};
var MockedRealtime = realtimeModel;
//# sourceMappingURL=realtime.mocked.model.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimeModel; });
/* unused harmony export RouteModel */
/* unused harmony export LatLngModel */
var RealtimeModel = /** @class */ (function () {
    function RealtimeModel() {
        this.RouteList = [];
        this.DataAllLength = 0;
    }
    return RealtimeModel;
}());

var RouteModel = /** @class */ (function () {
    function RouteModel() {
    }
    return RouteModel;
}());

var LatLngModel = /** @class */ (function () {
    function LatLngModel() {
    }
    return LatLngModel;
}());

//# sourceMappingURL=realtime.model.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealtimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_client__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RealtimeService = /** @class */ (function () {
    function RealtimeService(http, statusService, toolHelper) {
        this.http = http;
        this.statusService = statusService;
        this.toolHelper = toolHelper;
        this.t = __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* Translations */];
    }
    RealtimeService.prototype.mappingToRealtimeModel = function (realtimeModel) {
        var _this = this;
        var degree = [];
        for (var i = 0; i < 360;) {
            degree.push(i);
            if (i % 3 === 0) {
                i = i + 22;
            }
            else {
                i = i + 23;
            }
        }
        realtimeModel.RouteList.forEach(function (h) {
            h.Up = _this.toolHelper.getTimeUp(h.LastDate);
            h.StatusDate = _this.toolHelper.setFormatDatetime(h.StatusDate);
        });
        return realtimeModel;
    };
    RealtimeService.prototype.mappingToMapModel = function (realtimeModel) {
        var _this = this;
        var markerModels = [];
        realtimeModel.RouteList.forEach(function (model) {
            if (model.Paths[0]) {
                var marker = _this.mappingToMarkerModel(model);
                markerModels.push(marker);
            }
        });
        var mapModel = new __WEBPACK_IMPORTED_MODULE_4__shared__["f" /* MapModel */]();
        mapModel.markerModels = markerModels;
        return mapModel;
    };
    RealtimeService.prototype.mappingToMarkerModel = function (model) {
        var marker = new __WEBPACK_IMPORTED_MODULE_4__shared__["g" /* MarkerModel */]();
        marker.Lat = model.Paths[0].Lat;
        marker.Lng = model.Paths[0].Lng;
        marker.IconPath = this.statusService.getIconUrl(model);
        marker.Info = model;
        return marker;
    };
    RealtimeService.prototype.get = function (value) {
        return this.http.get("/realtime/get/" + value);
    };
    RealtimeService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].from(error.message || error);
    };
    /*private datetimeFormat(date): string {

        let dateType = new Date(date); // +  to convert a string to a number in TypeScript

        return moment(dateType).format('DD/MM/YYYY HH:mm');
    }*/
    RealtimeService.prototype.gets = function (fromQuery) {
        var _this = this;
        return this.get("paging/" + this.t.language.Lang + "?" + fromQuery)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.handleError;
            }
        });
    };
    RealtimeService.prototype.getAlone = function (id) {
        var _this = this;
        return this.get("alone/" + this.t.language.Lang + "/" + id)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.handleError;
            }
        });
    };
    RealtimeService.prototype.getsByDate = function (date) {
        var _this = this;
        return this.get(__WEBPACK_IMPORTED_MODULE_3_moment_moment__(date).format())
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.handleError;
            }
        });
    };
    RealtimeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__http_client__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["i" /* StatusService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["j" /* ToolHelper */]])
    ], RealtimeService);
    return RealtimeService;
}());

//# sourceMappingURL=realtime.service.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryLicensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__histories__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_group_search__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryLicensePage = /** @class */ (function () {
    function HistoryLicensePage(navCtrl, navParams, toolHelper, licenseSearchService, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toolHelper = toolHelper;
        this.licenseSearchService = licenseSearchService;
        this.app = app;
        this.t = __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* Translations */];
        this.listModels = new __WEBPACK_IMPORTED_MODULE_3__shared__["d" /* ListPagingModel */]();
        this.search = '';
        this.skip = 0;
        this.take = 30;
        this.enabled = true;
        this.loading = true;
    }
    HistoryLicensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LicenseListPage');
    };
    HistoryLicensePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var licenseModel = JSON.parse(localStorage.getItem('licenseModel'));
        if (licenseModel) {
            localStorage.removeItem('licenseModel');
            this.ChangePage(licenseModel);
        }
        this.getData(0, this.take).subscribe(function (data) {
            if (data)
                _this.listModels = data;
        }, function (err) {
            _this.loading = false;
            var alert = err.statusText ?
                _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                :
                    _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.present();
            alert.onDidDismiss(function () {
                _this.getData(_this.skip, _this.take).subscribe();
            });
            return null;
        });
    };
    HistoryLicensePage.prototype.getData = function (skip, take) {
        var _this = this;
        var fromQuery = this.toolHelper.searchPagger(skip, take, this.header.searchInput, this.header.h.vehicleGroup ? this.header.h.vehicleGroup.Id : 0);
        return this.licenseSearchService.getLicense(fromQuery)
            .map(function (data) {
            _this.loading = false;
            if (data.Message) {
                var alert = _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                alert.present();
                return null;
            }
            else if (data.StatusCode) {
                var alert = _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                alert.present();
                return null;
            }
            else {
                return data;
            }
        });
    };
    HistoryLicensePage.prototype.ChangePage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__histories__["a" /* HistoriesPage */], data);
    };
    HistoryLicensePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (!this.enabled || this.listModels.ListModels.length == this.listModels.DataAllLength) {
            infiniteScroll.complete();
            return;
        }
        this.skip += 30;
        this.getData(this.skip, this.take)
            .subscribe(function (data) {
            if (data) {
                var listModels = data;
                _this.listModels.DataAllLength = listModels.DataAllLength;
                listModels.ListModels.forEach(function (listModel) {
                    _this.listModels.ListModels.push(listModel);
                });
            }
            else
                _this.enabled = false;
            infiniteScroll.complete();
        }, function (err) {
            _this.loading = false;
            var alert = err.statusText ?
                _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                :
                    _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.present();
            alert.onDidDismiss(function () {
                _this.getData(_this.skip, _this.take).subscribe();
            });
            return null;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__header_group_search__["a" /* HeaderGroupSearchPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__header_group_search__["a" /* HeaderGroupSearchPage */])
    ], HistoryLicensePage.prototype, "header", void 0);
    HistoryLicensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history-license',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\history-license\history-license.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-group-search [headerName]="\'(\'+ listModels.ListModels.length +\'/\'+ listModels.DataAllLength +\')\'"\n\n      (masterEvent)="ionViewWillEnter()"></page-header-group-search>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <page-loading *ngIf="loading" loading=loading></page-loading>\n\n    <div *ngIf="!loading">\n\n      <ion-list lines class="list">\n\n        <ion-card *ngFor="let item of listModels.ListModels" (click)="ChangePage(item)">\n\n          <button ion-item>{{item.Name}}</button>\n\n        </ion-card>\n\n      </ion-list>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" [enabled]="enabled" threshold="100px">\n\n        <ion-infinite-scroll-content loadingSpinner="dots" loadingText="{{t.language.Loading}}"></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\history-license\history-license.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* LicenseSearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* LicenseSearchService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], HistoryLicensePage);
    return HistoryLicensePage;
}());

//# sourceMappingURL=history-license.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(369);
/* unused harmony reexport AppConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__http_client__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoriesPage = /** @class */ (function () {
    function HistoriesPage(navCtrl, navParams, toolHelper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toolHelper = toolHelper;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
        this.licenseModel = new __WEBPACK_IMPORTED_MODULE_2__shared__["c" /* ListModel */]();
    }
    HistoriesPage.prototype.ionViewDidLoad = function () {
        this.licenseModel = this.navParams.data;
        this.licenseSearchComponent.id = this.licenseModel.Id;
    };
    HistoriesPage.prototype.ChangePage = function () {
        this.searchModel = this.licenseSearchComponent.get();
        this.searchModel.License = this.licenseModel.Name;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__history__["a" /* HistoryPage */], this.searchModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LicenseSearchComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LicenseSearchComponent */])
    ], HistoriesPage.prototype, "licenseSearchComponent", void 0);
    HistoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-histories',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\histories.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <ion-title>\n\n      {{licenseModel.Name}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <app-license-search [toolHelper]="toolHelper" (masterEvent)="ChangePage()"></app-license-search>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\histories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["j" /* ToolHelper */]])
    ], HistoriesPage);
    return HistoriesPage;
}());

//# sourceMappingURL=histories.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history__ = __webpack_require__(502);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__history__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_list__ = __webpack_require__(503);
/* unused harmony reexport HistoryList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_map__ = __webpack_require__(505);
/* unused harmony reexport HistoryMapPage */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_list__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_map__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, modalCtrl, navParams, app, toolHelper, historyService, storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.app = app;
        this.toolHelper = toolHelper;
        this.historyService = historyService;
        this.storage = storage;
        this.t = __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* Translations */];
        this.enabled = true;
        this.skip = 0;
        this.take = 50;
        this.showSummary = false;
        this.loading = true;
    }
    HistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.storage.get('settingtempHistory').then(function (val) {
                _this.historyList.settingTemp = val;
            });
        }, 1000);
        if (this.lang != this.t.language.Lang) {
            this.lang = this.t.language.Lang;
            this.getData(0, this.take).subscribe(function (data) {
                if (data) {
                    _this.historyList.createDataList(data);
                }
            });
        }
    };
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.lang = this.t.language.Lang;
        this.searchModel = this.navParams.data;
        this.getData(0, this.take, true).subscribe(function (data) {
            if (data) {
                _this.historyModel = data;
                _this.historyList.createDataList(data);
                _this.reloadData();
            }
        });
    };
    HistoryPage.prototype.reloadData = function () {
        var _this = this;
        console.log(this.historyModel.HistoryEvents.length);
        if (this.historyModel.HistoryEvents.length > 30 || this.historyModel.DataAllLength == this.historyModel.HistoryEvents.length)
            return;
        this.skip += 50;
        this.getData(this.skip, this.take)
            .subscribe(function (data) {
            if (data)
                _this.historyList.pushDataList(data);
            else
                _this.enabled = false;
            _this.reloadData();
        });
    };
    HistoryPage.prototype.getData = function (skip, take, getTotal) {
        var _this = this;
        this.headerName = "" + this.searchModel.License;
        this.Date = __WEBPACK_IMPORTED_MODULE_3_moment_moment__(this.searchModel.StartDate).format('DD/MM/YYYY') + " - \n    " + __WEBPACK_IMPORTED_MODULE_3_moment_moment__(this.searchModel.EndDate).format('DD/MM/YYYY');
        return this.historyService.gets(this.searchModel.Id, this.searchModel.StartDate, this.searchModel.EndDate, skip, take, getTotal)
            .map(function (data) {
            _this.loading = false;
            if (data.Message) {
                var alert_1 = _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                alert_1.onDidDismiss(function () {
                    _this.navCtrl.pop();
                });
                alert_1.present();
                return null;
            }
            else if (data.StatusCode) {
                var alert_2 = _this.toolHelper.alert(_this.t.getByValueEn(data.StatusCode));
                alert_2.onDidDismiss(function () {
                    _this.navCtrl.pop();
                });
                alert_2.present();
                return null;
            }
            else {
                return _this.historyService.mappingDateToHistoryModel(data);
            }
        }, function (err) {
            _this.loading = false;
            var alert = err.statusText ?
                _this.toolHelper.alertEvent(_this.t.getByValueEn(err.statusText), _this.navCtrl.pop())
                :
                    _this.toolHelper.alertEvent(_this.t.language.ConnectionRefused, _this.navCtrl.pop());
            alert.present();
            return null;
        });
    };
    HistoryPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('doInfinite');
        if (!this.enabled || !this.historyModel || this.historyModel.HistoryEvents.length >= this.historyModel.DataAllLength) {
            infiniteScroll.complete();
            return;
        }
        this.skip += 50;
        this.getData(this.skip, this.take)
            .subscribe(function (data) {
            if (data)
                _this.historyList.pushDataList(data);
            else
                _this.enabled = false;
            infiniteScroll.complete();
        });
    };
    HistoryPage.prototype.openMap = function (historyEventsModel) {
        console.log('rowClick');
        var markerModel = this.historyService.historyEventsMappingMarkerModel(historyEventsModel, this.historyModel.License, historyEventsModel.Length);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__history_map__["a" /* HistoryMapPage */], {
            position: markerModel,
            searchModel: this.searchModel
        });
        profileModal.present();
        /*this.navCtrl.push(HistoryMapPage,
          {
            position: markerModel,
            searchModel: this.searchModel
          });*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__history_list__["a" /* HistoryList */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__history_list__["a" /* HistoryList */])
    ], HistoryPage.prototype, "historyList", void 0);
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\history\history.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <ion-title>\n\n      {{headerName}}({{historyModel ? historyModel.HistoryEvents.length : 0}}/{{historyModel ? historyModel.DataAllLength : 0}})\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <page-loading *ngIf="loading" loading=loading></page-loading>\n\n\n\n  <app-history-list (listClick)="openMap($event)"></app-history-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" [enabled]="enabled" threshold="100px">\n\n    <ion-infinite-scroll-content loadingSpinner="dots" loadingText="{{t.language.Loading}}"></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n  <ion-fab left bottom >\n\n    <button ion-fab color="bsup">{{t.language.Total}}</button>\n\n    <ion-fab-list side="top">\n\n      <button ion-button round small full color="bsup">{{t.language.Parkingtime}}: {{historyModel && historyModel.TimeParkingTotal}}</button>\n\n      <button ion-button round small full color="bsup">{{t.language.Stoppingtime}}: {{historyModel && historyModel.TimeStoppingTotal}}</button>\n\n      <button ion-button round small full color="bsup">{{t.language.Runningtime}}: {{historyModel && historyModel.TimeRunningTotal}}</button>\n\n      <button ion-button round small full color="bsup">{{t.language.Speed}}: {{historyModel && historyModel.AvgSpeed}} {{t.language.KmH}}</button>\n\n      <button ion-button round small full color="bsup">{{t.language.Length}}: {{historyModel && historyModel.LengthTotal}} {{t.language.Km}}</button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\history\history.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared__["b" /* HistoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* HistoryService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history_list__ = __webpack_require__(504);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__history_list__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryList = /** @class */ (function () {
    function HistoryList() {
        this.listClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.historyEventModels = [];
        this.t = __WEBPACK_IMPORTED_MODULE_1__shared__["l" /* Translations */];
    }
    HistoryList.prototype.ngOnInit = function () {
    };
    HistoryList.prototype.createDataList = function (historyModel) {
        this.historydbModel = historyModel;
        this.historyEventModels = historyModel.HistoryEvents;
    };
    HistoryList.prototype.pushDataList = function (historyModel) {
        var _this = this;
        historyModel.HistoryEvents.forEach(function (h) {
            _this.historyEventModels.push(h);
        });
    };
    HistoryList.prototype.rowClick = function (item) {
        this.listClick.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], HistoryList.prototype, "listClick", void 0);
    HistoryList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-history-list',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\history\history-list\history-list.html"*/'<ion-list>\n\n  <ion-card *ngFor="let item of historyEventModels" (click)="rowClick(item)" color="{{\n\n          item.Status == \'Running\' ||  item.Status == \'IgOn\' || item.Status == \'Overspeed\' ? \'running\' : \n\n          item.Status == \'Idling\' || item.Status == \'IdlingStart\' ? \'idling\' : \'\'\n\n          }}">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col class="font-head"><b>{{item.StatusDate}}</b>\n\n        </ion-col>\n\n        <ion-col col-6 align="right" class="{{item.Status == \'Overspeed\' ? \'font-overspeed\': \'\'}}">\n\n          <b>{{t.language[item.Status]}}</b>\n\n          <ion-col *ngIf="item.Speed > 5" class="font-detail">\n\n            <ion-icon name="speedometer"></ion-icon> {{item.Speed}}\n\n          </ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-3 *ngIf="settingTemp">\n\n          <ion-col *ngIf="historydbModel.CheckTemp1" class="font-detail">\n\n            <ion-icon name="thermometer"></ion-icon> 1 ({{item.Temp1}})\n\n          </ion-col>\n\n          <ion-col *ngIf="historydbModel.CheckTemp2" class="font-detail">\n\n            <ion-icon name="thermometer"></ion-icon> 2 ({{item.Temp2}})\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col align="right">\n\n          <ion-col class="font-detail">{{item.Address}}</ion-col>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-list>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\history\history-list\history-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HistoryList);
    return HistoryList;
}());

//# sourceMappingURL=history-list.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history_map__ = __webpack_require__(506);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__history_map__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryMapPage = /** @class */ (function () {
    function HistoryMapPage(navCtrl, navParams, toolHelper, historyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toolHelper = toolHelper;
        this.historyService = historyService;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
    }
    HistoryMapPage.prototype.ngOnInit = function () {
        console.log(this.navParams.data);
        this.mapComponent.mapId = 'historyMap';
        this.markerPosition = this.navParams.data.position;
        this.searchModel = this.navParams.data.searchModel;
        this.headerName = this.markerPosition.Info.License + ": \n    " + this.markerPosition.Info.StatusDate;
    };
    HistoryMapPage.prototype.ionViewDidLoad = function () {
        this.toolHelper.presentLoading();
        this.mapComponent.addMarker(this.markerPosition);
        this.getData();
    };
    HistoryMapPage.prototype.ionViewWillEnter = function () {
    };
    HistoryMapPage.prototype.ionViewWillLeave = function () {
    };
    HistoryMapPage.prototype.ionViewCanLeave = function () {
        this.mapComponent.mapService.toast.dismiss();
    };
    HistoryMapPage.prototype.getData = function () {
        var _this = this;
        return this.historyService.getMarkers(this.searchModel).subscribe(function (data) {
            _this.toolHelper.loader.dismiss();
            if (data.Message) {
                var alert_1 = _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                alert_1.onDidDismiss(function () {
                    _this.navCtrl.pop();
                });
                alert_1.present();
            }
            else if (data.StatusCode) {
                var alert_2 = _this.toolHelper.alert(_this.t.getByValueEn(data.StatusCode));
                alert_2.onDidDismiss(function () {
                    _this.navCtrl.pop();
                });
                alert_2.present();
            }
            else {
                _this.mapComponent.addPolyline(data);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared__["e" /* MapComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* MapComponent */])
    ], HistoryMapPage.prototype, "mapComponent", void 0);
    HistoryMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history-map',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\history\history-map\history-map.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-modal [headerName]="headerName"></page-header-modal>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<app-map></app-map>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\histories\history\history-map\history-map.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HistoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* HistoryService */]])
    ], HistoryMapPage);
    return HistoryMapPage;
}());

//# sourceMappingURL=history-map.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_language__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_password__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settingreport_select__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_help__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MorePage = /** @class */ (function () {
    function MorePage(navCtrl, navParams, actionSheetCtrl, authService, app, viewCtrl, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.authService = authService;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.t = __WEBPACK_IMPORTED_MODULE_7__shared__["l" /* Translations */];
        this.settingpage = '';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var roles = currentUser.roles;
        roles.forEach(function (role) {
            if (!role.toLowerCase().includes("realtime")) {
                _this.showVehicleSetting = true;
                _this.showTempHistory = true;
            }
            else if (role.toLowerCase().includes("history"))
                _this.showTempHistory = true;
        });
    }
    MorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('settingtempRealtime').then(function (val) {
            _this.tempRealtime = val;
        });
        this.storage.get('settingtempHistory').then(function (val) {
            _this.tempHistory = val;
        });
    };
    MorePage.prototype.ionViewWillLeave = function () {
        this.storage.set('settingtempRealtime', this.tempRealtime);
        this.storage.set('settingtempHistory', this.tempHistory);
    };
    MorePage.prototype.changeLanguage = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__change_language__["a" /* ChangeLanguagePage */]);
        profileModal.present();
    };
    MorePage.prototype.changePassword = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__change_password__["a" /* ChangePasswordPage */]);
        profileModal.present();
    };
    MorePage.prototype.vehicleSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settingreport_select__["a" /* SettingreportSelectPage */]);
    };
    MorePage.prototype.logout = function () {
        var _this = this;
        var alert = this.actionSheetCtrl.create({
            title: this.t.language.SureLogOut,
            buttons: [
                {
                    text: this.t.language.Logout,
                    handler: function () {
                        _this.authService.logout();
                        _this.viewCtrl.dismiss();
                        //this.storageclear();
                        //this.navCtrl.setRoot(LoginPage);
                        //this.navCtrl.parent.parent.setRoot(LoginPage);
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]);
                    }
                },
                {
                    text: this.t.language.Close,
                    role: 'cancel',
                }
            ]
        });
        alert.present();
    };
    MorePage.prototype.storageclear = function () {
        /* this.storage.clear().then(() => {
           console.log('Keys have been cleared');
         });*/
        this.storage.set('introShown', false);
        /*this.storage.get('introShown').then(introShown => {
    
        });*/
    };
    MorePage.prototype.helpSlides = function () {
        var helpModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_help__["a" /* HelpPage */]);
        helpModal.present();
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\more\more.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <ion-title>{{t.language.More}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      {{t.language.HiddenAndShowTemp}}\n\n    </ion-list-header>\n\n    <ion-item >\n\n      <ion-avatar item-left>\n\n        <ion-icon class=\'icon-btn\' name="ios-thermometer"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-label>{{t.language.Realtime}}</ion-label>\n\n      <ion-toggle [(ngModel)]="tempRealtime" ></ion-toggle>\n\n    </ion-item>\n\n    <ion-item *ngIf="showTempHistory">\n\n      <ion-avatar item-left>\n\n        <ion-icon class=\'icon-btn\' name="ios-thermometer"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-label>{{t.language.History}}</ion-label>\n\n      <ion-toggle [(ngModel)]="tempHistory"></ion-toggle>\n\n    </ion-item>\n\n    <ion-list-header>\n\n      {{t.language.Setting}}\n\n    </ion-list-header>\n\n    <ion-item (click)="vehicleSetting()" *ngIf="showVehicleSetting">\n\n      <ion-avatar item-left>\n\n        <ion-icon class=\'icon-btn\' name="md-settings"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-label>{{t.language.VehicleSetting}}</ion-label>\n\n    </ion-item>\n\n    <ion-item (click)="changeLanguage()">\n\n      <ion-avatar item-left>\n\n        <ion-icon class=\'icon-btn\' name="text"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-label>{{t.language.ChangeLanguage}}</ion-label>\n\n      <ion-label style="text-align: right;" color="bsup">{{t.language.Language}}</ion-label>\n\n    </ion-item>\n\n    <ion-item (click)="changePassword()">\n\n      <ion-avatar item-left>\n\n        <ion-icon class=\'icon-btn\' name="lock"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-label>{{t.language.ChangePassword}}</ion-label>\n\n    </ion-item>\n\n    <ion-item (click)="helpSlides()">\n\n      <ion-avatar item-left>\n\n        <ion-icon class=\'icon-btn\' name="book"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-label>{{t.language.Help}}</ion-label>\n\n    </ion-item>\n\n\n\n\n\n    <ion-list-header>\n\n    </ion-list-header>\n\n    <ion-item (click)="logout()">\n\n      <ion-avatar item-left>\n\n        <ion-icon class=\'icon-btn\' name="log-out"></ion-icon>\n\n      </ion-avatar>\n\n      <ion-label>{{t.language.Logout}}</ion-label>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\more\more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeLanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeLanguagePage = /** @class */ (function () {
    function ChangeLanguagePage(navCtrl, navParams, translationManage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translationManage = translationManage;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
    }
    ChangeLanguagePage.prototype.ionViewDidLoad = function () {
        this.language = this.t.language.Lang;
    };
    ChangeLanguagePage.prototype.save = function () {
        this.t.language = this.translationManage.get(this.language);
        this.navCtrl.pop();
    };
    ChangeLanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-language',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\change-language\change-language.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-modal [headerName]="t.language.ChangeLanguage"></page-header-modal>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card radio-group [(ngModel)]="language">\n\n    <ion-item>\n\n      <ion-label>ไทย</ion-label>\n\n      <ion-radio value="th"></ion-radio>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card radio-group [(ngModel)]="language">\n\n    <ion-item>\n\n      <ion-label>English</ion-label>\n\n      <ion-radio value="en"></ion-radio>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-grid>\n\n    <button ion-button round full color="bsup" (click)="save()" [disabled]="t.language.Lang == language">{{t.language.Done}}</button>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\change-language\change-language.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* TranslationManage */]])
    ], ChangeLanguagePage);
    return ChangeLanguagePage;
}());

//# sourceMappingURL=change-language.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, changePasswordService, toolHelper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changePasswordService = changePasswordService;
        this.toolHelper = toolHelper;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
        this.model = new __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* AccountModel */]();
        this.loading = false;
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser && currentUser.username;
    };
    ChangePasswordPage.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.changePasswordService.changePassword(this.model).subscribe(function (data) {
            _this.loading = false;
            if (data)
                _this.navCtrl.pop();
            else
                _this.error = true;
        }, function (error) {
            _this.loading = false;
            var alert = _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.present();
        });
    };
    ChangePasswordPage.prototype.onInput = function () {
        this.error = false;
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\change-password\change-password.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-modal [headerName]="t.language.ChangePassword"></page-header-modal>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <page-loading *ngIf="loading" loading=loading></page-loading>\n\n    <ion-row *ngIf="!loading">\n\n      <ion-card-header>\n\n        <ion-label color="bsup">{{t.language.Username}}</ion-label>\n\n        <ion-label>{{username}}</ion-label>\n\n      </ion-card-header>\n\n      <ion-item>\n\n        <ion-label color="bsup" floating>{{t.language.CurrentPassword}}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="model.CurrentPassword" [class.invalid]="error" (input)=\'onInput()\'></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="error">\n\n        <p>{{t.language.Password}}{{t.language.DoNot}}{{t.language.Match}}</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="bsup" floating>{{t.language.NewPassword}}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="model.NewPassword"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="bsup" floating>{{t.language.ReNewPassword}}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="model.ReNewPassword" [class.invalid]="model.NewPassword != model.ReNewPassword"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n    <ion-row>\n\n      <button ion-button round full color="bsup" (click)="save()" [disabled]="!model.CurrentPassword || !model.NewPassword || !model.ReNewPassword || error  ||model.NewPassword != model.ReNewPassword">{{t.language.Done}}</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\change-password\change-password.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* ChangePasswordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* ChangePasswordService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["j" /* ToolHelper */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_password_service__ = __webpack_require__(900);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__change_password_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_model__ = __webpack_require__(901);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__account_model__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingreportSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settingreport_detail_settingreport_detail__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingreportSelectPage = /** @class */ (function () {
    function SettingreportSelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
    }
    SettingreportSelectPage.prototype.ionViewDidLoad = function () {
    };
    SettingreportSelectPage.prototype.changePage = function () {
        var licenseId = this.multiselectLicenseComponent.id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settingreport_detail_settingreport_detail__["a" /* SettingreportDetailPage */], {
            licenseIds: licenseId.toString()
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared__["h" /* MultiselectLicenseComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* MultiselectLicenseComponent */])
    ], SettingreportSelectPage.prototype, "multiselectLicenseComponent", void 0);
    SettingreportSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settingreport-select',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\settingreport-select\settingreport-select.html"*/'<multiselect-license [headerName]="t.language.Setting" (masterEvent)="changePage()"></multiselect-license>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\settingreport-select\settingreport-select.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingreportSelectPage);
    return SettingreportSelectPage;
}());

//# sourceMappingURL=settingreport-select.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingreportDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settingreport__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SettingreportDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SettingreportDetailPage = /** @class */ (function () {
    function SettingreportDetailPage(navCtrl, navParams, app, settingReportService, toolHelper, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.settingReportService = settingReportService;
        this.toolHelper = toolHelper;
        this.alertCtrl = alertCtrl;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__settingreport__["b" /* SettingreportModel */]();
        this.t = __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* Translations */];
        this.searchInput = '';
        this.licenseIds = navParams.get('licenseIds');
    }
    SettingreportDetailPage.prototype.ionViewDidEnter = function () {
        this.getData(this.licenseIds);
    };
    SettingreportDetailPage.prototype.vehicleSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settingreport__["c" /* SettingreportPage */], { Ids: this.licenseIds });
    };
    SettingreportDetailPage.prototype.getData = function (vehicleIds) {
        var _this = this;
        this.model.LicenseIds = vehicleIds;
        this.settingReportService.getVehicleDetail(this.model)
            .subscribe(function (data) {
            if (data) {
                _this.listModels = data;
            }
            else if (data.Message) {
                _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
            }
            else {
                return true;
            }
        }, function (err) {
            _this.toolHelper.loader.dismiss();
            var alert = err.statusText ?
                _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                :
                    _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.present().then(function (success) {
                //this.app.getRootNav().setRoot(LoginPage);
            });
        });
    };
    SettingreportDetailPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
        }
        else {
            data.showDetails = true;
        }
    };
    SettingreportDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settingreport-detail',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\settingreport-detail\settingreport-detail.html"*/'<!--\n\n  Generated template for the SettingreportDetail page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="bsup">\n\n    <ion-title>{{t.language.VehicleSetting}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-card padding *ngFor="let item of listModels" (click)="toggleDetails(item)">\n\n\n\n      <ion-card-header>\n\n        <ion-row>\n\n          <b>{{item.License}}</b>\n\n        </ion-row>\n\n        <ion-row>\n\n          <p>{{t.language.OverSpeedMax}} {{item.OverSpeedMax}} {{t.language.KmH}}</p>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content *ngIf="item.showDetails">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <h3 col-10>{{t.language.OverSpeedTimes}}</h3>\n\n            <p col-2 text-right>{{item.OverSpeedMinute}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-10>{{t.language.IdleTimes}}</h3>\n\n            <p col-2 text-right>{{item.IdleMinute}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-10>{{t.language.ParkTimes}}</h3>\n\n            <p col-2 text-right>{{item.ParkMinute}}</p>\n\n          </ion-row>\n\n\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-fab center bottom>\n\n    <button ion-fab round full color="bsup"(click)="vehicleSetting()">{{t.language.Setting}}</button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\settingreport-detail\settingreport-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__settingreport__["a" /* SettingReportService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__settingreport__["a" /* SettingReportService */], __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ToolHelper */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SettingreportDetailPage);
    return SettingreportDetailPage;
}());

//# sourceMappingURL=settingreport-detail.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingreportPage = /** @class */ (function () {
    function SettingreportPage(navCtrl, navParams, app, toolHelper, settingreportService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.toolHelper = toolHelper;
        this.settingreportService = settingreportService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* SettingreportModel */]();
        this.t = __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* Translations */];
        this.loading = false;
        this.licenseIds = navParams.get('Ids');
    }
    SettingreportPage.prototype.ionViewDidLoad = function () {
    };
    SettingreportPage.prototype.saveSetting = function () {
        var _this = this;
        this.loading = true;
        this.model.LicenseIds = this.licenseIds;
        console.log(this.model);
        this.settingreportService.saveSetting(this.model).subscribe(function (data) {
            _this.loading = false;
            if (data)
                _this.navCtrl.pop();
            else
                _this.error = true;
        });
    };
    SettingreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settingreport',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\settingreport\settingreport.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="bsup">\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <page-loading *ngIf="loading" loading=loading></page-loading>\n\n  <ion-grid *ngIf="!loading">\n\n    <ion-item>\n\n      <ion-label color="bsup" floating>{{t.language.OverSpeedMax}} {{t.language.KmH}}</ion-label>\n\n      <ion-input type="number" min="0" [(ngModel)]="model.OverSpeedMax"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="bsup" floating>{{t.language.OverSpeedTimes}}</ion-label>\n\n      <ion-input type="number" min="0" [(ngModel)]="model.OverSpeedMinute"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="bsup" floating>{{t.language.IdleTimes}}</ion-label>\n\n      <ion-input type="number" min="0" [(ngModel)]="model.IdleMinute"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="bsup" floating>{{t.language.ParkTimes}}</ion-label>\n\n      <ion-input type="number" min="0" [(ngModel)]="model.ParkMinute"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-button round full color="bsup" (click)="saveSetting()">{{t.language.Save}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\settingreport\settingreport.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* SettingReportService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ToolHelper */], __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* SettingReportService */]])
    ], SettingreportPage);
    return SettingreportPage;
}());

//# sourceMappingURL=settingreport.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingReportService = /** @class */ (function () {
    function SettingReportService(http) {
        this.http = http;
    }
    SettingReportService.prototype.getVehicleDetail = function (vehicleIds) {
        var _this = this;
        return this.http.put("/Vehicle/GetVehicleSettingList/", vehicleIds)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.handleError;
            }
        });
    };
    SettingReportService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].from(error.message || error);
    };
    SettingReportService.prototype.saveSetting = function (data) {
        return this.http.put('/Vehicle/EditVehicleSettingList', data)
            .map(function (response) {
            var model = response;
            if (model) {
                return model;
            }
        });
    };
    SettingReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_client__["a" /* HttpClient */]])
    ], SettingReportService);
    return SettingReportService;
}());

//# sourceMappingURL=settingreport.service.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingreportModel; });
/* unused harmony export SettingreportListModel */
var SettingreportModel = /** @class */ (function () {
    function SettingreportModel() {
        this.showDetails = false;
    }
    return SettingreportModel;
}());

var SettingreportListModel = /** @class */ (function () {
    function SettingreportListModel() {
        this.SettingreportModel = [];
    }
    return SettingreportListModel;
}());

//# sourceMappingURL=settingreport.model.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MockSettingreportModel */
var MockSettingreportModel = [
    {
        "Id": 1,
        "License": "1ฒณ-4139",
        "OverSpeedMinute": 0,
        "OverSpeedMax": 0,
        "IdleMinute": 0,
        "ParkMinute": 0
    },
    {
        "Id": 2,
        "License": "1ฒษ-4957",
        "OverSpeedMinute": 0,
        "OverSpeedMax": 0,
        "IdleMinute": 0,
        "ParkMinute": 0
    }
];
//# sourceMappingURL=settingreport.mocked.model.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__help__ = __webpack_require__(519);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__help__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, storage, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.loginimage = "assets/images/help_slides_images/n_1.jpg";
        this.realtimeimage = "assets/images/help_slides_images/n_3.jpg";
        this.realtimeimage1 = "assets/images/help_slides_images/n_4.jpg";
        this.realtimeimage2 = "assets/images/help_slides_images/n_7.jpg";
        this.realtimeimage3 = "assets/images/help_slides_images/n_9.jpg";
        this.realtimeimage4 = "assets/images/help_slides_images/n_12.jpg";
        storage.get('introShown').then(function (result) {
            _this.shownTabPage = result;
        });
        this.image = [this.loginimage,
            this.realtimeimage,
            this.realtimeimage1,
            this.realtimeimage2,
            this.realtimeimage3,
            this.realtimeimage4
        ];
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //this.getStorage();
        this.slides.update();
        setTimeout(function () {
            _this.slides.autoplay = 2000;
            _this.slides.startAutoplay();
            //this.slideChanged();
        }, 500);
    };
    HelpPage.prototype.slideChanged = function () {
        var _this = this;
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex === this.image.length) {
            console.log('shownTabPage = ' + this.shownTabPage);
            setTimeout(function () {
                _this.storage.set('introShown', true);
                _this.viewCtrl.dismiss();
            }, 3000);
        }
    };
    HelpPage.prototype.Close = function () {
        this.storage.set('introShown', true);
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], HelpPage.prototype, "slides", void 0);
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\help\help.html"*/'<!--\n\n  Generated template for the HelpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>help</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<!--<ion-content padding>\n\n\n\n</ion-content>-->\n\n\n\n\n\n<ion-fab color="bsup" right bottom>\n\n  <button ion-fab (click)=\'Close()\'>Skip</button>\n\n</ion-fab>\n\n<ion-slides #mySlider initialSlide="0" (ionSlideDidChange)="slideChanged()" pager="true" class="slides">\n\n  <ion-slide *ngFor=\'let i of image\'>\n\n    <img src="{{i}}" class="slide-image" >\n\n  </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_select_license_shared__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_search__ = __webpack_require__(906);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ReportSelectGroup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ReportSelectPage = /** @class */ (function () {
    function ReportSelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
        this.searchModel = new __WEBPACK_IMPORTED_MODULE_3__report_select_license_shared__["b" /* SearchModel */]();
    }
    ReportSelectPage.prototype.ionViewDidLoad = function () {
    };
    ReportSelectPage.prototype.changePage = function () {
        this.searchModel.CustomerBoxId = this.multiselectLicenseComponent.id.toString();
        this.searchModel.License = this.multiselectLicenseComponent.name.toString();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__report_search__["a" /* ReportSearchPage */], this.searchModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared__["h" /* MultiselectLicenseComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared__["h" /* MultiselectLicenseComponent */])
    ], ReportSelectPage.prototype, "multiselectLicenseComponent", void 0);
    ReportSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-select',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select\report-select.html"*/'<multiselect-license [headerName]="" (masterEvent)="changePage()"></multiselect-license>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select\report-select.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReportSelectPage);
    return ReportSelectPage;
}());

//# sourceMappingURL=report-select.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSelectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportSelectService = /** @class */ (function () {
    function ReportSelectService(http) {
        this.http = http;
    }
    ReportSelectService.prototype.getReport = function (searchModel) {
        var _this = this;
        return this.http.put("/Report/GetVehicleSummaryList/", searchModel)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.handleError(response);
            }
        });
    };
    ReportSelectService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].from(error.message || error);
    };
    ReportSelectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClient */]])
    ], ReportSelectService);
    return ReportSelectService;
}());

//# sourceMappingURL=report-select.service.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportSelectModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyReportModel; });
/* unused harmony export StationModel */
/* unused harmony export DetailOfDaily */
var ReportSelectModel = /** @class */ (function () {
    function ReportSelectModel() {
    }
    return ReportSelectModel;
}());

var DailyReportModel = /** @class */ (function () {
    function DailyReportModel() {
    }
    return DailyReportModel;
}());

var StationModel = /** @class */ (function () {
    function StationModel() {
    }
    return StationModel;
}());

var DetailOfDaily = /** @class */ (function () {
    function DetailOfDaily() {
    }
    return DetailOfDaily;
}());

//# sourceMappingURL=report-select.model.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModel; });
var SearchModel = /** @class */ (function () {
    function SearchModel() {
    }
    return SearchModel;
}());

//# sourceMappingURL=search.model.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MockReportSelect */
var MockReportSelect = [
    {
        "Id": 1,
        "License": "สล-9112 กท",
        "BoxSerial": 359853099999015,
        "DailyReport": [
            {
                "Date": "2017-07-01T00:00:00Z",
                "IdleTotalOver": 0,
                "ParkTotalOver": 0,
                "IgOnTotal": 2,
                "IgOffTotal": 3,
                "Igs": [
                    {
                        "StartDate": "2017-07-01T00:00:00",
                        "EndDate": "2017-07-01T10:00:00",
                        "Period": "10:00:00",
                    },
                    {
                        "StartDate": "2017-07-01T10:24:00",
                        "EndDate": "2017-07-01T10:25:00",
                        "Period": "00:01:00",
                    },
                    {
                        "StartDate": "2017-07-01T11:12:00",
                        "EndDate": "2017-07-01T11:40:00",
                        "Period": "00:28:00",
                    }
                ],
                "Runs": [
                    {
                        "StartDate": "2017-07-01T09:36:00",
                        "EndDate": "2017-07-01T09:39:00",
                        "Period": "00:03:00",
                    },
                    {
                        "StartDate": "2017-07-01T09:39:00",
                        "EndDate": "2017-07-01T09:41:00",
                        "Period": "00:02:00",
                    },
                    {
                        "StartDate": "2017-07-01T09:42:00",
                        "EndDate": "2017-07-01T09:59:00",
                        "Period": "00:17:00",
                    },
                    {
                        "StartDate": "2017-07-01T11:14:00",
                        "EndDate": "2017-07-01T11:39:00",
                        "Period": "00:25:00",
                    },
                    {
                        "StartDate": "2017-07-01T11:39:00",
                        "EndDate": "2017-07-01T11:40:00",
                        "Period": "00:01:00",
                    }
                ],
                "Stations": [
                    {
                        "Index": 1,
                        "Name": "บ้านดอนเมือง",
                        "Idle": "00:03:00",
                        "Park": "00:00:00",
                        "Run": "00:02:00",
                        "Pto": 0,
                        "Distance": 0.79,
                        "InDateTime": "2017-07-01T09:39:00",
                        "OutDateTime": "2017-07-01T09:40:00",
                        "Period": "00:01:00",
                        "InTemp": 29.5,
                        "OutTemp": 29.5
                    }
                ],
                "OverTimes": 0,
                "OverMax": 67,
                "IdleTimes": 6,
                "IdleTotal": "00:09:00",
                "ParkTimes": 3,
                "ParkTotal": "13:30:00",
                "TotalUsag": "00:56:00",
                "TotalDis": 16.12,
                "Ig": 2,
                "RunTotal": "00:47:00",
                "RunTimeMax": "00:25:00",
            },
            {
                "Date": "2017-07-02T00:00:00Z",
                "IdleTotalOver": 0,
                "ParkTotalOver": 0,
                "IgOnTotal": 3,
                "IgOffTotal": 5,
                "Igs": [
                    {
                        "StartDate": "2017-07-02T10:13:00",
                        "EndDate": "2017-07-02T10:13:00",
                        "Period": "00:00:00",
                    },
                    {
                        "StartDate": "2017-07-02T10:13:00",
                        "EndDate": "2017-07-02T10:23:00",
                        "Period": "00:10:00",
                    },
                    {
                        "StartDate": "2017-07-02T11:51:00",
                        "EndDate": "2017-07-02T13:36:00",
                        "Period": "01:45:00",
                    }
                ],
                "Runs": [
                    {
                        "StartDate": "2017-07-02T10:13:00",
                        "EndDate": "2017-07-02T10:24:00",
                        "Period": "00:11:00",
                    },
                    {
                        "StartDate": "2017-07-02T11:52:00",
                        "EndDate": "2017-07-02T12:05:00",
                        "Period": "00:13:00",
                    },
                    {
                        "StartDate": "2017-07-02T13:18:00",
                        "EndDate": "2017-07-02T13:19:00",
                        "Period": "00:01:00",
                    },
                    {
                        "StartDate": "2017-07-02T13:22:00",
                        "EndDate": "2017-07-02T13:33:00",
                        "Period": "00:11:00",
                    },
                    {
                        "StartDate": "2017-07-02T13:34:00",
                        "EndDate": "2017-07-02T13:36:00",
                        "Period": "00:02:00",
                    }
                ],
                "Stations": [
                    {
                        "Index": 1,
                        "Name": "บ้านดอนเมือง",
                        "Idle": "00:00:00",
                        "Park": "10:11:00",
                        "Run": "00:05:00",
                        "Pto": 0,
                        "Distance": 1.76,
                        "InDateTime": "2017-07-02T00:02:00",
                        "OutDateTime": "2017-07-02T01:32:00",
                        "Period": "01:30:00",
                        "InTemp": 30.5,
                        "OutTemp": 30
                    },
                    {
                        "Index": 2,
                        "Name": "big C ดอนเมือง",
                        "Idle": "00:00:00",
                        "Park": "00:00:00",
                        "Run": "00:02:00",
                        "Pto": 0,
                        "Distance": 0.41,
                        "InDateTime": "2017-07-02T10:22:00",
                        "OutDateTime": "2017-07-02T10:22:00",
                        "Period": "00:00:00",
                        "InTemp": 29.5,
                        "OutTemp": 29.5
                    },
                    {
                        "Index": 3,
                        "Name": "บ้านดอนเมือง",
                        "Idle": "00:03:00",
                        "Park": "19:53:00",
                        "Run": "00:02:00",
                        "Pto": 0,
                        "Distance": 0.55,
                        "InDateTime": "2017-07-02T13:32:00",
                        "Period": "1.09:58:00",
                        "InTemp": 37,
                    }
                ],
                "OverTimes": 0,
                "OverMax": 60,
                "IdleTimes": 3,
                "IdleTotal": "00:06:00",
                "ParkTimes": 4,
                "ParkTotal": "23:14:00",
                "TotalUsag": "00:45:00",
                "TotalDis": 14.39,
                "Ig": 3,
                "RunTotal": "00:39:00",
                "RunTimeMax": "00:13:00",
            },
            {
                "Date": "2017-07-03T00:00:00Z",
                "IdleTotalOver": 0,
                "ParkTotalOver": 0,
                "IgOnTotal": 0,
                "IgOffTotal": 0,
                "Igs": [],
                "Runs": [],
                "Stations": [
                    {
                        "Index": 3,
                        "Name": "บ้านดอนเมือง",
                        "Idle": "00:03:00",
                        "Park": "19:53:00",
                        "Run": "00:02:00",
                        "Pto": 0,
                        "Distance": 0.55,
                        "InDateTime": "2017-07-02T13:32:00",
                        "Period": "1.09:58:00",
                        "InTemp": 37,
                    }
                ],
                "OverTimes": 0,
                "OverMax": 0,
                "IdleTimes": 0,
                "IdleTotal": "00:00:00",
                "ParkTimes": 0,
                "ParkTotal": "09:30:00",
                "TotalUsag": "00:00:00",
                "TotalDis": 0.15,
                "Ig": 0,
                "RunTotal": "00:00:00",
                "RunTimeMax": "00:00:00",
            }
        ],
        "OverTimes": 0,
        "OverMax": 67,
        "IdleTimes": 9,
        "IdleTotal": "00:15:00",
        "ParkTimes": 7,
        "ParkTotal": "1.22:14:00",
        "TotalUsag": "01:41:00",
        "TotalDis": 30.66,
        "Ig": 5,
        "RunTotal": "01:26:00",
        "RunTimeMax": "00:25:00",
    }
];
//# sourceMappingURL=report-select.mocked.model.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_select_license_shared__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_select_license__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ReportSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ReportSearchPage = /** @class */ (function () {
    function ReportSearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
        this.searchModel = new __WEBPACK_IMPORTED_MODULE_3__report_select_license_shared__["b" /* SearchModel */]();
    }
    ReportSearchPage.prototype.ionViewDidLoad = function () {
        this.searchModel = this.navParams.data;
        var licenseArr = this.searchModel.License.split(',');
        this.licenseName = licenseArr[0];
        if (licenseArr.length > 1)
            this.licenseName += " " + this.t.language.And + " " + (licenseArr.length - 1) + " " + this.t.language.License;
    };
    ReportSearchPage.prototype.changePage = function () {
        var searchDate = this.licenseSearchComponent.get();
        this.searchModel.StartDate = searchDate.StartDate;
        this.searchModel.EndDate = searchDate.EndDate;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__report_select_license__["b" /* ReportSelectLicensePage */], this.searchModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LicenseSearchComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LicenseSearchComponent */])
    ], ReportSearchPage.prototype, "licenseSearchComponent", void 0);
    ReportSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-search',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-search\report-search.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <ion-title>\n\n      {{licenseName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <app-license-search [toolHelper]="toolHelper" (masterEvent)="changePage()"></app-license-search>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-search\report-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReportSearchPage);
    return ReportSearchPage;
}());

//# sourceMappingURL=report-search.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSelectLicensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_client__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_select_daily__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chart_license__ = __webpack_require__(956);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ReportSelectLicense page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ReportSelectLicensePage = /** @class */ (function () {
    function ReportSelectLicensePage(navCtrl, modalCtrl, navParams, reportSelectService, toolHelper, http) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.reportSelectService = reportSelectService;
        this.toolHelper = toolHelper;
        this.http = http;
        this.t = __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* Translations */];
        this.take = 30;
        this.loading = true;
    }
    ReportSelectLicensePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchModel = this.navParams.data;
        this.getData(0, this.take, true).subscribe(function (data) {
            if (data) {
                _this.reportSelectModel = data;
            }
        });
    };
    ReportSelectLicensePage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
        }
        else {
            data.showDetails = true;
        }
    };
    ReportSelectLicensePage.prototype.reportSelectDaily = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__report_select_daily__["a" /* ReportSelectDailyPage */], data);
    };
    ReportSelectLicensePage.prototype.showChart = function (data) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__chart_license__["a" /* ChartLicensePage */], data);
        profileModal.present();
    };
    ReportSelectLicensePage.prototype.getData = function (skip, take, getTotal) {
        var _this = this;
        this.headerName = "" + this.searchModel.License;
        this.date = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(this.searchModel.StartDate).format('DD/MM/YYYY') + " - \n    " + __WEBPACK_IMPORTED_MODULE_2_moment_moment__(this.searchModel.EndDate).format('DD/MM/YYYY');
        return this.reportSelectService.getReport(this.searchModel)
            .map(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.Message) {
                var alert_1 = _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                alert_1.onDidDismiss(function () {
                    _this.navCtrl.pop();
                });
                alert_1.present();
                return null;
            }
            else if (data.StatusCode) {
                var alert_2 = _this.toolHelper.alert(_this.t.getByValueEn(data.StatusCode));
                alert_2.onDidDismiss(function () {
                    _this.navCtrl.pop();
                });
                alert_2.present();
                return null;
            }
            else {
                var model = data;
                model.forEach(function (m) {
                    m.DailyReport.forEach(function (d) {
                        d.Date = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(d.Date).format('DD/MM/YYYY');
                        d.Stations.forEach(function (s) {
                            s.InDateTime = _this.toolHelper.setFormatTime(s.InDateTime);
                            s.OutDateTime = _this.toolHelper.setFormatTime(s.OutDateTime);
                            s.Period = _this.toolHelper.setTimestamp(s.Period);
                            s.Idle = _this.toolHelper.setTimestamp(s.Idle);
                            s.Park = _this.toolHelper.setTimestamp(s.Park);
                        });
                        d.IdleTotal = _this.toolHelper.setTimestamp(d.IdleTotal);
                        d.ParkTotal = _this.toolHelper.setTimestamp(d.ParkTotal);
                        d.TotalUsag = _this.toolHelper.setTimestamp(d.TotalUsag);
                        d.RunTimeMax = _this.toolHelper.setTimestamp(d.RunTimeMax);
                    });
                    m.IdleTotal = _this.toolHelper.setTimestamp(m.IdleTotal);
                    m.ParkTotal = _this.toolHelper.setTimestamp(m.ParkTotal);
                    m.TotalUsag = _this.toolHelper.setTimestamp(m.TotalUsag);
                    m.RunTimeMax = _this.toolHelper.setTimestamp(m.RunTimeMax);
                });
                return model;
            }
        }, function (err) {
            console.log(err);
            _this.loading = false;
            var alert = err.statusText ?
                _this.toolHelper.alertEvent(_this.t.getByValueEn(err.statusText), _this.navCtrl.pop())
                :
                    _this.toolHelper.alertEvent(_this.t.language.ConnectionRefused, _this.navCtrl.pop());
            alert.present();
            return null;
        });
    };
    ReportSelectLicensePage.prototype.convertNumberToTime = function (time) {
        if (!time)
            return '0';
        return __WEBPACK_IMPORTED_MODULE_2_moment_moment__().startOf('day').minutes(time).format('H:mm');
    };
    ReportSelectLicensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-select-license',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select-license\report-select-license.html"*/'<!--\n\n  Generated template for the ReportSelectLicense page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="bsup">\n\n    <ion-title>{{date}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <page-loading *ngIf="loading" loading=loading></page-loading>\n\n  <ion-list>\n\n    <ion-card padding *ngFor="let item of reportSelectModel">\n\n\n\n      <ion-card-header>\n\n        <ion-row>\n\n          <ion-col (click)="toggleDetails(item)">\n\n            <b>{{item.License}} </b>\n\n            <p *ngIf="item.DriveOverTime" class="font-head-overusag">{{item.DriveOverTime}}</p>\n\n            <p *ngIf="!item.DriveOverTime">{{t.language.RunTimeMax}}: {{item.RunTimeMax}}</p>\n\n          </ion-col>\n\n          <ion-col col-2 text-right>\n\n            <ion-icon id=graph name="pie" color="bsup" (click)="showChart(item)"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content *ngIf="item.showDetails">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Idletimes}}</h3>\n\n            <p col-6 text-right>{{item.IdleTimes}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Idletotal}}</h3>\n\n            <p col-6 text-right>{{item.IdleTotal}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Parktimes}}</h3>\n\n            <p col-6 text-right>{{item.ParkTimes}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Parktotal}}</h3>\n\n            <p col-6 text-right>{{item.ParkTotal}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Overspeedtimes}}</h3>\n\n            <p col-6 text-right>{{item.OverTimes}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Overspeedmax}}</h3>\n\n            <p col-6 text-right>{{item.OverMax}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.TotalUsag}}</h3>\n\n            <p col-6 text-right>{{item.TotalUsag}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.TotalDis}}</h3>\n\n            <p col-6 text-right>{{item.TotalDis}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Ig}}</h3>\n\n            <p col-6 text-right>{{item.Ig}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="item.DailyReport.length > 0">\n\n            <ion-col align="right">\n\n              <ion-icon name="md-calendar" color="bsup" (click)="reportSelectDaily(item)"> {{t.language.ShowDaily}}</ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select-license\report-select-license.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared__["a" /* ReportSelectService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* ReportSelectService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_3__http_client__["a" /* HttpClient */]])
    ], ReportSelectLicensePage);
    return ReportSelectLicensePage;
}());

//# sourceMappingURL=report-select-license.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSelectDailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_select_station__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_daily__ = __webpack_require__(909);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ReportSelectDaily page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ReportSelectDailyPage = /** @class */ (function () {
    function ReportSelectDailyPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
    }
    ReportSelectDailyPage.prototype.ionViewDidLoad = function () {
        var reportSelectModel = this.navParams.data;
        this.headerName = reportSelectModel.License;
        this.dailyReports = reportSelectModel.DailyReport;
    };
    ReportSelectDailyPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
        }
        else {
            data.showDetails = true;
        }
    };
    ReportSelectDailyPage.prototype.showChart = function (data) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__chart_daily__["a" /* ChartDailyPage */], data);
        profileModal.present();
    };
    ReportSelectDailyPage.prototype.reportSelectStation = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__report_select_station__["a" /* ReportSelectStationPage */], data);
    };
    ReportSelectDailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-select-daily',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select-daily\report-select-daily.html"*/'<!--\n\n  Generated template for the ReportSelectDaily page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="bsup">\n\n    <ion-title>{{headerName}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-card padding *ngFor="let item of dailyReports">\n\n\n\n      <ion-card-header>\n\n        <ion-row>\n\n          <ion-col (click)="toggleDetails(item)">\n\n            <b>{{item.Date}}</b>\n\n            <p *ngIf="item.DriveOverTime" class="font-head-overusag">{{item.DriveOverTime}}</p>\n\n            <p *ngIf="!item.DriveOverTime">{{t.language.RunTimeMax}}: {{item.RunTimeMax}}</p>\n\n          </ion-col>\n\n          <ion-col col-2 text-right>\n\n            <ion-icon id=graph name="pie" color="bsup" (click)="showChart(item)"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content *ngIf="item.showDetails">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Idletimes}}</h3>\n\n            <p col-6 text-right>{{item.IdleTimes}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Idletotal}}</h3>\n\n            <p col-6 text-right>{{item.IdleTotal}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Parktimes}}</h3>\n\n            <p col-6 text-right>{{item.ParkTimes}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Parktotal}}</h3>\n\n            <p col-6 text-right>{{item.ParkTotal}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Overspeedtimes}}</h3>\n\n            <p col-6 text-right>{{item.OverTimes}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Overspeedmax}}</h3>\n\n            <p col-6 text-right>{{item.OverMax}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.TotalUsag}}</h3>\n\n            <p col-6 text-right>{{item.TotalUsag}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.TotalDis}}</h3>\n\n            <p col-6 text-right>{{item.TotalDis}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h3 col-6>{{t.language.Ig}}</h3>\n\n            <p col-6 text-right>{{item.Ig}}</p>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="item.Stations.length > 0">\n\n            <ion-col align="right">\n\n              <ion-icon name="home" color="bsup" (click)="reportSelectStation(item)"> {{t.language.Station}}</ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select-daily\report-select-daily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ReportSelectDailyPage);
    return ReportSelectDailyPage;
}());

//# sourceMappingURL=report-select-daily.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSelectStationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ReportSelectStation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ReportSelectStationPage = /** @class */ (function () {
    function ReportSelectStationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
    }
    ReportSelectStationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportSelectStationPage');
        var dailyReport = this.navParams.data;
        this.headerName = dailyReport.Date;
        this.stationReportModels = dailyReport.Stations;
    };
    ReportSelectStationPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
        }
        else {
            data.showDetails = true;
        }
    };
    ReportSelectStationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-select-station',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select-station\report-select-station.html"*/'<!--\n\n  Generated template for the ReportSelectDaily page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="bsup">\n\n    <ion-title>{{headerName}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-card padding *ngFor="let item of stationReportModels">\n\n      <ion-card-header>\n\n        <ion-row>\n\n          <ion-col col-6 (click)="toggleDetails(item)">\n\n          <h2>{{item.Name}}</h2>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n          <p>{{t.language.Period}}: {{item.Period}}</p>\n\n        </ion-col>\n\n        </ion-row>\n\n      </ion-card-header>\n\n\n\n      <ion-card-content *ngIf="item.showDetails">\n\n\n\n        <ion-row>\n\n          <h3 col-6>{{t.language.InDateTime}}</h3>\n\n          <p col-6 text-right>{{item.InDateTime}}</p>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <h3 col-6>{{t.language.OutDateTime}}</h3>\n\n          <p col-6 text-right>{{item.OutDateTime}}</p>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <h3 col-6>{{t.language.InTemp}}</h3>\n\n          <p col-6 text-right>{{item.InTemp}}</p>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <h3 col-6>{{t.language.OutTemp}}</h3>\n\n          <p col-6 text-right>{{item.OutTemp}}</p>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <h3 col-6>{{t.language.Idletotal}}</h3>\n\n          <p col-6 text-right>{{item.Idle}}</p>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <h3 col-6>{{t.language.Parktotal}}</h3>\n\n          <p col-6 text-right>{{item.Park}}</p>\n\n        </ion-row>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\report-select-station\report-select-station.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReportSelectStationPage);
    return ReportSelectStationPage;
}());

//# sourceMappingURL=report-select-station.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_select_license__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartDailyPage = /** @class */ (function () {
    function ChartDailyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.t = __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* Translations */];
        this.totalStatusData = [3];
        this.dailyReportModel = new __WEBPACK_IMPORTED_MODULE_3__report_select_license__["a" /* DailyReportModel */]();
    }
    ChartDailyPage.prototype.ionViewDidLoad = function () {
        this.dailyReportModel = this.navParams.data;
        this.headerName = "" + this.dailyReportModel.Date;
        this.getTotalStatusChart();
        this.dailyStatusChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.dailyStatus.nativeElement, {
            type: 'doughnut',
            data: {
                labels: [this.t.language.Park, this.t.language.Idle, this.t.language.Running],
                datasets: [{
                        label: 'Total status',
                        data: this.totalStatusData,
                        backgroundColor: ["rgba(255, 143, 102, 0.2)", 'rgba(255, 240, 102, 0.2)', 'rgba(102, 255, 110, 0.2)'],
                        hoverBackgroundColor: ["#FF7F50", "#fff066", "#66ff6e"]
                    }]
            }
        });
    };
    ChartDailyPage.prototype.getTotalStatusChart = function () {
        this.runDate = this.dailyReportModel.RunTotal.split('d ');
        if (this.runDate.length == 2) {
            this.runHour = this.runDate[1].split(':');
            this.runMinutes = (parseInt(this.runDate[0]) * 1440) + (parseInt(this.runHour[0]) * 60) + (parseInt(this.runHour[1]));
        }
        else {
            this.runHour = this.dailyReportModel.RunTotal.split(':');
            this.runMinutes = (parseInt(this.runHour[0]) * 60) + (parseInt(this.runHour[1]));
        }
        this.parkDate = this.dailyReportModel.ParkTotal.split('d ');
        if (this.parkDate.length == 2) {
            this.parkHour = this.parkDate[1].split(':');
            this.parkMinutes = (parseInt(this.parkDate[0]) * 1440) + (parseInt(this.parkHour[0]) * 60) + (parseInt(this.parkHour[1]));
        }
        else {
            this.parkHour = this.dailyReportModel.ParkTotal.split(':');
            this.parkMinutes = (parseInt(this.parkHour[0]) * 60) + (parseInt(this.parkHour[1]));
        }
        this.idleDate = this.dailyReportModel.IdleTotal.split('d ');
        if (this.idleDate.length == 2) {
            this.idleHour = this.idleDate[1].split(':');
            this.idleMinutes = (parseInt(this.idleDate[0]) * 1440) + (parseInt(this.idleHour[0]) * 60) + (parseInt(this.idleHour[1]));
        }
        else {
            this.idleHour = this.dailyReportModel.IdleTotal.split(':');
            this.idleMinutes = (parseInt(this.idleHour[0]) * 60) + (parseInt(this.idleHour[1]));
        }
        this.totalStatusMinutes = Number((this.parkMinutes + this.idleMinutes + this.runMinutes).toFixed(2));
        this.park = ((this.parkMinutes / this.totalStatusMinutes) * 100);
        this.idle = ((this.idleMinutes / this.totalStatusMinutes) * 100);
        this.run = ((this.runMinutes / this.totalStatusMinutes) * 100);
        this.totalStatusData[0] = Number(this.park.toFixed(2));
        this.totalStatusData[1] = Number(this.idle.toFixed(2));
        this.totalStatusData[2] = Number(this.run.toFixed(2));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('dailyStatus'),
        __metadata("design:type", Object)
    ], ChartDailyPage.prototype, "dailyStatus", void 0);
    ChartDailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart-daily',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\chart-daily\chart-daily.html"*/'<!--\n\n  Generated template for the ChartDaily page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-modal [headerName]="headerName"></page-header-modal>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <ion-card-header>\n\n        {{t.language.ReportStatus}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #dailyStatus></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\chart-daily\chart-daily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChartDailyPage);
    return ChartDailyPage;
}());

//# sourceMappingURL=chart-daily.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartLicensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_select_license__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_linq__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_linq__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChartLicensePage = /** @class */ (function () {
    function ChartLicensePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.t = __WEBPACK_IMPORTED_MODULE_4__shared__["l" /* Translations */];
        this.headerName = '';
        this.bgOrange = "rgba(255, 143, 102, 0.2)";
        this.bgRed = 'rgba(255, 99, 132, 0.2)';
        this.bgBlue = 'rgba(54, 162, 235, 0.2)';
        this.bgYellow = 'rgba(255, 240, 102, 0.2)';
        this.bgGreen = 'rgba(102, 255, 110, 0.2)';
        this.bgPurple = 'rgba(153, 102, 255, 0.2)';
        this.bgIndigo = 'rgba(63, 81, 181, 0.2)';
        this.hbgOrange = "#FF7F50";
        this.hbgRed = "#FF6384";
        this.hbgBlue = "#36A2EB";
        this.hbgYellow = "#fff066";
        this.hbgGreen = "#66ff6e";
        this.hbgPurple = "#36A2EB";
        this.hbgIndigo = "#3F51B5";
        //Total status chart
        this.totalStatusData = [3];
        this.dailyRunData = [];
        this.runBgColor = [];
        this.runHbgColor = [];
        this.dailyParkData = [];
        this.parkBgColor = [];
        this.parkHbgColor = [];
        this.dailyIdleData = [];
        this.idleBgColor = [];
        this.idleHbgColor = [];
        this.reportSelectModel = new __WEBPACK_IMPORTED_MODULE_3__report_select_license__["c" /* ReportSelectModel */]();
    }
    ChartLicensePage.prototype.ionViewDidLoad = function () {
        this.reportSelectModel = this.navParams.data;
        this.headerName = "" + this.reportSelectModel.License;
        this.date = __WEBPACK_IMPORTED_MODULE_5_linq___default.a.from(this.reportSelectModel.DailyReport).select(function (d) { return d.Date; }).toArray();
        this.getTotalStatusChart();
        this.getDailyStatusChart();
        this.getDistanceStatusChart();
        this.getSpeedStatusChart();
        this.totalStatusChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.totalStatus.nativeElement, {
            type: 'doughnut',
            data: {
                labels: [this.t.language.Park, this.t.language.Idle, this.t.language.Running],
                datasets: [{
                        label: 'Total status',
                        data: this.totalStatusData,
                        backgroundColor: [this.bgOrange, this.bgYellow, this.bgGreen],
                        hoverBackgroundColor: [this.hbgOrange, this.hbgYellow, this.hbgGreen]
                    }]
            }
        });
        this.dailyStatusChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.dailyStatus.nativeElement, {
            type: 'bar',
            data: {
                labels: this.date,
                datasets: [{
                        label: this.t.language.Park,
                        data: this.dailyParkData,
                        backgroundColor: this.parkBgColor,
                        hoverBackgroundColor: this.parkHbgColor
                    },
                    {
                        label: this.t.language.Idle,
                        data: this.dailyIdleData,
                        backgroundColor: this.idleBgColor,
                        hoverBackgroundColor: this.idleHbgColor
                    },
                    {
                        label: this.t.language.Running,
                        data: this.dailyRunData,
                        backgroundColor: this.runBgColor,
                        hoverBackgroundColor: this.runHbgColor
                    }]
            }
        });
        this.distanceStatusChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.distanceStatus.nativeElement, {
            type: 'bar',
            data: {
                labels: this.date,
                datasets: [{
                        label: this.t.language.Length,
                        data: this.totalDis,
                        backgroundColor: this.bgBlue,
                        hoverBackgroundColor: this.hbgBlue
                    }]
            }
        });
        this.speedStatusChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.speedStatus.nativeElement, {
            type: 'bar',
            data: {
                labels: this.date,
                datasets: [{
                        label: this.t.language.Overspeed,
                        data: this.overSpeed,
                        backgroundColor: this.bgRed,
                        hoverBackgroundColor: this.hbgRed
                    }]
            }
        });
    };
    ChartLicensePage.prototype.getTotalStatusChart = function () {
        this.runDate = this.reportSelectModel.RunTotal.split('d ');
        if (this.runDate.length == 2) {
            this.runHour = this.runDate[1].split(':');
            this.runMinutes = (parseInt(this.runDate[0]) * 1440) + (parseInt(this.runHour[0]) * 60) + (parseInt(this.runHour[1]));
        }
        else {
            this.runHour = this.reportSelectModel.RunTotal.split(':');
            this.runMinutes = (parseInt(this.runHour[0]) * 60) + (parseInt(this.runHour[1]));
        }
        this.parkDate = this.reportSelectModel.ParkTotal.split('d ');
        if (this.parkDate.length == 2) {
            this.parkHour = this.parkDate[1].split(':');
            this.parkMinutes = (parseInt(this.parkDate[0]) * 1440) + (parseInt(this.parkHour[0]) * 60) + (parseInt(this.parkHour[1]));
        }
        else {
            this.parkHour = this.reportSelectModel.ParkTotal.split(':');
            this.parkMinutes = (parseInt(this.parkHour[0]) * 60) + (parseInt(this.parkHour[1]));
        }
        this.idleDate = this.reportSelectModel.IdleTotal.split('d ');
        if (this.idleDate.length == 2) {
            this.idleHour = this.idleDate[1].split(':');
            this.idleMinutes = (parseInt(this.idleDate[0]) * 1440) + (parseInt(this.idleHour[0]) * 60) + (parseInt(this.idleHour[1]));
        }
        else {
            this.idleHour = this.reportSelectModel.IdleTotal.split(':');
            this.idleMinutes = (parseInt(this.idleHour[0]) * 60) + (parseInt(this.idleHour[1]));
        }
        this.totalStatusMinutes = Number((this.parkMinutes + this.idleMinutes + this.runMinutes).toFixed(2));
        this.park = ((this.parkMinutes / this.totalStatusMinutes) * 100);
        this.idle = ((this.idleMinutes / this.totalStatusMinutes) * 100);
        this.run = ((this.runMinutes / this.totalStatusMinutes) * 100);
        this.totalStatusData[0] = Number(this.park.toFixed(2));
        this.totalStatusData[1] = Number(this.idle.toFixed(2));
        this.totalStatusData[2] = Number(this.run.toFixed(2));
        console.log(this.totalStatusData);
    };
    ChartLicensePage.prototype.getDailyStatusChart = function () {
        var _this = this;
        this.dailyRun = __WEBPACK_IMPORTED_MODULE_5_linq___default.a.from(this.reportSelectModel.DailyReport).select(function (p) { return p.RunTotal; }).toArray();
        this.dailyRun.forEach(function (d) {
            var dailyDate = d.split('d ');
            if (dailyDate.length == 2) {
                var dailyHour = dailyDate[1].split(':');
                var dailyMinutes = (parseInt(dailyDate[0]) * 1440) + (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]));
            }
            else {
                var dailyHour = d.split(':');
                var dailyMinutes = (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]));
            }
            _this.dailyRunData.push(dailyMinutes);
            _this.runBgColor.push(_this.bgGreen);
            _this.runHbgColor.push(_this.hbgGreen);
        });
        this.dailyPark = __WEBPACK_IMPORTED_MODULE_5_linq___default.a.from(this.reportSelectModel.DailyReport).select(function (p) { return p.ParkTotal; }).toArray();
        this.dailyPark.forEach(function (d) {
            var dailyDate = d.split('d ');
            if (dailyDate.length == 2) {
                var dailyHour = dailyDate[1].split(':');
                var dailyMinutes = (parseInt(dailyDate[0]) * 1440) + (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]));
            }
            else {
                var dailyHour = d.split(':');
                var dailyMinutes = (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]));
            }
            _this.dailyParkData.push(dailyMinutes);
            _this.parkBgColor.push(_this.bgOrange);
            _this.parkHbgColor.push(_this.hbgOrange);
        });
        this.dailyIdle = __WEBPACK_IMPORTED_MODULE_5_linq___default.a.from(this.reportSelectModel.DailyReport).select(function (p) { return p.IdleTotal; }).toArray();
        this.dailyIdle.forEach(function (d) {
            var dailyDate = d.split('d ');
            if (dailyDate.length == 2) {
                var dailyHour = dailyDate[1].split(':');
                var dailyMinutes = (parseInt(dailyDate[0]) * 1440) + (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]));
            }
            else {
                var dailyHour = d.split(':');
                var dailyMinutes = (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]));
            }
            _this.dailyIdleData.push(dailyMinutes);
            _this.idleBgColor.push(_this.bgYellow);
            _this.idleHbgColor.push(_this.hbgYellow);
        });
    };
    ChartLicensePage.prototype.getDistanceStatusChart = function () {
        this.totalDis = __WEBPACK_IMPORTED_MODULE_5_linq___default.a.from(this.reportSelectModel.DailyReport).select(function (d) { return d.TotalDis; }).toArray();
    };
    ChartLicensePage.prototype.getSpeedStatusChart = function () {
        this.overSpeed = __WEBPACK_IMPORTED_MODULE_5_linq___default.a.from(this.reportSelectModel.DailyReport).select(function (o) { return o.OverTimes; }).toArray();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('totalStatus'),
        __metadata("design:type", Object)
    ], ChartLicensePage.prototype, "totalStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('dailyStatus'),
        __metadata("design:type", Object)
    ], ChartLicensePage.prototype, "dailyStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('distanceStatus'),
        __metadata("design:type", Object)
    ], ChartLicensePage.prototype, "distanceStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('speedStatus'),
        __metadata("design:type", Object)
    ], ChartLicensePage.prototype, "speedStatus", void 0);
    ChartLicensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart-license',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\chart-license\chart-license.html"*/'<!--\n\n  Generated template for the ChartLicense page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-modal [headerName]="headerName"></page-header-modal>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <ion-card-header>\n\n        {{t.language.ReportStatus}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #totalStatus></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n \n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{t.language.ReportDailyStatus}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #dailyStatus></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n \n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{t.language.ReportDistanceDaily}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #distanceStatus></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n \n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{t.language.ReportOverSpeed}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #speedStatus></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\chart-license\chart-license.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChartLicensePage);
    return ChartLicensePage;
}());

//# sourceMappingURL=chart-license.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(540);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_client_http_client__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_realtimes_realtimes__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_realtimes_realtime_list_realtime_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_realtimes_realtime_map_realtime_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_histories_histories__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_histories_history_history__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_histories_history_history_list_history_list__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_histories_history_history_map_history_map__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_auth_service__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pop_more_pop_more__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_header_modal_header_modal__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_header_group_search_header_group_search__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_more_more__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_change_language_change_language__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_change_password_change_password__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_change_group_change_group__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_history_license_history_license__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_settingreport_settingreport__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_settingreport_detail_settingreport_detail__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_report_select_license_report_select_license__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_report_select_daily_report_select_daily__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chart_license_chart_license__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_chart_daily_chart_daily__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_report_select_report_select__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_report_search_report_search__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_settingreport_select_settingreport_select__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_report_select_station_report_select_station__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_loading_loading__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_help_help__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__app_component__ = __webpack_require__(960);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_39__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["e" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_header_modal_header_modal__["a" /* HeaderModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_header_group_search_header_group_search__["a" /* HeaderGroupSearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_realtimes_realtime_list_realtime_list__["a" /* RealtimeList */],
                __WEBPACK_IMPORTED_MODULE_11__pages_realtimes_realtime_map_realtime_map__["a" /* RealtimeMapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_realtimes_realtimes__["a" /* RealtimePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pop_more_pop_more__["a" /* PopMorePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["a" /* LicenseSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_history_license_history_license__["a" /* HistoryLicensePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_histories_history_history_map_history_map__["a" /* HistoryMapPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_histories_history_history_list_history_list__["a" /* HistoryList */],
                __WEBPACK_IMPORTED_MODULE_13__pages_histories_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_histories_histories__["a" /* HistoriesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["h" /* MultiselectLicenseComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_report_select_report_select__["a" /* ReportSelectPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_report_search_report_search__["a" /* ReportSearchPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_report_select_license_report_select_license__["a" /* ReportSelectLicensePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_report_select_daily_report_select_daily__["a" /* ReportSelectDailyPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_report_select_station_report_select_station__["a" /* ReportSelectStationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chart_license_chart_license__["a" /* ChartLicensePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chart_daily_chart_daily__["a" /* ChartDailyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_change_language_change_language__["a" /* ChangeLanguagePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_change_group_change_group__["a" /* ChangeGroupPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_settingreport_settingreport__["a" /* SettingreportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_settingreport_detail_settingreport_detail__["a" /* SettingreportDetailPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_settingreport_select_settingreport_select__["a" /* SettingreportSelectPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_help_help__["a" /* HelpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_39__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_39__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["e" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_header_modal_header_modal__["a" /* HeaderModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_header_group_search_header_group_search__["a" /* HeaderGroupSearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_realtimes_realtime_list_realtime_list__["a" /* RealtimeList */],
                __WEBPACK_IMPORTED_MODULE_11__pages_realtimes_realtime_map_realtime_map__["a" /* RealtimeMapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_realtimes_realtimes__["a" /* RealtimePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pop_more_pop_more__["a" /* PopMorePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["a" /* LicenseSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_history_license_history_license__["a" /* HistoryLicensePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_histories_history_history_map_history_map__["a" /* HistoryMapPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_histories_history_history_list_history_list__["a" /* HistoryList */],
                __WEBPACK_IMPORTED_MODULE_13__pages_histories_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_histories_histories__["a" /* HistoriesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["h" /* MultiselectLicenseComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_report_select_report_select__["a" /* ReportSelectPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_report_search_report_search__["a" /* ReportSearchPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_report_select_license_report_select_license__["a" /* ReportSelectLicensePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_report_select_daily_report_select_daily__["a" /* ReportSelectDailyPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_report_select_station_report_select_station__["a" /* ReportSelectStationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chart_license_chart_license__["a" /* ChartLicensePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_chart_daily_chart_daily__["a" /* ChartDailyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_change_language_change_language__["a" /* ChangeLanguagePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_change_group_change_group__["a" /* ChangeGroupPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_settingreport_settingreport__["a" /* SettingreportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_settingreport_detail_settingreport_detail__["a" /* SettingreportDetailPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_settingreport_select_settingreport_select__["a" /* SettingreportSelectPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_help_help__["a" /* HelpPage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__http_client_http_client__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["i" /* StatusService */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["j" /* ToolHelper */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__pages_shared__["k" /* TranslationManage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__realtimes__ = __webpack_require__(274);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__realtimes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__realtime_list__ = __webpack_require__(890);
/* unused harmony reexport RealtimeList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realtime_map__ = __webpack_require__(891);
/* unused harmony reexport RealtimeMapPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_realtime_mocked_model__ = __webpack_require__(496);
/* unused harmony reexport MockedRealtime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_realtime_model__ = __webpack_require__(497);
/* unused harmony reexport LatLngModel */
/* unused harmony reexport RealtimeModel */
/* unused harmony reexport RouteModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_realtime_service__ = __webpack_require__(498);
/* unused harmony reexport RealtimeService */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translations__ = __webpack_require__(870);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__translations__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__translations__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.Username = '';
        this.Password = '';
        this.Remember = false;
    }
    return LoginModel;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(370);
/* unused harmony reexport InfoModel */
/* unused harmony reexport LatLngBounds */
/* unused harmony reexport LatLngModel */
/* unused harmony reexport LatLngStatusModel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__shared__["a"]; });
/* unused harmony reexport MapService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__shared__["c"]; });
/* unused harmony reexport MockedMapModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_component__ = __webpack_require__(873);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__map_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MarkerModel; });
/* unused harmony export InfoModel */
/* unused harmony export LatLngStatusModel */
/* unused harmony export LatLngModel */
/* unused harmony export LatLngBounds */
var MapModel = /** @class */ (function () {
    function MapModel() {
    }
    return MapModel;
}());

var MarkerModel = /** @class */ (function () {
    function MarkerModel() {
        this.Info = new InfoModel();
    }
    return MarkerModel;
}());

var InfoModel = /** @class */ (function () {
    function InfoModel() {
    }
    return InfoModel;
}());

var LatLngStatusModel = /** @class */ (function () {
    function LatLngStatusModel() {
    }
    return LatLngStatusModel;
}());

var LatLngModel = /** @class */ (function () {
    function LatLngModel() {
    }
    return LatLngModel;
}());

var LatLngBounds = /** @class */ (function () {
    function LatLngBounds() {
        this.sw = new LatLngModel();
        this.ne = new LatLngModel();
    }
    return LatLngBounds;
}());

//# sourceMappingURL=map.model.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MockedMapModel */
var mockedMarkerModel = [
    {
        Lat: 13.123456,
        Lng: 100.52146,
        IconPath: './app/shared/map/map-marker.png',
    },
    {
        Lat: 10.123456,
        Lng: 90.52146,
        IconPath: './app/shared/map/map-marker.png'
    },
    {
        Lat: 17.123456,
        Lng: 95.52146,
    }
];
var mockedMapRealtimeModel = {
    markerModels: mockedMarkerModel,
    name: 'Mocked Realtime'
};
var MockedMapModel = mockedMapRealtimeModel;
//# sourceMappingURL=map.mocked.model.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate__ = __webpack_require__(70);

var google;
var MapService = /** @class */ (function () {
    function MapService() {
        this.t = __WEBPACK_IMPORTED_MODULE_0__translate__["b" /* Translations */];
        this.lineMarkers = {};
        this.lines = [];
        this.directionsDisplay = null;
        this.zoom = 15;
    }
    MapService.prototype.loadMap = function (inputGoogle, mapId, toastCtrl, toolHelper) {
        this.toastCtrl = toastCtrl;
        this.toolHelper = toolHelper;
        var mapDiv = document.getElementById(mapId);
        google = inputGoogle;
        this.gMap = new google.maps.Map(mapDiv, {
            center: { lat: 13.78080, lng: 100.64526 },
            zoom: this.zoom,
        });
        this.latLngBounds = new google.maps.LatLngBounds();
    };
    MapService.prototype.showToastWithCloseButton = function (contentString) {
        this.toast && this.toast.dismiss();
        this.toast = this.toastCtrl.create({
            message: contentString,
            showCloseButton: true,
            closeButtonText: 'ปิด'
        });
        this.toast.onDidDismiss(function () {
            /*if (this.markerPosition !== null) {
                this.markerPosition.setMap(null);
            }*/
        });
        this.toast.present();
    };
    MapService.prototype.showToast = function (info, showUp) {
        var up = showUp ? this.t.language.Up + ": " + info.Up + "  \n" : '';
        var contentString = "\n            " + this.t.language.License + ": " + info.License + "  \n                                               \n            " + this.t.language.Date + ": " + info.StatusDate + "  \n                                 \n            " + this.t.language.Status + ":  " + this.t.language[info.Status] + "  \n                                \n            " + this.t.language.Speed + ": " + info.Speed + "  \n                      \n            " + this.t.language.Address + ":" + info.Address + "  \n\n            " + up + " ";
        this.showToastWithCloseButton(contentString);
    };
    MapService.prototype.DisplayMarkerPosition = function (info, marker, showUp) {
        if (marker && marker.position) {
            this.setZoom(marker.position);
        }
        this.showToast(info, showUp);
    };
    MapService.prototype.setTitle = function (info) {
        return info.License + ' | ' + info.StatusDate;
    };
    MapService.prototype.setMarker = function (markerModel, showUp) {
        var me = this;
        var marker = this.DisplayMarker(markerModel, me);
        console.log('markerModel', markerModel);
        //let latLngBounds = this.latLngBounds.extend({ lat: markerModel.Lat, lng: markerModel.Lng });
        //this.gMap.fitBounds(latLngBounds);
        this.setZoom({ lat: markerModel.Lat, lng: markerModel.Lng });
        marker.addListener('click', function () {
            me.DisplayMarkerPosition(markerModel.Info, marker, showUp);
        });
        return marker;
    };
    MapService.prototype.updateMarker = function (marker, markerModel) {
        if (markerModel && markerModel.Lat && markerModel.Lng) {
            var newLatLng = new google.maps.LatLng(markerModel.Lat, markerModel.Lng);
            var paths = [marker.position, newLatLng];
            var stroke = this.getPolylineOptionByStatus(markerModel.Info.Status);
            var line = new google.maps.Polyline({
                path: paths,
                geodesic: true,
                strokeColor: stroke.strokeColor,
                strokeOpacity: 1,
                strokeWeight: 2
            });
            line.setMap(this.gMap);
            setTimeout(function () {
                console.log('line.setMap(null)');
                line.setMap(null);
            }, 3600000);
            var latLngBounds = this.latLngBounds.extend({ lat: markerModel.Lat, lng: markerModel.Lng });
            this.gMap.fitBounds(latLngBounds);
        }
        marker.setPosition(newLatLng);
        marker.setIcon(markerModel.IconPath);
        marker.setTitle(this.setTitle(markerModel.Info));
        var center = this.gMap.getCenter();
        console.log('center', center);
        this.setZoom(center);
    };
    MapService.prototype.DisplayMarker = function (markerModel, me) {
        var marker = new google.maps.Marker({
            position: markerModel.Lat && markerModel.Lng ? { lat: markerModel.Lat, lng: markerModel.Lng } : null,
            map: me.gMap,
            icon: markerModel.IconPath,
            title: this.setTitle(markerModel.Info)
        });
        return marker;
    };
    MapService.prototype.setZoom = function (position) {
        var zoom = this.gMap.getZoom();
        console.log('zoom', zoom);
        this.gMap.setZoom(this.zoom < zoom ? this.zoom : zoom);
        this.gMap.setCenter(position);
    };
    MapService.prototype.getPolylineOptionByStatus = function (status) {
        var strokeColor = "";
        switch (status) {
            default:
                strokeColor = "#006400";
                break;
            case 'Overspeed':
                strokeColor = "#DC143C";
                break;
        }
        return {
            strokeColor: strokeColor,
            strokeOpacity: 1,
        };
    };
    MapService.prototype.setPolylines = function (latLngStatusModels) {
        var latLngBounds = this.latLngBounds.extend({ lat: latLngStatusModels[1].Lat, lng: latLngStatusModels[1].Lng });
        this.gMap.fitBounds(latLngBounds);
        for (var i = 1; i < latLngStatusModels.length - 1; i++) {
            if (!latLngStatusModels[i])
                continue;
            var stroke = this.getPolylineOptionByStatus(latLngStatusModels[i].Status);
            var beforeLatLng = this.getBeforeLatLng(latLngStatusModels, i);
            var newLatLng = new google.maps.LatLng(latLngStatusModels[i].Lat, latLngStatusModels[i].Lng);
            var line = new google.maps.Polyline({
                path: [beforeLatLng, newLatLng],
                geodesic: true,
                strokeColor: stroke.strokeColor,
                strokeOpacity: stroke.strokeOpacity,
            });
            line.setMap(this.gMap);
            var latLngBounds_1 = this.latLngBounds.extend({ lat: latLngStatusModels[i].Lat, lng: latLngStatusModels[i].Lng });
            this.gMap.fitBounds(latLngBounds_1);
        }
    };
    MapService.prototype.getBeforeLatLng = function (latLngStatusModels, i) {
        if (!latLngStatusModels[i - 1])
            return this.getBeforeLatLng(latLngStatusModels, i - 1);
        return new google.maps.LatLng(latLngStatusModels[i - 1].Lat, latLngStatusModels[i - 1].Lng);
    };
    return MapService;
}());

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Languages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationManage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Translations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_th__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_en__ = __webpack_require__(872);


var Languages = /** @class */ (function () {
    function Languages() {
    }
    return Languages;
}());

var TranslationManage = /** @class */ (function () {
    function TranslationManage() {
        this.languages = new Languages();
        this.register();
    }
    TranslationManage.prototype.register = function () {
        this.languages.th = __WEBPACK_IMPORTED_MODULE_0__lang_th__["a" /* LangTh */];
        this.languages.en = __WEBPACK_IMPORTED_MODULE_1__lang_en__["a" /* LangEn */];
    };
    TranslationManage.prototype.get = function (lang) {
        return this.languages[lang];
    };
    return TranslationManage;
}());

var Translations = /** @class */ (function () {
    function Translations() {
    }
    Translations.getHistoryTotal = function (historyModel) {
        return "[" + this.language.Length + " : " + (historyModel.LengthTotal || 0) + " \n        " + this.language.Km + "][" + this.language.Speed + " : " + (historyModel.AvgSpeed || 0) + " \n        " + this.language.KmH + "][" + this.language.Runningtime + " : " + (historyModel.TimeRunningTotal || 0) + "]\n        [" + this.language.Stoppingtime + " : " + (historyModel.TimeStoppingTotal || 0) + "][" + this.language.Parkingtime + " : " + (historyModel.TimeParkingTotal || 0) + "]";
    };
    Translations.getByValueEn = function (val) {
        var langEn = __WEBPACK_IMPORTED_MODULE_1__lang_en__["a" /* LangEn */];
        for (var key in langEn) {
            if (val == langEn[key])
                return this.language[key];
        }
        return val;
    };
    Translations.language = __WEBPACK_IMPORTED_MODULE_0__lang_th__["a" /* LangTh */];
    return Translations;
}());

//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangTh; });
var LangTh = {
    Lang: 'th',
    Language: 'ไทย',
    License: 'ทะเบียน',
    LicenseSelect: 'เลือกทะเบียน',
    Status: 'สถานะ',
    Speed: 'ความเร็ว',
    Date: 'วันที่',
    Day: 'วัน',
    Address: 'สถานที่',
    Realtime: 'ปัจจุบัน',
    History: 'ย้อนหลัง',
    Report: 'รายงาน',
    Total: 'สรุป',
    Length: 'ระยะทาง',
    Km: 'กม.',
    KmH: 'กม/ชม',
    Runningtime: 'เวลาวิ่ง',
    Stoppingtime: 'เวลาหยุด',
    Parkingtime: 'เวลาจอด',
    ConnectionRefused: 'การเชื่อมต่อขัดข้อง กรุณาลองใหม่ภายหลัง',
    PleaseSelect: 'กรุณาเลือกข้อมูลที่ต้องการค้นหาให้ถูกต้อง',
    ErrorMassage: 'ข้อผิดพลาด',
    Ok: 'ตกลง',
    Loading: 'กำลังโหลดข้อมูล...',
    DelayExceeded: 'การเชื่อมต่อขัดข้อง',
    Overspeedtimes: 'ขับเร็ว(ครั้ง)',
    Overspeedmax: 'ความเร็ว(สูงสุด)',
    Idletimes: 'หยุดรถ(ครั้ง)',
    Idletotal: 'หยุดรถ(เวลา)',
    Parktimes: 'จอดรถ(ครั้ง)',
    Parktotal: 'จอดรถ(เวลา)',
    TotalUsag: 'เวลาใช้งานรถ',
    TotalDis: 'ระยะทาง',
    Ig: 'สวิทช์กุญแจ',
    Reportlist: 'รายงาน',
    StartDate: 'วันที่เริ่ม',
    EndDate: 'วันที่ถึง',
    Period: 'ระยะเวลา',
    Search: 'ค้นหา',
    Idle: 'หยุดรถ',
    Overspeed: 'ขับเร็ว',
    Park: 'จอดรถ',
    On: 'เปิด',
    Off: 'ปิด',
    All: 'ทั้งหมด',
    Logout: 'ออกจากระบบ',
    Login: 'เข้าสู่ระบบ',
    Running: 'วิ่ง',
    Idling: 'หยุด',
    IgOff: 'ปิดสวิทช์กุญแจ',
    IgOn: 'เปิดสวิทช์กุญแจ',
    Parking: 'จอด',
    ParkingLost: 'จอด(ไม่มี gps)',
    IgOnLost: 'เปิดสวิทช์กุญแจ(ไม่มี gps)',
    IgOffLost: 'ปิดสวิทช์กุญแจ(ไม่มี gps)',
    RunningLost: 'วิ่ง(ไม่มี gps)',
    PtoOff: 'เปิดประตู',
    PtoOn: 'ปิดประตู',
    Unplug: 'ถอดปลั๊ก gps',
    PlugIn: 'เสียบปลั๊ก gps',
    BoxReset: 'รีเซ็ดกล่อง gps',
    IdlingStart: 'หยุด',
    ParkRunning: 'โดนลาก',
    NotFound: 'ไม่พบข้อมูล',
    Back: 'กลับ',
    More: 'เพิ่มเติม',
    Translation: 'แปลภาษา',
    ChangeLanguage: 'เปลี่ยนภาษา',
    ChangePassword: 'เปลี่ยนรหัสผ่าน',
    Close: 'ยกเลิก',
    Done: 'เสร็จสิ้น',
    ReNewPassword: 'ยืนยันรหัสผ่าน',
    NewPassword: 'รหัสผ่านใหม่',
    CurrentPassword: 'รหัสผ่านปัจจุบัน',
    Username: 'ผู้ใช้',
    Match: 'ถูกต้อง',
    DoNot: 'ไม่',
    Password: 'รหัสผ่าน',
    Other: 'อื่นๆ',
    Setting: 'ตั้งค่า',
    VehicleSetting: 'ตั้งค่ารถ',
    Vehicle: 'รถ',
    ShowDaily: 'ดูรายวัน',
    Chart: 'กราฟ',
    ReportStatus: 'สถานะ (นาที)',
    ReportDailyStatus: 'สถานะรายวัน (นาที)',
    ReportDistanceDaily: 'ระยะทางรายวัน (กม.)',
    ReportOverSpeed: 'ขับเร็ว (ครั้ง)',
    Next: 'ถัดไป',
    CheckAll: 'เลือกทั้งหมด',
    UnCheckAll: 'ยกเลิกทั้งหมด',
    SettingReportDetail: 'รายละเอียดการตั้งค่า',
    OverSpeedMax: 'ความเร็วสูงสุด',
    OverSpeedTimes: 'ความเร็วเกิน (นาที)',
    IdleTimes: 'หยุดรถเกินกำหนด (นาที)',
    ParkTimes: 'จอดรถเกินกำหนด (นาที)',
    Save: 'ตกลง',
    Custom: 'กำหนดเอง',
    Temp1: 'อุณหภูมิ 1',
    Temp2: 'อุณหภูมิ 2',
    HiddenAndShowTemp: 'แสดง/ซ่อน อุณหภูมิ',
    SelectGroup: 'เลือกกลุ่ม',
    Station: 'สถานี',
    StationName: 'ชื่อสถานี',
    InDateTime: 'เวลาเข้า',
    OutDateTime: 'เวลาถึง',
    InTemp: 'อุณหภูมิเข้า',
    OutTemp: 'อุณหภูมิออก',
    RunTimeMax: 'เวลาขับรถต่อเนื่องสูงสุด',
    SureLogOut: 'คุณแน่ใจหรือว่าต้องการออกจากระบบ',
    And: 'และอีก',
    Help: 'การใช้งาน',
    Remember: 'เข้าสู่ระบบตลอด',
    Up: 'อัพเดท'
};
//# sourceMappingURL=lang-th.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangEn; });
var LangEn = {
    Lang: 'en',
    Language: 'English',
    License: 'License',
    LicenseSelect: 'License select',
    Status: 'Status',
    Speed: 'Speed',
    Date: 'Date',
    Day: 'Day',
    Address: 'Address',
    Realtime: 'Realtime',
    History: 'History',
    Report: 'Report',
    Total: 'Summary',
    Length: 'Distance',
    KmH: 'Km/H',
    Km: 'Km.',
    Runningtime: 'Running time',
    Stoppingtime: 'Stopping time',
    Parkingtime: 'Parking time',
    ConnectionRefused: 'Connection Refused',
    PleaseSelect: 'Please select the desired data',
    ErrorMassage: 'Error Massage',
    Ok: 'Ok',
    Loading: 'Loading...',
    DelayExceeded: 'Delay exceeded',
    Overspeedtimes: 'Overspeed(times)',
    Overspeedmax: 'Overspeed(max)',
    Idletimes: 'Idle(times)',
    Idletotal: 'Idle(total)',
    Parktimes: 'Park(times)',
    Parktotal: 'Park(total)',
    TotalUsag: 'TotalUsag',
    TotalDis: 'TotalDis',
    Ig: 'Ig',
    Reportlist: 'Report list',
    StartDate: 'StartDate',
    EndDate: 'EndDate',
    Period: 'Period',
    Search: 'Search',
    Idle: 'Idle',
    Overspeed: 'Overspeed',
    Park: 'Park',
    On: 'On',
    Off: 'Off',
    All: 'All',
    Logout: 'Logout',
    Login: 'Login',
    Running: 'Running',
    Idling: 'Idling',
    IgOff: 'IgOff',
    IgOn: 'IgOn',
    Parking: 'Parking',
    ParkingLost: 'ParkingLost',
    IgOnLost: 'IgOnLost',
    IgOffLost: 'IgOffLost',
    RunningLost: 'RunningLost',
    PtoOff: 'PtoOff',
    PtoOn: 'PtoOn',
    Unplug: 'Unplug',
    PlugIn: 'PlugIn',
    BoxReset: 'BoxReset',
    IdlingStart: 'IdlingStart',
    ParkRunning: 'ParkRunning',
    NotFound: 'Not Found',
    Back: 'Back',
    More: 'More',
    Translation: 'Translation',
    ChangeLanguage: 'Change language',
    ChangePassword: 'Change password',
    Close: 'Close',
    Done: 'Done',
    ReNewPassword: 'Confirm password',
    NewPassword: 'New password',
    CurrentPassword: 'Old password',
    Username: 'Username',
    Match: ' match',
    DoNot: ' do not',
    Password: 'Password',
    Other: 'Other',
    Setting: 'Setting',
    VehicleSetting: 'Vehicle setting',
    Vehicle: 'Vehicle',
    ShowDaily: 'Daily',
    Chart: 'Chart',
    ReportStatus: 'Status (min)',
    ReportDailyStatus: 'Daily status (min)',
    ReportDistanceDaily: 'Distance status (km.)',
    ReportOverSpeed: 'Over speed (time)',
    Next: 'Next',
    CheckAll: 'Select all',
    UnCheckAll: 'Clear',
    SettingReportDetail: 'SettingReport Detail',
    OverSpeedMax: 'Maximum speed',
    OverSpeedTimes: 'Overspeed duration limit',
    IdleTimes: 'Stop duration limit',
    ParkTimes: 'Park  duration limit',
    Save: 'Save',
    Custom: 'Custom',
    Temp1: 'Temp1',
    Temp2: 'Temp2',
    HiddenAndShowTemp: 'Show/Hidden Temp',
    SelectGroup: 'Select group',
    Station: 'Station',
    StationName: 'Station name',
    InDateTime: 'In time',
    OutDateTime: 'Out time',
    InTemp: 'In temperature',
    OutTemp: 'Out temperature',
    RunTimeMax: 'Run time max',
    SureLogOut: 'Are you sure you want to log out?',
    And: 'And',
    Help: 'Help',
    Remember: 'Remember',
    Up: 'Up'
};
//# sourceMappingURL=lang-en.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, toastCtrl, toolHelper) {
        this.mapService = mapService;
        this.toastCtrl = toastCtrl;
        this.toolHelper = toolHelper;
    }
    MapComponent.prototype.ngOnInit = function () {
        console.log(this.mapId);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        this.mapService.loadMap(google, this.mapId, this.toastCtrl, this.toolHelper);
    };
    MapComponent.prototype.addMarker = function (markerModel, showUp) {
        var marker = this.mapService.setMarker(markerModel, showUp);
        this.mapService.showToast(markerModel.Info, showUp);
        //this.searchMarker(markerModel.Info);
        return marker;
    };
    MapComponent.prototype.updateMarker = function (marker, markerModel) {
        this.mapService.updateMarker(marker, markerModel);
        this.mapService.showToast(markerModel.Info, true);
        //this.searchMarker(markerModel.Info);
    };
    MapComponent.prototype.addPolyline = function (latLngStatusModels) {
        this.mapService.setPolylines(latLngStatusModels);
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-map',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\shared\map\map.component.html"*/'<div id="{{mapId}}"  class="map"></div>  '/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\shared\map\map.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* MapService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service__["a" /* ToolHelper */]])
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_search_paging_model__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ToolHelper = /** @class */ (function () {
    function ToolHelper(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.t = __WEBPACK_IMPORTED_MODULE_4__translate__["b" /* Translations */];
    }
    ToolHelper.prototype.setToDate = function (date) {
        var dateTimeList = date.split('-');
        if (dateTimeList.length != 3)
            return;
        var yearTimeList = dateTimeList[2].split(' ');
        if (yearTimeList.length != 2)
            return;
        var timelist = yearTimeList[1].split(':');
        if (timelist.length != 2)
            return;
        return new Date(+yearTimeList[0], +dateTimeList[1] - 1, +dateTimeList[0], +timelist[0], +timelist[1]); // +  to convert a string to a number in TypeScript
    };
    ToolHelper.prototype.alert = function (message) {
        return this.alertCtrl.create({
            title: this.t.language.ErrorMassage,
            subTitle: message,
            buttons: [this.t.language.Ok]
        });
    };
    ToolHelper.prototype.searchPagger = function (skip, take, search, vehicleGroupId) {
        var model = new __WEBPACK_IMPORTED_MODULE_5__model_search_paging_model__["a" /* SearchPagingModel */]();
        model.Skip = skip;
        model.Take = take;
        model.VehicleGroupId = vehicleGroupId;
        model.Search = search;
        return this.convertToFromQuery(model);
    };
    ToolHelper.prototype.convertToFromQuery = function (model) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* URLSearchParams */]();
        for (var key in model) {
            params.set(key, model[key]);
        }
        return params.toString();
    };
    ToolHelper.prototype.convertToFromQuery2 = function (model) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* URLSearchParams */]();
        for (var key in model) {
            for (var key2 in model[key]) {
                params.set(key + '.' + key2, model[key][key2]);
            }
        }
        return params.toString();
    };
    ToolHelper.prototype.alertEvent = function (message, event) {
        return this.alertCtrl.create({
            title: this.t.language.ErrorMassage,
            subTitle: message,
            buttons: [
                {
                    text: this.t.language.Back,
                    role: 'cancel',
                    handler: function () {
                        event;
                    }
                }
            ]
        });
    };
    ToolHelper.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: this.t.language.Loading,
        });
        this.loader.present();
    };
    ToolHelper.prototype.setFormatDatetime = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment_moment__["utc"](date).format('DD/MM/YYYY HH:mm');
    };
    ToolHelper.prototype.setFormatTime = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment_moment__["utc"](date).format('HH:mm');
    };
    ToolHelper.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].from(error.message || error);
    };
    ToolHelper.prototype.getTimeUp = function (statusDate) {
        var date1 = new Date(Date.now());
        var date2 = new Date(statusDate);
        var timeDiff = date1.getTime() - date2.getTime();
        if (timeDiff < 0)
            return '0m';
        var minDiff = Math.floor(timeDiff / (1000 * 60));
        if (minDiff < 60)
            return minDiff + 'm';
        else if (minDiff < (60 * 24))
            return Math.floor(minDiff / 60) + 'h';
        else
            return Math.floor(minDiff / (60 * 24)) + 'd';
    };
    ToolHelper.prototype.setTimestamp = function (value) {
        if (!value) {
            return '';
        }
        var timeArr = value.split(':');
        var dayHour = timeArr[0].replace('.', 'd ');
        return dayHour + ":" + timeArr[1] == '00:00' && timeArr[2] != '00'
            ? '< 00.01'
            : dayHour + ":" + timeArr[1];
    };
    ToolHelper.prototype.converTimestampToNumber = function (value) {
        if (!value) {
            return 0;
        }
        var time = value.split('.');
        if (time.length == 2) {
            var hourMinutes = time[1].split(':');
            return (parseInt(time[0]) * 1440) + (parseInt(hourMinutes[0]) * 60) + (parseInt(hourMinutes[1]));
        }
        else {
            var hourMinutes = time[0].split(':');
            return (parseInt(hourMinutes[0]) * 60) + (parseInt(hourMinutes[1]));
        }
    };
    ToolHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ToolHelper);
    return ToolHelper;
}());

//# sourceMappingURL=tool-helper.js.map

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 371,
	"./af.js": 371,
	"./ar": 372,
	"./ar-dz": 373,
	"./ar-dz.js": 373,
	"./ar-kw": 374,
	"./ar-kw.js": 374,
	"./ar-ly": 375,
	"./ar-ly.js": 375,
	"./ar-ma": 376,
	"./ar-ma.js": 376,
	"./ar-sa": 377,
	"./ar-sa.js": 377,
	"./ar-tn": 378,
	"./ar-tn.js": 378,
	"./ar.js": 372,
	"./az": 379,
	"./az.js": 379,
	"./be": 380,
	"./be.js": 380,
	"./bg": 381,
	"./bg.js": 381,
	"./bm": 382,
	"./bm.js": 382,
	"./bn": 383,
	"./bn.js": 383,
	"./bo": 384,
	"./bo.js": 384,
	"./br": 385,
	"./br.js": 385,
	"./bs": 386,
	"./bs.js": 386,
	"./ca": 387,
	"./ca.js": 387,
	"./cs": 388,
	"./cs.js": 388,
	"./cv": 389,
	"./cv.js": 389,
	"./cy": 390,
	"./cy.js": 390,
	"./da": 391,
	"./da.js": 391,
	"./de": 392,
	"./de-at": 393,
	"./de-at.js": 393,
	"./de-ch": 394,
	"./de-ch.js": 394,
	"./de.js": 392,
	"./dv": 395,
	"./dv.js": 395,
	"./el": 396,
	"./el.js": 396,
	"./en-au": 397,
	"./en-au.js": 397,
	"./en-ca": 398,
	"./en-ca.js": 398,
	"./en-gb": 399,
	"./en-gb.js": 399,
	"./en-ie": 400,
	"./en-ie.js": 400,
	"./en-nz": 401,
	"./en-nz.js": 401,
	"./eo": 402,
	"./eo.js": 402,
	"./es": 403,
	"./es-do": 404,
	"./es-do.js": 404,
	"./es-us": 405,
	"./es-us.js": 405,
	"./es.js": 403,
	"./et": 406,
	"./et.js": 406,
	"./eu": 407,
	"./eu.js": 407,
	"./fa": 408,
	"./fa.js": 408,
	"./fi": 409,
	"./fi.js": 409,
	"./fo": 410,
	"./fo.js": 410,
	"./fr": 411,
	"./fr-ca": 412,
	"./fr-ca.js": 412,
	"./fr-ch": 413,
	"./fr-ch.js": 413,
	"./fr.js": 411,
	"./fy": 414,
	"./fy.js": 414,
	"./gd": 415,
	"./gd.js": 415,
	"./gl": 416,
	"./gl.js": 416,
	"./gom-latn": 417,
	"./gom-latn.js": 417,
	"./gu": 418,
	"./gu.js": 418,
	"./he": 419,
	"./he.js": 419,
	"./hi": 420,
	"./hi.js": 420,
	"./hr": 421,
	"./hr.js": 421,
	"./hu": 422,
	"./hu.js": 422,
	"./hy-am": 423,
	"./hy-am.js": 423,
	"./id": 424,
	"./id.js": 424,
	"./is": 425,
	"./is.js": 425,
	"./it": 426,
	"./it.js": 426,
	"./ja": 427,
	"./ja.js": 427,
	"./jv": 428,
	"./jv.js": 428,
	"./ka": 429,
	"./ka.js": 429,
	"./kk": 430,
	"./kk.js": 430,
	"./km": 431,
	"./km.js": 431,
	"./kn": 432,
	"./kn.js": 432,
	"./ko": 433,
	"./ko.js": 433,
	"./ky": 434,
	"./ky.js": 434,
	"./lb": 435,
	"./lb.js": 435,
	"./lo": 436,
	"./lo.js": 436,
	"./lt": 437,
	"./lt.js": 437,
	"./lv": 438,
	"./lv.js": 438,
	"./me": 439,
	"./me.js": 439,
	"./mi": 440,
	"./mi.js": 440,
	"./mk": 441,
	"./mk.js": 441,
	"./ml": 442,
	"./ml.js": 442,
	"./mr": 443,
	"./mr.js": 443,
	"./ms": 444,
	"./ms-my": 445,
	"./ms-my.js": 445,
	"./ms.js": 444,
	"./my": 446,
	"./my.js": 446,
	"./nb": 447,
	"./nb.js": 447,
	"./ne": 448,
	"./ne.js": 448,
	"./nl": 449,
	"./nl-be": 450,
	"./nl-be.js": 450,
	"./nl.js": 449,
	"./nn": 451,
	"./nn.js": 451,
	"./pa-in": 452,
	"./pa-in.js": 452,
	"./pl": 453,
	"./pl.js": 453,
	"./pt": 454,
	"./pt-br": 455,
	"./pt-br.js": 455,
	"./pt.js": 454,
	"./ro": 456,
	"./ro.js": 456,
	"./ru": 457,
	"./ru.js": 457,
	"./sd": 458,
	"./sd.js": 458,
	"./se": 459,
	"./se.js": 459,
	"./si": 460,
	"./si.js": 460,
	"./sk": 461,
	"./sk.js": 461,
	"./sl": 462,
	"./sl.js": 462,
	"./sq": 463,
	"./sq.js": 463,
	"./sr": 464,
	"./sr-cyrl": 465,
	"./sr-cyrl.js": 465,
	"./sr.js": 464,
	"./ss": 466,
	"./ss.js": 466,
	"./sv": 467,
	"./sv.js": 467,
	"./sw": 468,
	"./sw.js": 468,
	"./ta": 469,
	"./ta.js": 469,
	"./te": 470,
	"./te.js": 470,
	"./tet": 471,
	"./tet.js": 471,
	"./th": 472,
	"./th.js": 472,
	"./tl-ph": 473,
	"./tl-ph.js": 473,
	"./tlh": 474,
	"./tlh.js": 474,
	"./tr": 475,
	"./tr.js": 475,
	"./tzl": 476,
	"./tzl.js": 476,
	"./tzm": 477,
	"./tzm-latn": 478,
	"./tzm-latn.js": 478,
	"./tzm.js": 477,
	"./uk": 479,
	"./uk.js": 479,
	"./ur": 480,
	"./ur.js": 480,
	"./uz": 481,
	"./uz-latn": 482,
	"./uz-latn.js": 482,
	"./uz.js": 481,
	"./vi": 483,
	"./vi.js": 483,
	"./x-pseudo": 484,
	"./x-pseudo.js": 484,
	"./yo": 485,
	"./yo.js": 485,
	"./zh-cn": 486,
	"./zh-cn.js": 486,
	"./zh-hk": 487,
	"./zh-hk.js": 487,
	"./zh-tw": 488,
	"./zh-tw.js": 488
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 876;

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_linq__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_linq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_linq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);




//import { ToolHelper } from '.'
var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.searchObjectArr = function (val, models) {
        var _this = this;
        var valArr = val.split(' ');
        var data = __WEBPACK_IMPORTED_MODULE_1_linq___default.a.from(models);
        valArr.forEach(function (v) {
            data = data.where(function (r) { return _this.searchObj(r, v); });
        });
        return data.toArray();
    };
    SearchService.searchObj = function (obj, val) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key]) {
                if (obj[key].toString().toLowerCase().includes(val.toLowerCase()))
                    return true;
                if (__WEBPACK_IMPORTED_MODULE_2__translate__["b" /* Translations */].language[obj[key]] && __WEBPACK_IMPORTED_MODULE_2__translate__["b" /* Translations */].language[obj[key]].includes(val))
                    return true;
                if (this.setFormatDateTostring([obj[key]].toString()).includes(val))
                    return true;
                if (val.length > 2 && val[1] == 's' && !isNaN(+val.substring(2)) && key == 'Speed') {
                    if (val[0] == '<' && +obj[key] < +val.substring(2))
                        return true;
                    if (val[0] == '>' && +obj[key] > +val.substring(2))
                        return true;
                }
                if (val.length > 2 && val[1] == 'd' && key == 'StatusDate') {
                    var date = new Date(__WEBPACK_IMPORTED_MODULE_0_moment_moment__([obj[key]].toString()).format());
                    console.log([obj[key]].toString());
                    console.log(date);
                    var dateSearch = void 0;
                    var dateArr = val.substring(2).split('/');
                    if (!isNaN(+val.substring(2)))
                        dateSearch = new Date(new Date(new Date()
                            .setDate(+val.substring(2)))
                            .setHours(0, 0, 0));
                    else if (dateArr && dateArr.length == 2 && !isNaN(+dateArr[0]) && !isNaN(+dateArr[1]))
                        dateSearch = new Date(new Date(new Date(new Date()
                            .setDate(+dateArr[0]))
                            .setHours(0, 0, 0))
                            .setMonth((+dateArr[1]) - 1));
                    else
                        return false;
                    if (val[0] == '<' && date < dateSearch)
                        return true;
                    if (val[0] == '>' && date > dateSearch)
                        return true;
                }
            }
        }
        return false;
    };
    SearchService.setFormatDateTostring = function (date) {
        var dateFormat = new Date(date);
        return __WEBPACK_IMPORTED_MODULE_0_moment_moment__["utc"](date).format('DD/MM/YYYY HH:mm');
    };
    SearchService.timer = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].timer(700, 500);
    return SearchService;
}());

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__status_service__ = __webpack_require__(880);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__status_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
var StatusService = /** @class */ (function () {
    function StatusService() {
        this.degree = [];
        for (var i = 0; i < 360;) {
            this.degree.push(i);
            if (i % 3 === 0) {
                i = i + 22;
            }
            else {
                i = i + 23;
            }
        }
    }
    StatusService.prototype.getIconUrl = function (data) {
        var url = './assets/images/status_images/';
        switch (data.Status) {
            case 'Running':
                url += 'run_' + this.getHeadNumber(data.Head, this.degree) + '.png';
                break;
            case 'Overspeed':
                url += 'ovs_' + this.getHeadNumber(data.Head, this.degree) + '.png';
                break;
            case 'IdlingStart':
                url += 'Idling.png';
                break;
            default:
                url += data.Status + '.png';
                break;
        }
        return url;
    };
    StatusService.prototype.getHeadNumber = function (data, degree) {
        for (var head = data; !degree.includes(head); head--) {
        }
        return head;
    };
    StatusService.prototype.checkURL = function (url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    };
    return StatusService;
}());

//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__license_search_component__ = __webpack_require__(882);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__license_search_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__shared__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__shared__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__shared__["c"]; });
/* unused harmony reexport MockedLicenstList */
/* unused harmony reexport OptionModel */
/* unused harmony reexport SearchModel */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LicenseSearchComponent = /** @class */ (function () {
    function LicenseSearchComponent(service) {
        this.service = service;
        this.masterEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.outputSetDataSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.t = __WEBPACK_IMPORTED_MODULE_2__translate__["b" /* Translations */];
        this.loading = false;
        this.dateLength = 1;
        this.notificationSelectOpts = {
            title: this.t.language.EndDate,
            cssClass: 'notification-select',
        };
    }
    LicenseSearchComponent.prototype.ngOnInit = function () {
        var dateNow = new Date();
        dateNow.setHours(0, 0, 0);
        this.startDate = __WEBPACK_IMPORTED_MODULE_1_moment_moment__(dateNow).format();
        this.startTime = '00:00';
        this.endDate = __WEBPACK_IMPORTED_MODULE_1_moment_moment__(dateNow).format();
        this.endTime = '23:59';
        this.setLimitStartDate();
        this.setLimitEndDate();
    };
    LicenseSearchComponent.prototype.setLimitStartDate = function () {
        var dateSelectMin = new Date();
        dateSelectMin && dateSelectMin.setMonth(dateSelectMin.getMonth() - 3);
        this.startDateMin = __WEBPACK_IMPORTED_MODULE_1_moment_moment__(dateSelectMin).format('YYYY-MM-DD');
        this.startDateMax = __WEBPACK_IMPORTED_MODULE_1_moment_moment__(new Date()).format('YYYY-MM-DD');
    };
    LicenseSearchComponent.prototype.setLimitEndDate = function () {
        if (this.startDate) {
            this.endDate = this.startDate;
            var limitDate = new Date(this.startDate);
            this.endDateMin = __WEBPACK_IMPORTED_MODULE_1_moment_moment__(limitDate).format('YYYY-MM-DD');
            limitDate && limitDate.setDate(limitDate.getDate() + 7);
            limitDate = limitDate > new Date() ? new Date() : limitDate;
            this.endDateMax = __WEBPACK_IMPORTED_MODULE_1_moment_moment__(limitDate.toJSON()).format('YYYY-MM-DD');
        }
    };
    LicenseSearchComponent.prototype.get = function () {
        var timeSelect = this.startTime.split(':');
        var startDate = new Date(new Date(this.startDate).setHours(+timeSelect[0], +timeSelect[1]));
        var endDate;
        if (this.dateLength != 0) {
            endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + +this.dateLength);
            endDate.setSeconds(endDate.getSeconds() - 1);
            console.log(endDate);
        }
        else {
            var endTime = this.endTime.split(':');
            endDate = new Date(new Date(this.endDate).setHours(+endTime[0], +endTime[1]));
        }
        return {
            Id: this.id,
            StartDate: __WEBPACK_IMPORTED_MODULE_1_moment_moment__(startDate).format(),
            EndDate: __WEBPACK_IMPORTED_MODULE_1_moment_moment__(endDate).format()
        };
    };
    LicenseSearchComponent.prototype.searchEvent = function () {
        this.masterEvent.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LicenseSearchComponent.prototype, "masterEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LicenseSearchComponent.prototype, "outputSetDataSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__service__["a" /* ToolHelper */])
    ], LicenseSearchComponent.prototype, "toolHelper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], LicenseSearchComponent.prototype, "options", void 0);
    LicenseSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-license-search',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\shared\license-search\license-search.component.html"*/'<ion-grid>\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n        <ion-item>\n\n          <ion-label>{{t.language.StartDate}}</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="startDate" min="{{startDateMin}}" max="{{startDateMax}}" (ionChange)="setLimitEndDate()"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <ion-datetime displayFormat="HH:mm" [(ngModel)]="startTime"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="dateLength != 0">\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label>{{t.language.EndDate}}</ion-label>\n\n          <ion-select [(ngModel)]="dateLength" [selectOptions]="notificationSelectOpts" interface="action-sheet" cancelText={{t.language.Close}}>\n\n            <ion-option value=1>1 {{t.language.Day}}</ion-option>\n\n            <ion-option value=3>3 {{t.language.Day}}</ion-option>\n\n            <ion-option value=5>5 {{t.language.Day}}</ion-option>\n\n            <ion-option value=7>7 {{t.language.Day}}</ion-option>\n\n            <ion-option value=0>{{t.language.Custom}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="dateLength == 0">\n\n      <ion-col col-8>\n\n        <ion-item>\n\n          <ion-label>{{t.language.EndDate}}</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="endDate" min="{{endDateMin}}" max="{{endDateMax}}"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-item>\n\n          <ion-datetime displayFormat="HH:mm" [(ngModel)]="endTime"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <button ion-button round full color="bsup" (click)="searchEvent()">{{t.language.Search}}</button>\n\n</ion-grid>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\shared\license-search\license-search.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LicenseSearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared__["a" /* LicenseSearchService */]])
    ], LicenseSearchComponent);
    return LicenseSearchComponent;
}());

//# sourceMappingURL=license-search.component.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OptionModel */
var OptionModel = /** @class */ (function () {
    function OptionModel() {
    }
    return OptionModel;
}());

//# sourceMappingURL=select-options.model.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MockedLicenstList */
var MockedLicenstList = [
    {
        Id: 0,
        Name: '',
        CheckBoxSelect: false
    },
    {
        Id: 1,
        Name: 'AA-1111',
        CheckBoxSelect: false
    },
    {
        Id: 2,
        Name: 'BB-1212',
        CheckBoxSelect: false
    },
    {
        Id: 3,
        Name: 'CC-2222',
        CheckBoxSelect: false
    },
    {
        Id: 4,
        Name: 'DD-2323',
        CheckBoxSelect: false
    }
];
//# sourceMappingURL=license-list.mocked.model.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_model__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_client__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LicenseSearchService = /** @class */ (function () {
    function LicenseSearchService(http) {
        this.http = http;
    }
    LicenseSearchService.prototype.mappingRealtimeModelToListModel = function (realtimeModel) {
        var listModels = [];
        realtimeModel.RouteList.forEach(function (r) {
            var listModel = new __WEBPACK_IMPORTED_MODULE_2__list_model__["a" /* ListModel */]();
            listModel.Id = r.CustomerBoxId;
            listModel.Name = r.License;
            listModels.push(listModel);
        });
        return listModels;
    };
    LicenseSearchService.prototype.getLicense = function (fromQuery) {
        var _this = this;
        return this.http.get("/vehicle/GetLicenseList/paging?" + fromQuery)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.handleError;
            }
        });
    };
    LicenseSearchService.prototype.getVehicleGroup = function (fromQuery) {
        var _this = this;
        return this.http.get("/vehicle/getVehicleGroupList/paging?" + fromQuery)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.handleError;
            }
        });
    };
    LicenseSearchService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].from(error.message || error);
    };
    LicenseSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_client__["a" /* HttpClient */]])
    ], LicenseSearchService);
    return LicenseSearchService;
}());

//# sourceMappingURL=license-search.service.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchModel */
var SearchModel = /** @class */ (function () {
    function SearchModel() {
    }
    return SearchModel;
}());

//# sourceMappingURL=search.model.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiselect_license__ = __webpack_require__(888);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__multiselect_license__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectLicenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_group_search_header_group_search__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultiselectLicenseComponent = /** @class */ (function () {
    function MultiselectLicenseComponent(toolHelper, licenseSearchService, toastCtrl) {
        this.toolHelper = toolHelper;
        this.licenseSearchService = licenseSearchService;
        this.toastCtrl = toastCtrl;
        this.masterEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
        this.listModels = new __WEBPACK_IMPORTED_MODULE_2__shared__["d" /* ListPagingModel */]();
        this.search = '';
        this.skip = 0;
        this.take = 30;
        this.enabled = true;
        this.loading = true;
        this.id = [];
        this.name = [];
    }
    MultiselectLicenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData(0, this.take).subscribe(function (data) {
            if (data)
                _this.listModels = data;
        });
    };
    MultiselectLicenseComponent.prototype.getData = function (skip, take) {
        var _this = this;
        var fromQuery = this.toolHelper.searchPagger(skip, take, this.header.searchInput, this.header.h.vehicleGroup ? this.header.h.vehicleGroup.Id : 0);
        return this.licenseSearchService.getLicense(fromQuery)
            .map(function (data) {
            _this.loading = false;
            if (data.Message) {
                _this.toolHelper.alert(_this.t.getByValueEn(data.Message));
                return null;
            }
            else if (data.StatusCode) {
                _this.toolHelper.alert(_this.t.getByValueEn(data.StatusCode));
                return null;
            }
            else {
                return data;
            }
        }, function (err) {
            _this.loading = false;
            var alert = err.statusText ?
                _this.toolHelper.alert(_this.t.getByValueEn(err.statusText))
                :
                    _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            alert.present();
            alert.onDidDismiss(function () {
                _this.getData(_this.skip, _this.take).subscribe();
            });
            return null;
        });
    };
    MultiselectLicenseComponent.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (!this.enabled || this.listModels.ListModels.length == this.listModels.DataAllLength) {
            infiniteScroll.complete();
            return;
        }
        this.skip += 30;
        this.getData(this.skip, this.take)
            .subscribe(function (data) {
            if (data) {
                var listModels = data;
                _this.listModels.DataAllLength = listModels.DataAllLength;
                listModels.ListModels.forEach(function (listModel) {
                    _this.listModels.ListModels.push(listModel);
                });
            }
            else
                _this.enabled = false;
            infiniteScroll.complete();
        });
    };
    MultiselectLicenseComponent.prototype.clearId = function () {
        for (var i = 0; i < this.listModels.ListModels.length; i++) {
            var model = this.listModels.ListModels[i];
            if (model.CheckBoxSelect === true) {
                model.CheckBoxSelect = false;
                this.id = [];
            }
        }
    };
    MultiselectLicenseComponent.prototype.selectAllId = function () {
        for (var i = 0; i < this.listModels.ListModels.length; i++) {
            var model = this.listModels.ListModels[i];
            if (!model.CheckBoxSelect) {
                model.CheckBoxSelect = true;
                this.selectCard(model);
            }
        }
    };
    MultiselectLicenseComponent.prototype.nextPage = function () {
        console.log("multiselect id: " + this.id);
        if (this.id.toString() === '') {
            this.presentToast();
        }
        else {
            this.masterEvent.emit();
        }
    };
    MultiselectLicenseComponent.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Please select vehicle.',
            duration: 3000
        });
        toast.present();
    };
    MultiselectLicenseComponent.prototype.selectCard = function (listModel) {
        console.log(listModel.Id, listModel.CheckBoxSelect);
        if (listModel.CheckBoxSelect) {
            this.id.push(listModel.Id);
            this.name.push(listModel.Name);
        }
        else {
            this.id.splice(this.id.indexOf(listModel.Id), 1);
            this.name.splice(this.name.indexOf(listModel.Name), 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], MultiselectLicenseComponent.prototype, "masterEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MultiselectLicenseComponent.prototype, "headerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__header_group_search_header_group_search__["a" /* HeaderGroupSearchPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__header_group_search_header_group_search__["a" /* HeaderGroupSearchPage */])
    ], MultiselectLicenseComponent.prototype, "header", void 0);
    MultiselectLicenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'multiselect-license',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\shared\multiselect-license\multiselect-license.html"*/'<ion-header>\n\n  <ion-navbar color="bsup">\n\n    <page-header-group-search [headerName]="\'(\'+ listModels.ListModels.length +\'/\'+ listModels.DataAllLength +\')\'" (masterEvent)="ngOnInit()"></page-header-group-search>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <page-loading *ngIf="loading" loading=loading></page-loading>\n\n  <div *ngIf="!loading">\n\n    <ion-list>\n\n      <ion-card *ngFor="let item of listModels.ListModels" (click)="item.CheckBoxSelect = !item.CheckBoxSelect; selectCard(item)">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <ion-checkbox checked="item.CheckBoxSelect" [(ngModel)]="item.CheckBoxSelect" (click)="selectCard(item)"></ion-checkbox>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <h2>{{item.Name}}</h2>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" [enabled]="enabled" threshold="100px">\n\n        <ion-infinite-scroll-content loadingText="{{t.language.Loading}}"></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab mini color="bsup">\n\n      <ion-icon name="arrow-dropleft"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab (click)="clearId()">\n\n        <ion-icon name="md-square-outline"></ion-icon>\n\n      </button>\n\n      <button ion-fab (click)="selectAllId()">\n\n        <ion-icon name="md-checkbox"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n    <button ion-fab round full color="bsup" (click)="nextPage()">{{t.language.Next}}</button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\shared\multiselect-license\multiselect-license.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared__["b" /* LicenseSearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* LicenseSearchService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MultiselectLicenseComponent);
    return MultiselectLicenseComponent;
}());

//# sourceMappingURL=multiselect-license.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MockGroupList */
var MockGroupList = {
    "ListModels": [
        {
            "Id": 0,
            "Name": "ทั้งหมด"
        },
        {
            "Id": 1,
            "Name": "fuel"
        },
        {
            "Id": 2,
            "Name": "ฝ่ายบริการ (ช่าง)"
        },
        {
            "Id": 3,
            "Name": "พนักงานขายใหม่"
        }
    ],
    "DataAllLength": 3
};
//# sourceMappingURL=change-group.mocked.model.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__realtime_list__ = __webpack_require__(169);
/* unused harmony reexport RealtimeList */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__realtime_map__ = __webpack_require__(170);
/* unused harmony reexport RealtimeMapPage */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__history_license__ = __webpack_require__(499);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__history_license__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__histories__ = __webpack_require__(500);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__histories__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history__ = __webpack_require__(501);
/* unused harmony reexport HistoryList */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HistoryModel */
/* unused harmony export HistoryDataGroupEventModel */
/* unused harmony export HistoryEventsModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorySearchModel; });
/* unused harmony export HistoryMarkerModel */
var HistoryModel = /** @class */ (function () {
    function HistoryModel() {
        this.HistoryEvents = Array();
    }
    return HistoryModel;
}());

var HistoryDataGroupEventModel = /** @class */ (function () {
    function HistoryDataGroupEventModel() {
    }
    return HistoryDataGroupEventModel;
}());

var HistoryEventsModel = /** @class */ (function () {
    function HistoryEventsModel() {
    }
    return HistoryEventsModel;
}());

var HistorySearchModel = /** @class */ (function () {
    function HistorySearchModel() {
    }
    return HistorySearchModel;
}());

var HistoryMarkerModel = /** @class */ (function () {
    function HistoryMarkerModel() {
        this.LatLngStatusModels = [];
    }
    return HistoryMarkerModel;
}());

//# sourceMappingURL=history.model.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MockedHistory */
var mockedHistoryEvents = [
    {
        StatusDate: "2017-06-27T00:25:31",
        Status: "Parking",
        Speed: 0,
        Address: "แขวง สนามบิน เขต ดอนเมือง กรุงเทพมหานคร",
        Path: {
            Lat: 13.95089,
            Lng: 100.608137
        },
        Temp1: 35,
        Temp2: 0,
        Head: 279,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:46:12",
        Status: "IgOn",
        Speed: 0,
        Address: "แขวง สนามบิน เขต ดอนเมือง กรุงเทพมหานคร",
        Path: {
            Lat: 13.951108,
            Lng: 100.608692
        },
        Temp1: 30.5,
        Temp2: 0,
        Head: 46,
        Length: 30.844461778733354
    },
    {
        StatusDate: "2017-06-27T07:46:42",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 25,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:47:12",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:47:42",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:48:12",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:48:42",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:49:13",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:49:43",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:50:13",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:50:43",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:51:13",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:51:51",
        Status: "RunningLost",
        Speed: null,
        Address: null,
        Path: null,
        Temp1: 30.5,
        Temp2: 0,
        Head: null,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:52:21",
        Status: "Running",
        Speed: 47,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.956717,
            Lng: 100.620025
        },
        Temp1: 30.5,
        Temp2: 889.5,
        Head: 221,
        Length: 0
    },
    {
        StatusDate: "2017-06-27T07:52:51",
        Status: "Running",
        Speed: 63,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.953265,
            Lng: 100.62206
        },
        Temp1: 30.5,
        Temp2: -12.5,
        Head: 171,
        Length: 442.22438775543105
    },
    {
        StatusDate: "2017-06-27T07:53:21",
        Status: "Running",
        Speed: 23,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950038,
            Lng: 100.623222
        },
        Temp1: 30.5,
        Temp2: -56,
        Head: 123,
        Length: 380.1058722421715
    },
    {
        StatusDate: "2017-06-27T07:53:51",
        Status: "Running",
        Speed: 69,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950217,
            Lng: 100.626718
        },
        Temp1: 30.5,
        Temp2: -43,
        Head: 54,
        Length: 377.79669029713267
    },
    {
        StatusDate: "2017-06-27T07:54:21",
        Status: "Running",
        Speed: 59,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.951535,
            Lng: 100.630705
        },
        Temp1: 30,
        Temp2: -9.5,
        Head: 104,
        Length: 454.5321461644284
    },
    {
        StatusDate: "2017-06-27T07:54:51",
        Status: "Running",
        Speed: 70,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950373,
            Lng: 100.63544
        },
        Temp1: 30,
        Temp2: 263,
        Head: 100,
        Length: 527.0603624760711
    },
    {
        StatusDate: "2017-06-27T07:55:21",
        Status: "Running",
        Speed: 52,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.950353,
            Lng: 100.640858
        },
        Temp1: 30,
        Temp2: 293,
        Head: 91,
        Length: 584.688925408094
    },
    {
        StatusDate: "2017-06-27T07:55:51",
        Status: "Running",
        Speed: 32,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.949352,
            Lng: 100.64307
        },
        Temp1: 30,
        Temp2: -105.5,
        Head: 174,
        Length: 263.38383324735497
    },
    {
        StatusDate: "2017-06-27T07:56:23",
        Status: "Running",
        Speed: 9,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.94751,
            Lng: 100.64283
        },
        Temp1: 30,
        Temp2: 103.5,
        Head: 185,
        Length: 206.452095779725
    },
    {
        StatusDate: "2017-06-27T07:56:53",
        Status: "Running",
        Speed: 22,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.94655,
            Lng: 100.642713
        },
        Temp1: 30,
        Temp2: 54,
        Head: 186,
        Length: 107.4912657545435
    },
    {
        StatusDate: "2017-06-27T07:57:23",
        Status: "Running",
        Speed: 41,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.94477,
            Lng: 100.64256
        },
        Temp1: 30,
        Temp2: 99.5,
        Head: 183,
        Length: 198.61447691782868
    },
    {
        StatusDate: "2017-06-27T07:57:53",
        Status: "Running",
        Speed: 58,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.940452,
            Lng: 100.642083
        },
        Temp1: 30,
        Temp2: -14.5,
        Head: 186,
        Length: 482.8913300926743
    },
    {
        StatusDate: "2017-06-27T07:58:23",
        Status: "Running",
        Speed: 37,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.936445,
            Lng: 100.64169
        },
        Temp1: 30,
        Temp2: -32,
        Head: 184,
        Length: 447.572169098591
    },
    {
        StatusDate: "2017-06-27T07:58:53",
        Status: "Running",
        Speed: 37,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.934808,
            Lng: 100.64157
        },
        Temp1: 30,
        Temp2: 91.5,
        Head: 184,
        Length: 182.48621502016027
    },
    {
        StatusDate: "2017-06-27T07:59:23",
        Status: "Running",
        Speed: 46,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932463,
            Lng: 100.643488
        },
        Temp1: 30,
        Temp2: -77.5,
        Head: 102,
        Length: 332.9251737586765
    },
    {
        StatusDate: "2017-06-27T07:59:53",
        Status: "Running",
        Speed: 56,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932423,
            Lng: 100.647447
        },
        Temp1: 30,
        Temp2: -42,
        Head: 91,
        Length: 427.29270293410144
    },
    {
        StatusDate: "2017-06-27T08:00:23",
        Status: "Running",
        Speed: 45,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.9323,
            Lng: 100.651333
        },
        Temp1: 30,
        Temp2: -46,
        Head: 90,
        Length: 419.61423204170745
    },
    {
        StatusDate: "2017-06-27T08:00:53",
        Status: "Running",
        Speed: 56,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932253,
            Lng: 100.654912
        },
        Temp1: 30,
        Temp2: -63,
        Head: 94,
        Length: 386.2942155482251
    },
    {
        StatusDate: "2017-06-27T08:01:23",
        Status: "Running",
        Speed: 30,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932157,
            Lng: 100.658127
        },
        Temp1: 30,
        Temp2: -82,
        Head: 92,
        Length: 347.138913901736
    },
    {
        StatusDate: "2017-06-27T08:01:53",
        Status: "Running",
        Speed: 30,
        Address: "อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932087,
            Lng: 100.661557
        },
        Temp1: 30,
        Temp2: -71,
        Head: 84,
        Length: 370.2603037749073
    },
    {
        StatusDate: "2017-06-27T08:02:25",
        Status: "Running",
        Speed: 6,
        Address: "ตำบล ลาดสวาย อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932082,
            Lng: 100.663233
        },
        Temp1: 30,
        Temp2: 90.5,
        Head: 89,
        Length: 180.88109761584622
    },
    {
        StatusDate: "2017-06-27T08:02:56",
        Status: "Running",
        Speed: 6,
        Address: "ตำบล ลาดสวาย อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932078,
            Lng: 100.66392
        },
        Temp1: 30,
        Temp2: 37,
        Head: 87,
        Length: 74.14496741877063
    },
    {
        StatusDate: "2017-06-27T08:03:29",
        Status: "Running",
        Speed: 8,
        Address: "ตำบล ลาดสวาย อำเภอ ลำลูกกา ปทุมธานี",
        Path: {
            Lat: 13.932063,
            Lng: 100.663945
        },
        Temp1: 30,
        Temp2: 2,
        Head: 91,
        Length: 3.1720157581656085
    }
];
var historyModel = {
    HistoryEvents: mockedHistoryEvents,
    AvgSpeed: 34.52,
    TimeRunningTotal: "01:32:20",
    TimeStoppingTotal: "00:02:04",
    TimeParkingTotal: "09:51:47",
    DataAllLength: 190,
    LengthTotal: 47.77,
    License: 'AA-1111',
    CheckTemp1: false,
    CheckTemp2: false
};
var MockedHistory = historyModel;
//# sourceMappingURL=history.mocked.model.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryService = /** @class */ (function () {
    function HistoryService(http, statusService, toolHelper) {
        this.http = http;
        this.statusService = statusService;
        this.toolHelper = toolHelper;
        this.t = __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* Translations */];
    }
    /*public mappingStatusUrlToHistoryModel(historyModel: HistoryModel): HistoryModel {
        historyModel.HistoryEventsModel.forEach(h => {
            h.EventStart.StatusUrl = this.statusService.getIconUrl(h.EventStart);
            h.EventStart.StatusDate = this.toolHelper.setFormatDatetime(h.EventStart.StatusDate);
            h.EventStart.SpeedRange = h.EventStart.Speed && h.EventStart.Speed.toString();
            if (h.EventEnd) {
                h.EventEnd.StatusUrl = this.statusService.getIconUrl(h.EventEnd);
                h.EventEnd.SpeedRange =
                    h.EventStart.Speed != h.EventEnd.Speed
                        ? h.EventStart.Speed < h.EventEnd.Speed
                            ? `${h.EventStart.Speed} - ${h.EventEnd.Speed}`
                            : `${h.EventEnd.Speed} - ${h.EventStart.Speed}`
                        : h.EventStart.SpeedRange;
                h.EventEnd.StatusDate = h.EventStart.StatusDate != h.EventEnd.StatusDate ? `${h.EventStart.StatusDate} - ${this.toolHelper.setFormatTime(h.EventEnd.StatusDate)}` : '';
            }
        });

        return historyModel;
    }

    public historyMappingToMapModel(historyModel: HistoryModel): MapModel {
        let markerModels = [];
        historyModel.HistoryEventsModel.forEach(model => {
            this.addMarkerModel(markerModels, model.EventStart, historyModel, model.DistanceStart);
            if (model.EventEnd) {
                this.addMarkerModel(markerModels, model.EventEnd, historyModel, model.DistanceEnd);
            }

        });

        let mapModel = new MapModel();
        mapModel.markerModels = markerModels;
        return mapModel;
    }*/
    HistoryService.prototype.mappingDateToHistoryModel = function (historyModel) {
        var _this = this;
        historyModel.HistoryEvents.forEach(function (h) {
            h.StatusDate = _this.toolHelper.setFormatDatetime(h.StatusDate);
            h.StatusUrl = _this.statusService.getIconUrl(h);
        });
        return historyModel;
    };
    HistoryService.prototype.addMarkerModel = function (markerModels, model, historyModel, distance) {
        var marker = this.historyEventsMappingMarkerModel(model, historyModel.License, distance);
        markerModels.push(marker);
    };
    HistoryService.prototype.historyEventsMappingMarkerModel = function (model, license, distance) {
        var marker = new __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* MarkerModel */]();
        marker.Lat = model.Path && model.Path.Lat;
        marker.Lng = model.Path && model.Path.Lng;
        marker.IconPath = model.StatusUrl;
        marker.Info = model;
        marker.Info.StatusDate = marker.Info.StatusDate;
        marker.Info.License = license;
        marker.Distance = distance;
        return marker;
    };
    HistoryService.prototype.getMarkers = function (searchModel) {
        var _this = this;
        var momentStartDate = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(searchModel.StartDate).format('YYYY-MM-DD HH:mm:ss');
        var momentEndDate = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(searchModel.EndDate).format('YYYY-MM-DD HH:mm:ss');
        //let fromQuery = bounds && this.toolHelper.convertToFromQuery2(bounds);
        return this.http.get("/history/get/marker/" + searchModel.Id + "/" + momentStartDate + "/" + momentEndDate)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.toolHelper.handleError;
            }
        });
    };
    HistoryService.prototype.gets = function (customerBoxId, startDate, endDate, skip, take, getTotal) {
        var _this = this;
        console.log('gets history service');
        var momentStartDate = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(startDate).format('YYYY-MM-DD HH:mm:ss');
        var momentEndDate = __WEBPACK_IMPORTED_MODULE_2_moment_moment__(endDate).format('YYYY-MM-DD HH:mm:ss');
        var model = new __WEBPACK_IMPORTED_MODULE_5____["a" /* HistorySearchModel */]();
        model.CustomerBoxId = customerBoxId;
        model.Skip = skip;
        model.Take = take;
        model.GetTotal = getTotal;
        var fromQuery = this.toolHelper.convertToFromQuery(model);
        return this.http.get("/history/get/paging/" + this.t.language.Lang + "/" + momentStartDate + "/" + momentEndDate + "?" + fromQuery)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
                return _this.toolHelper.handleError;
            }
        });
    };
    HistoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__http_client__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["i" /* StatusService */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ToolHelper */]])
    ], HistoryService);
    return HistoryService;
}());

//# sourceMappingURL=history.service.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__more__ = __webpack_require__(507);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__more__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_language__ = __webpack_require__(509);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__change_language__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_password__ = __webpack_require__(510);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__change_password__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(511);
/* unused harmony reexport AccountModel */
/* unused harmony reexport ChangePasswordService */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordService = /** @class */ (function () {
    function ChangePasswordService(http) {
        this.http = http;
    }
    ChangePasswordService.prototype.changePassword = function (data) {
        return this.http.post('/Account/changePassword', data)
            .map(function (response) {
            var model = response && response.json();
            if (model) {
                return model;
            }
            else {
            }
        });
    };
    ChangePasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_client__["a" /* HttpClient */]])
    ], ChangePasswordService);
    return ChangePasswordService;
}());

//# sourceMappingURL=change-password.service.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModel; });
var AccountModel = /** @class */ (function () {
    function AccountModel() {
    }
    return AccountModel;
}());

//# sourceMappingURL=account.model.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settingreport_select__ = __webpack_require__(512);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__settingreport_select__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settingreport__ = __webpack_require__(514);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__settingreport__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_settingreport_service__ = __webpack_require__(515);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__shared_settingreport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_settingreport_model__ = __webpack_require__(516);
/* unused harmony reexport SettingreportListModel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_settingreport_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_settingreport_mocked_model__ = __webpack_require__(517);
/* unused harmony reexport MockSettingreportModel */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settingreport_service__ = __webpack_require__(515);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__settingreport_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settingreport_model__ = __webpack_require__(516);
/* unused harmony reexport SettingreportListModel */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__settingreport_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settingreport_mocked_model__ = __webpack_require__(517);
/* unused harmony reexport MockSettingreportModel */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_select__ = __webpack_require__(520);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_select__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_search__ = __webpack_require__(525);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_search__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_select_daily__ = __webpack_require__(527);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_select_daily__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_select_station__ = __webpack_require__(528);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_select_station__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_daily__ = __webpack_require__(529);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chart_daily__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_license__ = __webpack_require__(534);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chart_license__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopMorePage = /** @class */ (function () {
    function PopMorePage(navParams, alertCtrl, authService, app, viewCtrl) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.t = __WEBPACK_IMPORTED_MODULE_2__shared__["l" /* Translations */];
    }
    PopMorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopOverPage');
    };
    PopMorePage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ออกจากระบบ',
            message: 'คุณต้องการออกจากระบบ ?',
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'cancel',
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                        _this.authService.logout();
                        _this.viewCtrl.dismiss();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    PopMorePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pop-more',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\pop-more\pop-more.html"*/'<ion-list radio-group>\n\n      <ion-list-header>อื่นๆ</ion-list-header>\n\n      <button ion-item (click)="close()">Learn Ionic</button>\n\n      <button ion-item (click)="close()">Documentation</button>\n\n      <button ion-item (click)="close()">Showcase</button>\n\n      <button ion-item (click)="logout()">{{t.language.Logout}}</button>\n\n</ion-list>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\pop-more\pop-more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PopMorePage);
    return PopMorePage;
}());

//# sourceMappingURL=pop-more.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderModalPage = /** @class */ (function () {
    function HeaderModalPage(statusBar, navCtrl) {
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.headerName = '';
        this.t = __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* Translations */];
    }
    HeaderModalPage.prototype.ionViewDidLoad = function () {
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#FF7F50');
    };
    HeaderModalPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderModalPage.prototype, "headerName", void 0);
    HeaderModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header-modal',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\header-modal\header-modal.html"*/'<ion-navbar>\n\n  <ion-title>\n\n    {{headerName}}\n\n  </ion-title>\n\n\n\n  <ion-buttons end>\n\n    <button ion-button (click)="close()" strong>{{t.language.Close}}</button>\n\n  </ion-buttons>\n\n</ion-navbar>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\header-modal\header-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HeaderModalPage);
    return HeaderModalPage;
}());

//# sourceMappingURL=header-modal.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingPage = /** @class */ (function () {
    function LoadingPage() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LoadingPage.prototype, "loading", void 0);
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\loading\loading.html"*/'<ion-row class="row-spinner" *ngIf="loading">\n\n  <ion-col>\n\n    <ion-spinner class="crescent" name="crescent" color="bsup" [paused]="!loading"></ion-spinner>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\loading\loading.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TouchID } from 'ionic-native';



var LoginPage = /** @class */ (function () {
    function LoginPage(authService, alertCtrl, loadingCtrl, toolHelper, nav) {
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toolHelper = toolHelper;
        this.nav = nav;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__auth__["b" /* LoginModel */]();
        this.t = __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* Translations */];
        this.loading = false;
        this.LOGO = "assets/images/logo/logo.png";
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        //console.log('clear');
        //localStorage.clear();
    };
    /*touchId() {
      TouchID.verifyFingerprint('Touch ID สำหรับ "BTrack Touch"')
        .then(
        res => {
          let token = JSON.parse(localStorage.getItem('touchId')) && JSON.parse(localStorage.getItem('touchId')).token;
          if (token) {
            this.authService.setToken(token)
            this.nav.setRoot(TabsPage);
          }
          else
            this.showError("TouchID is not available")
        }
        ,
        err => this.showError("TouchID is not available")
        );
    }*/
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.model.Username.toLowerCase(), this.model.Password, this.model.Remember)
            .subscribe(function (result) {
            _this.loading = false;
            if (result) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                var alert_1 = _this.toolHelper.alert(_this.t.language.Password + _this.t.language.DoNot + _this.t.language.Match);
                alert_1.present();
            }
        }, function (error) {
            _this.loading = false;
            if (error && error.status == 400) {
                _this.alert = _this.toolHelper.alert(_this.t.language.Password + _this.t.language.DoNot + _this.t.language.Match);
            }
            else
                _this.alert = _this.toolHelper.alert(_this.t.language.ConnectionRefused);
            _this.alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\login\login.html"*/'<ion-content>\n\n  <ion-row class="logo-custom">\n\n    <ion-col>\n\n      <ion-img width="170" height="170" src="{{LOGO}}"></ion-img>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-grid>\n\n    <page-loading *ngIf="loading" loading=loading></page-loading>\n\n    <form (ngSubmit)="login()" #registerForm="ngForm" *ngIf="!loading">\n\n      <ion-list inset class="login-padding">\n\n        <ion-item>\n\n          <ion-label color="bsup" floating>{{t.language.Username}}</ion-label>\n\n          <ion-input type="text" name="username" [(ngModel)]="model.Username" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="bsup" floating>{{t.language.Password}}</ion-label>\n\n          <ion-input type="password" name="password" [(ngModel)]="model.Password" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-checkbox color="bsup" name="remember" [(ngModel)]="model.Remember"></ion-checkbox>\n\n          <ion-label color="bsup">{{t.language.Remember}}</ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-row>\n\n        <button ion-button round full color="bsup" type="submit" [disabled]="!registerForm.form.valid">{{t.language.Login}}</button>\n\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__shared__["j" /* ToolHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_help__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, loadingCtrl, modalCtrl, storage) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            storage.get('introShown').then(function (result) {
                if (JSON.parse(localStorage.getItem('currentUser'))
                    && JSON.parse(localStorage.getItem('currentUser')).token)
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                if (!result)
                    _this.helpSlides();
            });
        });
    }
    /*
    public rootPage: any = HomePage;
  
    constructor(
      platform: Platform) {
  
      platform.ready().then(() => {
        //StatusBar.styleDefault();
        Splashscreen.hide();
        storage.get('introShown').then((result) => {
  
          if (JSON.parse(localStorage.getItem('currentUser'))
            && JSON.parse(localStorage.getItem('currentUser')).token)
            this.rootPage = TabsPage;
          if (!result) this.helpSlides();
        });
      });
    }*/
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
    };
    MyApp.prototype.helpSlides = function () {
        var helpModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_help__["a" /* HelpPage */]);
        helpModal.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Git\new_backoffice\Code\ionic-mobile\BTrack\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(368);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_model__ = __webpack_require__(865);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__login_model__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[535]);
//# sourceMappingURL=main.js.map