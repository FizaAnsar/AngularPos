import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './MyComponents/menu/menu.component';
import { ItemDetailsComponent } from './MyComponents/item-details/item-details.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NextDirective } from './Directives/next.directive';
import { PrevDirective } from './Directives/prev.directive';
import { SearchComponent } from './MyComponents/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ItemDetailsComponent,
    NextDirective,
    PrevDirective,
    SearchComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ScrollingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
