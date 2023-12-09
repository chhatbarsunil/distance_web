import { Injectable } from '@angular/core';
import { UserModel } from '../../models/distance-model/distance';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlConstants } from 'src/app/constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  constructor(private _http:HttpClient) {

   }
  /**
   *Adds a user with all field including min and max distance
   * @param userModel
   * @returns
   */
  addUser(userModel:UserModel):Observable<UserModel>{
    let res = this._http.post<UserModel>(UrlConstants.AddUser,userModel)
    return res;
  }

  getUsers():Observable<UserModel[]>{
    let res = this._http.get<UserModel[]>(UrlConstants.GetUsers);
    console.log("users:",res);
    return res;
  }
  getUserById(userId:number):Observable<UserModel[]>{
    let res = this._http.get<UserModel[]>(UrlConstants.GetUserById+"?userId="+userId);
    return res;
  }
  updateUserById(userModel:UserModel):Observable<UserModel[]>{
    let res = this._http.put<UserModel[]>(UrlConstants.UpdateUserById,userModel);
    return res;
  }
  deleteUserById(userId:number){
    let res = this._http.delete<UserModel>(UrlConstants.DeleteUserById +"?userId="+userId);
    return res;
  }

}
