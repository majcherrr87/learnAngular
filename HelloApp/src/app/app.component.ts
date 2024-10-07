import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { TitleComponent } from './title/title.component';
import { ConditionalContentComponent } from './conditional-content/conditional-content.component';
import { SamrtComponetComponent } from './samrt-componet/samrt-componet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    TitleComponent,
    ConditionalContentComponent,
    SamrtComponetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  visible = false;

  handleVisible() {
    this.visible = !this.visible;
  }
}
