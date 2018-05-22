import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';

import { MarkerModel, StatusService, ToolHelper, SearchModel, Translations } from '../../shared';
import { HttpClient } from '../../../http-client';
import { HistoryModel, HistoryEventsModel, HistorySearchModel } from '.';


@Injectable()
export class HistoryService {

    private t = Translations;

    constructor(
        private http: HttpClient,
        private statusService: StatusService,
        private toolHelper: ToolHelper) { }

    /*public mappingStatusUrlToHistoryModel(historyModel: HistoryModel): HistoryModel {
        historyModel.HistoryEventsModel.forEach(h => {
            h.EventStart.StatusUrl = this.statusService.getIconUrl(h.EventStart);
            h.EventStart.StatusDate = this.toolHelper.setFormatDatetime(h.EventStart.StatusDate);
            h.EventStart.SpeedRange = h.EventStart.Speed && h.EventStart.Speed.toString();
            if (h.EventEnd) {
                h.EventEnd.StatusUrl = this.statusService.getIconUrl(h.EventEnd);
                h.EventEnd.SpeedRange =
                    h.EventStart.Speed != h.EventEnd.Speed
                        ? h.EventStart.Speed < h.EventEnd.Speed
                            ? `${h.EventStart.Speed} - ${h.EventEnd.Speed}`
                            : `${h.EventEnd.Speed} - ${h.EventStart.Speed}`
                        : h.EventStart.SpeedRange;
                h.EventEnd.StatusDate = h.EventStart.StatusDate != h.EventEnd.StatusDate ? `${h.EventStart.StatusDate} - ${this.toolHelper.setFormatTime(h.EventEnd.StatusDate)}` : '';
            }
        });

        return historyModel;
    }

    public historyMappingToMapModel(historyModel: HistoryModel): MapModel {
        let markerModels = [];
        historyModel.HistoryEventsModel.forEach(model => {
            this.addMarkerModel(markerModels, model.EventStart, historyModel, model.DistanceStart);
            if (model.EventEnd) {
                this.addMarkerModel(markerModels, model.EventEnd, historyModel, model.DistanceEnd);
            }

        });

        let mapModel = new MapModel();
        mapModel.markerModels = markerModels;
        return mapModel;
    }*/

    public mappingDateToHistoryModel(historyModel: HistoryModel): HistoryModel {
        historyModel.HistoryEvents.forEach(h => {
            h.StatusDate = this.toolHelper.setFormatDatetime(h.StatusDate);
            h.StatusUrl = this.statusService.getIconUrl(h);
        });

        return historyModel;
    }

    addMarkerModel(markerModels: MarkerModel[], model: HistoryEventsModel, historyModel: HistoryModel, distance: number) {
        let marker = this.historyEventsMappingMarkerModel(model, historyModel.License, distance)
        markerModels.push(marker);
    }

    historyEventsMappingMarkerModel(model: HistoryEventsModel, license: string, distance: number): MarkerModel {
        let marker = new MarkerModel();
        marker.Lat = model.Path && model.Path.Lat;
        marker.Lng = model.Path && model.Path.Lng;
        marker.IconPath = model.StatusUrl;
        marker.Info = model;
        marker.Info.StatusDate = marker.Info.StatusDate;
        marker.Info.License = license;
        marker.Distance = distance;
        return marker;
    }

    getMarkers(searchModel: SearchModel) {
        let momentStartDate = moment(searchModel.StartDate).format('YYYY-MM-DD HH:mm:ss');
        let momentEndDate = moment(searchModel.EndDate).format('YYYY-MM-DD HH:mm:ss');

        //let fromQuery = bounds && this.toolHelper.convertToFromQuery2(bounds);

        return this.http.get(`/history/get/marker/${searchModel.Id}/${momentStartDate}/${momentEndDate}`)
            .map((response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {
                    return this.toolHelper.handleError;
                }
            });
    }

    gets(customerBoxId: number, startDate: string, endDate: string, skip: number, take: number, getTotal: boolean): Observable<any> {
        console.log('gets history service');
        

        let momentStartDate = moment(startDate).format('YYYY-MM-DD HH:mm:ss');
        let momentEndDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss');

        let model = new HistorySearchModel();
        model.CustomerBoxId = customerBoxId;
        model.Skip = skip;
        model.Take = take;
        model.GetTotal = getTotal;

        let fromQuery = this.toolHelper.convertToFromQuery(model);

        return this.http.get(`/history/get/paging/${this.t.language.Lang}/${momentStartDate}/${momentEndDate}?${fromQuery}`)
            .map((response) => {
                let model = response && response.json();
                if (model) {                    
                    return model;

                } else {
                    return this.toolHelper.handleError;
                }
            });
    }



}
