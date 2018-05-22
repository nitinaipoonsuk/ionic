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

import { ChangePasswordPage } from '.';
import { HttpClient } from '../../http-client';
import {
    ChangePasswordService
} from './shared';
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


describe('change-password Component', () => {
    let fixture: ComponentFixture<ChangePasswordPage>;
    let component: ChangePasswordPage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChangePasswordPage,
                LoadingPage,
                HeaderModalPage
            ],
            imports: [
                IonicModule.forRoot(ChangePasswordPage)
            ],
            providers: [
                ToolHelper,
                TranslationManage,
                StatusBar,
                ChangePasswordService,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangePasswordPage);
        component = fixture.componentInstance;
        component.username = 'test'
    });

    it('should be created', () => {
        expect(component instanceof ChangePasswordPage).toBeTruthy()
    });

    it('should be save success', () => {
        component.model.CurrentPassword = '123456'
        component.save()
        expect(component.error).not.toBeTruthy()
        expect(component.loading).not.toBeTruthy()
    });

    it('should be save error', () => {
        component.model.CurrentPassword = '555555'
        component.save()
        expect(component.error).toBeTruthy()
        expect(component.loading).not.toBeTruthy()
    });
});