import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  EditResto= new FormGroup({
   name:new FormControl(''),address:new FormControl(''),
   email:new FormControl('')
 });
  constructor(private route:ActivatedRoute , private RestoService:RestoService,private routerNave: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.RestoService.GetResto(this.route.snapshot.params.id).subscribe((res)=>{
      this. EditResto= new FormGroup({
        name:new FormControl(res['name']),address:new FormControl(res['address']),
        email:new FormControl(res['email'])
      });
    })
  }
  EditRestoFunction(){
this.RestoService.Edit(this.route.snapshot.params.id,this.EditResto.value).subscribe((res)=>{
  this.routerNave.navigate(['']);
});
  }
}
