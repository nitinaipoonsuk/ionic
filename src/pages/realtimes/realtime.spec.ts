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

import { MyApp } from '../../app/app.component';

import { RealtimePage, RealtimeList, RealtimeService } from '.';

import { ToolHelper, TranslationManage, StatusService } from '../shared';
import { ChangeGroupPage } from '../change-group';
import { HeaderGroupSearchPage } from '../header-group-search';
import { HeaderModalPage } from '../header-modal';
import { LoadingPage } from '../loading';

describe('realtime Component', () => {
    let fixture: ComponentFixture<RealtimePage>;
    let component: RealtimePage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MyApp,
                RealtimePage,
                RealtimeList,
                ChangeGroupPage,
                HeaderGroupSearchPage,
                LoadingPage,
                HeaderModalPage
            ],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                RealtimeService,
                AuthService,
                { provide: HttpClient, useClass: HttpClientMock },
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
                { provide: HttpClient, useClass: HttpClientMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RealtimePage);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component instanceof RealtimePage).toBe(true);
    });

    it('should be get realtime data', () => {
        component.ionViewWillEnter();
        expect(component.realtimeModel.RouteList.length).toBeGreaterThanOrEqual(1);
    });
});