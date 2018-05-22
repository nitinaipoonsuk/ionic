import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import {
    IonicModule,
    App,
    Alert,
    NavController,
    ModalController,
    NavParams
} from 'ionic-angular';

import { HttpClient } from '../../http-client';

import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../mocks';
import { AuthService } from '../../auth';

import { ReportSelectDailyPage } from '.'

import { ToolHelper, TranslationManage, StatusService, MultiselectLicenseComponent, LicenseSearchComponent, LicenseSearchService } from '../shared';

import { ReportSelectService, MockReportSelect } from '../report-select-license/shared';

import { LoadingPage } from '../loading';
import { HeaderGroupSearchPage } from '../header-group-search';

describe('report-select-daily Component', () => {
    let fixture: ComponentFixture<ReportSelectDailyPage>;
    let component: ReportSelectDailyPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReportSelectDailyPage,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage,
                MultiselectLicenseComponent
            ],
            imports: [
                IonicModule.forRoot(ReportSelectDailyPage)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                AuthService,
                ReportSelectService,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportSelectDailyPage);
        component = fixture.componentInstance;

        component.navParams.data = MockReportSelect[0];

    });

    it('should be created', () => {
        expect(component instanceof ReportSelectDailyPage).toBe(true);
    });

    it('should be get data', () => {
        component.ionViewDidLoad();
        expect(component.dailyReports).not.toBeNull();
        expect(component.dailyReports.length).toBe(3);
    });
});