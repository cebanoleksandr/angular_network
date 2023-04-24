import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthServiceData, UserLogin} from '../interfaces/common-interfaces';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authData: BehaviorSubject<AuthServiceData> = new BehaviorSubject<AuthServiceData>({} as AuthServiceData);

  constructor(
    private http: HttpClient
  ) { }

  initCurrentUser(): void {
    this.http.get<AuthServiceData>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .subscribe((authServicedata: AuthServiceData) => {
        this.authData.next(authServicedata);
      });
  }

  login(user: UserLogin): Observable<any> {
    return this.http.post<any>(`https://social-network.samuraijs.com/api/1.0/auth/login`, user, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    });  //todo specify type
  }

  logout(): Observable<any> {
    return this.http.delete<any>(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
      withCredentials: true,
      headers: {
        "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
      }
    }); //todo specify type
  }
}
