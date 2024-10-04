import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-displayer',
  standalone: true,
  imports: [],
  templateUrl: './name-displayer.component.html',
  styleUrl: './name-displayer.component.scss',
})
export class NameDisplayerComponent {
  @Input()
  name: string = '';

  displayName: string = '';

  showMyName() {
    console.log(this.displayName, this.name);
    this.displayName = this.name;
  }
}
