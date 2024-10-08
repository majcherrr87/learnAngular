import { Component, ViewChild } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  @ViewChild('pagination')
  paginationRef!: PaginationComponent;

  elements: string[] = [];

  refresh() {
    const pageNumber = this.paginationRef.page;

    this.elements.push(`Pobieranie danych ze strony ${pageNumber}`);
  }
}
