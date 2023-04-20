import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceData } from '../interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  getCurrentUser() {
    return this.http.get<AuthServiceData>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    });
  }

  login(user: any) {
    return this.http.post<any>(`https://social-network.samuraijs.com/api/1.0/auth/login`, user, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    })
  }

  logout() {
    return this.http.delete<any>(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    })
  }
}
