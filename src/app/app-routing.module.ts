import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './user-list/create-user/create-user.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'create', component: CreateUserComponent },
  { path: 'list', component: UserListComponent },
  { path: '', component: HomeComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users/edit/:id', component: CreateUserComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
