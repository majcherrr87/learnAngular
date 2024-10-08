import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userAge: WritableSignal<number> = signal(15);
  userAdult: Signal<boolean> = computed(() => {
    if (this.userAge() >= 18) {
      return true;
    }
    return false;
  });

  incAge() {
    this.userAge.update((prev) => prev + 1);
  }

  decAge() {
    this.userAge.update((prev) => prev - 1);
  }
}
