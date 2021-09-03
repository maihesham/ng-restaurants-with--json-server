import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {RestoService} from '../resto.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert:boolean=false
    AddResto= new FormGroup({
     name:new FormControl(''),address:new FormControl(''),
     email:new FormControl('')
   });
  constructor(private restoservis:RestoService) { }

  ngOnInit(): void {
  }
  AddReestoFunction(){
    this.restoservis.SaveRest(this.AddResto.value).subscribe((res)=>{
           
    });
    this.alert=true;
    this.AddResto.reset({});
  }
  colseAlert(){
    this.alert=false;
  }

}
