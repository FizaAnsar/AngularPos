import { Component, OnInit } from '@angular/core';
import menuItem from '../../JSON/menu-items.json';
import {faBars} from '@fortawesome/free-solid-svg-icons';
interface Menu{
  id:number,
  menuName:string
}

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  public isCollapsed = true;
  bars=faBars;
  constructor() { }
  menuItems: Menu[]=menuItem;
  ngOnInit(): void {
  }
  
}
