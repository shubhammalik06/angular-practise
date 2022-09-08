import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  displayData : any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.displayData = this.activatedRoute.snapshot.data['data'];

    console.log(this.displayData);
  }

}
