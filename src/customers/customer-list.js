import {ListViewModel} from '../list-view-model';
import {inject} from 'aurelia-framework'
import {AppRouter} from 'aurelia-router';
import {CustomerService} from './customer-service';

@inject(AppRouter, CustomerService)
export class CustomerList extends ListViewModel {
  constructor(router, service) {
    super('customers', router, service)
  }
}
