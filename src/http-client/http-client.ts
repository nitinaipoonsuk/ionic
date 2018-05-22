import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import { AppConfig } from './config'

@Injectable()
export class HttpClient {
  private headers: Headers = new Headers()
  private currentUser: any
  private remember: boolean

  constructor(private http: Http) {
    this.createAuthorizationHeader()
  }

  createAuthorizationHeader() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let token = this.currentUser && this.currentUser.token
    this.remember = this.currentUser && this.currentUser.remember

    this.headers = new Headers()
    this.headers.append('Content-Type', 'application/json')
    this.headers.append('Authorization', 'Bearer ' + token)
  }

  getToken(url: string, data: any): any {

    console.log(data)
    if (data.remember)
      this.remember = true
    else
      this.remember = false

    let dataJson = JSON.stringify(data)
    let headers = new Headers({ 'Content-Type': 'application/json' })
    return this.http.post(AppConfig.webApiBaseUrl + url, dataJson, { headers: headers })
  }

  perTimeToken() {
    if (this.remember) {
      return
    }
    let token = this.currentUser.token
    console.log('per time token')

    this.getToken('/gettoken', { token: token })
      .subscribe((response: Response) => {
        this.setToken(response, this.currentUser.username)
      })
  }

  setToken(response, username: string) {

    let token = response.json() && response.json().access_token

    let roles = response.json() && response.json().roles

    if (token) {

      this.currentUser = {
        token: token
      }

      localStorage.setItem('currentUser', JSON.stringify({ token: token, username: username, remember: this.remember, roles: roles }))

      this.createAuthorizationHeader()
      return true
    }

    return false
  }

  get(url: string): any {
    this.perTimeToken()
    return this.http.get(AppConfig.webApiBaseUrl + url, { headers: this.headers })
  }

  post(url: string, data: any): any {
    this.perTimeToken()
    return this.http.post(AppConfig.webApiBaseUrl + url, data, { headers: this.headers })
  }

  put(url: string, data: any): any {
    this.perTimeToken()
    return this.http.put(AppConfig.webApiBaseUrl + url, data, { headers: this.headers })
  }

  delete(url: string): any {
    this.perTimeToken()
    return this.http.delete(AppConfig.webApiBaseUrl + url, { headers: this.headers })
  }
}