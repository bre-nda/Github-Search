import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username!:string;
  profile: any;
  repos:any;


  constructor(public profileService:ProfileService) { 
     this.profileService.getProfile().subscribe((profile:any)=>{
     this.profile = profile
    console.log(profile)
     });
    this.profileService.getRepos().subscribe((repos:any)=>{
      this.repos = repos
      console.log(repos)
     });
  }
  // searchProfile(){
  //    this.profileService.updateProfile(this.username);
  // }
  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfile().subscribe((profile:any)=>{
      this.profile = profile
     console.log(profile)
      });
     this.profileService.getRepos().subscribe((repos:any)=>{
       this.repos = repos
       console.log(repos)
      });
  }

  ngOnInit(): void {
  }

}


