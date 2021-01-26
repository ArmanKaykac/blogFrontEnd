import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url="http://localhost:8989/api/auth/";

  constructor(private http:HttpClient) { }


  register(registerPayload:RegisterPayload): Observable<any>{
    return this.http.post(this.url+"signup",registerPayload);
  }
}
