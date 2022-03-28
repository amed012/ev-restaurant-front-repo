import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user:User) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log("fggg",body)

     this.http.post(environment.url + '/user/addUser', body,{'headers':headers}).subscribe();
  }
}
