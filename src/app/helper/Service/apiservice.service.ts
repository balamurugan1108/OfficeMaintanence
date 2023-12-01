import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public apidata:AuthServiceService,private api: HttpClient) { }
  addUsers(body:any,): Observable<any> {
    return this.apidata.post("Auth/Register",body);
  }
  getUsers(): Observable<any> {
    return this.apidata.get("UserDetails");
  }
  


  addUserDetails(body:any): Observable<any> {
    return this.apidata.post("UserDetails/SystemDetails",body);
  }
  getUsersDetails(): Observable<any> {
    return this.apidata.get("UserDetails/GetSystemDetails");
  }



 addTicketDetails(body:any): Observable<any> {
    return this.apidata.post("UserDetails/CreateTicket",body);
  }
  getboardDetails(): Observable<any> {
    return this.apidata.get("UserDetails/GetTicketDetails");
  }

  
}
