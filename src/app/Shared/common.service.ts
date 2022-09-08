import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  userData : any = [
    {
      name : "Shubham Malik",
      age : 26
    },
    {
      name : "A",
      age : 27
    },
    {
      name : "B",
      age : 30
    }
  ]
}
