import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Counthandler } from '../counthandler';

type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0,
};

export const CountStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ count }) => ({
    tens: computed(() => count() / 10),
  })),
  withMethods((store, countHandler = inject(Counthandler)) => ({
    addCount() {
      patchState(store, (state) => ({ count: state.count + 1 }));
    },
    subtractCount() {
      patchState(store, (state) => ({ count: state.count - 1 }));
    },
    setRandomCount() {
      const randomCount = countHandler.getRandomInt(100);
      patchState(store, { count: randomCount });
    },
  })),
);
