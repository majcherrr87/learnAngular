import {
  Component,
  QueryList,
  ViewChildren,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { BarComponent } from '../bar/bar.component';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [BarComponent],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
})
export class FooComponent implements OnInit, AfterViewInit {
  @ViewChildren(BarComponent)
  barComponent!: QueryList<BarComponent>;

  @ViewChildren(BarComponent, { read: ElementRef })
  barElement!: QueryList<ElementRef>;

  sum: number = 0;

  ngOnInit(): void {
    console.log(this.barComponent, this.barElement);
  }
  ngAfterViewInit(): void {
    console.log(this.barComponent, this.barElement);
  }

  calculateSum() {
    this.sum = this.barComponent.reduce((acc, curr) => acc + curr.value, 0);
    console.log(this.barElement);
  }
}
