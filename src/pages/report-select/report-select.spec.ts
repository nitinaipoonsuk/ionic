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

import { ReportSelectPage } from '.'

import { ToolHelper, TranslationManage, StatusService,MockedLicenstList, MultiselectLicenseComponent, LicenseSearchComponent, LicenseSearchService } from '../shared';
import { LoadingPage } from '../loading';
import {HeaderGroupSearchPage} from '../header-group-search';

describe('report-select Component', () => {
    let fixture: ComponentFixture<ReportSelectPage>;
    let component: ReportSelectPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReportSelectPage,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage,
                MultiselectLicenseComponent
            ],
            imports: [
                IonicModule.forRoot(ReportSelectPage)
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
        fixture = TestBed.createComponent(ReportSelectPage);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component instanceof ReportSelectPage).toBe(true);
    });

    it('should be change page', () => {
        let mock = MockedLicenstList[1];
        mock.CheckBoxSelect = true;
        component.multiselectLicenseComponent.selectCard(mock)
        component.changePage()
        expect(component.searchModel.CustomerBoxId).toBe('1');
        expect(component.searchModel.License).toBe('AA-1111');
    });
});