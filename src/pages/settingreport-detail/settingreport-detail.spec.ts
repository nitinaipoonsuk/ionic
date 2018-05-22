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

import { SettingreportDetailPage } from '.'

import { ToolHelper, TranslationManage, StatusService, MultiselectLicenseComponent, LicenseSearchComponent, LicenseSearchService } from '../shared';

import { SettingReportService } from '../settingreport';

import { LoadingPage } from '../loading';
import { HeaderGroupSearchPage } from '../header-group-search';

describe('setting-report-detail Component', () => {
    let fixture: ComponentFixture<SettingreportDetailPage>;
    let component: SettingreportDetailPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SettingreportDetailPage,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage,
                MultiselectLicenseComponent
            ],
            imports: [
                IonicModule.forRoot(SettingreportDetailPage)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                AuthService,
                SettingReportService,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingreportDetailPage)
        component = fixture.componentInstance

        component.licenseIds ='1,2'
        component.ionViewDidEnter()
        
    });

    it('should be created', () => {
        expect(component instanceof SettingreportDetailPage).toBe(true)
    });

    it('should be get data', () => {
        expect(component.listModels).not.toBeNull()
        expect(component.listModels.length).toBe(2)
    });
});