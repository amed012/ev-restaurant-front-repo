import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Restaurant } from '../model/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-acceuil-user',
  templateUrl: './acceuil-user.component.html',
  styleUrls: ['./acceuil-user.component.css']
})
export class AcceuilUserComponent implements OnInit {
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
