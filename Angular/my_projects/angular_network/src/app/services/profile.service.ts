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
}
