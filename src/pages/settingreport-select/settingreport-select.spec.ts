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

import { SettingreportSelectPage } from '.'

import { ToolHelper, TranslationManage, StatusService,MockedLicenstList, MultiselectLicenseComponent, LicenseSearchComponent, LicenseSearchService } from '../shared';
import { LoadingPage } from '../loading';
import {HeaderGroupSearchPage} from '../header-group-search';

describe('setting-report-select Component', () => {
    let fixture: ComponentFixture<SettingreportSelectPage>;
    let component: SettingreportSelectPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SettingreportSelectPage,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage,
                MultiselectLicenseComponent
            ],
            imports: [
                IonicModule.forRoot(SettingreportSelectPage)
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
        fixture = TestBed.createComponent(SettingreportSelectPage);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component instanceof SettingreportSelectPage).toBe(true);
    });

    it('should be change page', () => {
        MockedLicenstList[1].CheckBoxSelect = true;
        component.multiselectLicenseComponent.selectCard(MockedLicenstList[1])

        MockedLicenstList[2].CheckBoxSelect = true;
        component.multiselectLicenseComponent.selectCard(MockedLicenstList[2])

        component.changePage()
        expect(component.multiselectLicenseComponent.id.length).toBe(2);
        expect(component.multiselectLicenseComponent.id[0]).toBe(1);
        expect(component.multiselectLicenseComponent.id[1]).toBe(2);
    });
});