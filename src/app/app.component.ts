import { Component, OnInit} from '@angular/core';

export const USERS_STORAGE_KEY = "users";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[] = [

    {
      id: 1,
      name: 'Victor',
      lastname: 'Velichko',
      dateOfBirth: new Date("2/1/1990"),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 2,
      name: 'Oleksiy',
      lastname: 'Moga',
      dateOfBirth: new Date("13/03/1993"),
      salary: 100000,
      workingHours: 7345.2
    },
    {
      id: 3,
      name: 'John',
      lastname: 'Terpta',
      dateOfBirth: new Date("01/09/1999"),
      salary: 1000,
      workingHours: 495.9
    },
    {
      id: 10,
      name: 'Kate',
      lastname: 'Doe',
      dateOfBirth: new Date("6/6/1980"),
      salary: 88000,
      workingHours: 12345
    }
  ]

  ngOnInit(): void {
    if (localStorage.getItem(USERS_STORAGE_KEY) == undefined){
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(this.users))
    }
  }

  title = 'laba1';
  logoPath: string = "/assets/photo/AngLogo.png";
  currentUser: string = "Angular labs"
  userPicture: string = "/assets/photo/face.jpg"

  navBarLinks: Link[] = [
    {
      label: "Main",
      active: true,
    },
    {
      label: "About",
      active: false,
    },
    {
      label: "Contact us",
      active: false,
    }
  ]


  helloMessage: string = "";

 data = [
    {
      type: 1,
      visibility: true,
      name: "Alex",
      category: "offline",
      quantity: 2,
      imgSource: "/assets/photo/s1.jpg"
    },
    {
      type: 2,
      visibility: false,
      name: "John",
      category: "online",
      quantity: 3,
      imgSource: "/assets/photo/s2.jpg"

    },
    {
      type: 3,
      visibility: true,
      name: "Anna",
      category: "online",
      quantity: 10,
      imgSource: "/assets/photo/s3.jpg"
    },
    {
      type: 2,
      visibility: true,
      name: "Kurt",
      category: "offline",
      quantity: 1,
      imgSource: "/assets/photo/s4.jpg"

    }
  ];

}
export interface Link {
  label: string;
  active: boolean;
}

export interface User {
  id: number,
  name: string,
  lastname: string,
  dateOfBirth: Date,
  salary: number,
  workingHours: number
}
