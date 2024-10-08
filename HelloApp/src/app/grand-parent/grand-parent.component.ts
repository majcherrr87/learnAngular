import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-grand-parent',
  standalone: true,
  imports: [ParentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './grand-parent.component.html',
  styleUrl: './grand-parent.component.scss',
})
export class GrandParentComponent {
  @Input()
  numbers: number[] = [];
}
