import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import {AuthServiceData, CurrentUser} from '../../../interfaces/common-interfaces';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  public profile!: any;
  public myId!: number | null;
  public status!: string;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.profileService.getProfile(+params['id']).subscribe((response) => {
        this.profile = response;
      })
      this.profileService.getStatus(+params['id']).subscribe((response) => {
        this.status = response;
      })
    });
    this.authService.authData.subscribe((authData: AuthServiceData) => {
      const user: CurrentUser = authData.data;
      if (user?.id) {
        this.myId = user.id;
      } else {
        this.myId = null;
      }
    });
  }
}
