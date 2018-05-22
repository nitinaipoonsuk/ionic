import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

import { HttpClient } from '../http-client/http-client';

import { RealtimePage } from '../pages/realtimes/realtimes';
import { RealtimeList } from '../pages/realtimes/realtime-list/realtime-list';
import { RealtimeMapPage } from '../pages/realtimes/realtime-map/realtime-map';

import { HistoriesPage } from '../pages/histories/histories';
import { HistoryPage } from '../pages/histories/history/history';
import { HistoryList } from '../pages/histories/history/history-list/history-list';
import { HistoryMapPage } from '../pages/histories/history/history-map/history-map';

import { AuthService } from '../auth/auth.service';
import { LoginPage } from '../pages/login/login';
import { MapComponent, MapService, LicenseSearchComponent, MultiselectLicenseComponent, ToolHelper, TranslationManage, StatusService } from '../pages/shared';
import { PopMorePage } from '../pages/pop-more/pop-more';
import { HeaderModalPage } from '../pages/header-modal/header-modal';
import { HeaderGroupSearchPage } from '../pages/header-group-search/header-group-search';
import { MorePage } from '../pages/more/more';
import { ChangeLanguagePage } from '../pages/change-language/change-language';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ChangeGroupPage } from '../pages/change-group/change-group';
import { HistoryLicensePage } from '../pages/history-license/history-license';
import { SettingreportPage } from '../pages/settingreport/settingreport';
import { SettingreportDetailPage } from '../pages/settingreport-detail/settingreport-detail'
import { ReportSelectLicensePage } from '../pages/report-select-license/report-select-license';
import { ReportSelectDailyPage } from '../pages/report-select-daily/report-select-daily';
import { ChartLicensePage } from '../pages/chart-license/chart-license';
import { ChartDailyPage } from '../pages/chart-daily/chart-daily';
import { ReportSelectPage } from '../pages/report-select/report-select';
import { ReportSearchPage } from '../pages/report-search/report-search';
import { SettingreportSelectPage } from '../pages/settingreport-select/settingreport-select';
import { ReportSelectStationPage } from '../pages/report-select-station/report-select-station';
import { LoadingPage } from '../pages/loading/loading';
import { HelpPage } from '../pages/help/help';

import { MyApp } from './app.component';
import { from } from 'rxjs/observable/from';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoadingPage,
    LoginPage,
    MapComponent,
    HeaderModalPage,
    HeaderGroupSearchPage,
    RealtimeList,
    RealtimeMapPage,
    RealtimePage,
    PopMorePage,
    MorePage,
    LicenseSearchComponent,
    HistoryLicensePage,
    HistoryMapPage,
    HistoryList,
    HistoryPage,
    HistoriesPage,
    MultiselectLicenseComponent,
    ReportSelectPage,
    ReportSearchPage,
    ReportSelectLicensePage,
    ReportSelectDailyPage,
    ReportSelectStationPage,
    ChartLicensePage,
    ChartDailyPage,
    ChangeLanguagePage,
    ChangePasswordPage,
    ChangeGroupPage,
    SettingreportPage,
    SettingreportDetailPage,
    SettingreportSelectPage,
    HelpPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    LoadingPage,
    MapComponent,
    HeaderModalPage,
    HeaderGroupSearchPage,
    RealtimeList,
    RealtimeMapPage,
    RealtimePage,
    PopMorePage,
    MorePage,
    LicenseSearchComponent,
    HistoryLicensePage,
    HistoryMapPage,
    HistoryList,
    HistoryPage,
    HistoriesPage,
    MultiselectLicenseComponent,
    ReportSelectPage,
    ReportSearchPage,
    ReportSelectLicensePage,
    ReportSelectDailyPage,
    ReportSelectStationPage,
    ChartLicensePage,
    ChartDailyPage,
    ChangeLanguagePage,
    ChangePasswordPage,
    ChangeGroupPage,
    SettingreportPage,
    SettingreportDetailPage,
    SettingreportSelectPage,
    HelpPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }
    , AuthService
    , HttpClient
    , StatusService
    , ToolHelper
    , StatusBar
    , SplashScreen
    , TranslationManage
  ]
})
export class AppModule { }
