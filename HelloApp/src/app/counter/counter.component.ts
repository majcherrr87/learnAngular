import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit, OnDestroy {
  counter: number = 0;
  interval!: number;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter++;
      console.log(this.interval, this.counter);
    }, 1000) as unknown as number;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('clear interval');
  }
}
