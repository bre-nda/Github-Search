import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos:any;

  constructor(public profileService:ProfileService) { 
    this.profileService.getProfile().subscribe((profile:any)=>{
      this.profile = profile
      console.log(profile)
    });
    this.profileService.getRepos().subscribe((repos:any)=>{
      this.repos = repos
    });
  }

  ngOnInit(): void {
  }

}


