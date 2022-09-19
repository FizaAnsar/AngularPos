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
  public isCollapsed = true;
  person =faPerson;
  clock = faClock;
  utensils= faUtensils;
  bars=faBars;
  url:any;

  constructor(private bbqdata:BbqCategoryService) {
   
  }

  menu:any;
  clicked(category:string){
    
  //   console.warn(category);
  //   if(category=="BBQ"){
  //     this.bbqdata.bbq().subscribe((data)=>{
  //       console.warn("data",data);
  //       this.url=data;
  //     });
  //   }
  //   else if(category=="BEVERAGES"){
  //     this.bbqdata.beverage().subscribe((data)=>{
  //       console.warn("data",data);
  //       this.url=data;
  //     });
  //   }
  // else if(category=="FISH"){
  //       this.bbqdata.fish().subscribe((data)=>{
  //         console.warn("data",data);
  //         this.url=data;
  //       });
  //   }
    switch (category) {
      case "TRADITIONAL":
        this.bbqdata.traditional().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "BEVERAGES":
        this.bbqdata.beverage().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "FISH":
        this.bbqdata.fish().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "KARAHI":
        this.bbqdata.karahi().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "NASHTA":
        this.bbqdata.nashta().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "SALAD RAITA":
        this.bbqdata.raita().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "SWEETS":
        this.bbqdata.sweet().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      case "TANDOOR":
        this.bbqdata.tandoor().subscribe((data)=>{
          console.warn("data",data);
          this.url=data;
        });
          break;
      default:
        this.bbqdata.bbq().subscribe((data)=>{
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
