import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable ,catchError, throwError} from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Service/auth-service.service';

@Injectable()
export class AuthInterceptInterceptor implements HttpInterceptor {

  constructor(private inject: Injector, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    try {
      const authService = this.inject.get(AuthServiceService);
      const token = authService.Gettoken();

      if (token) {
        const modifiedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });

        return next.handle(modifiedReq).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              // Handle 401 Unauthorized error, e.g., by redirecting to the login page.
              this.router.navigate(['/login']);
            }
            return throwError(error);
          })
        );
      }

      // Handle the case when there's no token (e.g., user is not authenticated)
      return next.handle(req);
    } catch (error) {
      // Handle any errors that may occur during token retrieval or header modification
      console.error('AuthInterceptor error:', error);
      return throwError(error);
    }
  }
}
