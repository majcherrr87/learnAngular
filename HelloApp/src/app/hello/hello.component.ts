import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent implements DoCheck, OnInit, OnChanges {
  @Input()
  value: string = '';

  @Input()
  values: number[] = [];

  constructor(private ngZone: NgZone) {}

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('New Changes', changes);
  }

  ngOnInit(): void {
    // this.ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     console.log('Tick');
    //   }, 1000);
    // });
  }
}
