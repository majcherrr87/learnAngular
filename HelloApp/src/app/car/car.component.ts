import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
})
export class CarComponent {
  @Input()
  name: string = '';

  @Output()
  onSelectedCar = new EventEmitter<string>();

  selectCar() {
    this.onSelectedCar.emit(this.name);
  }
}
