import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

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

  @Output()
  valueChange = new EventEmitter<number>();

  increase() {
    this.valueChange.emit(this.value + 1);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent Changes ', changes);
  }
}
