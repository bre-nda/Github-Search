import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: any;
  user!:User;

  constructor(private profileService:ProfileService) { 
    this.profileService.getProfile().subscribe((profile:any)=>{
      this.profile = profile
      console.log(profile)
    });
  }

  ngOnInit(): void {
  }

}


