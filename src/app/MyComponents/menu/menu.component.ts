import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faPerson, faClock, faUtensils,faBars} from '@fortawesome/free-solid-svg-icons';
import menuItem from '../../JSON/menu.json'
import {BbqCategoryService} from '../../Services/bbq-category.service'

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
  url:any;

  constructor(private bbqdata:BbqCategoryService) {
   
      this.bbqdata.bbq().subscribe((data)=>{
        console.warn("data",data);
        this.url=data;
      });
      console.log("hello")
    
   
  }

  menus: Menu[]=menuItem;

  // Increment Function
  count=0;
  increment(val:any){
    this.count++;
    this.count==val;
  }

    menu:any;
  clicked(category:string){
    
    console.warn(category);
    this.menu= category;
    
  }




 

  ngOnInit(): void {
  }

}
