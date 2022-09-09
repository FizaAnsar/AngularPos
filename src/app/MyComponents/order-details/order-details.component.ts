import { Component, OnInit } from '@angular/core';
import {faDatabase, faReceipt, faUtensils, faPrint, faPause,faFileLines} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
   arr: any[] = [];

  constructor() {
    for(let k=0;k<40;k++){
      this.arr.push(k);
      // console.log(k);
    }
   }
  database =faDatabase;
  receipt = faReceipt;
  utensils= faUtensils;
  print = faPrint;
  pause= faPause;
  reports= faFileLines;

  ngOnInit(): void {
  }

}
