import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-random-number-button',
  standalone: true,
  imports: [],
  templateUrl: './random-number-button.component.html',
  styleUrl: './random-number-button.component.scss',
})
export class RandomNumberButtonComponent {
  @Output()
  onNewValue = new EventEmitter<number>();

  addNewValue() {
    const newValue = Math.round(Math.random() * 1000);
    this.onNewValue.emit(newValue);
  }
}
