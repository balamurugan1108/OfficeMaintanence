import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthServiceService,private route: Router){}
  canActivate() {
    if (this.authservice.isLoggerIn()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
  
}
