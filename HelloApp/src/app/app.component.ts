import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageBodyComponent } from './page-body/page-body.component';
import { PageTitleComponent } from './page-title/page-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    PageContainerComponent,
    PageBodyComponent,
    PageTitleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
