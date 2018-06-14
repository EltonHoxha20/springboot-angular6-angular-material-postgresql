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

  private heroesUrl = 'http://localhost:8090/customers';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.heroesUrl);
  }
  constructor(
    private http: HttpClient
  ) { }
}
