import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL : string="http://localhost:3000/users";
  
  constructor(private http:HttpClient) { }
  SaveUser(Data:any){
    return this.http.post(this.URL,Data)
 }
}
