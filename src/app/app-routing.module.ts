import {Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {Title} from "@angular/platform-browser";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {UsersComponent} from "./users/users.component";
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";

const routes: Routes = [
  {path: "home", component: HomeComponent, title: "Home Page"},
  {path: "about", component: AboutUsComponent, title: "About Page"},
  {path: "contacts", component: ContactsComponent, title: "Contacts Page"},
  {path: "users/:id", component: UsersComponent, title: "User Data Page"},
  {path: "userform", component: ReactiveFormsComponent, title: "User Form Page"},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: ErrorpageComponent, title: "Error Page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}
