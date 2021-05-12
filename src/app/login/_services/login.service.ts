import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../_interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginIn(userData: UserData): Observable<any> {
    return this.http.post('https://hub.cobiro.com/v1/login', userData);
  }
}
