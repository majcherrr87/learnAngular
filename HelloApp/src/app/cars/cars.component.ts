import { Component } from '@angular/core';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  selectedCar: string = 'none';
  handleCarSelected(selected: string) {
    this.selectedCar = selected;
  }
}
