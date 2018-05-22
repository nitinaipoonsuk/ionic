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

//import { HistoriesPage, HistoryPage, HistoryList } from '.'
import { HistoryLicensePage } from '.'
//import { HistoryService } from './shared'

import { ToolHelper, TranslationManage,Translations, StatusService, MockedLicenstList, LicenseSearchComponent, LicenseSearchService } from '../shared';
import { LoadingPage } from '../loading';
import {HeaderGroupSearchPage} from '../header-group-search';

describe('history-license Component', () => {
    let fixture: ComponentFixture<HistoryLicensePage>;
    let component: HistoryLicensePage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HistoryLicensePage,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage,
            ],
            imports: [
                IonicModule.forRoot(HistoryLicensePage)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                AuthService,
                LicenseSearchService,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HistoryLicensePage);
        component = fixture.componentInstance;
        component.ionViewWillEnter();
    });

    it('should be created', () => {
        expect(component instanceof HistoryLicensePage).toBe(true);
    });

    it('should be license have data', () => {
        expect(component.listModels).not.toBeNull();
    });

    it('should be list models have length', () => {
        expect(component.listModels.ListModels.length).toBe(5);
    });
});