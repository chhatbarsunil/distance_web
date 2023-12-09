import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule,HttpClientModule,LoaderComponent
  ],
  exports:[
    CommonModule,RouterModule,HttpClientModule,LoaderComponent
  ],
})
export class SharedModule { }
