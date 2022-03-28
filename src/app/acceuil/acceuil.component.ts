import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Restaurant } from '../model/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService,private restaurantService :RestaurantService ) { }
   
  allRestaurant:Restaurant[];
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    console.log("here");
    this.restaurantService.getAllRestaurant().subscribe(data => {
      console.log(data);
      this.allRestaurant = data;
    })

  }
  

}
