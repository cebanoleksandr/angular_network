import { Component, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss']
})
export class ProfileStatusComponent {

  @Input() status!: string;
  isEdit = false;

  constructor(
    private profileService: ProfileService
  ) {}

  activateEdit(): void {
    this.isEdit = true;
  }

  deActivateEdit(): void {
    this.profileService.setStatus(this.status).subscribe((response: any) => {
      if (response.resultCode === 0) {
        this.isEdit = false;
      } else {
        this.isEdit = false;
      }
    })
  }
}
