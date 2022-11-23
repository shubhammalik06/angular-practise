import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  // @Input() tabHidden : boolean = true;

  tabHidden! : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showTabOnSubmit(value:boolean){
    this.tabHidden = value;
  }




  // mainArray = [
  //   firstTab : [] // fill
  //   second : [] // partially - fill
  // ]



}
