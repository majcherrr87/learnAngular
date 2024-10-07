import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  value: string = 'Lorem ipsum';
  users: string[] = ['Adrian', 'Ilona'];
  visible: boolean = true;

  changeValue() {
    this.value = 'Dolor Sit amet';
  }
  addUsers() {
    // this.users.push((Math.random() * 1000).toFixed(2));
    this.users = [...this.users, (Math.random() * 1000).toFixed(2)];
  }
  toggleVisible() {
    this.visible = !this.visible;
  }
}
