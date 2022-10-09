import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {faPerson, faClock, faUtensils,faBars} from '@fortawesome/free-solid-svg-icons';
import { PosService } from 'src/app/Services/pos.service';
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
  public isCollapsed = true;
  person =faPerson;
  clock = faClock;
  utensils= faUtensils;
  bars=faBars;
  url:any;

  constructor(private menuData:PosService) {
   
  }

  menu:any;
  clicked(category:string){
    
    switch (category) {
      case "TRADITIONAL":
        this.menuData.traditional().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "BEVERAGES":
        this.menuData.beverage().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "FISH":
        this.menuData.fish().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "KARAHI":
        this.menuData.karahi().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "NASHTA":
        this.menuData.nashta().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "SALAD RAITA":
        this.menuData.raita().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "SWEETS":
        this.menuData.sweet().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "TANDOOR":
        this.menuData.tandoor().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      default:
        this.menuData.bbq().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
  }
    this.menu= category; 

  }
 
 
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
