import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceData } from '../interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id: number | null = null;
  email: string | null = null;
  login: string | null = null;
  isAuth: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  getCurrentUser() {
    return this.http.get<AuthServiceData>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
  }
}
