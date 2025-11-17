import { Component, computed, inject, linkedSignal } from '@angular/core';
import { Order, OrderStore } from '../orderstore/order-store';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class OrderPage {
  orderStore = inject(OrderStore);

  selectedOrder = linkedSignal<Array<Order>, Order>({
    source: this.orderStore.orders,
    computation: (newOrders, previous) =>
      newOrders.find((order) => order.id === previous?.value.id) ?? newOrders[0],
  });

  selectedOrderStr = computed(() => JSON.stringify(this.selectedOrder(), null, 2));
  allOrdersStr = computed(() => JSON.stringify(this.orderStore.orders(), null, 2));

  ngOnInit() {
    this.selectedOrder.set(this.orderStore.orders()[0]);
  }

  deleteKVOrders() {
    this.orderStore.removeKVOrders();
  }

  deleteOVOrders() {
    this.orderStore.removeOVOrders();
  }

  restoreDefaultOrders() {
    this.orderStore.restoreDefaultOrders();
  }
}
