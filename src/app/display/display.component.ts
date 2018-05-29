import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { FormsModule } from '@angular/forms';

@NgModule({
   imports: [FormsModule],
   exports: [DisplayComponent],
   declarations: [DisplayComponent],
   providers: [],
})

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  city : string;
  restaurants : any[];

  constructor(private restaurantService : RestaurantsService){
    this.city = "";
    this.restaurants = [];
  }

  ngOnInit() {
  }

  getData() : void {
    this.restaurantService.getRestaurants(this.city).subscribe((response : any)=>{
      if (!response.restaurants) return [];
      this.restaurants = response.restaurants;
    });
  }

}
