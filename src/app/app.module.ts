import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user-list/create-user/create-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    NavbarComponent,
    UserListComponent,
    HomeComponent,
    UserItemComponent,
    UserDetailsComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
