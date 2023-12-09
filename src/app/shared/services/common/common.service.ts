import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  isLoading:boolean=false;
  startLoader(){
    this.isLoading=true;
  }
  stopLoader(){
    setTimeout(() => {
      this.isLoading=false;
    }, 500);
  }
}
