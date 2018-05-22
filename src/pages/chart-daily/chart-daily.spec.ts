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

import { ChartDailyPage } from '.'

import {
    ToolHelper,
} from '../shared';

import {  MockReportSelect } from '../report-select-license';


import { LoadingPage } from '../loading';
import { HeaderModalPage } from '../header-modal';

describe('chart-daily Component', () => {
    let fixture: ComponentFixture<ChartDailyPage>;
    let component: ChartDailyPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChartDailyPage,
                LoadingPage,
                HeaderModalPage
            ],
            imports: [
                IonicModule.forRoot(ChartDailyPage)
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
        fixture = TestBed.createComponent(ChartDailyPage)
        component = fixture.componentInstance

        component.navParams.data = MockReportSelect[0].DailyReport[0]
        component.ionViewDidLoad()
    });

    it('should be created', () => {
        expect(component instanceof ChartDailyPage).toBe(true)
    });
    it('should be header name', () => {
        expect(component.headerName).toBe('2017-07-01T00:00:00Z')
    });
    it('should be daily report model', () => {
        expect(component.dailyReportModel).not.toBeNull()
        expect(component.dailyReportModel.Date).toBe('2017-07-01T00:00:00Z')
    });
    it('should be daily status chart', () => {
        expect(component.dailyStatusChart).not.toBeNull()
    });
});