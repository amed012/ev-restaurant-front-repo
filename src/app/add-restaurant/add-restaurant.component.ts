import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Restaurant } from '../model/restaurant.model';
import { User } from '../model/user';
import { RestaurantService } from '../services/restaurant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  getUser$: Observable<User>;

   formSubmitAttempt: boolean;

  constructor(private authService: AuthService,private fb: FormBuilder,private restaurantService :RestaurantService,private translate: TranslateService ) { }
     form: FormGroup;
     formm: FormGroup;
     profil:User;
  ngOnInit(): void {

    this.form = this.fb.group({
      description: ['', Validators.required],
      categorie: ['', Validators.required],
      email: ['', Validators.required],
      adresse: ['', Validators.required],
     
      
    });
    this.formm = this.fb.group({
      name: ['', Validators.required]
   
     
      
    });
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    this.getUser$ = this.authService.getuser; 
    this.getUser$.subscribe(data => {
      this.profil= data;
    })

  }



  onSubmit() {
    const user: User = { nom: this.profil.nom, prenom: this.profil.prenom, email:this.profil.email, username: this.profil.username, password: this.profil.password, role: this.profil.role ,active: true};

    const restaurant: Restaurant  ={description: this.form.get('description').value,
      categorie:  this.form.get('categorie').value,
      email: this.form.get('email').value,
      adresse: this.form.get('adresse').value,
      active: true,
      user:this.profil
  }

    if (this.form.valid) {
      
      this.restaurantService.addRestauarnt(restaurant); 
    }
    console.log("lorem", this.form.value);
    this.formSubmitAttempt = true; 
  }
  onnSubmit() {
  }
  onLogout() {
    this.authService.logout(); // {3}
  }
 
  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }
}
