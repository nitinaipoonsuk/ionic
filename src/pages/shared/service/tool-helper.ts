
import { Injectable } from '@angular/core';

import { LoadingController, AlertController, Alert } from 'ionic-angular';

import * as moment from 'moment/moment';
import { Observable } from 'rxjs';
import { Translations } from '../translate';
import { SearchPagingModel } from '../model/search-paging-model'

import { URLSearchParams } from '@angular/http'
import { from } from 'rxjs/observable/from';

@Injectable()
export class ToolHelper {

    public loader;

    private t = Translations;

    constructor(
        private loadingCtrl: LoadingController
        , private alertCtrl: AlertController
    ) { }

    setToDate(date: string): Date {
        let dateTimeList = date.split('-');
        if (dateTimeList.length != 3) return;
        let yearTimeList = dateTimeList[2].split(' ');
        if (yearTimeList.length != 2) return;
        let timelist = yearTimeList[1].split(':');
        if (timelist.length != 2) return;
        return new Date(+yearTimeList[0], +dateTimeList[1] - 1,
            +dateTimeList[0], +timelist[0], +timelist[1]); // +  to convert a string to a number in TypeScript
    }

    alert(message: string): Alert {
        return this.alertCtrl.create({
            title: this.t.language.ErrorMassage,
            subTitle: message,
            buttons: [this.t.language.Ok]
        });
    }

    searchPagger(skip: number, take: number, search: string, vehicleGroupId?: number) {
        var model = new SearchPagingModel();
        model.Skip = skip;
        model.Take = take;
        model.VehicleGroupId = vehicleGroupId;
        model.Search = search;
        return this.convertToFromQuery(model);
    }

    convertToFromQuery(model: any): string {
        let params = new URLSearchParams();
        for (let key in model) {
            params.set(key, model[key])
        }

        return params.toString();
    }

    convertToFromQuery2(model: any): string {
        let params = new URLSearchParams();
        for (let key in model) {
            for (let key2 in model[key]) {
                params.set(key + '.' + key2, model[key][key2]);
            }
        }

        return params.toString();
    }

    alertEvent(message: string, event): Alert {
        return this.alertCtrl.create({
            title: this.t.language.ErrorMassage,
            subTitle: message,
            buttons: [
                {
                    text: this.t.language.Back,
                    role: 'cancel',
                    handler: () => {
                        event;
                    }
                }
            ]
        });
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: this.t.language.Loading,
        });
        this.loader.present();
    }

    setFormatDatetime(date: string): string {
        return moment.utc(date).format('DD/MM/YYYY HH:mm')
    }

    setFormatTime(date: string): string {
        return moment.utc(date).format('HH:mm')
    }

    handleError(error: any): Observable<any> {
        return Observable.from(error.message || error);
    }

    getTimeUp(statusDate) {
        let date1 = new Date(Date.now())
        let date2 = new Date(statusDate)
        let timeDiff = date1.getTime() - date2.getTime();

        if (timeDiff < 0)
            return '0m'

        let minDiff = Math.floor(timeDiff / (1000 * 60));

        if (minDiff < 60)
            return minDiff + 'm'
        else if (minDiff < (60 * 24))
            return Math.floor(minDiff / 60) + 'h'
        else
            return Math.floor(minDiff / (60 * 24)) + 'd'
    }

    setTimestamp(value): string {
        if (!value) {
            return '';
        }
        let timeArr = value.split(':');
        let dayHour = timeArr[0].replace('.', 'd ');
        return `${dayHour}:${timeArr[1]}` == '00:00' && timeArr[2] != '00'
            ? '< 00.01'
            : `${dayHour}:${timeArr[1]}`;
    }

    converTimestampToNumber(value): number {
        if (!value) {
            return 0;
        }
        let time = value.split('.')
        if (time.length == 2) {
            let hourMinutes = time[1].split(':')
            return (parseInt(time[0]) * 1440) + (parseInt(hourMinutes[0]) * 60) + (parseInt(hourMinutes[1]))
        } else {
            let hourMinutes = time[0].split(':')
            return (parseInt(hourMinutes[0]) * 60) + (parseInt(hourMinutes[1]))
        }
    }
}