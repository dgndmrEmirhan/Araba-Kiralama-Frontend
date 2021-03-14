import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiurl="https://localhost:44397/api/customers/getall";
  constructor(private httpClient:HttpClient) { }


getCustomers():Observable<CustomerResponseModel> {
return this.httpClient.get<CustomerResponseModel>(this.apiurl);
}

}
