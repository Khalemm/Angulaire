import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/entities/user';
import userData from 'src/assets/user.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users:User[] = userData;

  public getAllUser() : Observable<User>{
    return from(this.users);
  }
}
