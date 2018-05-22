import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';

import { MapModel, MarkerModel, StatusService, ToolHelper, Translations } from '../../shared';
import { HttpClient } from '../../../http-client';
import { RealtimeModel, RouteModel } from '.';

@Injectable()
export class RealtimeService {

    private t = Translations;

    constructor(private http: HttpClient,
        private statusService: StatusService,
        private toolHelper: ToolHelper) { }

    mappingToRealtimeModel(realtimeModel: RealtimeModel): RealtimeModel {
        let degree: number[] = [];

        for (let i = 0; i < 360;) {
            degree.push(i);
            if (i % 3 === 0) {
                i = i + 22;
            }
            else {
                i = i + 23;
            }
        }
        realtimeModel.RouteList.forEach(h => {
            h.Up = this.toolHelper.getTimeUp(h.LastDate)
            h.StatusDate = this.toolHelper.setFormatDatetime(h.StatusDate);
        });

        return realtimeModel;
    }

    mappingToMapModel(realtimeModel: RealtimeModel): MapModel {
        let markerModels = [];
        realtimeModel.RouteList.forEach(model => {
            if (model.Paths[0]) {
                let marker = this.mappingToMarkerModel(model);
                markerModels.push(marker);
            }
        });

        let mapModel = new MapModel();
        mapModel.markerModels = markerModels;
        return mapModel;
    }

    mappingToMarkerModel(model: RouteModel): MarkerModel {
        let marker = new MarkerModel();
        marker.Lat = model.Paths[0].Lat;
        marker.Lng = model.Paths[0].Lng;
        marker.IconPath = this.statusService.getIconUrl(model);
        marker.Info = model;
        return marker;
    }

    private get(value: string): any {
        return this.http.get(`/realtime/get/${value}`);
    }

    private handleError(error: any): Observable<any> {
        return Observable.from(error.message || error);
    }

    /*private datetimeFormat(date): string {

        let dateType = new Date(date); // +  to convert a string to a number in TypeScript

        return moment(dateType).format('DD/MM/YYYY HH:mm');
    }*/

    gets(fromQuery): Observable<any> {
        return this.get(`paging/${this.t.language.Lang}?${fromQuery}`)
            .map((response: Response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {
                    return this.handleError;
                }
            });
    }

    getAlone(id: number): Observable<any> {
        return this.get(`alone/${this.t.language.Lang}/${id}`)
            .map((response: Response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {
                    return this.handleError;
                }
            });
    }

    getsByDate(date: Date): Observable<any> {
        return this.get(moment(date).format())
            .map((response: Response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {
                    return this.handleError;
                }
            });
    }
}