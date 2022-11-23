import { Component, OnInit } from "@angular/core";
import { practise, ROLES } from "../shared/interfaces/common.interface";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"],
})
export class FirstComponent implements OnInit {
  constructor() { }

  // Example of tupple
  object: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
      name: 'Shubham',
      age: 27,
      hobbies: [
        'Drawing', 'Photography'
      ],
      role: [
        1, 'admin'
      ]
    }

  obj: practise = {
    name: 'Shubham',
    role: [1, 'admin']
  }

  ngOnInit(): void {
    this.check();
  }

  check() {
    if (this.obj.role[1] === ROLES.ADMIN) {
      console.log('User is admin');
    }
  }

}
