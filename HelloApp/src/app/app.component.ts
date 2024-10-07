import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { CarsComponent } from './cars/cars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HelloApp';
}
