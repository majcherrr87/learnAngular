import { Component, EventEmitter, Output } from '@angular/core';
import { Coords } from '../../types/user';

@Component({
  selector: 'app-creazy-box',
  standalone: true,
  imports: [],
  templateUrl: './creazy-box.component.html',
  styleUrl: './creazy-box.component.scss',
})
export class CreazyBoxComponent {
  @Output()
  onNewPosition = new EventEmitter<Coords>();

  size = Math.round(Math.random() * 200) + 100;
  x = Math.round(Math.random() * 500);
  y = Math.round(Math.random() * 500);

  getStyle() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      left: `${this.x}px`,
      top: `${this.y}px`,
    };
  }
  handleHover() {
    this.x = Math.round(Math.random() * 500);
    this.y = Math.round(Math.random() * 500);

    this.onNewPosition.emit({ x: this.x, y: this.y });
  }
}
