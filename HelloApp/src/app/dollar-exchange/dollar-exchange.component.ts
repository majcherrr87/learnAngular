import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dollar-exchange',
  standalone: true,
  imports: [],
  templateUrl: './dollar-exchange.component.html',
  styleUrl: './dollar-exchange.component.scss',
})
export class DollarExchangeComponent {
  @Input()
  amount!: number;

  @Input()
  currency: string = '';

  @Input()
  rate: number = 0;
}
