import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private static loggedInUser: User;

  constructor() { }

  public static getLoggedUser(): User{

    return SessionService.loggedInUser;

  }
  // TODO: User info is lost after reloading
  public static setLoggedUser(newUser: User): void{

    SessionService.loggedInUser = newUser;

  }

}
