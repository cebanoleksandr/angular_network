import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/common-interfaces';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  @Input() user!: User;

  followed: boolean = this.user?.followed;

  constructor(
    private peopleService: PeopleService
  ) {}

  follow(id: number) {
    this.peopleService.addFriend(id).subscribe((response) => {
      if (response.resultCode === 0) {        
        this.user.followed = true;
      }
    })
  }

  unfollow(id: number) {
    this.peopleService.removeFriend(id).subscribe((response) => {
      if (response.resultCode === 0) {        
        this.user.followed = false;
      }
    })
  }
}
