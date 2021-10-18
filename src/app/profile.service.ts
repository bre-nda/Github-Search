import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  user!:any;
  repos!:any;

  constructor(private http:HttpClient) {
    console.log("service is now ready")
    this.username='bre-nda'
   }

  //  getProfile(){
  //    return this.http.get('https://api.github.com/users/'+this.username+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret)
  //  }

  //  getRepos(){
  //   return this.http.get('https://api.github.com/users/'+this.username+'/repos?order=created&sort=asc?client_id='+environment.clientId + "&client_secret="+environment.clientSecret)
  //  }

  getProfile(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret)
  }
  getRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ environment.clientId + "&client_secret=" + environment.clientSecret)
  }
   updateProfile(username:string){
     this.username = username;
   }
  }


