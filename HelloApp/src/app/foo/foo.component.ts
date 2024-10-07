import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
})
export class FooComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  value: string = '';

  @Input()
  users: string[] = [];

  interval!: number;

  ngOnInit(): void {
    console.log('OnInit', this.value);
    this.interval = setInterval(() => {
      console.log('TICK');
    }, 1000) as unknown as number;
    console.log('Interval', this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', changes);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    clearInterval(this.interval);
  }

  callMe() {
    console.log('Calling component method');
    return this.value;
  }
}
