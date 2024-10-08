import { interval } from 'rxjs';
import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent implements AfterViewInit, OnDestroy, DoCheck {
  @ViewChild('canvas')
  canvasRef!: ElementRef<HTMLCanvasElement>;

  interval!: number;
  constructor(private NgZone: NgZone) {}

  ngAfterViewInit(): void {
    console.log(this.canvasRef);
    this.draw();

    this.NgZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.draw();
      }, 500) as unknown as number;
    });
  }

  draw() {
    const ctx = this.canvasRef.nativeElement.getContext('2d');

    if (!ctx) return;

    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    ctx.fillStyle = `rgb(${r} ${g} ${b})`;
    ctx.rect(0, 0, 300, 150);
    ctx.fill();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  ngDoCheck(): void {
    console.log('Check');
  }
}
