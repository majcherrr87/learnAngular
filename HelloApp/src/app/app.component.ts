import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GrandParentComponent } from './grand-parent/grand-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GrandParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @Input()
  numbers: number[] = [];

  addNewNumber() {
    const newNumber = Math.round(Math.random() * 100);
    this.numbers = [...this.numbers, newNumber];
  }
}
