import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { LifecycleTesterComponent } from './lifecycle-tester/lifecycle-tester.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
