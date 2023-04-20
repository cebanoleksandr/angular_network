import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  img: string = '';
  userName!: string;
  id!: number | null;
  isAuth!: boolean;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.getCurrentUser()
      .subscribe(response => {
        console.log(response)
        if (response.resultCode === 0) {
          this.id = response.data.id;
          this.isAuth = true;
          this.profileService.getProfile(this.id).subscribe((response: any) => {
            this.img = response?.photos.large || 'https://www.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673746.jpg';
              
            this.userName = response?.fullName;
          })
        } else {
          this.id = null;
          this.isAuth = false;
        }
      })
  }

  logout() {
    this.authService.logout().subscribe(response => {
      if (response.resultCode === 0) {
        this.getCurrentUser();
      }
    })
  }
}
