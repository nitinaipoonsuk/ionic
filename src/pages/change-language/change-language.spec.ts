import {
    Alert,
    App,
    IonicModule,
    ModalController,
    NavController,
    NavParams
} from 'ionic-angular';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusBar } from '@ionic-native/status-bar';
import { ChangeLanguagePage } from '.';
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


describe('change-language Component', () => {
    let fixture: ComponentFixture<ChangeLanguagePage>;
    let component: ChangeLanguagePage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChangeLanguagePage,
                LoadingPage,
                HeaderModalPage
            ],
            imports: [
                IonicModule.forRoot(ChangeLanguagePage)
            ],
            providers: [
                ToolHelper,
                TranslationManage,
                StatusBar,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeLanguagePage);
        component = fixture.componentInstance;
        component.ionViewDidLoad();
    });

    it('should be created', () => {
        expect(component instanceof ChangeLanguagePage).toBeTruthy()
    });

    it('should be change language en', () => {
        component.language = 'en'
        component.save()
        expect(component.t.language.Lang).toBe('en')
    });

    it('should be change language th', () => {
        component.language = 'th'
        component.save()
        expect(component.t.language.Lang).toBe('th')
    });
});