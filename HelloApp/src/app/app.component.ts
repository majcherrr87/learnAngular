import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
