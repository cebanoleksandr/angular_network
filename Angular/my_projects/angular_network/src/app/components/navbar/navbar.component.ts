import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  id!: number | null;
  isAuth!: boolean;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser()
      .subscribe(response => {
        console.log(response)
        if (response.resultCode === 0) {
          this.id = response.data.id;
          this.isAuth = true;
        } else {
          this.id = null;
          this.isAuth = false;
        }
      })
  }
}
