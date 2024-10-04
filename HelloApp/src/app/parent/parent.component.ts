import { Component, EventEmitter, Output } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  @Output()
  onNewValue = new EventEmitter<string>();

  handleNewValue(value: string) {
    this.onNewValue.emit(value);
  }
}
