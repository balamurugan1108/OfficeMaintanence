import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map,BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/environments/environment.development';
enum Role {
  Admin = 1,
  Employee = 2,
  Student = 3
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url: string = environment.apiAuthUrl;
  private isRole: any = new BehaviorSubject<number>(Role.Admin);
  isRoleStore = this.isRole.asObservable();


  constructor(private http: HttpClient,private router: Router) { }
  private get authHeader(): HttpHeaders {
    const authToken = localStorage.getItem('token');
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8;',
    });
  }

  // auths: Object = {
  //   headers: new HttpHeaders({
  //     'Accept': 'application/json',
  //     'Content-Type': 'multipart/form-data',
  //   })
  // };

  getBase() {
    return environment.apiAuthUrl;
  }

  post(apiurl: string, body: any,) {
    debugger;
    return this.http
      .post<any>(this.getBase() + apiurl, body)
      .pipe(map((data) => data));
  }
  get(apiurl: string) {
    debugger;
    return this.http
      .get<any>(this.getBase() + apiurl)
      .pipe(map((data) => data));
  }
  getConfig(apiurl: string) {
    debugger;
    return this.http.get<any>(apiurl).pipe(map((data) => data));
  }
  mediaPost(apiurl: string, body: any) {
    debugger;
    return this.http
      .post<any>(this.getBase() + apiurl, body, { headers: {} })
      .pipe(map((data) => data));
  }
  missingmediaPost(apiurl: string, body: any) {
    debugger;
    return this.http
      .post<any>(this.getBase() + apiurl, body, { headers: {} })
      .pipe(map((data) => data));
  }
  LogoutUser(): void {
    debugger;
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  isLoggerIn(): boolean {
    debugger;
    let IsToken = localStorage.getItem('token');
    return IsToken ? true : false;
  }

  Gettoken() {
    return localStorage.getItem('token') || '';
  }

  loginData(user: any): Observable<any> {
    debugger;
    return this.http.post('https://localhost:7125/api/Auth/Login', user).pipe(
      map((res: any) => {
        if (res) {
          localStorage.setItem('token', res.message.token);
          localStorage.setItem('id', res.message.id);
          localStorage.setItem('email', res.message.username);
          localStorage.setItem('role', res.message.role);
        }
        return res;
      })
    );
  }

  getMenu(): Observable<any> {
    debugger;
    let filter: any[];
    let jwt: any = localStorage.getItem('token');
    return this.http.get('src/assets/Json/menu.json').pipe(
      map((res: any) => {
        if (Array.isArray(res.item)) {
          if (this.isRole._value == Role.Admin) {
            filter = res.item.filter(
              (res: any) => res.role == this.isRole._value
            );
          } else {
            filter = res.item.filter(
              (res: any) => res.role == this.isRole._value
            );
          }
        }
        return filter;
      })
    );
  }
}
