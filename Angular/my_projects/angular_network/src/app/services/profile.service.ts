import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(id: number): Observable<any> {
    return this.http.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/${id}`); //todo
  }

  getStatus(id: number): Observable<string> {
    return this.http.get<string>(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`);
  }

  setStatus(status: string = ''): Observable<string> {
    return this.http.put<string>(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status}, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    });
  }
}
