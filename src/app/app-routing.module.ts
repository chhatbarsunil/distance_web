import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanceComponent } from './components/distance/distance.component';
import { LoginComponent } from './components/login/login.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'distance/:userId',component:DistanceComponent,
  },
  {
    path:'users',component:UserListingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
