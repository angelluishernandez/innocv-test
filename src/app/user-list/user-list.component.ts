import { UserService } from '../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/user.model';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    return this.userService.getUsers().subscribe((data) => {
      this.users$ = data;
    });
  }
}
