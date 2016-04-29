import {ListViewModel} from '../list-view-model';
import {inject} from 'aurelia-framework'
import {AppRouter} from 'aurelia-router';
import {EmployeeService} from './employee-service';

@inject(AppRouter, EmployeeService)
export class EmployeeList extends ListViewModel {
  constructor(router, service) {
    super('employees', router, service)
  }
}
