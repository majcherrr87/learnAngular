import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreazyBoxComponent } from './creazy-box/creazy-box.component';
import { Coords } from '../types/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreazyBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  coords: Coords[] = [];
  visible = this.coords.length <= 10;

  handleNewPosition(coords: Coords) {
    this.coords.push(coords);
  }
}
