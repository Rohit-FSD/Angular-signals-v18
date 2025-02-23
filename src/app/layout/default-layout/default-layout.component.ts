import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../../features/header/header.component";
import { TasksComponent } from "../../features/tasks/tasks.component";
import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/models/user.model';
import { UserComponent } from '../../features/user/user.component';

@Component({
  selector: 'app-default-layout',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  users = signal<User[]>([]);
  currentSelectedUser = signal<User | undefined>(undefined);

  constructor(private readonly usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.fetchUsers().subscribe((res) => {
      this.users.set(res);
      this.currentSelectedUser.set(this.users()[0]);
    })
  }

  onSelectingUser(user: User) {
    this.currentSelectedUser.set(user);
  }

}
