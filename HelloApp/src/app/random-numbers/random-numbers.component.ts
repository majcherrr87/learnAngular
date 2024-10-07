import { Component, Input } from '@angular/core';
import { RandomNumberButtonComponent } from '../random-number-button/random-number-button.component';

@Component({
  selector: 'app-random-numbers',
  standalone: true,
  imports: [RandomNumberButtonComponent],
  templateUrl: './random-numbers.component.html',
  styleUrl: './random-numbers.component.scss',
})
export class RandomNumbersComponent {
  numbers: number[] = [];

  handleNewValue(newValue: number) {
    this.numbers.push(newValue);
  }
}
