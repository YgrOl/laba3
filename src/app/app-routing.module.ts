import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {path: "home", component: HomeComponent, title: "Home Page"},
  {path: "about", component: AboutUsComponent, title: "About Page"},
  {path: "contacts", component: ContactsComponent, title: "Contacts Page"},
  {path: "users/:id", component: UsersComponent, title: "User Data Page"},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: ErrorpageComponent, title: "Error Page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
