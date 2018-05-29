import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantsService {
  url : string = "http://opentable.herokuapp.com/api/restaurants?city=";

  constructor(private http : HttpClient) { }

  getRestaurants(city : string) : Observable<any>{
    let url = this.url + city;
    return this.http.get(url);
  }

}
