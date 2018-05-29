import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

enum State {
  off = "Enter a city to find restaurants in the area",
  on = "Found the following restaurants",
  error = "Could not find any restaurants. Please try again."
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  state : State;
  city : string;
  restaurants : any[];

  constructor(private restaurantService : RestaurantsService){
    this.city = "";
    this.restaurants = [];
    this.state = State.off;
  }

  ngOnInit() {
  }

  getData() : void {
    this.restaurantService.getRestaurants(this.city).subscribe(
      (response)=>{
        this.restaurants = response.restaurants;
        this.updateState();
      },(error)=>{
        this.restaurants = ['error'];
        this.updateState();
      }
    );
  }

  updateState() : void{
    if(this.restaurants == []){
      this.state = State.off;
    }
    if(this.restaurants != []){
      this.state = State.on;
    }
    //Final Check: if the response was an error (lazy-check)
    if(this.restaurants[0] == 'error'){
      this.restaurants = [];
      this.state = State.error;
    }
  }

}
