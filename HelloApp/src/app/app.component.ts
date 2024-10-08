import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  value: string = 'Change-detection';
  values: number[] = [];

  changeValue() {
    this.value = 'Lorem Ipsum';
  }

  addNewValues() {
    const newvalue = Math.round(Math.random() * 100);
    this.values = [...this.values, newvalue];
    // this.values.push(newvalue);
  }
}
