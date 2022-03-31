import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
import { CommentService } from '../services/comment.service';
import { RestaurantService } from '../services/restaurant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  allUser:User[];
  user:User;
  form: FormGroup;
  submitted:boolean;
  constructor(private fb: FormBuilder,private restaurantService :RestaurantService,private authService: AuthService,private commentService :CommentService,private userService:UserService,private translate: TranslateService ) { 
    translate.setDefaultLang('fr');
  }
   
 

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.required],
   
     
      
    });
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    console.log("here");
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.allUser = data;
    })

  }

  deleteUser(idUser: any): void {
     
    this.userService.deleteUser(idUser)
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.allUser = data;
    })
    }

     
    onLogout() {
      this.authService.logout(); // {3}
    }
   
    useLanguage(language: string): void {
      console.log(language);
      this.translate.use(language);
    }

    onSubmit(): void
     {  
      this.submitted = true;
      this.userService.getUserByUserName( this.form.get('username').value).subscribe(data => {
        console.log(data);
        this.user = data;
      })

     }



}
