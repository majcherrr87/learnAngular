import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  @Input()
  numbers: number[] = [];
}
