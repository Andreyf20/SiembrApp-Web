import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private static loggedInUser: User;

  constructor() { }

  public static getLoggedUser(): User{

    return JSON.parse( sessionStorage.getItem('userInfo') ) as User;

  }

  public static setLoggedUser(newUser: User): void{

    sessionStorage.setItem('userInfo', JSON.stringify(newUser));

  }

}
