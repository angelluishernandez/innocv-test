import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user;
  constructor(
    private route: ActivatedRoute,

    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService
      .getUser(Number(id))
      .subscribe((user) => (this.user = user));
  }

  onDelete(id: number) {
    console.log(id);
    this.userService.deleteUser(id).subscribe((data) => {
      console.log('The user was deleted', data);
      this.router.navigate(['/list']);
    });
  }
}
