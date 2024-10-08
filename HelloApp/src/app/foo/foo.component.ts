import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
})
export class FooComponent implements OnInit, OnDestroy {
  counter: WritableSignal<number> = signal(0);
  interval!: number;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter.update((prev) => prev + 1);
    }, 1000) as unknown as number;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
