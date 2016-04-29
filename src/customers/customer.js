import {EntityViewModel} from '../entity-view-model';
import {inject} from 'aurelia-framework'
import {CustomerService} from './customer-service';
import {Lookups} from '../lookups';

@inject(CustomerService, Lookups)
export class Customer extends EntityViewModel {
  constructor(service, lookups) {
    super(service);
  }

  get title() {
    return this.entity.CompanyName || 'Customer';
  }
}
