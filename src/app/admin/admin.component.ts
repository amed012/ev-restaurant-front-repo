import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  allUser:User[];
  constructor(private authService: AuthService,private commentService :CommentService,private userService:UserService ) { }
   
 ;
  ngOnInit(): void {
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





}
