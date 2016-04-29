import {ListViewModel} from '../list-view-model';
import {inject} from 'aurelia-framework'
import {AppRouter} from 'aurelia-router';
import {OrderService} from './order-service';

@inject(AppRouter, OrderService)
export class OrderList extends ListViewModel {
  constructor(router, service) {
    super('orders', router, service)
  }
}
