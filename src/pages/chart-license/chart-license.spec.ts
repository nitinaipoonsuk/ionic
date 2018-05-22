import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import {
    IonicModule,
    NavController,
    ModalController,
    NavParams
} from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';

import { HttpClient } from '../../http-client';

import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../mocks';

import { ChartLicensePage } from '.'

import {
    ToolHelper,
} from '../shared';

import {  MockReportSelect } from '../report-select-license';


import { LoadingPage } from '../loading';
import { HeaderModalPage } from '../header-modal';

describe('chart-license Component', () => {
    let fixture: ComponentFixture<ChartLicensePage>;
    let component: ChartLicensePage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChartLicensePage,
                LoadingPage,
                HeaderModalPage
            ],
            imports: [
                IonicModule.forRoot(ChartLicensePage)
            ],
            providers: [
                StatusBar,
                NavController,
                ToolHelper,
                { provide: HttpClient, useClass: HttpClientMock },
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChartLicensePage)
        component = fixture.componentInstance

        component.navParams.data = MockReportSelect[0]
        component.ionViewDidLoad()
    });

    it('should be created', () => {
        expect(component instanceof ChartLicensePage).toBe(true)
    });
    it('should be header name', () => {
        expect(component.headerName).toBe('สล-9112 กท')
    });
    it('should be report select model', () => {
        expect(component.reportSelectModel).not.toBeNull()
        expect(component.reportSelectModel.License).toBe('สล-9112 กท')
    });
    it('should be total status chart', () => {
        expect(component.totalStatusChart).not.toBeNull()
    });
    it('should be daily status chart', () => {
        expect(component.dailyStatusChart).not.toBeNull()
    });
    it('should be distance status chart', () => {
        expect(component.distanceStatusChart).not.toBeNull()
    });
    it('should be speed status chart', () => {
        expect(component.speedStatusChart).not.toBeNull()
    });
});