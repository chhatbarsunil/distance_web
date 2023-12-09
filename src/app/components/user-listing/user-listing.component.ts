import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModel } from 'src/app/models/distance-model/distance';
import { UserService } from 'src/app/shared/services/distance.service';
import { RouterModule } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-user-listing',
  standalone: true,
  imports: [CommonModule,SharedModule,RouterModule],
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  users:UserModel[]=[]
  user= new UserModel()
  constructor(private _userService:UserService,
    private _commonService:CommonService
    ){}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this._commonService.startLoader();
    this.user.userId=1;
    this.user.userName="Sunil Chhatbar";
    this.users.push(this.user);

    this._userService.getUsers().subscribe((res)=>{
      console.log("res:",res);
      this._commonService.stopLoader();
      this.users = res;
    })
  }
  removeUser(userId:number){
    this._commonService.startLoader();
    /**confirm before delate and then call api below */
    this._userService.deleteUserById(userId).subscribe((response)=>{
      console.log("response:",response)
      this.getUsers();
      this._commonService.stopLoader();
    })
  }
}
