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

  isFetching: boolean = false;

  constructor(
    private peopleService: PeopleService
  ) {}

  follow(id: number) {
    this.isFetching = true;
    this.peopleService.addFriend(id).subscribe((response) => {
      if (response.resultCode === 0) {        
        this.user.followed = true;
        this.isFetching = false;
      }
    })
  }

  unfollow(id: number) {
    this.isFetching = true;
    this.peopleService.removeFriend(id).subscribe((response) => {
      if (response.resultCode === 0) {        
        this.user.followed = false;
        this.isFetching = false;
      }
    })
  }
}
