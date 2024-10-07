import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyIpComponent } from './my-ip/my-ip.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyIpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
