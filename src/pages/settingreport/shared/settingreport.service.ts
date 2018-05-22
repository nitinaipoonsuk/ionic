import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs';

import { HttpClient } from '../../../http-client';

@Injectable()
export class SettingReportService {

    constructor(private http: HttpClient) { }

    public getVehicleDetail(vehicleIds): Observable<any> {               
        return this.http.put(`/Vehicle/GetVehicleSettingList/`,vehicleIds )
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

    saveSetting(data): Observable<any> {
        return this.http.put('/Vehicle/EditVehicleSettingList', data)
            .map((response: Response) => {
                let model = response;
                if (model) {
                    return model;
                }
            });
    }

}