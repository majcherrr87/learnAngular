import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserNameChangeEvent } from '../../types/user';

@Component({
  selector: 'app-single-user',
  standalone: true,
  imports: [],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss',
})
export class SingleUserComponent {
  @Input()
  user!: User;

  @Output()
  onNameChange = new EventEmitter<UserNameChangeEvent>();

  changleName() {
    const newName = `Lorem ipsum ${Math.round(Math.random() * 100)}`;
    this.onNameChange.emit({ id: this.user.id, newName });
  }
}
