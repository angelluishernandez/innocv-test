import { User } from 'src/app/shared/user.model';
import { UserService } from './../../services/user.service';
import * as moment from 'moment';
import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = true;
  isUserCreate: boolean = this.router.url === '/create' ? true : false;
  activatedRoute: ActivatedRoute;
  currentUserId: number;
  currentUser: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Create form
    this.userForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(2),
        ],
      ],
      birthdate: ['', Validators.required],
    });
    //Get user id

    let id = this.route.snapshot.params.id;
    this.currentUserId = id;

    // Get current user
  }

  get form() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.loading = true;

    if (this.isUserCreate) {
      this.userService
        .addUser(this.userForm.value)
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate(['/list']);
          },
          (error) => {
            this.loading = false;
          }
        );
    } else {
      console.log('entra');
      this.userService
        .updateUser(this.currentUserId, this.userForm.value)
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate(['/list']);
          },
          (error) => {
            this.loading = false;
          }
        );
    }

    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }
}
