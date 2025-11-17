import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

export interface Order {
  type: string;
  id: number;
  lable: string;
  completed: boolean;
}

const initialOrderState: { orders: Order[] } = {
  orders: [
    {
      type: 'KV',
      lable: 'Order 1 KV',
      id: 1,
      completed: false,
    },
    {
      type: 'OV',
      lable: 'Order 2 OV',
      id: 2,
      completed: true,
    },
    { type: 'KV', lable: 'Order 3 KV', id: 3, completed: false },
  ],
};

export const OrderStore = signalStore(
  { providedIn: 'root' },
  withState(initialOrderState),
  withComputed(({ orders }) => ({
    kvOrders: computed(() => orders().filter((order) => order.type === 'KV')),
    ovOrders: computed(() => orders().filter((order) => order.type === 'OV')),
    orderCount: computed(() => orders().length),
    kvOrderCount: computed(() => orders().filter((order) => order.type === 'KV').length),
    ovOrderCount: computed(() => orders().filter((order) => order.type === 'OV').length),
  })),
  withMethods((store) => ({
    restoreDefaultOrders() {
      patchState(store, initialOrderState);
    },
    removeOVOrders() {
      patchState(store, (state) => ({
        orders: state.orders.filter((order) => order.type !== 'OV'),
      }));
    },
    removeKVOrders() {
      patchState(store, (state) => ({
        orders: state.orders.filter((order) => order.type !== 'KV'),
      }));
    },
  })),
);
