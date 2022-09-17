import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeverageCategoryService {
  Url= "http://localhost:3000/BEVERAGES";
  constructor(private http:HttpClient) { }
  beverage(){
    return this.http.get(this.Url);
  }
}
