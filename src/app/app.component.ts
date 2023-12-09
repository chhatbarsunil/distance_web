import { Component, DoCheck } from '@angular/core';
import { CommonService } from './shared/services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  isLoading:boolean=false;
  title = 'distance_web';
  constructor(private _commonService:CommonService){}
  ngDoCheck(): void {
    this.isLoading= this._commonService.isLoading;
  }
}
