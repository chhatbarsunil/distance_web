import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanceComponent } from '../components/distance/distance.component';
import { LoginComponent } from '../components/login/login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,DistanceComponent,LoginComponent
  ]
})
export class SharedModule { }
