
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs';

import { HttpClient } from '../../../http-client/http-client';

@Injectable()
export class ReportSelectService {

    constructor(private http: HttpClient) { }

    public getReport(searchModel): Observable<any> {
        return this.http.put(`/Report/GetVehicleSummaryList/`, searchModel)
            .map((response: Response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {
                    return this.handleError(response);
                }
            })
    }

    private handleError(error: any): Observable<any> {
        return Observable.from(error.message || error);
    }
}