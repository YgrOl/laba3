import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User, USERS_STORAGE_KEY} from "../app.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userdata: User[] = [];

  currentUser: User = {id: 0, name:'', dateOfBirth: new Date(), salary:0, lastname: '', workingHours:0};

  id: any = 0;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userdata = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) ?? "[]");

    this.currentUser = this.userdata.find(user => user.id == this.id) ?? this.currentUser;
  }
}
