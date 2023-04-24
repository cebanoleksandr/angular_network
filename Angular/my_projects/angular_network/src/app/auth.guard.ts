import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';
import {AuthServiceData} from './interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let isAuth!: boolean;
    this.authService.authData.subscribe((authData: AuthServiceData) => {
      const user = authData.data;
      if (user?.id) {
        isAuth = true;
      } else {
        isAuth = false;
        this.router.navigate(['/news']);
      }
    })
    return isAuth;
  }
}
