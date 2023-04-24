import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public id!: number | null;
  public isAuth!: boolean;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.authData.subscribe(authData => {
      const user = authData.data;
      if (user?.id) {
        this.id = user.id;
        this.isAuth = true;
      } else {
        this.id = null;
        this.isAuth = false;
      }
    });
  }
}
