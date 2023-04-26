import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AuthServiceData, ServerProfile } from '../interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(id: number): Observable<ServerProfile> {
    return this.http.get<ServerProfile>(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);
  }

  getStatus(id: number): Observable<string> {
    return this.http.get<string>(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`);
  }

  setStatus(status: string = ''): Observable<AuthServiceData> {
    return this.http.put<AuthServiceData>(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status}, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    });
  }
}
