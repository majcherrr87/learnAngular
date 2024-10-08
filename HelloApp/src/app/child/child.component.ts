import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnChanges {
  @Input()
  value!: number;

  @Input()
  values!: number[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.value, this.values);
  }

  randomNumbre() {
    this.value = Math.round(Math.random() * 100);
  }
  addNumbre() {
    this.values = [...this.values, this.value];
  }
}
