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
    return this.http.get<UsersResponse>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
  }

  addFriend(id: number) {
    
  }

  removeFriend(id: number) {
   
  }
}
