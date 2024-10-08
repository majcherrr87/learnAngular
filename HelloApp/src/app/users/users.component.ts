import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: string[] = [];

  addNewUser() {
    const newUser = `User ${Math.round(Math.random() * 200)}`;
    this.users = [...this.users, newUser];
  }

  removeRandomUser() {
    const indexToDelete = Math.round(Math.random() * (this.users.length - 1));
    this.users = this.users.filter((_, index) => index !== indexToDelete);
  }
}
