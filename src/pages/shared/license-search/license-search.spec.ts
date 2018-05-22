import * as moment from 'moment/moment';
import {
    Alert,
    App,
    IonicModule,
    ModalController,
    NavController,
    NavParams
    } from 'ionic-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderGroupSearchPage } from '../../header-group-search/header-group-search';
import { HttpClient } from '../../../http-client/http-client';
import { LicenseSearchComponent } from '.';
import { LoadingPage } from '../../loading/loading';
import {  ToolHelper, TranslationManage } from '../index';





import {
    HttpClientMock,
    NavMock,
    ModalMock,
} from '../../../mocks'



describe('license.search Component', () => {
    let fixture: ComponentFixture<LicenseSearchComponent>
    let component: LicenseSearchComponent

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LicenseSearchComponent,
                LoadingPage,
                LicenseSearchComponent,
                HeaderGroupSearchPage
            ],
            imports: [
                IonicModule.forRoot(LicenseSearchComponent)
            ],
            providers: [
                ToolHelper,
                TranslationManage,
                { provide: HttpClient, useClass: HttpClientMock },
                NavController,
                { provide: NavParams, useClass: NavMock },
                { provide: ModalController, useClass: ModalMock },
            ]
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(LicenseSearchComponent)
        component = fixture.componentInstance
        component.ngOnInit()
    })

    it('should be created', () => {
        expect(component instanceof LicenseSearchComponent).toBe(true)
    })

    it('should be get search model', () => {
        component.id = 1;
        let searchModel = component.get()

        let dateNow: Date = new Date();
        dateNow.setHours(0, 0, 0);

        let startDate: Date = new Date(new Date(moment(dateNow).format()).setHours(0,0));
        let endDate: Date = new Date(new Date(moment(dateNow).format()).setHours(23, 59, 59));

        expect(searchModel.Id).toBe(1)
        expect(searchModel.StartDate).toBe(moment(startDate).format())
        expect(searchModel.EndDate).toBe(moment(endDate).format())

    })
})