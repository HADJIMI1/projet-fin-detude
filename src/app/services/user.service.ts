import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url= 'http://8080/api/users'
  constructor(private httpClient: HttpClient) { }


  get getAllUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
    
  }

  getUser(id:number): Observable<User>{
    return this.httpClient.get<User>(this.url+'/'+id);
    
  }

  



}
