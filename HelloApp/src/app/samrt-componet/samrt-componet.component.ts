import { Component } from '@angular/core';

@Component({
  selector: 'app-samrt-componet',
  standalone: true,
  imports: [],
  templateUrl: './samrt-componet.component.html',
  styleUrl: './samrt-componet.component.scss',
})
export class SamrtComponetComponent {
  constructor() {
    console.log('I am constructed');
    setInterval(() => {
      console.log('TICK');
    }, 1000);
  }
}
