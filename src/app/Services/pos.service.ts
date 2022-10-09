import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosService {
  bbqs= "http://localhost:3000/BBQ";
  beverages = "http://localhost:3000/BEVERAGES"
  fishes = " http://localhost:3000/FISH"
  karahis =" http://localhost:3000/KARAHI"
  nashtas =" http://localhost:3000/NASHTA"
  raitas ="http://localhost:3000/SALADRAITA"
  sweets ="  http://localhost:3000/SWEETS"
  tandoors ="  http://localhost:3000/TANDOOR"
  traditionals ="http://localhost:3000/TRADITIONAL"
  
  constructor(private http:HttpClient) { }
  
  bbq(){
    return this.http.get(this.bbqs)
    // .subscribe((c: Config) => this.Config.next(c));
  }
  beverage(){
    return this.http.get(this.beverages);
  }
  fish(){
    return this.http.get(this.fishes);
  }
  karahi(){
    return this.http.get(this.karahis);
  }
  nashta(){
    return this.http.get(this.nashtas);
  }
  raita(){
    return this.http.get(this.raitas);
  }
  sweet(){
    return this.http.get(this.sweets);
  }
  tandoor(){
    return this.http.get(this.tandoors);
  }
  traditional(){
    return this.http.get(this.traditionals);
  }
 
}
