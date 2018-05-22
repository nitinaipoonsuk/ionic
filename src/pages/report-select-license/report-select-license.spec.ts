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

import { ReportSelectLicensePage } from '.'

import { ToolHelper, TranslationManage, StatusService, MockedLicenstList, MultiselectLicenseComponent, LicenseSearchComponent, LicenseSearchService } from '../shared';

import { ReportSelectService, ReportSelectModel, SearchModel } from './shared';

import { LoadingPage } from '../loading';
import { HeaderGroupSearchPage } from '../header-group-search';

describe('report-select-license Component', () => {
    let fixture: ComponentFixture<ReportSelectLicensePage>;
    let component: ReportSelectLicensePage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReportSelectLicensePage,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage,
                MultiselectLicenseComponent
            ],
            imports: [
                IonicModule.forRoot(ReportSelectLicensePage)
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
        fixture = TestBed.createComponent(ReportSelectLicensePage);
        component = fixture.componentInstance;
        let searchModel = new SearchModel();
        searchModel.CustomerBoxId = '1'
        searchModel.License = 'AA-5678'
        searchModel.StartDate = '2017-06-27T00:00:00+07:00'
        searchModel.EndDate = '2017-06-27T23:59:59+07:00'

        component.navParams.data = searchModel;

    });

    it('should be created', () => {
        expect(component instanceof ReportSelectLicensePage).toBe(true);
    });

    it('should be get data', () => {
        component.ionViewDidLoad();
        expect(component.reportSelectModel).not.toBeNull();
        expect(component.reportSelectModel.length).toBe(1);
    });
});