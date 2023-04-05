import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/common-interfaces';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  users!: User[];
  pageSize = 10;
  totalUsersCount = 0;
  count!: number;
  pages: number[] = [];
  currentPage = 1;
  isLoading = false;

  constructor(
    private peopleServise: PeopleService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;
    this.peopleServise.getAll(this.currentPage, this.pageSize).subscribe((response) => {
      this.users = response.items;
      this.totalUsersCount = response.totalCount;
      
      this.count = Math.ceil(this.totalUsersCount / this.pageSize);
      this.pages = [];
      for (let i = 1; i <= this.count; i++) {
        this.pages.push(i);
      }
      this.pages = this.pages.filter(p => (this.currentPage - 2) <= p && (p <= this.currentPage + 2));
      this.isLoading = false;
    })
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }
}
