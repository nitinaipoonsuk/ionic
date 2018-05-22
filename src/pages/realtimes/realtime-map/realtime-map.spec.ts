import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import {
    IonicModule,
    NavController,
    ModalController,
    NavParams,
    ToastController
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

import { RealtimeMapPage, RealtimeService, MockedRealtime } from '..';

import { ToolHelper, TranslationManage, StatusService, MapComponent, MapService } from '../../shared';
import { ChangeGroupPage } from '../../change-group';
import { HeaderGroupSearchPage } from '../../header-group-search';
import { HeaderModalPage } from '../../header-modal';
import { LoadingPage } from '../../loading';

describe('realtime-map Component', () => {
    let fixture: ComponentFixture<RealtimeMapPage>;
    let component: RealtimeMapPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MyApp,
                RealtimeMapPage,
                ChangeGroupPage,
                HeaderGroupSearchPage,
                LoadingPage,
                HeaderModalPage,
                MapComponent
            ],
            imports: [
                IonicModule.forRoot(RealtimeMapPage)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                RealtimeService,
                MapService,
                //AuthService,
                { provide: HttpClient, useClass: HttpClientMock },
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
                { provide: HttpClient, useClass: HttpClientMock },
            ]
        })
    }));

    beforeEach(() => {
        //let realtimeService = new RealtimeService(null, null, toolHelper);
        //let realtimeModel = realtimeService.mappingToRealtimeModel(MockedRealtime);
        fixture = TestBed.createComponent(RealtimeMapPage);
        component = fixture.componentInstance;
        let realtimeModel = component.realtimeService.mappingToRealtimeModel(MockedRealtime);
        component.routeModel = realtimeModel.RouteList[0];
        component.markerModel = component.realtimeService.mappingToMarkerModel(component.routeModel);
    });

    it('should be created', () => {
        expect(component instanceof RealtimeMapPage).toBe(true);
    });

    it('should be routeModel not null', () => {
        expect(component.routeModel).not.toBeNull();
    });
});