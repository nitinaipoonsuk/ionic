import {
    Alert,
    App,
    IonicModule,
    ModalController,
    NavController,
    NavParams
} from 'ionic-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryList, HistoryPage } from '..';
import { HistoryService, MockedHistory } from '../../shared';
import { HttpClient } from '../../../../http-client';
import {
    LicenseSearchComponent,
    LicenseSearchService,
    StatusService,
    ToolHelper,
    TranslationManage
} from '../../../shared';
import { LoadingPage } from '../../../loading';




import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../../../mocks';


describe('history-list Component', () => {
    let fixture: ComponentFixture<HistoryList>;
    let component: HistoryList;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HistoryPage,
                LoadingPage,
                LicenseSearchComponent,
                HistoryList
            ],
            imports: [
                IonicModule.forRoot(HistoryList)
            ],
            providers: [
                StatusService,
                ToolHelper,
                TranslationManage,
                HistoryService,
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
        fixture = TestBed.createComponent(HistoryList);
        component = fixture.componentInstance;
        component.createDataList(MockedHistory);
    });

    it('should be created', () => {
        expect(component instanceof HistoryList).toBe(true);
    });

    it('should be history event not null', () => {
        expect(component.historyEventModels).not.toBeNull();
        expect(component.historyEventModels).toBe(MockedHistory.HistoryEvents);
    });

});