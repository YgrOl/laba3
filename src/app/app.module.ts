import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './users/users.component';
import { HoursPipe } from './hours.pipe';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    AboutUsComponent,
    ErrorpageComponent,
    UsersComponent,
    ContactsComponent,
    HomeComponent,
    HoursPipe,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
