import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UsersResponse } from '../interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(currentPage: number, pageSize: number) {
    return this.http.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true
    })
  }

  addFriend(id: number) {
    return this.http.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    })
  }

  removeFriend(id: number) {
    return this.http.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    })
  }
}
