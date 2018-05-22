import {
    Alert,
    App,
    IonicModule,
    ModalController,
    NavController,
    NavParams
} from 'ionic-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HistoryList, HistoryPage } from '.';
import { HistoryService, HistoryModel, MockedHistory } from '../shared';
import { HttpClient } from '../../../http-client';
import {
    LicenseSearchComponent,
    LicenseSearchService,
    SearchModel,
    StatusService,
    ToolHelper,
    TranslationManage
} from '../../shared';
import { LoadingPage } from '../../loading';




import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../../mocks';


describe('history Component', () => {
    let fixture: ComponentFixture<HistoryPage>;
    let component: HistoryPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HistoryPage,
                LoadingPage,
                LicenseSearchComponent,
                HistoryList
            ],
            imports: [
                IonicModule.forRoot(HistoryPage)
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
        fixture = TestBed.createComponent(HistoryPage);
        component = fixture.componentInstance;
        let searchModel = new SearchModel();
        searchModel.Id = 1
        searchModel.License = 'สล-9112'
        searchModel.StartDate = '27-6-2017'
        searchModel.EndDate = '27-6-2017 23:59'
        component.navParams.data = searchModel;
        component.ionViewDidLoad();
    });

    it('should be created', () => {
        expect(component instanceof HistoryPage).toBe(true);
    });

    it('should be get data not null', () => {
        expect(component.historyModel).not.toBeNull();
        expect(component.historyList.historyEventModels).not.toBeNull();
    });

    it('should be change language', () => {
        let translationManage = new TranslationManage()
        let address = component.historyModel.HistoryEvents[0].Address;
        expect(component.historyList.historyEventModels[0].Address).toBe(address)
        let length = component.historyModel.HistoryEvents.length
        component.t.language = translationManage.get('en');

        component.ionViewWillEnter();
        expect(component.historyList.historyEventModels.length).toBe(length);
        expect(component.historyList.historyEventModels[0].Address).not.toBe(address)
    });
});