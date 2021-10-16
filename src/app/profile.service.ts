import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!: string;

  constructor(private http:HttpClient) {
    this.username='bre_nda'
   }

   getProfile(){
    return this.http.get('https://api.github.com/users/'+this.username+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret)
   }
}
