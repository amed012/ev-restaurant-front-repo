import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
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
  submitted:boolean;
  isLoggedIn$: Observable<boolean>;
 
  form: FormGroup;
  constructor(private authService: AuthService,private fb: FormBuilder,private restaurantService :RestaurantService, private translate: TranslateService ) { }
   
  allRestaurant:Restaurant[];
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
   
     
      
    });
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    console.log("here");
    this.restaurantService.getAllRestaurant().subscribe(data => {
      console.log(data);
      this.allRestaurant = data;
    })

   

  }
  deleteRestaurant(a:any):void {
  
  }
  
  onLogout() {
    this.authService.logout(); // {3}
  }
  getProfil()
  {
    this.authService.logout(); // {3}
  }

  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }
  onSubmit(): void
  {  
   this.submitted = true;
   this.restaurantService.getRestaurantByName( this.form.get('name').value).subscribe(data => {
     console.log(data);
     this.allRestaurant = data;
   })

  }

}
