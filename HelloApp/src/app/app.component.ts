import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { NumbersComponent } from './numbers/numbers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumbersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter: WritableSignal<number> = signal(100);
  doubleCounter: Signal<number> = computed(() => this.counter() * 2);

  constructor() {
    effect((onCleanUp) => {
      document.title = this.counter().toString();
      // console.log(`Counter value: ${this.counter()}`);
      const interval = setInterval(() => {
        console.log('TICK');
      }, this.counter() * 10);

      onCleanUp(() => {
        clearInterval(interval);
      });
    });
  }

  increase() {
    this.counter.update((prev) => prev + 1);
  }
  decrease() {
    this.counter.update((prev) => prev - 1);
  }

  reset() {
    this.counter.set(100);
  }
}
