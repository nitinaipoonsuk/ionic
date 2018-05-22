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

import { HistoriesPage, HistoryPage, HistoryList } from '.'
import { HistoryService  } from './shared'

import { ToolHelper, TranslationManage, StatusService, MockedLicenstList, LicenseSearchComponent,LicenseSearchService } from '../shared';
import { LoadingPage } from '../loading';

describe('histories Component', () => {
    let fixture: ComponentFixture<HistoriesPage>;
    let component: HistoriesPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HistoriesPage,
                HistoryPage,
                LoadingPage,
                LicenseSearchComponent,
                HistoryList
            ],
            imports: [
                IonicModule.forRoot(HistoriesPage)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                HistoryService,
                AuthService,
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
        fixture = TestBed.createComponent(HistoriesPage);
        component = fixture.componentInstance;
        component.licenseModel = MockedLicenstList[1];
        component.licenseSearchComponent.id = component.licenseModel.Id;
        component.licenseSearchComponent.ngOnInit();
    });

    it('should be created', () => {
        expect(component instanceof HistoriesPage).toBe(true);
    });

    it('should be license search component of license have data', () => {
        expect(component.licenseSearchComponent.startDate).not.toBeNull();
        expect(component.licenseSearchComponent.endDate).not.toBeNull();
        expect(component.licenseSearchComponent.id).toBe(MockedLicenstList[1].Id);
    });

    it('should be search model fo histories have data', () => {
        component.ChangePage()
        expect(component.searchModel).not.toBeNull();
        expect(component.searchModel.Id).not.toBeNull();
        expect(component.searchModel.License).not.toBeNull();
        expect(component.searchModel.StartDate).not.toBeNull();
        expect(component.searchModel.EndDate).not.toBeNull();

        expect(component.searchModel.Id).toBe(MockedLicenstList[1].Id)
        expect(component.searchModel.License).toBe(MockedLicenstList[1].Name);
    });
});