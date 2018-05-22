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

import { SettingreportPage } from '.'

import { ToolHelper, TranslationManage, StatusService, MultiselectLicenseComponent, LicenseSearchComponent, LicenseSearchService } from '../shared';

import { SettingReportService } from '../settingreport';

import { LoadingPage } from '../loading';
import { HeaderGroupSearchPage } from '../header-group-search';

describe('setting-report Component', () => {
    let fixture: ComponentFixture<SettingreportPage>;
    let component: SettingreportPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SettingreportPage,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage,
                MultiselectLicenseComponent
            ],
            imports: [
                IonicModule.forRoot(SettingreportPage)
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
        fixture = TestBed.createComponent(SettingreportPage)
        component = fixture.componentInstance

        component.licenseIds ='1,2'
        
    });

    it('should be created', () => {
        expect(component instanceof SettingreportPage).toBe(true)
    });

    it('should be save data', () => {
        component.saveSetting()
        expect(component.loading).not.toBeTruthy()
        expect(component.error).toBeUndefined()
    });
});