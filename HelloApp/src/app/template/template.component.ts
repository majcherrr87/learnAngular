import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [NgTemplateOutlet, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {
  @ViewChild('input')
  inputElement!: ElementRef<HTMLInputElement>;

  show() {
    console.log(this.inputElement);
  }
}
