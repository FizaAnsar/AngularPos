import { Component, OnInit } from '@angular/core';
import {faPerson, faClock, faUtensils,faBars} from '@fortawesome/free-solid-svg-icons';
import menuItem from '../../JSON/menu.json'
interface Menu{
  id:number,
  menuName:string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuCollapsed = true;
  person =faPerson;
  clock = faClock;
  utensils= faUtensils;
  bars=faBars;
  constructor() { }
  menus: Menu[]=menuItem;
  // Increment Function
  count=0;
  increment(val:any){
    this.count++;
    this.count==val;
  }

  ngOnInit(): void {
  }

}
