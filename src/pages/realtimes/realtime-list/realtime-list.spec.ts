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

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HttpClient } from '../../../http-client';

import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../../mocks';

import { MyApp } from '../../../app/app.component';

import { RealtimePage, RealtimeList, RealtimeService, MockedRealtime } from '..';

import { ToolHelper, TranslationManage, StatusService } from '../../shared';
import { ChangeGroupPage } from '../../change-group';
import { HeaderGroupSearchPage } from '../../header-group-search';
import { HeaderModalPage } from '../../header-modal';
import { LoadingPage } from '../../loading';

describe('realtime-list Component', () => {
    let fixture: ComponentFixture<RealtimeList>;
    let component: RealtimeList;
    let de: DebugElement;
    let el: HTMLElement;

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
                IonicModule.forRoot(RealtimeList)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                RealtimeService,
                { provide: HttpClient, useClass: HttpClientMock },
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
                { provide: HttpClient, useClass: HttpClientMock },
            ]
        })
    }));

    beforeEach(() => {
        let toolHelper = new ToolHelper(null, null);
        let realtimeService = new RealtimeService(null, null, toolHelper);
        let realtimeModel = realtimeService.mappingToRealtimeModel(MockedRealtime);
        fixture = TestBed.createComponent(RealtimeList);
        component = fixture.componentInstance;
        component.createDataList(realtimeModel);
    });

    it('should be created', () => {
        expect(component instanceof RealtimeList).toBe(true);
    });

    it('should be route models not null', () => {
        /*de = fixture.debugElement.query(By.css('ion-col.font-detail.col'));
        el = de.nativeElement;
        expect(el.textContent).toBe(1);*/
        expect(component.routeModels).not.toBeNull();
    });
});