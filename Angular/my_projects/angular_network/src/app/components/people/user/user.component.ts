import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/common-interfaces';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  @Input() user!: User;

  constructor(
    private peopleService: PeopleService
  ) {}

  follow(id: number) {
    this.peopleService.addFriend(id);
  }

  unfollow(id: number) {
    this.peopleService.removeFriend(id);
  }
}
