import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { LoginPayload } from './login-payload';
import { JwtAuthResponse } from './jwt-auth-response';
import { map, catchError } from 'rxjs/operators';

import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private url="http://localhost:8989/api/auth/";

  constructor(private http:HttpClient, private localStorageService:LocalStorageService) { }


  register(registerPayload:RegisterPayload): Observable<any>{
    return this.http.post(this.url+"signup",registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.http.post<JwtAuthResponse>(this.url + "login", loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }
}
