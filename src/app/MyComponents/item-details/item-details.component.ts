import { Component, OnInit } from '@angular/core';
import {faDatabase, faReceipt, faUtensils, faPrint, faPause,faFileLines} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  database =faDatabase;
  receipt = faReceipt;
  utensils= faUtensils;
  print = faPrint;
  pause= faPause;
  reports= faFileLines;
  url:any;
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
