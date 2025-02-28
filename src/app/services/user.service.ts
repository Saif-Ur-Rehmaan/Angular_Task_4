import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'https://dummyjson.com/users'
  constructor(private http: HttpClient) {}
  GetUsers() {
    return this.http.get(this.url);
  }
}
