import { Component, OnInit } from '@angular/core';
import {faBarsStaggered, faSearch, faPlateWheat, faMagic} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
