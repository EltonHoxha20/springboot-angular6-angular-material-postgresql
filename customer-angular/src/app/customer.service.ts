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
  constructor(
    private http: HttpClient
  ) { }
}
