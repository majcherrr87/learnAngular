import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { GrandparentComponent } from './grandparent/grandparent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, GrandparentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HelloApp';
}
