import {
    Alert,
    App,
    IonicModule,
    ModalController,
    NavController,
    NavParams
} from 'ionic-angular';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReportSearchPage } from '.';
import { HttpClient } from '../../http-client';
import {
    LicenseSearchComponent,
    LicenseSearchService,
    SearchModel,
    StatusService,
    ToolHelper,
    TranslationManage
} from '../shared';
import { LoadingPage } from '../loading';

import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../mocks';


describe('report-search Component', () => {
    let fixture: ComponentFixture<ReportSearchPage>;
    let component: ReportSearchPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReportSearchPage,
                LoadingPage,
                LicenseSearchComponent
            ],
            imports: [
                IonicModule.forRoot(ReportSearchPage)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                LicenseSearchService,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
                { provide: HttpClient, useClass: HttpClientMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportSearchPage);
        component = fixture.componentInstance;
        let searchModel = new SearchModel();
        searchModel.Id = 1
        searchModel.License = 'สล-9112'
        searchModel.StartDate = '27-6-2017'
        searchModel.EndDate = '27-6-2017 23:59'
        component.licenseSearchComponent.startDate = '2017-6-27'
        component.licenseSearchComponent.endDate = '2017-6-27'
        component.licenseSearchComponent.startTime = '00:00'
        component.licenseSearchComponent.endTime = '23:59'
        component.navParams.data = searchModel;
        component.ionViewDidLoad();
    });

    it('should be created', () => {
        expect(component instanceof ReportSearchPage).toBe(true);
    });

    it('should be get data not null', () => {
        component.changePage();
        expect(component.searchModel.StartDate).toBe('2017-06-27T00:00:00+07:00');
        expect(component.searchModel.EndDate).toBe('2017-06-27T23:59:59+07:00');
    });
});