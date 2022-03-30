import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../model/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAllRestaurant(): Observable<any> {
    return this.http.get(environment.url + "/Restaurant/AllRestaurent");
  
  }

  addRestauarnt(restaurant: Restaurant) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(restaurant);
    console.log("fggg", body)

    this.http.post(environment.url + '/Restaurant/addRestaurent', body, { 'headers': headers }).subscribe();
  }

  
}
