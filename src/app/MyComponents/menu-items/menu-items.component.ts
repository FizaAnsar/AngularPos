import { Component, Input, OnInit } from '@angular/core';
import menuItem from '../../JSON/menu-items.json';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {BbqCategoryService} from '../../Services/bbq-category.service'
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
  url:any;
  // @Input() categories:any;
  // @Input() hero:any;
  
  
  constructor(private bbqdata:BbqCategoryService) { 
  
  
    this.bbqdata.bbq().subscribe((data)=>{
      console.warn("data",data);
      this.url=data;
    });
  }
  
  // menuItems: Menu[]=menuItem;
 
  
  ngOnInit(): void { }
}
