import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountStore } from '../countstore/count-store';

@Component({
  selector: 'app-storepage',
  imports: [],
  templateUrl: './storepage.html',
  styleUrl: './storepage.scss',
})
export class Storepage {
  readonly store = inject(CountStore);
}
