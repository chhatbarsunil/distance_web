import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanceComponent } from './components/distance/distance.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'distance',component:DistanceComponent,
  },
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
