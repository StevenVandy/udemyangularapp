import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details = 'secrets are secret';
  detailClicks = [];
  displayDetailsBoolean = false;
  displayCounter= 0;

  constructor() { }

  ngOnInit() {
  }

   displayDetails() {
    this.displayDetailsBoolean = !this.displayDetailsBoolean;
    this.detailClicks.push(new Date())
    // this.displayCounter = this.displayCounter + 1;
    // this.detailClicks.push(this.displayCounter);
    //console.log(this.detailClicks)
  }

}