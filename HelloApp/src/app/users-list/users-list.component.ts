import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input()
  users: string[] = [];
}
