import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class RestaurantsService {
  url : string = "http://opentable.herokuapp.com/api/restaurants?city=";

  constructor(private http : HttpClient) { }

  getRestaurants(city : string) : any{
    if(!city) return [];
    let url = this.url + city;
    return this.http.get(url);
  }

}
