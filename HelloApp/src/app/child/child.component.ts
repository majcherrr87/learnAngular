import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Output()
  onNewValue = new EventEmitter<string>();

  emitNewValue() {
    this.onNewValue.emit('lorem ipsum');
  }
}
