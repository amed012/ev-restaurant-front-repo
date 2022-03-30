import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); 
  private profil = new BehaviorSubject<User>(null); 
 

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }
  get getuser() {
    return this.profil.asObservable(); 
  }


   


  constructor(
    private router: Router
  ) { }
  login(user: User) {
    console.log(user.role);
    if (user.role == 'admin' ) { 
      console.log(user.role);
      this.loggedIn.next(true);
      this.profil.next(user);
      this.router.navigate(['admin']);
    }
    if (user.role == 'propritaire') { 
      this.loggedIn.next(true);
      this.profil.next(user);
      this.router.navigate(['acceuil']);
    }
    if (user.role == 'user') { 
      this.loggedIn.next(true);
      this.profil.next(user);
      this.router.navigate(['acceuil2']);
    }
  }
  logout() { // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
