import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
}
