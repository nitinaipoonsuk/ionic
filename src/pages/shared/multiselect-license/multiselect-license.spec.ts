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

import { HttpClient } from '../../../http-client';

import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../../mocks';
import { AuthService } from '../../../auth';

import { MultiselectLicenseComponent } from '.'

import { ToolHelper, TranslationManage, StatusService,MockedLicenstList, LicenseSearchComponent, LicenseSearchService } from '..';
import { LoadingPage } from '../../loading';
import {HeaderGroupSearchPage} from '../../header-group-search';

describe('multiselect-license Component', () => {
    let fixture: ComponentFixture<MultiselectLicenseComponent>;
    let component: MultiselectLicenseComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MultiselectLicenseComponent,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage
            ],
            imports: [
                IonicModule.forRoot(MultiselectLicenseComponent)
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
        fixture = TestBed.createComponent(MultiselectLicenseComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component instanceof MultiselectLicenseComponent).toBe(true);
    });

    it('should be change page', () => {
        MockedLicenstList[1].CheckBoxSelect = true;
        component.selectCard(MockedLicenstList[1])

        MockedLicenstList[2].CheckBoxSelect = true;
        component.selectCard(MockedLicenstList[2])

        expect(component.id.length).toBe(2);
        expect(component.id[0]).toBe(1);
        expect(component.id[1]).toBe(2);
    });
});