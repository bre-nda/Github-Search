import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user!:User;
  repository!:Repository;


  constructor(private http:HttpClient) {
   }

   getProfile(){}
}
