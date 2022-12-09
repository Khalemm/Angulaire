import { Component } from '@angular/core';
import { User } from './entities/user';
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[] = [];

  constructor(private userService: UserService) {
    userService.getAllUser().subscribe(
      data => this.users.push(data)
    )
    localStorage.setItem("user",JSON.stringify(this.users[0]))
  }

  title = 'Angulaire';
}
