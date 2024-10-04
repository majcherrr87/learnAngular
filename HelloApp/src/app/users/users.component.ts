import { Component } from '@angular/core';
import { User, UserNameChangeEvent } from '../../types/user';
import { SingleUserComponent } from '../single-user/single-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SingleUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: User[] = [
    { id: '1', name: 'Adrian', lastName: 'Majcher' },
    { id: '2', name: 'Ilona', lastName: 'Majcher' },
    { id: '3', name: 'Lisa', lastName: 'Majcher' },
  ];

  handleNameChange({ id, newName }: UserNameChangeEvent) {
    this.users = this.users.map((user) => {
      if (user.id === id)
        return {
          ...user,
          name: newName,
        };
      return user;
    });
  }
}
