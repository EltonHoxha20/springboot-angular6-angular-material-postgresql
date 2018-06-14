import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8090';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + `/customers`);
  }

   getCustomer(id: number): Observable<Customer> {
    const url = `${this.baseUrl}/customers/${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.baseUrl + `/customers`, customer, httpOptions);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.baseUrl + `/customers`, customer, httpOptions);
  }

  deleteCustomer(customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.baseUrl}/customers/${id}`;
    return this.http.delete<Customer>(url, httpOptions);
  }
  constructor(
    private http: HttpClient
  ) { }
}
