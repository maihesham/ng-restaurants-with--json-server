import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {
    path:"Add",component:AddComponent
  },{
    path:"Update/:id",component:UpdateComponent
  },{
    path:"Login",component:LoginComponent
  },{
    path:"Register",component:RegisterComponent
  }
  ,{
    path:"",component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
