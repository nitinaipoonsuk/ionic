
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';


import { Observable } from 'rxjs';

import { ListModel } from './list.model'
import { HttpClient } from '../../../../http-client'
import { RealtimeModel } from '../../../realtimes'

@Injectable()
export class LicenseSearchService {

    constructor(private http: HttpClient) { }
    public mappingRealtimeModelToListModel(realtimeModel: RealtimeModel): ListModel[] {
        let listModels = [];
        realtimeModel.RouteList.forEach(r => {
            let listModel = new ListModel();
            listModel.Id = r.CustomerBoxId;
            listModel.Name = r.License;
            listModels.push(listModel);
        })
        return listModels;
    }

    public getLicense(fromQuery: string): Observable<any> {

        return this.http.get(`/vehicle/GetLicenseList/paging?${fromQuery}`)
            .map((response: Response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {
                    return this.handleError;
                }
            });
    }

    public getVehicleGroup(fromQuery: string): Observable<any> {
        return this.http.get(`/vehicle/getVehicleGroupList/paging?${fromQuery}`)
            .map((response: Response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {
                    return this.handleError;
                }
            });
    }

    private handleError(error: any): Observable<any> {
        return Observable.from(error.message || error);
    }


}