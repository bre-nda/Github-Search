import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!: string;
  private clientid!:'';
  private clientsecret='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'

  constructor(private http:HttpClient) {
   }

   getProfile(){

   }
}
