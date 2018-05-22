import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs';
import { HttpClient } from '../../../http-client';

@Injectable()
export class ChangePasswordService {

  constructor(private http: HttpClient) { }

  changePassword(data): Observable<any> {
        return this.http.post('/Account/changePassword',data)
            .map((response: Response) => {
                let model = response && response.json();
                if (model) {
                    return model;

                } else {

                }
            });
    }

}
