import {
    IonicModule,
    ModalController,
    NavController,
    NavParams
} from 'ionic-angular';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusBar } from '@ionic-native/status-bar';
import { ChangeGroupPage } from '.';
import { HttpClient } from '../../http-client';
import {
    ToolHelper,
    TranslationManage
} from '../shared';
import { LoadingPage } from '../loading';

import { HeaderModalPage } from '../header-modal'

import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../mocks';


describe('change-group Component', () => {
    let fixture: ComponentFixture<ChangeGroupPage>;
    let component: ChangeGroupPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChangeGroupPage,
                LoadingPage,
                HeaderModalPage
            ],
            imports: [
                IonicModule.forRoot(ChangeGroupPage)
            ],
            providers: [
                ToolHelper,
                TranslationManage,
                StatusBar,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
                { provide: HttpClient, useClass: HttpClientMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeGroupPage);
        component = fixture.componentInstance;
        component.ionViewWillEnter();
    });

    it('should be created', () => {
        expect(component instanceof ChangeGroupPage).toBeTruthy()
    });

    it('should be get data', () => {
        expect(component.listModels).not.toBeUndefined();
        expect(component.listModels).not.toBeNull();
    });

    it('should be list model length', () => {
        expect(component.listModels.ListModels.length).toBe(4)
        expect(component.listModels.DataAllLength).toBe(3)
    });
    
});