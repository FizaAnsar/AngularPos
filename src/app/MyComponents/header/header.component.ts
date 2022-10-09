import { Component,   OnInit, Output,  } from '@angular/core';
import {faBarsStaggered, faSearch, faPlateWheat, faMagic} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public navbarCollapsed = true;
  bars =faBarsStaggered;
  search = faSearch;
  plate= faPlateWheat;
  magic = faMagic;
  
  
 SearchValue:string ="";
  onSearchEnterText(){
    this.SearchValue;
    console.log(this.SearchValue);
  }

  constructor() { }

 
  ngOnInit(): void {
  }

}


