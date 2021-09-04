import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  });
   alert=false;
  constructor(private userservic:UserService) { }

  ngOnInit(): void {
  }
  RegisterFunction(){
    this.userservic.SaveUser(this.Register.value).subscribe((res)=>{
      this.Register.reset({});
      this.alert=true;
    });
  }
  colseAlert(){
    this.alert=false;
  }
}
