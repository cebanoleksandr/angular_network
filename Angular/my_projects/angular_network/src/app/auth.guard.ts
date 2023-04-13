import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    let isAuth!: boolean;
    this.authService.getCurrentUser().subscribe((response) => {
      if (response.resultCode === 0) {
        isAuth = true;
      } else {
        isAuth = false;
        this.router.navigate(['/news']);
      }
    })
    return isAuth;
  }
}
