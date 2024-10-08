import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
})
export class NumbersComponent {
  constructor() {
    effect(() => {
      console.log(`Numbers of even numbers: ${this.eventNumbers().length}`);
    });
  }
  numbers: WritableSignal<number[]> = signal([]);
  eventNumbers: Signal<number[]> = computed(() =>
    this.numbers().filter((val) => val % 2 === 0)
  );

  addNewNumber() {
    const newNumber = Math.round(Math.random() * 10000);
    this.numbers.update((prev) => [...prev, newNumber]);
  }
}
