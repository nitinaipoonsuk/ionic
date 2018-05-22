import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '../http-client';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(username: string, password: string, remember?: boolean): Observable<any> {
        return this.http.getToken('/gettoken', { username: username, password: password, remember: remember })
            .map((response: Response) => {
                console.log(response)
                return this.http.setToken(response, username)
            });
    }

    logout(): void {
        localStorage.clear();   
        //localStorage.setItem('touchId', JSON.stringify({ token: this.token }));
    }
}
