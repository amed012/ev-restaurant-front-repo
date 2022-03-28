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
}
