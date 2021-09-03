import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {restaurant} from './Modules'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  URL : string="http://localhost:3000/restaurants";
  constructor(private http:HttpClient) { }
  GetList():
  Observable<Array<restaurant>>{
    return this.http.get<Array<restaurant>>(this.URL);
  }
  SaveRest(Data:any){
     return this.http.post(this.URL,Data)
  }
  Delete(id:number){
    return this.http.delete(`${this.URL}/${id}`)
  }
}
