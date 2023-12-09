import { UserModel } from './../../models/distance-model/distance';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/shared/services/distance.service';
import { PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-distance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {
  users: UserModel[] = [];
  user = new UserModel();
  AddOrUpdateUserButtonName:string="Update";
  constructor(private _userService: UserService,
    private _commonService:CommonService,
    private _router:Router
    ) {
    const tree: UrlTree = _router.parseUrl(_router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    console.log("group:",g.segments[1].path)
    const s: UrlSegment[] = g.segments;
    console.log("path:",s[0].path )// returns 'team'
    console.log("parameter:",s[0].parameters) // returns {id: 33}
    console.log("segments:",s[1].path)
      this.user.userId= parseInt(s[1].path);
      console.log("this:",this.user.userId);
      this.updatedButtonName()


    }
  ngOnInit(): void {
    if(this.user.userId!==0){
      this.getUserById(this.user.userId);
    }

  }
  updatedButtonName(){
    if(this.user.userId===0){
      this.AddOrUpdateUserButtonName="Add";
    }
    else{
      this.AddOrUpdateUserButtonName="Update"
    }
  }
  getUserById(userId:number){


    this._commonService.startLoader()
    console.log("userId on init:",userId);
    this._userService.getUserById(userId).subscribe((response)=>{
      this._commonService.stopLoader()
      this.user=response[0];
      console.log("this.user from component on init",this.user)
    })

  }
  addUser() {
      console.log("user", this.user)
      this._userService.addUser(this.user).subscribe((response: any) => {
        console.log("response:", response)
      })
      console.log("addUser function in distance component is called...");
  }
  AddOrUpdateUser(){
    this.updateUserById(this.user);
    console.log("this.user from add or update user:",this.user);
  }
  updateUserById(userModel:UserModel){
    if(userModel.userId===0){
      console.log("on adding user...");
      this._userService.addUser(userModel).subscribe((response)=>{
        this.user=response
        console.log("user added new:",this.user)
        this._router.navigate(['users'])
      })
    }
    else{
      console.log("user model before update:",userModel)
      this._userService.updateUserById(userModel).subscribe((response)=>{
        console.log("response:",response)
        this._router.navigate(['users'])
      })
    }
  }

}
