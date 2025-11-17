import { Component, inject } from '@angular/core';
import { CountStore } from '../countstore/count-store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly countStore = inject(CountStore);

  startAddInterval = () => {
    setInterval(() => {
      this.countStore.addCount();
    }, 1000);
  };

  setRandomNumber = () => {
    this.countStore.setRandomCount();
  };

  constructor() {}
}
