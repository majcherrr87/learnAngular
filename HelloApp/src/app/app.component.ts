import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';

type Box = {
  r: number;
  g: number;
  b: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LazyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  boxes: Box[] = [];

  addBox() {
    const newBox: Box = {
      r: Math.round(Math.random() * 255),
      g: Math.round(Math.random() * 255),
      b: Math.round(Math.random() * 255),
      x: Math.round(Math.random() * 800),
      y: Math.round(Math.random() * 800),
      width: Math.round(Math.random() * 100) + 100,
      height: Math.round(Math.random() * 100) + 100,
    };
    this.boxes.push(newBox);
  }
  getStyle(box: Box) {
    return {
      backgroundColor: `rgb(${box.r},${box.g},${box.b})`,
      height: `${box.height}px`,
      width: `${box.width}px`,
      left: `${box.x}px`,
      top: `${box.y}px`,
    };
  }
}
