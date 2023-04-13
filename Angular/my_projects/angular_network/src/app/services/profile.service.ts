import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(id: number) {
    return this.http.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
  }

  getStatus(id: number) {
    return this.http.get<string>(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`)
  }

  setStatus(status: string | null) {
    if (!status) {
      status = '';
    }
    
    return this.http.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status}, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    })
  }
}
