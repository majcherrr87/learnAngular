import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input()
  callback!: (newValue: number) => void;

  @Output()
  onNewValue = new EventEmitter<number>();

  @Output()
  onCustomEvent = new EventEmitter<{ title: string; description: string }>();

  setNewValue() {
    const newValue = Math.round(Math.random() * 100);
    this.onCustomEvent.emit({
      title: 'New value generated',
      description: `Value: ${newValue}`,
    });
    this.callback(newValue);
  }

  emitNewValue() {
    const newValue = Math.round(Math.random() * 100);

    this.onNewValue.emit(newValue);
  }
}
