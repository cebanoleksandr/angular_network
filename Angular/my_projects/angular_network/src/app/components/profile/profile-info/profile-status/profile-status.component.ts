import { Component, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss']
})
export class ProfileStatusComponent {

  @Input() status!: string | null;
  isEdit = false;

  constructor(
    private profileService: ProfileService
  ) {}

  activateEdit() {
    this.isEdit = true;
  }

  deActivateEdit() {
    this.profileService.setStatus(this.status).subscribe((response: any) => {
      if (response.resultCode === 0) {
        this.isEdit = false;
        console.log('Status was updated!!!');
      } else {
        this.isEdit = false;
        console.log(response.messages.join(' '));
      }
    })
  }
}
