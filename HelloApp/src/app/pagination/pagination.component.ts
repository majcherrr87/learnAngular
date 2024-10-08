import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  page: number = 1;

  next() {
    this.page++;
  }

  previous() {
    if (this.page <= 1) return;
    this.page--;
  }
}
