import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    console.log("fggg", body)

    this.http.post(environment.url + '/user/addUser', body, { 'headers': headers }).subscribe();
  }

  getAllUser(): Observable<any> {
    return this.http.get(environment.url + "/user/AllUser");

  }
  deleteUser(idUser: String) {
     this.http.delete<any>(environment.url + "/user/deleteUser?idUser=" + idUser).subscribe();
  }


  getUserByUserNameAndPassword(username: string, password: string): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("username", username);
    queryParams = queryParams.append("password", password);

    return this.http.get(environment.url + "/user/findUserByNameAndPassword", { params: queryParams });

  }

  getUserByUserName(username: String):Observable<User> { 
   return this.http.get<any>(environment.url + "/user/getUserByUserName?username=" + username);
  }






}


