import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-tester',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-tester.component.html',
  styleUrl: './lifecycle-tester.component.scss',
})
export class LifecycleTesterComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  foo: number = 0;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }

  handleChange() {
    this.foo++;
  }
}
